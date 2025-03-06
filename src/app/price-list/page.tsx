'use client';

import React from 'react';

const services = [
  {
    category: 'Hair Services',
    items: [
      { name: 'Haircut & Style', price: 'AED 150' },
      { name: 'Hair Color', price: 'from AED 250' },
      { name: 'Highlights', price: 'from AED 350' },
      { name: 'Keratin Treatment', price: 'from AED 500' },
      { name: 'Hair Spa', price: 'AED 200' },
    ],
  },
  {
    category: 'Nail Services',
    items: [
      { name: 'Manicure', price: 'AED 80' },
      { name: 'Pedicure', price: 'AED 100' },
      { name: 'Gel Polish', price: 'AED 120' },
      { name: 'Nail Art', price: 'from AED 50' },
    ],
  },
  {
    category: 'Facial & Skincare',
    items: [
      { name: 'Classic Facial', price: 'AED 250' },
      { name: 'Deep Cleansing', price: 'AED 300' },
      { name: 'Anti-Aging Treatment', price: 'AED 400' },
      { name: 'LED Light Therapy', price: 'AED 200' },
    ],
  },
  {
    category: 'Body Treatments',
    items: [
      { name: 'Full Body Massage', price: 'AED 300' },
      { name: 'Body Scrub', price: 'AED 250' },
      { name: 'Body Wrap', price: 'AED 350' },
      { name: 'Waxing Services', price: 'from AED 50' },
    ],
  },
];

export default function PriceList() {
  return (
    <div className="bg-brand-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">Our Services & Prices</h2>
          <p className="mt-4 text-lg leading-8 text-brand-accent2">
            Discover our range of beauty services tailored to enhance your natural beauty
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {services.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold leading-7 text-brand-primary mb-6">{category.category}</h3>
                <dl className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <dt className="text-sm font-medium leading-6 text-brand-accent2">{item.name}</dt>
                      <dd className="text-sm font-semibold leading-6 text-brand-primary">{item.price}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-brand-accent2">
              * Prices may vary based on hair length, thickness, or treatment complexity.
              Please contact us for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 