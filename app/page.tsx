'use client'

import { useState } from 'react'
import { Home, Users, TrendingUp, FileText, Building2, Award, MapPin, Phone, Mail, Star, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      address: '123 Oak Street',
      city: 'Charlotte, NC',
      price: '$425,000',
      beds: 4,
      baths: 3,
      sqft: '2,400',
      status: 'for-sale'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      address: '456 Maple Avenue',
      city: 'Charlotte, NC',
      price: '$575,000',
      beds: 5,
      baths: 4,
      sqft: '3,200',
      status: 'pending'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      address: '789 Pine Lane',
      city: 'Charlotte, NC',
      price: '$350,000',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      status: 'sold'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      address: '321 Elm Drive',
      city: 'Charlotte, NC',
      price: '$695,000',
      beds: 5,
      baths: 4.5,
      sqft: '3,800',
      status: 'for-sale'
    }
  ]

  const filteredListings = activeFilter === 'all' 
    ? listings 
    : listings.filter(l => l.status === activeFilter)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Charlotte, NC',
      rating: 5,
      text: 'Darius helped us find our dream home in just two weeks. His knowledge of the Charlotte market and attention to detail made the process seamless.'
    },
    {
      name: 'Michael Chen',
      location: 'Matthews, NC',
      rating: 5,
      text: 'As first-time homebuyers, we were nervous about the process. Southern Cities Realty guided us every step of the way. Highly recommend!'
    },
    {
      name: 'Jennifer Martinez',
      location: 'Huntersville, NC',
      rating: 5,
      text: 'Sold our home above asking price in less than a week. The professional photography and marketing made all the difference.'
    },
    {
      name: 'Robert Williams',
      location: 'Cornelius, NC',
      rating: 5,
      text: 'Their investment property expertise helped me find a great rental property with strong cash flow potential. True professionals.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-gold" />
            <div>
              <h1 className="text-xl font-bold">Southern Cities Realty</h1>
              <p className="text-xs text-gold">Part of Southern Cities Enterprises</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#listings" className="hover:text-gold transition">Listings</a>
            <a href="#about" className="hover:text-gold transition">About</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 39, 68, 0.7), rgba(26, 39, 68, 0.7)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Your Home. Our Mission.</h2>
          <p className="text-xl md:text-2xl mb-8 text-gold">Full-service brokerage serving Charlotte and beyond</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#listings" className="bg-gold hover:bg-yellow-600 text-navy px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Search Listings
            </a>
            <a href="#valuation" className="bg-white hover:bg-gray-100 text-navy px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Sell Your Home
            </a>
            <a href="#contact" className="border-2 border-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-4 text-navy">Our Services</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive real estate solutions backed by decades of experience
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Buyer Representation', desc: 'Expert guidance through every step of your home purchase' },
              { icon: Home, title: 'Seller Representation', desc: 'Strategic marketing to maximize your property value' },
              { icon: FileText, title: 'Listing Services', desc: 'Professional photography, staging, and MLS placement' },
              { icon: TrendingUp, title: 'Market Analysis & Valuations', desc: 'Data-driven insights into property values and trends' },
              { icon: Building2, title: 'Investment Property Advisory', desc: 'Identify cash-flowing opportunities with expert analysis' },
              { icon: Award, title: 'First-Time Homebuyer Guidance', desc: 'Patient support for navigating your first purchase' },
              { icon: MapPin, title: 'Relocation Services', desc: 'Seamless transition to the Charlotte area' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <service.icon className="w-12 h-12 text-gold mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-navy">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-4 text-navy">Featured Listings</h3>
          <p className="text-center text-gray-600 mb-8">Discover your next home</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'for-sale', 'pending', 'sold'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeFilter === filter 
                    ? 'bg-navy text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter === 'for-sale' ? 'For Sale' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredListings.map(listing => (
              <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="relative h-48 bg-gray-200">
                  <img src={listing.image} alt={listing.address} className="w-full h-full object-cover" />
                  <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    listing.status === 'for-sale' ? 'bg-green-500 text-white' :
                    listing.status === 'pending' ? 'bg-yellow-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {listing.status === 'for-sale' ? 'For Sale' : listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-navy mb-1">{listing.price}</h4>
                  <p className="text-gray-700 font-semibold">{listing.address}</p>
                  <p className="text-gray-500 text-sm mb-3">{listing.city}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{listing.beds} beds</span>
                    <span>{listing.baths} baths</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-navy hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition">
              View All Listings <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About / Meet the Team */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-navy">Meet the Team</h3>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-48 h-48 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" 
                  alt="Darius Walton"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-navy mb-2">Darius Walton</h4>
                <p className="text-gold font-semibold mb-1">Broker / Owner</p>
                <p className="text-sm text-gray-500 mb-4">NC RE License #321548</p>
                <p className="text-gray-700 mb-4">
                  Darius brings a unique blend of real estate expertise and financial acumen to Southern Cities Realty. 
                  With a master's degree in Real Estate Finance & Development and hands-on experience across residential, 
                  commercial, and investment properties, he provides clients with strategic insights that go beyond traditional brokerage services.
                </p>
                <p className="text-gray-700">
                  As the owner of Southern Cities Enterprises, Darius offers clients access to a complete ecosystem of real estate services—from 
                  acquisition and financing to construction and property management—ensuring seamless transactions and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-4 text-navy">Why Choose Southern Cities Realty</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            More than just a brokerage—part of a vertically integrated real estate ecosystem
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Vertically Integrated', desc: 'Part of Southern Cities Enterprises complete real estate platform' },
              { title: 'Construction Services', desc: 'Direct access to Southern Cities Construction for renovations and improvements' },
              { title: 'Funding Solutions', desc: 'Southern Cities Capital provides creative financing options' },
              { title: 'Investment Expertise', desc: 'Backed by Southern Cities Investors market knowledge and deal flow' },
              { title: 'Licensed & Experienced', desc: 'NC Real Estate License #321548 with years of proven results' },
              { title: 'Local Market Knowledge', desc: 'Deep Charlotte market expertise and neighborhood insights' }
            ].map((item, i) => (
              <div key={i} className="bg-navy text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-gold">{item.title}</h4>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Valuation Tool */}
      <section id="valuation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-center mb-4 text-navy">Get Your Home Value</h3>
            <p className="text-center text-gray-600 mb-8">Receive an AI-powered estimate for your property</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Property Address</label>
                <input 
                  type="text" 
                  placeholder="Enter your address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Beds</label>
                  <input 
                    type="number" 
                    placeholder="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Baths</label>
                  <input 
                    type="number" 
                    placeholder="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Sqft</label>
                  <input 
                    type="number" 
                    placeholder="2000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-gold hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
              >
                Get Your Home Value
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-navy">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-4">Get In Touch</h3>
            <p className="text-center text-gray-300 mb-12">Ready to buy, sell, or invest? Let's talk.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white text-navy"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white text-navy"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white text-navy"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white text-navy">
                    <option>I'm looking to...</option>
                    <option>Buy a home</option>
                    <option>Sell a home</option>
                    <option>Invest in property</option>
                    <option>Get a market analysis</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-white text-navy"
                  />
                </div>
                <button className="w-full bg-gold hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-bold transition">
                  Send Message
                </button>
              </form>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gold">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold" />
                      <span>(704) 299-2742</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold" />
                      <span>realty@developthesouth.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>Charlotte, NC</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-gold">License Information</h4>
                  <p className="text-gray-300">NC Real Estate License #321548</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-gold">Office Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-300">Saturday: 10am - 4pm</p>
                  <p className="text-gray-300">Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4 text-gold">Southern Cities Realty</h5>
              <p className="text-sm text-gray-400">Part of Southern Cities Enterprises</p>
              <p className="text-sm text-gray-400 mt-2">NC RE License #321548</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gold">Sister Companies</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold transition">Southern Cities Construction</a></li>
                <li><a href="#" className="hover:text-gold transition">Southern Cities Capital</a></li>
                <li><a href="#" className="hover:text-gold transition">Southern Cities Investors</a></li>
                <li><a href="#" className="hover:text-gold transition">Southern Cities Enterprises</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gold">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-gold transition">Services</a></li>
                <li><a href="#listings" className="hover:text-gold transition">Listings</a></li>
                <li><a href="#about" className="hover:text-gold transition">About</a></li>
                <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-gold">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Equal Housing Opportunity</li>
                <li>MLS Participant</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Southern Cities Realty. All rights reserved. Licensed Real Estate Broker in North Carolina.
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">
              MLS Disclaimer: Information deemed reliable but not guaranteed. Property information should be verified by buyer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
