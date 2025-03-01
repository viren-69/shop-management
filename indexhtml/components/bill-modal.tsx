"use client"

import { useRef } from "react"
import { Download, Printer, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BillModalProps {
  cart: any[]
  customerName: string
  customerPhone: string
  subtotal: number
  gst: number
  total: number
  onClose: () => void
}

export default function BillModal({
  cart,
  customerName,
  customerPhone,
  subtotal,
  gst,
  total,
  onClose,
}: BillModalProps) {
  const billRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContents = billRef.current?.innerHTML
    const originalContents = document.body.innerHTML

    document.body.innerHTML = printContents || ""
    window.print()
    document.body.innerHTML = originalContents

    // Reload the page after printing to restore functionality
    window.location.reload()
  }

  const handleDownload = () => {
    const billNumber = `BILL-${Math.floor(Math.random() * 10000)}`
    const date = new Date().toLocaleDateString()

    let billText = `Samrudhi Dairy Shop\n`
    billText += `Bill Number: ${billNumber}\n`
    billText += `Date: ${date}\n`
    billText += `Customer: ${customerName}\n`
    billText += `Phone: ${customerPhone}\n\n`
    billText += `----------------------------------------\n`
    billText += `Item                  Qty    Price    Total\n`
    billText += `----------------------------------------\n`

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity
      billText += `${item.name.padEnd(22)} ${item.quantity.toString().padEnd(7)} ₹${item.price.toFixed(2).padEnd(8)} ₹${itemTotal.toFixed(2)}\n`
    })

    billText += `----------------------------------------\n`
    billText += `Subtotal:                         ₹${subtotal.toFixed(2)}\n`
    billText += `GST (5%):                         ₹${gst.toFixed(2)}\n`
    billText += `Total:                            ₹${total.toFixed(2)}\n`
    billText += `----------------------------------------\n\n`
    billText += `Thank you for shopping with us!\n`

    const blob = new Blob([billText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${billNumber}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Bill Receipt</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6" ref={billRef}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Samrudhi Dairy Shop</h1>
            <p className="text-gray-500">123 Main Street, City, State, 123456</p>
            <p className="text-gray-500">Phone: +91 9876543210</p>
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <p>
                <strong>Bill Number:</strong> BILL-{Math.floor(Math.random() * 10000)}
              </p>
              <p>
                <strong>Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p>
                <strong>Customer:</strong> {customerName}
              </p>
              <p>
                <strong>Phone:</strong> {customerPhone}
              </p>
            </div>
          </div>

          <table className="w-full mb-6">
            <thead className="border-b">
              <tr className="text-left">
                <th className="pb-2">Item</th>
                <th className="pb-2 text-center">Qty</th>
                <th className="pb-2 text-right">Price</th>
                <th className="pb-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.unit}</p>
                    </div>
                  </td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">₹{item.price.toFixed(2)}</td>
                  <td className="py-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>Thank you for shopping with us!</p>
            <p className="text-sm">Visit again soon</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 p-4 border-t">
          <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button className="flex items-center gap-2" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </div>
    </div>
  )
}

