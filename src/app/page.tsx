'use client';

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-brand-background">
      {/* Hero section with decorative elements */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute inset-y-0 right-1/4 -z-10 w-[200%] origin-bottom-left -translate-x-1/2 bg-brand-secondary/5 opacity-20" />
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-accent1/10 to-brand-primary/10 opacity-20" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-brand-primary sm:text-6xl">
              <span className="block">Zolifam</span>
              <span className="block mt-1 text-4xl font-light text-brand-accent2">Beauty Salon</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-brand-accent2">
              Your premier destination for beauty services in Dubai. Experience luxury and excellence in every visit.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/price-list"
                className="rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-sm bg-brand-primary hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-8 py-3.5 text-base font-semibold text-brand-primary ring-1 ring-brand-primary hover:bg-brand-primary/5 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mt-10 sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
              Experience Beauty Excellence
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-accent2">
              At Zolifam, we provide exceptional beauty services with attention to detail and personalized care.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
              {/* Feature 1 */}
              <div className="text-center group">
                <div className="flex items-center justify-center mx-auto rounded-full w-16 h-16 bg-brand-accent1/10 mb-6 group-hover:bg-brand-accent1/20 transition-all duration-300">
                  <svg className="h-8 w-8 text-brand-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-brand-primary">Premium Services</h3>
                <p className="mt-4 text-base leading-7 text-brand-accent2">
                  We use only premium products and offer the latest techniques in beauty treatments.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group">
                <div className="flex items-center justify-center mx-auto rounded-full w-16 h-16 bg-brand-secondary/20 mb-6 group-hover:bg-brand-secondary/30 transition-all duration-300">
                  <svg className="h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-brand-primary">Expert Stylists</h3>
                <p className="mt-4 text-base leading-7 text-brand-accent2">
                  Our team of professionals has years of experience in the beauty industry.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center mx-auto rounded-full w-16 h-16 bg-brand-accent3/10 mb-6 group-hover:bg-brand-accent3/20 transition-all duration-300">
                  <svg className="h-8 w-8 text-brand-accent3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-brand-primary">Convenient Booking</h3>
                <p className="mt-4 text-base leading-7 text-brand-accent2">
                  Easy online booking system to schedule your appointments at your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-24 sm:mt-40 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(220,184,148,0.1),transparent)]" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
            Ready to experience luxury?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-accent2">
            Book your appointment today and let our experts take care of you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://bookings.fresha.com/"
              className="rounded-full px-10 py-4 text-base font-semibold text-white shadow-sm bg-brand-primary hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 