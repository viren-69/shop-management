import { Milk, Package, History, Settings, ShoppingCart } from "lucide-react"
import Link from "next/link"
import ProductGrid from "@/components/product-grid"
import Cart from "@/components/cart"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <Milk className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">Samrudhi</h1>
            </div>

            <nav className="flex items-center space-x-1 md:space-x-4 bg-blue-700 md:bg-transparent rounded-lg p-1 md:p-0 overflow-x-auto">
              <Link
                href="/"
                className="flex items-center space-x-1 px-3 py-2 rounded-md bg-white text-blue-600 font-medium"
              >
                <Package className="h-4 w-4" />
                <span>Products</span>
              </Link>
              <Link
                href="/records"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-blue-500 font-medium"
              >
                <History className="h-4 w-4" />
                <span>Records</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-blue-500 font-medium"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Dairy Products</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <ProductGrid />
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-800">Current Bill</h2>
              </div>

              <Cart />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Milk className="h-6 w-6 mr-2" />
                <span className="text-xl font-bold">Samrudhi</span>
              </div>
              <p className="text-gray-400 mt-1">Dairy Shop Management System</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <Link href="/help" className="text-gray-300 hover:text-white">
                Help & Support
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <p className="text-gray-400">© 2024 Samrudhi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

