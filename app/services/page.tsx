import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F0EFEB]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-4xl md:text-6xl font-script text-gray-800">Our Services</h1>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 mb-12 font-serif max-w-3xl mx-auto">
            At Zoli Fam Ladies Salon, we offer a comprehensive range of beauty services designed to pamper, rejuvenate,
            and enhance your natural beauty. Our skilled professionals use premium products to deliver exceptional
            results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/mani-pedi.svg"
                  alt="Manicure & Pedicure"
                  width={48}
                  height={48}
                  className="text-coral-500 mr-4"
                />
                <h2 className="text-2xl font-script text-gray-800">Manicure & Pedicure</h2>
              </div>
              <p className="font-serif text-gray-700 mb-4">
                Our manicure and pedicure services include nail shaping, cuticle care, exfoliation, massage, and polish
                application. We offer a variety of options including:
              </p>
              <ul className="space-y-2 font-serif text-gray-700 ml-6 list-disc">
                <li>Classic Manicure & Pedicure</li>
                <li>Gel Manicure & Pedicure</li>
                <li>Spa Manicure & Pedicure</li>
                <li>Paraffin Treatment</li>
                <li>Nail Art & Design</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/hair.svg"
                  alt="Hair Services"
                  width={48}
                  height={48}
                  className="text-coral-500 mr-4"
                />
                <h2 className="text-2xl font-script text-gray-800">Hair Services</h2>
              </div>
              <p className="font-serif text-gray-700 mb-4">
                Our hair services are designed to transform your look and maintain the health of your hair. Our
                offerings include:
              </p>
              <ul className="space-y-2 font-serif text-gray-700 ml-6 list-disc">
                <li>Haircuts & Styling</li>
                <li>Hair Coloring & Highlights</li>
                <li>Hair Treatments & Masks</li>
                <li>Blowouts & Styling</li>
                <li>Hair Extensions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/brows-lashes.svg"
                  alt="Brows & Lashes"
                  width={48}
                  height={48}
                  className="text-coral-500 mr-4"
                />
                <h2 className="text-2xl font-script text-gray-800">Brows & Lashes</h2>
              </div>
              <p className="font-serif text-gray-700 mb-4">
                Enhance your eyes with our brow and lash services, designed to frame your face and accentuate your
                natural beauty:
              </p>
              <ul className="space-y-2 font-serif text-gray-700 ml-6 list-disc">
                <li>Eyebrow Shaping & Tinting</li>
                <li>Eyelash Extensions</li>
                <li>Lash Lift & Tint</li>
                <li>Brow Lamination</li>
                <li>Microblading</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/facial.svg"
                  alt="Facial Care"
                  width={48}
                  height={48}
                  className="text-coral-500 mr-4"
                />
                <h2 className="text-2xl font-script text-gray-800">Facial Care</h2>
              </div>
              <p className="font-serif text-gray-700 mb-4">
                Our facial treatments are tailored to address your specific skin concerns and promote a healthy, glowing
                complexion:
              </p>
              <ul className="space-y-2 font-serif text-gray-700 ml-6 list-disc">
                <li>Classic Facial</li>
                <li>Deep Cleansing Facial</li>
                <li>Anti-Aging Treatment</li>
                <li>Hydrating Facial</li>
                <li>Chemical Peels</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="font-serif text-gray-700 mb-4">
              For a complete list of our services and pricing, please visit our price list page or contact us directly.
            </p>
            <p className="font-serif text-gray-700">
              We look forward to welcoming you to Zoli Fam Ladies Salon and providing you with an exceptional beauty
              experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

