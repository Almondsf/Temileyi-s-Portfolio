import React from 'react';
import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Get in <span className="text-primary-dark">Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl card-shadow p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:contact@temileyi.com" className="flex items-center gap-3 text-gray-600 hover:text-primary-dark transition-colors">
                    <Mail size={20} />
                    contact@temileyi.com
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary-dark transition-colors">
                    <Instagram size={20} />
                    @temileyi
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary-dark transition-colors">
                    <Youtube size={20} />
                    Temileyi
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-lg border-primary/20 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-lg border-primary/20 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-primary/20 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}