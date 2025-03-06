'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// This would typically come from a CMS or database
const blogPosts = {
  'tips-for-healthy-skin': {
    title: '10 Tips for Healthy, Glowing Skin',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    category: 'Skincare',
    content: `
      <p>Achieving and maintaining healthy, glowing skin requires a consistent skincare routine and healthy lifestyle habits. Here are our top 10 tips for radiant skin:</p>

      <h3>1. Cleanse Properly</h3>
      <p>Always cleanse your face twice daily using a gentle cleanser suitable for your skin type. This removes dirt, oil, and makeup that can clog pores.</p>

      <h3>2. Stay Hydrated</h3>
      <p>Drink plenty of water throughout the day. Proper hydration helps maintain skin elasticity and promotes a healthy glow.</p>

      <h3>3. Use Sunscreen</h3>
      <p>Apply broad-spectrum sunscreen daily, even on cloudy days. Sun protection is crucial for preventing premature aging and maintaining healthy skin.</p>

      <h3>4. Get Adequate Sleep</h3>
      <p>During sleep, your skin repairs and regenerates. Aim for 7-9 hours of quality sleep each night.</p>

      <h3>5. Eat a Balanced Diet</h3>
      <p>Include plenty of fruits, vegetables, and foods rich in omega-3 fatty acids in your diet. Good nutrition is reflected in your skin's appearance.</p>

      <h3>6. Regular Exfoliation</h3>
      <p>Exfoliate 1-2 times per week to remove dead skin cells and promote cell turnover. Don't over-exfoliate as this can irritate the skin.</p>

      <h3>7. Use Antioxidants</h3>
      <p>Incorporate antioxidant-rich products containing vitamins C and E into your skincare routine to protect against environmental damage.</p>

      <h3>8. Manage Stress</h3>
      <p>High stress levels can affect your skin's health. Practice stress-management techniques like meditation or yoga.</p>

      <h3>9. Regular Exercise</h3>
      <p>Physical activity improves circulation and helps nourish skin cells. Remember to cleanse your face after sweating.</p>

      <h3>10. Professional Treatments</h3>
      <p>Consider regular facial treatments from skincare professionals to maintain skin health and address specific concerns.</p>

      <p>Remember, everyone's skin is different, so what works for one person may not work for another. Pay attention to how your skin responds to different products and treatments, and adjust your routine accordingly.</p>
    `,
    readTime: '5 min read'
  },
  'spring-hair-trends-2024': {
    title: 'Spring Hair Color Trends 2024',
    date: 'March 10, 2024',
    author: 'Emma Davis',
    category: 'Hair',
    content: `
      <p>As we welcome spring 2024, exciting new hair color trends are emerging. Here are the most popular looks we're seeing:</p>

      <h3>Buttery Blonde</h3>
      <p>This warm, rich blonde shade is perfect for spring. It's more natural-looking than platinum but still gives that sun-kissed effect.</p>

      <h3>Chocolate Cherry</h3>
      <p>A beautiful blend of deep brown with subtle red undertones, this color adds warmth and dimension to dark hair.</p>

      <h3>Pastel Highlights</h3>
      <p>Soft pastel highlights in lavender, pink, or mint are making a comeback, perfect for adding a playful touch to your look.</p>
    `,
    readTime: '4 min read'
  },
  'ultimate-nail-care-guide': {
    title: 'The Ultimate Guide to Nail Care',
    date: 'March 5, 2024',
    author: 'Lisa Chen',
    category: 'Nail Care',
    content: `
      <p>Healthy, beautiful nails are achievable with proper care and maintenance. Here's your comprehensive guide to nail care:</p>

      <h3>Basic Nail Care</h3>
      <p>Keep your nails clean and dry. Use quality nail tools and always be gentle when maintaining your nails.</p>

      <h3>Proper Filing Technique</h3>
      <p>File in one direction only to prevent nail splitting. Choose the right file grit for your natural nails.</p>

      <h3>Cuticle Care</h3>
      <p>Never cut your cuticles - they protect your nails from bacteria. Instead, gently push them back after showering.</p>
    `,
    readTime: '6 min read'
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-brand-accent1">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-primary sm:text-5xl">
            Blog post not found
          </h1>
          <p className="mt-6 text-base leading-7 text-brand-accent2">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <div className="mt-10">
            <Link
              href="/blog"
              className="text-sm font-semibold leading-7 text-brand-primary hover:text-brand-accent1"
            >
              <span aria-hidden="true">&larr;</span> Back to blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold leading-7 text-brand-primary hover:text-brand-accent1"
          >
            <span aria-hidden="true">&larr;</span> Back to blog
          </Link>

          <div className="mt-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-brand-accent2">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-brand-accent1/10 px-3 py-1.5 font-medium text-brand-accent1">
                  {post.category}
                </span>
                <span className="text-brand-accent2">{post.readTime}</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-brand-accent1/10">
                {/* Placeholder for when we add actual images */}
                <div className="flex items-center justify-center h-full text-brand-accent1">
                  <svg
                    className="h-16 w-16"
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

            <div className="mt-8 prose prose-lg prose-brand-primary max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-8 border-t border-brand-accent2/10 pt-8">
              <div className="flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-brand-primary">
                    Written by {post.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 