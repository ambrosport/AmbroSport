"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mvzaykyl");
  if (state.succeeded) {
      return (
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center justify-center">
          <div className="max-w-2xl w-full text-white text-center">
            <p className="text-xl font-semibold">Thanks for contacting us! We'll get back to you as soon as possible.</p>
          </div>
        </section>
      );
  }
  return (
    <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Acme Inc."
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            >
              <option value="">Select your country</option>
              <option value="united-states">United States</option>
              <option value="canada">Canada</option>
              <option value="peru">Peru</option>
              <option value="china">China</option>
              <option value="other">Other</option>
            </select>
          </div>


          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-50"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;