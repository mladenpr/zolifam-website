---
tags:
  - Business/zolifam
date created: 2025-03-06
---
Below is the final Tech Stack Document in markdown format with expanded instructions for the LLM within Cursor IDE. This document builds on the previously prepared PRD and Web Flow documents and provides clear, actionable guidance for developing the code.

---

# Tech Stack Document: Ladies Beauty Salon Website

This document is intended for use by the LLM integrated in Cursor IDE to develop the codebase for the Ladies Beauty Salon website. It builds upon the Project Requirements Document (PRD) and the Web Flow Document (WFD), and provides detailed guidance on the chosen tech stack, with expanded sections for both frontend and backend development.

---

## 1. Frontend Technology

### Chosen Framework: Next.js

The website will be built using Next.js—a React-based framework that supports both Static Site Generation (SSG) and Server-Side Rendering (SSR). This choice ensures that the site remains fast, SEO-friendly, and maintainable over time.

### Detailed Instructions for Frontend Development

- **Routing and Pages:**  
    Develop all pages as defined in the WFD:
    
    - **Landing Page:** Includes an introduction, summary of the price list, salon location (with map preview), parking information, and contact details. It should also display current promotions and a prominent WhatsApp QR code.
    - **Blog Listing Page:** Displays summaries of blog posts with images, short descriptions, and a “Read More” link.
    - **Blog Detail Page:** Displays the full blog post with images and related links.
    - **Price List Page:** Shows detailed services and pricing.
    - **Location Page:** Provides an enlarged map with detailed directions and nearby landmarks.
    - **Contact Page:** Contains various contact methods (phone, email, and a potential simple contact form).
    - **Promotions Page:** Lists all current and upcoming special offers.
- **Design and Styling:**  
    Use a CSS-in-JS solution such as **styled-components** or a utility-first CSS framework like **Tailwind CSS**.
    
    - Ensure strict adherence to the brand colors (#f0efeb, #ce8f5a, #f0d19a, #80c8bc, #6287a2, #5fc0cc) by using a defined color palette. Limit the color usage to 4-6 tones, allowing minor modifications based on color theory for improved contrast and accessibility.
    - Create responsive layouts that work seamlessly on desktop, tablet, and mobile.
- **Static Content and SEO:**  
    Use Static Site Generation (SSG) for pages that do not change frequently (e.g., Landing, Price List, Location, Promotions).
    
    - Leverage Next.js’s Incremental Static Regeneration (ISR) for the Blog pages, enabling updates without a complete rebuild.
    - Ensure proper metadata, alt texts, and semantic HTML to meet SEO and accessibility requirements.
- **Integration with Backend:**  
    The frontend should fetch dynamic content (e.g., blog posts, promotions) from the Strapi API using REST or GraphQL.
    
    - Implement API routes in Next.js if needed to proxy or transform data.
    - Ensure that data fetching is done during build time or via client-side rendering based on content update frequency.
- **Code Structure and Best Practices:**
    
    - Follow a modular component-based architecture.
    - Use Next.js file-based routing to structure the pages.
    - Write well-documented code with clear comments explaining key functionalities.
    - Implement error handling and loading states for dynamic data fetching.

---

## 2. Backend Technology

### Chosen Solution: Strapi (Self-Hosted)

For dynamic content management, use Strapi as the headless CMS. This open-source solution will be self-hosted on your Hostinger account, which means no additional cost beyond your existing hosting fees.

### Detailed Instructions for Backend Development

- **Content Modeling:**  
    Define the content types based on the PRD:
    
    - **Blog Posts:** Include fields for title, content, author, featured image, summary, categories, tags, and publication date.
    - **Promotions:** Include fields for promotion title, description, image, validity dates, and call-to-action links.
    - **Static Pages Content:** Although pages like Price List, Location, and Contact are mostly static, allow for easy updates via Strapi if needed.
- **API Exposure:**  
    Configure Strapi to expose REST or GraphQL endpoints:
    
    - Ensure that proper authentication (if required) and permissions are set so that public endpoints can serve content securely.
    - Document the API endpoints clearly for the frontend to consume.
- **Hosting and Deployment:**
    
    - Deploy Strapi on the existing Hostinger hosting environment. Make sure that the server environment is configured to run Node.js applications.
    - Set up environment variables for database connections and other sensitive configurations.
    - Plan for routine backups and updates of the Strapi instance to ensure data integrity and security.
- **Integration with Frontend:**
    
    - Develop a simple synchronization mechanism where the frontend (Next.js) fetches data from the Strapi API.
    - Use caching strategies (e.g., ISR or SWR in Next.js) to optimize performance and reduce load on the Strapi server.
- **Code Structure and Best Practices:**
    
    - Organize the Strapi project into logical modules for each content type.
    - Use Strapi’s built-in role-based access control (RBAC) to secure the API endpoints.
    - Provide detailed documentation and inline comments to assist future developers in understanding the content model and API structure.

---

## 3. API Integrations

- **Strapi API:**  
    The frontend will consume API endpoints from Strapi to retrieve blog posts, promotions, and other dynamic content.
    
- **Social Media Links:**  
    The website will include static links to Instagram, Facebook, and TikTok without the need for dynamic API calls.
    
- **Booking Integration:**  
    A direct link to the Fresha booking app will be used. No API integration is required unless future enhancements are considered.
    
- **WhatsApp Integration:**  
    A generated QR code will initiate WhatsApp conversations directly through URL schemes. This can be implemented entirely on the frontend.
    

---

## 4. Rationale

The selected tech stack leverages modern, widely supported technologies to ensure the website is fast, maintainable, and scalable. The combination of Next.js for the frontend and Strapi for the backend offers a static-first approach with dynamic capabilities where needed. This design is future-proof, enabling easy integration of additional features (like an online store or custom booking system) while keeping the initial implementation simple and cost-effective. Moreover, by self-hosting Strapi on Hostinger, the project avoids recurring costs, meeting the financial constraints while still offering a robust content management solution.

---

This document serves as a comprehensive guide for the LLM in Cursor IDE to develop the codebase for the Ladies Beauty Salon website. Follow these instructions closely to ensure that both frontend and backend components are developed in accordance with the project requirements and design principles outlined in the PRD and WFD.

---
