import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-4xl md:text-6xl font-script text-gray-800">Work With Us</h1>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-700 mb-12 font-serif">
              Join our team of talented beauty professionals at Zoli Fam Ladies Salon. We're always looking for
              passionate individuals who are dedicated to providing exceptional service and creating beautiful
              experiences for our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-script text-gray-800 mb-6">Current Openings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-medium text-lg text-coral-500 mb-2">Hair Stylist</h3>
                    <p className="font-serif text-gray-700 mb-2">
                      We're looking for experienced hair stylists with a passion for creating beautiful, trendy
                      hairstyles. Must have at least 2 years of salon experience.
                    </p>
                    <ul className="list-disc ml-5 font-serif text-gray-700 text-sm">
                      <li>Cutting, coloring, and styling expertise</li>
                      <li>Knowledge of current trends</li>
                      <li>Excellent customer service skills</li>
                      <li>Portfolio of previous work</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif font-medium text-lg text-coral-500 mb-2">Nail Technician</h3>
                    <p className="font-serif text-gray-700 mb-2">
                      Seeking skilled nail technicians with experience in manicures, pedicures, gel applications, and
                      nail art.
                    </p>
                    <ul className="list-disc ml-5 font-serif text-gray-700 text-sm">
                      <li>Proficiency in various nail techniques</li>
                      <li>Creative nail art abilities</li>
                      <li>Knowledge of nail health and maintenance</li>
                      <li>Minimum 1 year experience</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif font-medium text-lg text-coral-500 mb-2">Esthetician</h3>
                    <p className="font-serif text-gray-700 mb-2">
                      Looking for licensed estheticians with experience in facials, waxing, and skincare treatments.
                    </p>
                    <ul className="list-disc ml-5 font-serif text-gray-700 text-sm">
                      <li>Knowledge of various skin types and conditions</li>
                      <li>Experience with facial treatments</li>
                      <li>Waxing expertise</li>
                      <li>Product knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-script text-gray-800 mb-6">Apply Now</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-serif text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
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
                      placeholder="Your Email"
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
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block font-serif text-gray-700 mb-1">
                      Position
                    </label>
                    <select
                      id="position"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif bg-white"
                    >
                      <option value="">Select Position</option>
                      <option value="Hair Stylist">Hair Stylist</option>
                      <option value="Nail Technician">Nail Technician</option>
                      <option value="Esthetician">Esthetician</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block font-serif text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="Years of Experience"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-serif text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about yourself and why you'd like to join our team"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label htmlFor="resume" className="block font-serif text-gray-700 mb-1">
                      Resume/CV
                    </label>
                    <Input
                      id="resume"
                      type="file"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
                    />
                  </div>
                  <Button className="w-full rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-script text-gray-800 mb-4">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#E8E7E3] p-6 rounded-lg">
                  <h3 className="font-serif font-medium text-lg mb-2">Professional Growth</h3>
                  <p className="font-serif text-gray-700 text-sm">
                    We provide ongoing training and opportunities for professional development.
                  </p>
                </div>
                <div className="bg-[#E8E7E3] p-6 rounded-lg">
                  <h3 className="font-serif font-medium text-lg mb-2">Supportive Team</h3>
                  <p className="font-serif text-gray-700 text-sm">
                    Join a collaborative and friendly team that supports each other's success.
                  </p>
                </div>
                <div className="bg-[#E8E7E3] p-6 rounded-lg">
                  <h3 className="font-serif font-medium text-lg mb-2">Competitive Compensation</h3>
                  <p className="font-serif text-gray-700 text-sm">
                    We offer competitive pay and benefits based on experience and performance.
                  </p>
                </div>
              </div>
              <p className="font-serif text-gray-700">
                If you don't see a position that matches your skills but are passionate about joining our team, feel
                free to submit your application and let us know how you can contribute to Zoli Fam Ladies Salon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

