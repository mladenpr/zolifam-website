import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PriceListPage() {
  return (
    <div className="min-h-screen bg-[#F0EFEB]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-4xl md:text-6xl font-script text-gray-800">Price List</h1>
      </section>

      {/* Price List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 mb-12 font-serif max-w-3xl mx-auto">
            Our pricing is transparent and competitive, reflecting the quality of our services and products. Please note
            that prices may vary based on hair length, thickness, and specific requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-script text-gray-800 mb-6 text-coral-500">Manicure & Pedicure</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Classic Manicure</span>
                  <span className="font-serif font-medium">AED 60</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Gel Manicure</span>
                  <span className="font-serif font-medium">AED 120</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Classic Pedicure</span>
                  <span className="font-serif font-medium">AED 80</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Gel Pedicure</span>
                  <span className="font-serif font-medium">AED 140</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Spa Manicure & Pedicure</span>
                  <span className="font-serif font-medium">AED 200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Nail Art (per nail)</span>
                  <span className="font-serif font-medium">AED 10+</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-script text-gray-800 mb-6 text-coral-500">Hair Services</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Ladies Haircut</span>
                  <span className="font-serif font-medium">AED 150+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Blow Dry</span>
                  <span className="font-serif font-medium">AED 100+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Root Color</span>
                  <span className="font-serif font-medium">AED 200+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Full Color</span>
                  <span className="font-serif font-medium">AED 300+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Highlights</span>
                  <span className="font-serif font-medium">AED 350+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Hair Treatment</span>
                  <span className="font-serif font-medium">AED 200+</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-script text-gray-800 mb-6 text-coral-500">Brows & Lashes</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Eyebrow Threading</span>
                  <span className="font-serif font-medium">AED 30</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Eyebrow Tinting</span>
                  <span className="font-serif font-medium">AED 40</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Eyelash Extensions (Full Set)</span>
                  <span className="font-serif font-medium">AED 350+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Eyelash Extensions (Refill)</span>
                  <span className="font-serif font-medium">AED 180+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Lash Lift & Tint</span>
                  <span className="font-serif font-medium">AED 250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Brow Lamination</span>
                  <span className="font-serif font-medium">AED 200</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-script text-gray-800 mb-6 text-coral-500">Facial Care</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Classic Facial</span>
                  <span className="font-serif font-medium">AED 200</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Deep Cleansing Facial</span>
                  <span className="font-serif font-medium">AED 250</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Anti-Aging Treatment</span>
                  <span className="font-serif font-medium">AED 350</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Hydrating Facial</span>
                  <span className="font-serif font-medium">AED 280</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-serif">Chemical Peel</span>
                  <span className="font-serif font-medium">AED 400+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif">Face Massage</span>
                  <span className="font-serif font-medium">AED 150</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-serif text-gray-700 mb-4">
              Please note that prices are subject to change. For the most accurate and up-to-date pricing, please
              contact us directly.
            </p>
            <p className="font-serif text-gray-700">
              We offer special packages and promotions throughout the year. Ask our staff about current offers during
              your visit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

