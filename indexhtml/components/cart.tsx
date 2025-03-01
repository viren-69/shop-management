"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import BillModal from "@/components/bill-modal"

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [showBillModal, setShowBillModal] = useState(false)

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const gst = subtotal * 0.05 // 5% GST
  const total = subtotal + gst

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty. Please add items to proceed.")
      return
    }

    setShowBillModal(true)
  }

  const handleCloseBill = () => {
    setShowBillModal(false)
    clearCart()
    setCustomerName("")
    setCustomerPhone("")
  }

  return (
    <div>
      <div className="mb-4 space-y-3">
        <div className="space-y-1">
          <Label htmlFor="customerName">Customer Name</Label>
          <Input
            id="customerName"
            placeholder="Enter customer name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="customerPhone">Phone Number</Label>
          <Input
            id="customerPhone"
            placeholder="Enter phone number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No items in the bill</p>
          <p className="text-sm text-gray-400 mt-1">Add products from the list</p>
        </div>
      ) : (
        <div>
          <div className="divide-y max-h-[400px] overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="py-3 flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.unit} × {item.quantity}
                  </p>
                  <p className="text-blue-600 font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center border rounded overflow-hidden mr-2">
                    <button
                      className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center py-0.5 text-sm">{item.quantity}</span>
                    <button
                      className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button className="w-full" onClick={handleCheckout}>
              Generate Bill
            </Button>

            <Button variant="outline" className="w-full" onClick={clearCart}>
              Clear Bill
            </Button>
          </div>
        </div>
      )}

      {showBillModal && (
        <BillModal
          cart={cart}
          customerName={customerName || "Walk-in Customer"}
          customerPhone={customerPhone || "N/A"}
          subtotal={subtotal}
          gst={gst}
          total={total}
          onClose={handleCloseBill}
        />
      )}
    </div>
  )
}

