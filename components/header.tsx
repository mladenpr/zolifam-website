import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="py-2 px-4 text-gray-700 flex justify-between items-center text-sm font-serif">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-coral-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Shop 1B, ground floor, Murad Tower, Al Barsha 1, Dubai</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-coral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+971 58 567 0876</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-coral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>info@zolifam.ae</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/assets/images/logo.png"
              alt="Zoli Fam Ladies Salon"
              width={360}
              height={180}
              className="h-auto"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-2 md:gap-8 text-gray-700 font-serif">
            <Link href="/" className="px-2 py-1 hover:text-coral-500 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="px-2 py-1 hover:text-coral-500 transition-colors">
              ABOUT US
            </Link>
            <Link href="/services" className="px-2 py-1 hover:text-coral-500 transition-colors">
              OUR SERVICES
            </Link>
            <Link href="/price-list" className="px-2 py-1 hover:text-coral-500 transition-colors">
              PRICE LIST
            </Link>
            <Link href="/work-with-us" className="px-2 py-1 hover:text-coral-500 transition-colors">
              WORK WITH US
            </Link>
            <Link href="/contact" className="px-2 py-1 hover:text-coral-500 transition-colors">
              CONTACT US
            </Link>
          </nav>
          <div className="flex items-center mt-4 md:mt-0 gap-4">
            <Button
              className="rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black px-6 py-2 font-serif border border-black"
              asChild
            >
              <Link href="https://www.fresha.com/book-now/x0lpt5jv/services?lid=458531&share&pId=427976">BOOK NOW</Link>
            </Button>
            <Link
              href="https://www.instagram.com/zoli_fam?igsh=dTNtNTZjcW9kamVm&utm_source=qr"
              className="text-coral-500 hover:text-coral-400"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

