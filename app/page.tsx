import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0EFEB]">
      <Header />

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/salon-interior.jpeg"
                alt="Zoli Fam Salon Interior - Pedicure Area"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-script text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-700 mb-6 font-serif">
                Welcome to Zoli Fam Ladies Salon, your luxurious one-stop shop for all your beauty treatment needs. We
                have designed our salon to be a haven of relaxation and rejuvenation, offering a comprehensive range of
                services that allow you to indulge in a full day of pampering or efficiently complete all your beauty
                appointments in one place. Our team consists of only the best technicians, each having perfected their
                craft to ensure that you receive top-quality care and results.
              </p>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-coral-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-serif">Personalized Treatments</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-coral-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-serif">Skilled Professionals</span>
                </div>
              </div>

              <Button
                className="rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black px-6 py-2"
                asChild
              >
                <Link href="/about">READ MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-script text-center text-gray-800 mb-2">Our services</h2>
          <p className="text-center text-gray-700 mb-12 font-serif">Your beauty journey begins here</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/mani-pedi.svg"
                  alt="Manicure & Pedicure"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Manicure & Pedicure</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/hair.svg"
                  alt="Hair Services"
                  width={64}
                  height={64}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Hair Services</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/brows-lashes.svg"
                  alt="Brows & Lashes"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Brows & Lashes</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/facial.svg"
                  alt="Facial care"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Facial care</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/body-care.svg"
                  alt="Body care"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Body care</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/threading.svg"
                  alt="Threading"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Threading</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/hair-removal.svg"
                  alt="Hair removal"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Hair removal</h3>
            </div>

            <div className="bg-[#E8E7E3] rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/icons/promotions.svg"
                  alt="Promotions"
                  width={48}
                  height={48}
                  className="text-coral-500"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-800">Promotions</h3>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="rounded-full border-black text-gray-700 hover:bg-coral-500/10 font-serif px-6 py-2"
              asChild
            >
              <Link href="/services">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

