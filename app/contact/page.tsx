import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-4xl md:text-6xl font-script text-gray-800">Contact Us</h1>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-script text-gray-800 mb-6">Get In Touch</h2>
              <p className="font-serif text-gray-700 mb-8">
                We'd love to hear from you! Whether you have questions about our services, want to book an appointment,
                or have feedback to share, please don't hesitate to reach out to us using any of the methods below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-coral-500 mt-1 mr-4"
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
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Visit Us</h3>
                    <p className="font-serif text-gray-700">Shop 1B, ground floor, Murad Tower, Al Barsha 1, Dubai</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-coral-500 mt-1 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Call Us</h3>
                    <p className="font-serif text-gray-700">+971 58 567 0876</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-coral-500 mt-1 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Email Us</h3>
                    <p className="font-serif text-gray-700">info@zolifam.ae</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-coral-500 mt-1 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Opening Hours</h3>
                    <ul className="font-serif text-gray-700 space-y-1">
                      <li>Monday: Closed</li>
                      <li>Tuesday: 10 AM – 8 PM</li>
                      <li>Wednesday: 10 AM – 8 PM</li>
                      <li>Thursday: 10 AM – 8 PM</li>
                      <li>Friday: 10 AM – 8 PM</li>
                      <li>Saturday: 10 AM – 8 PM</li>
                      <li>Sunday: 10 AM – 8 PM</li>
                    </ul>
                  </div>
                </div>
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
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-script text-gray-800 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-serif text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-serif text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-serif text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-serif text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-serif text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                      rows={6}
                    />
                  </div>
                  <Button className="w-full rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="mt-8 bg-[#E8E7E3] rounded-lg p-8">
                <h3 className="text-2xl font-script text-gray-800 mb-4">Book an Appointment</h3>
                <p className="font-serif text-gray-700 mb-6">
                  Ready to experience our services? Book an appointment online or give us a call.
                </p>
                <Button
                  className="w-full rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black"
                  asChild
                >
                  <a
                    href="https://www.fresha.com/book-now/x0lpt5jv/services?lid=458531&share&pId=427976"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

