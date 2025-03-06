'use client';

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-brand-background">
      {/* Hero section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl">
              Welcome to Zolifam Beauty Salon
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-accent2">
              Your premier destination for beauty services in Dubai. Experience luxury and excellence in every visit.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://bookings.fresha.com/"
                className="rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
              <Link href="/price-list" className="text-sm font-semibold leading-6 text-brand-primary">
                View Price List <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-accent1">Experience Excellence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
            Everything you need for your beauty journey
          </p>
          <p className="mt-6 text-lg leading-8 text-brand-accent2">
            From expert hair styling to luxurious spa treatments, we offer a comprehensive range of beauty services.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-primary">
                  <feature.icon className="h-5 w-5 flex-none text-brand-accent1" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-accent2">
                  <p className="flex-auto">{feature.description}</p>
                  {feature.href && (
                    <p className="mt-6">
                      <Link href={feature.href} className="text-sm font-semibold leading-6 text-brand-primary">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Expert Stylists',
    description: 'Our team of professional stylists brings years of experience and expertise to every service.',
    href: '/about',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    name: 'Premium Products',
    description: 'We use only the highest quality beauty products to ensure the best results for our clients.',
    href: '/services',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    name: 'Convenient Location',
    description: 'Located in the heart of Dubai with easy access and ample parking facilities.',
    href: '/location',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
] 