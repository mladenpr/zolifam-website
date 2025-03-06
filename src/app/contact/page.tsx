'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-brand-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg leading-8 text-brand-accent2">
              We'd love to hear from you. Get in touch with us through any of these channels.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm">
              <svg
                className="h-10 w-10 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">Call or WhatsApp</h3>
              <p className="mt-2 text-brand-accent2">
                <Link href="tel:+97150123456" className="hover:text-brand-accent1">
                  +971 50 123 4567
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm">
              <svg
                className="h-10 w-10 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">Email Us</h3>
              <p className="mt-2 text-brand-accent2">
                <Link href="mailto:info@zolifam.com" className="hover:text-brand-accent1">
                  info@zolifam.com
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-brand-primary mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-accent2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-brand-accent2/20 px-3 py-2 text-brand-primary shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-accent2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-brand-accent2/20 px-3 py-2 text-brand-primary shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-accent2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-brand-accent2/20 px-3 py-2 text-brand-primary shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-accent2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-brand-accent2/20 px-3 py-2 text-brand-primary shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-brand-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 