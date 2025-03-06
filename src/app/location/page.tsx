'use client';

import React from 'react';
import Link from 'next/link';

const contactInfo = {
  address: '123 Beauty Street, Dubai Mall, Dubai, UAE',
  phone: '+971 50 123 4567',
  email: 'info@zolifam.com',
  hours: [
    { days: 'Monday - Saturday', hours: '10:00 AM - 9:00 PM' },
    { days: 'Sunday', hours: '11:00 AM - 7:00 PM' },
  ],
  parking: 'Free parking available at Dubai Mall parking area',
};

export default function Location() {
  return (
    <div className="bg-brand-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Visit Our Salon</h2>
              <p className="mt-4 text-lg text-brand-accent2">
                Located in the heart of Dubai, our salon offers a luxurious and welcoming environment
                for all your beauty needs.
              </p>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm font-medium text-brand-accent1">Address</dt>
                  <dd className="mt-1 text-base text-brand-primary">{contactInfo.address}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-brand-accent1">Contact</dt>
                  <dd className="mt-1 text-base text-brand-primary">
                    <Link href={`tel:${contactInfo.phone}`} className="hover:text-brand-accent1">
                      {contactInfo.phone}
                    </Link>
                    <br />
                    <Link href={`mailto:${contactInfo.email}`} className="hover:text-brand-accent1">
                      {contactInfo.email}
                    </Link>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-brand-accent1">Hours</dt>
                  <dd className="mt-1 text-base text-brand-primary">
                    {contactInfo.hours.map((schedule) => (
                      <div key={schedule.days} className="mb-1">
                        <span className="font-medium">{schedule.days}:</span> {schedule.hours}
                      </div>
                    ))}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-brand-accent1">Parking</dt>
                  <dd className="mt-1 text-base text-brand-primary">{contactInfo.parking}</dd>
                </div>

                <div className="pt-4">
                  <Link
                    href="https://bookings.fresha.com/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </dl>
            </div>

            {/* Map */}
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178556006896!2d55.27960261503296!3d25.197201983896073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20Mall!5e0!3m2!1sen!2sae!4v1647887424051!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 