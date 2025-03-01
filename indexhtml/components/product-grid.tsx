"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

// Sample dairy products data
const dairyProducts = [
  {
    id: 1,
    name: "Full Cream Milk",
    price: 60,
    unit: "0 liter",
    image: "/placeholder.svg?height=200&width=200",
    category: "Milk",
  },
  {
    id: 2,
    name: "Toned Milk",
    price: 50,
    unit: "0 liter",
    image: "/placeholder.svg?height=200&width=200",
    category: "Milk",
  },
  {
    id: 3,
    name: "Double Toned Milk",
    price: 45,
    unit: "0 liter",
    image: "/placeholder.svg?height=200&width=200",
    category: "Milk",
  },
  {
    id: 4,
    name: "Fresh Curd",
    price: 40,
    unit: "400g",
    image: "/placeholder.svg?height=200&width=200",
    category: "Curd & Yogurt",
  },
  {
    id: 5,
    name: "Greek Yogurt",
    price: 120,
    unit: "400g",
    image: "/placeholder.svg?height=200&width=200",
    category: "Curd & Yogurt",
  },
  {
    id: 6,
    name: "Butter",
    price: 50,
    unit: "100g",
    image: "/placeholder.svg?height=200&width=200",
    category: "Butter & Cheese",
  },
  {
    id: 7,
    name: "Cheese Slices",
    price: 120,
    unit: "10 slices",
    image: "/placeholder.svg?height=200&width=200",
    category: "Butter & Cheese",
  },
  {
    id: 8,
    name: "Paneer",
    price: 80,
    unit: "200g",
    image: "/placeholder.svg?height=200&width=200",
    category: "Paneer",
  },
  {
    id: 9,
    name: "Cow Ghee",
    price: 550,
    unit: "500ml",
    image: "/placeholder.svg?height=200&width=200",
    category: "Ghee",
  },
  {
    id: 10,
    name: "Buffalo Ghee",
    price: 650,
    unit: "500ml",
    image: "/placeholder.svg?height=200&width=200",
    category: "Ghee",
  },
  {
    id: 11,
    name: "Flavored Milk - Chocolate",
    price: 35,
    unit: "200ml",
    image: "/placeholder.svg?height=200&width=200",
    category: "Milk",
  },
  {
    id: 12,
    name: "Flavored Milk - Strawberry",
    price: 35,
    unit: "200ml",
    image: "/placeholder.svg?height=200&width=200",
    category: "Milk",
  },
]

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<number, number>>(
    dairyProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleQuantityChange = (id: number, value: number) => {
    if (value > 0) {
      setQuantities((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      ...product,
      quantity: quantities[product.id],
    });

    // Reset quantity to 1 after adding to cart
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  // Filter products based on search query
  const filteredProducts = dairyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                {product.category}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.unit}</p>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-blue-600 font-bold">₹{product.price.toFixed(2)}</p>
              </div>

              <div className="mt-4 flex items-center">
                <div className="flex items-center border rounded-l-md overflow-hidden">
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                    onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                    disabled={quantities[product.id] <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantities[product.id]}
                    onChange={(e) => handleQuantityChange(product.id, Number.parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-x py-1"
                  />
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                    onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                  >
                    +
                  </button>
                </div>

                <Button className="ml-2 flex-1" onClick={() => handleAddToCart(product)}>
                  Add to Bill
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}