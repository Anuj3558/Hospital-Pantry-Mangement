"use client"

import React from "react"
import {
  ArrowRight,
  ChevronRight,
  Utensils,
  Users,
  ClipboardList,
  Truck,
  LayoutDashboard,
  Bell,
  Activity,
  Shield,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const handleGetStarted = () => {
  window.location.href = "/dashboard"
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span style={{ fontFamily: "'Mera Pro', sans-serif" }} className="text-2xl  bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
              Health Flow
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-[#4318FF] transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-[#4318FF] transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#4318FF] transition-colors">
              Contact
            </a>
          </nav>
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] text-white px-6 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-[#4318FF]/25 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 inline" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#868CFF]/10 to-[#4318FF]/10 px-4 py-2 rounded-full border border-[#868CFF]/20">
                <Shield className="h-4 w-4 text-[#4318FF]" />
                <span className="text-sm font-medium text-[#4318FF]">Enterprise-Grade Healthcare Solution</span>
              </div>

              <h1 style={{ fontFamily: "'Mera Pro', sans-serif" }} className="text-2xl sm:text-2xl lg:text-4xl  leading-tight">
                Revolutionary Hospital
                <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                  {" "}
                  Food Service{" "}
                </span>
                Management Platform
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline your hospital's nutrition services with our AI-powered management system. Enhance patient
                satisfaction, reduce costs, and optimize operations with cutting-edge technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="h-14 px-8 bg-gradient-to-r from-[#868CFF] to-[#4318FF] text-white font-semibold hover:shadow-xl hover:shadow-[#4318FF]/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="h-14 px-8 border-2 border-gray-200 hover:border-[#4318FF] hover:text-[#4318FF] transition-all duration-300 font-semibold">
                  Schedule Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4318FF]">500+</div>
                  <div className="text-sm text-gray-600">Hospitals Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4318FF]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4318FF]">24/7</div>
                  <div className="text-sm text-gray-600">Expert Support</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#868CFF]/20 to-[#4318FF]/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Today's Overview</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#868CFF]/10 to-[#4318FF]/10 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#4318FF]">1,247</div>
                      <div className="text-sm text-gray-600">Meals Served</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#4318FF] rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Patient Nutrition Plans</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Delivery Efficiency</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#868CFF]/10 to-[#4318FF]/10 px-4 py-2 rounded-full border border-[#868CFF]/20">
              <Award className="h-4 w-4 text-[#4318FF]" />
              <span className="text-sm font-medium text-[#4318FF]">Industry-Leading Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Comprehensive
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                Healthcare Nutrition{" "}
              </span>
              Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your hospital's food service operations with our advanced technology platform designed
              specifically for healthcare environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Patient Management",
                description:
                  "Advanced patient profiling with dietary restrictions, allergies, and personalized nutrition tracking for optimal care delivery.",
                icon: Users,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "AI-Powered Diet Planning",
                description:
                  "Intelligent meal planning system that creates personalized nutrition plans based on medical conditions and preferences.",
                icon: ClipboardList,
                color: "from-green-500 to-green-600",
              },
              {
                title: "Kitchen Operations Hub",
                description:
                  "Streamlined pantry and kitchen management with real-time inventory tracking and automated task assignment.",
                icon: Utensils,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Real-Time Delivery Tracking",
                description:
                  "GPS-enabled delivery monitoring with predictive analytics for on-time meal delivery and patient satisfaction.",
                icon: Truck,
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Executive Dashboard",
                description:
                  "Comprehensive analytics dashboard with KPIs, cost analysis, and performance metrics for data-driven decisions.",
                icon: LayoutDashboard,
                color: "from-indigo-500 to-indigo-600",
              },
              {
                title: "Intelligent Alert System",
                description:
                  "Proactive notification system for delays, dietary conflicts, and operational issues with automated escalation.",
                icon: Bell,
                color: "from-red-500 to-red-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white rounded-2xl h-full hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      {React.createElement(feature.icon, {
                        className: "w-7 h-7 text-white",
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#4318FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6">
                    <ChevronRight className="w-5 h-5 text-[#4318FF] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Hospital's Food Service?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join hundreds of healthcare facilities already using HealthFlow to improve patient satisfaction, reduce
              costs, and streamline operations. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="h-14 px-8 bg-white text-[#4318FF] font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free 30-Day Trial
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-[#4318FF] transition-all duration-300 font-semibold">
                Contact Sales Team
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">HealthFlow</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing hospital food service management with cutting-edge technology and intelligent
                automation.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Patient Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Diet Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kitchen Operations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Delivery Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#4318FF]" />
                  <span>contact@healthflow.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#4318FF]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#4318FF]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2024 HealthFlow. All rights reserved.</p>
              <div className="flex gap-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
