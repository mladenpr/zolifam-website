'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Healthy, Glowing Skin',
    excerpt: 'Discover the secrets to maintaining radiant and healthy skin with these expert tips...',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    category: 'Skincare',
    slug: 'tips-for-healthy-skin',
    imageUrl: '/images/blog/healthy-skin.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Spring Hair Color Trends 2024',
    excerpt: 'Explore the hottest hair color trends that will dominate this spring season...',
    date: 'March 10, 2024',
    author: 'Emma Davis',
    category: 'Hair',
    slug: 'spring-hair-trends-2024',
    imageUrl: '/images/blog/hair-trends.jpg',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Nail Care',
    excerpt: 'Learn professional tips and tricks for maintaining beautiful, healthy nails...',
    date: 'March 5, 2024',
    author: 'Lisa Chen',
    category: 'Nail Care',
    slug: 'ultimate-nail-care-guide',
    imageUrl: '/images/blog/nail-care.jpg',
    readTime: '6 min read'
  },
];

export default function Blog() {
  return (
    <div className="bg-brand-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
            Beauty Blog & Tips
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-accent2">
            Stay updated with the latest beauty trends, tips, and expert advice
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-brand-accent1/10">
                  {/* Placeholder for when we add actual images */}
                  <div className="flex items-center justify-center h-full text-brand-accent1">
                    <svg
                      className="h-12 w-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-brand-accent2">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-brand-accent1/10 px-3 py-1.5 font-medium text-brand-accent1">
                    {post.category}
                  </span>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-brand-primary group-hover:text-brand-accent1">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-brand-accent2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-brand-primary">
                      {post.author}
                    </p>
                  </div>
                  <div className="text-sm text-brand-accent2">
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 