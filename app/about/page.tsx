import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F0EFEB]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-4xl md:text-6xl font-script text-gray-800">About Us</h1>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-script text-gray-800 mb-6">Our Story</h2>
              <div className="prose prose-lg font-serif text-gray-700">
                <p className="mb-6">
                  Welcome to Zoli Fam Ladies Salon, where beauty meets expertise and relaxation. Established with a
                  vision to provide exceptional beauty services in Dubai, we have created a haven where every client
                  receives personalized attention and leaves feeling transformed and confident.
                </p>
                <p className="mb-6">
                  Our team consists of highly skilled professionals who are passionate about their craft and committed
                  to staying current with the latest beauty trends and techniques. We take pride in offering a
                  comprehensive range of services that cater to diverse beauty needs, from classic treatments to
                  innovative procedures.
                </p>
                <p>
                  At Zoli Fam, we believe that every client deserves a luxurious and rejuvenating experience. Our salon
                  is designed to provide a serene atmosphere where you can unwind and entrust your beauty needs to our
                  expert care.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-script text-gray-800 mb-4">Why Choose Us</h3>
                <ul className="space-y-4 font-serif text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-coral-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert technicians with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-coral-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Luxurious and relaxing atmosphere</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-coral-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium products and services</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-coral-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized beauty consultations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-script text-gray-800 mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black">
                    Submit
                  </Button>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-script text-gray-800 mb-6">Find Us</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3378422873775!2d55.201128499999996!3d25.113643999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd2b1ffdc9d%3A0xade34b8c574b79c!2sZoli%20fam%20ladies%20salon!5e1!3m2!1sen!2sae!4v1742041834475!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-6 space-y-4 font-serif text-gray-700">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-coral-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Shop 1B, ground floor, Murad Tower, Al Barsha 1, Dubai</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-coral-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+971 58 567 0876</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-coral-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>info@zolifam.ae</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

