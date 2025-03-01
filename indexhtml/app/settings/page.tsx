import { ArrowLeft, Save, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="profile">Shop Profile</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Shop Profile</h3>
                    <p className="text-gray-500">Update your shop information</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Shop Name</Label>
                    <Input id="shopName" defaultValue="Samrudhi Dairy Shop" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input id="ownerName" defaultValue="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="contact@samrudhi.com" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Shop Address</Label>
                    <Input id="address" defaultValue="123 Main Street, City, State, 123456" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="gst">GST Number</Label>
                    <Input id="gst" defaultValue="22AAAAA0000A1Z5" />
                  </div>
                </div>

                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Product Management</h3>
                  <p className="text-gray-500">Add, edit or remove products from your inventory</p>
                </div>

                <Button>Add New Product</Button>

                <div className="border rounded-lg">
                  <div className="p-4 border-b">
                    <h4 className="font-medium">Product Categories</h4>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Milk</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Curd & Yogurt</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Butter & Cheese</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Paneer</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Ghee</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preferences">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">System Preferences</h3>
                  <p className="text-gray-500">Customize your billing and system preferences</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Enable GST Calculation</h4>
                      <p className="text-sm text-gray-500">Automatically calculate GST for all products</p>
                    </div>
                    <div className="h-6 w-11 bg-blue-600 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Print Receipt After Billing</h4>
                      <p className="text-sm text-gray-500">Automatically open print dialog after bill generation</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-300 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Low Stock Alerts</h4>
                      <p className="text-sm text-gray-500">Get notified when products are running low</p>
                    </div>
                    <div className="h-6 w-11 bg-blue-600 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Dark Mode</h4>
                      <p className="text-sm text-gray-500">Switch between light and dark theme</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-300 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>

                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

