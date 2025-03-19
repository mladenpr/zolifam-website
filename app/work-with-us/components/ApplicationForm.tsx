"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from "react"

export function ApplicationForm() {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://getform.io/f/bjjmypjb", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setResult("Application submitted successfully! We'll review and get back to you soon.");
        formRef.current?.reset();
      } else {
        console.log("Error details:", await response.text());
        setResult("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Detailed error:", error);
      setResult("Network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <form 
      ref={formRef} 
      onSubmit={onSubmit} 
      className="space-y-6"
      encType="multipart/form-data"
    >
      {/* Honeypot field to prevent spam */}
      <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
      
      <div>
        <label htmlFor="name" className="block font-serif text-gray-700 mb-1">
          Full Name
        </label>
        <Input
          id="name"
          name="full-name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-serif text-gray-700 mb-1">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-serif text-gray-700 mb-1">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your Phone"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
        />
      </div>
      <div>
        <label htmlFor="position" className="block font-serif text-gray-700 mb-1">
          Position
        </label>
        <select
          id="position"
          name="position"
          required
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
          name="experience"
          type="number"
          placeholder="Years of Experience"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-serif text-gray-700 mb-1">
          Cover Letter
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about yourself and why you'd like to join our team"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
          rows={4}
        />
      </div>
      <div>
        <label htmlFor="resume" className="block font-serif text-gray-700 mb-1">
          Resume/CV (Max 5MB)
        </label>
        <Input
          id="resume"
          name="file"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          className="w-full px-4 py-2 border border-gray-200 rounded-md font-serif"
        />
        <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
      </div>
      <Button type="submit" className="w-full rounded-full bg-[#F0EFEB] hover:bg-[#E8E7E3] text-black font-serif border border-black">
        Submit Application
      </Button>
      {result && (
        <p className={`mt-4 text-center font-serif ${result.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
          {result}
        </p>
      )}
    </form>
  );
} 