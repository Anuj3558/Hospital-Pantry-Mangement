"use client"

import React, { useState } from "react"
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
  Star,
  TrendingUp,
  Zap,
  CheckCircle,
  Building,
  HeartHandshake,
  Plus,
  Minus,
  Quote,
} from "lucide-react"

const handleGetStarted = () => {
  window.location.href = "/dashboard"
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#868CFF] to-[#4318FF] flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span style={{ fontFamily: "'Mera Pro', sans-serif" }} className="text-2xl  bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
              HealthFlow
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-[#4318FF] transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#4318FF] transition-colors font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#4318FF] transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#4318FF] transition-colors font-medium">
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
      <section  className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#868CFF]/10 to-[#4318FF]/10 px-4 py-2 border border-[#868CFF]/20">
                <Shield className="h-4 w-4 text-[#4318FF]" />
                <span className="text-sm font-medium text-[#4318FF]">Enterprise-Grade Healthcare Solution</span>
              </div>

              <h1 style={{ fontFamily: "'Mera Pro', sans-serif" }} className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#868CFF]/20 to-[#4318FF]/20 blur-3xl transform rotate-6"></div>
              <div className="relative bg-white shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Today's Overview</h3>
                    <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#868CFF]/10 to-[#4318FF]/10 p-4">
                      <div className="text-2xl font-bold text-[#4318FF]">1,247</div>
                      <div className="text-sm text-gray-600">Meals Served</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#4318FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Patient Nutrition Plans</div>
                        <div className="w-full bg-gray-200 h-2">
                          <div className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] h-2 w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Delivery Efficiency</div>
                        <div className="w-full bg-gray-200 h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 w-5/6"></div>
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

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#868CFF] to-[#4318FF]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trusted by Healthcare Leaders Worldwide</h2>
            <p className="text-xl text-white/90">Join the revolution in hospital food service management</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Healthcare Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2M+</div>
              <div className="text-white/80">Meals Managed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">45%</div>
              <div className="text-white/80">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">98.7%</div>
              <div className="text-white/80">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#868CFF]/10 to-[#4318FF]/10 px-4 py-2 border border-[#868CFF]/20">
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
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white h-full hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                HealthFlow?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience measurable improvements in efficiency, cost savings, and patient satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: TrendingUp,
                  title: "45% Cost Reduction",
                  description: "Optimize food waste, streamline operations, and reduce overhead costs significantly.",
                },
                {
                  icon: HeartHandshake,
                  title: "98% Patient Satisfaction",
                  description: "Deliver personalized nutrition care that exceeds patient expectations consistently.",
                },
                {
                  icon: Zap,
                  title: "60% Faster Operations",
                  description: "Automate workflows and eliminate manual processes for lightning-fast service delivery.",
                },
                {
                  icon: Shield,
                  title: "100% Compliance Ready",
                  description: "Built-in HIPAA compliance and healthcare regulations adherence from day one.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#868CFF] to-[#4318FF] flex items-center justify-center flex-shrink-0">
                    {React.createElement(benefit.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white p-8 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">ROI Calculator</h3>
                    <div className="text-green-600 font-bold">+247% ROI</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Food Costs</span>
                      <span className="font-semibold">$2,400,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">HealthFlow Savings</span>
                      <span className="font-semibold text-green-600">-$1,080,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform Cost</span>
                      <span className="font-semibold">$48,000</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Net Annual Savings</span>
                        <span className="text-green-600">$1,032,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Healthcare Leaders
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-600">Trusted by leading hospitals and healthcare systems worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                hospital: "Metropolitan General Hospital",
                content:
                  "HealthFlow transformed our food service operations completely. We've seen a 40% reduction in costs and our patient satisfaction scores have never been higher.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Director of Operations",
                hospital: "St. Mary's Healthcare System",
                content:
                  "The AI-powered meal planning is incredible. We're now able to provide personalized nutrition care at scale while maintaining strict dietary compliance.",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                role: "Food Service Manager",
                hospital: "Children's Medical Center",
                content:
                  "Implementation was seamless and the support team is outstanding. Our kitchen efficiency has improved by 60% since switching to HealthFlow.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-100 relative">
                <Quote className="w-8 h-8 text-[#4318FF] mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#4318FF] font-medium">{testimonial.hospital}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your healthcare facility</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$2,999",
                period: "/month",
                description: "Perfect for small hospitals and clinics",
                features: [
                  "Up to 100 beds",
                  "Basic patient management",
                  "Standard meal planning",
                  "Email support",
                  "Basic analytics",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$7,999",
                period: "/month",
                description: "Ideal for medium-sized healthcare facilities",
                features: [
                  "Up to 500 beds",
                  "Advanced patient management",
                  "AI-powered meal planning",
                  "Priority phone support",
                  "Advanced analytics",
                  "Custom integrations",
                  "Training included",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large hospital systems and networks",
                features: [
                  "Unlimited beds",
                  "Full feature access",
                  "Dedicated account manager",
                  "24/7 premium support",
                  "Custom development",
                  "Multi-facility management",
                  "Advanced compliance tools",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 border-2 ${
                  plan.popular ? "border-[#4318FF] shadow-xl" : "border-gray-200"
                } hover:shadow-lg transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] text-white px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full h-12 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#868CFF] to-[#4318FF] text-white hover:shadow-lg"
                      : "border-2 border-gray-200 hover:border-[#4318FF] hover:text-[#4318FF]"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Seamless
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600">Connect with your existing healthcare systems effortlessly</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Epic Systems",
              "Cerner",
              "Allscripts",
              "MEDITECH",
              "athenahealth",
              "NextGen",
              "eClinicalWorks",
              "Practice Fusion",
              "DrChrono",
              "Amazing Charts",
              "CureMD",
              "AdvancedMD",
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#868CFF] to-[#4318FF] mx-auto mb-3 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-700">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Get answers to common questions about HealthFlow</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does implementation typically take?",
                answer:
                  "Most hospitals complete implementation within 2-4 weeks. Our dedicated onboarding team works closely with your staff to ensure a smooth transition with minimal disruption to operations.",
              },
              {
                question: "Is HealthFlow HIPAA compliant?",
                answer:
                  "Yes, HealthFlow is fully HIPAA compliant and meets all healthcare data security requirements. We undergo regular security audits and maintain SOC 2 Type II certification.",
              },
              {
                question: "Can HealthFlow integrate with our existing EHR system?",
                answer:
                  "HealthFlow integrates with all major EHR systems including Epic, Cerner, Allscripts, and many others. Our API-first approach ensures seamless data flow between systems.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We offer 24/7 technical support, dedicated account management for Enterprise clients, comprehensive training programs, and ongoing optimization consultations to maximize your ROI.",
              },
              {
                question: "How do you ensure food safety and compliance?",
                answer:
                  "HealthFlow includes built-in food safety protocols, temperature monitoring, allergen tracking, and automated compliance reporting to meet all FDA and local health department requirements.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "The 30-day free trial includes full access to all features, dedicated onboarding support, training for up to 10 users, and sample data to help you evaluate the platform thoroughly.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-[#4318FF]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#4318FF]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
                <div className="w-10 h-10 bg-gradient-to-br from-[#868CFF] to-[#4318FF] flex items-center justify-center">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">HealthFlow</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing hospital food service management with cutting-edge technology and intelligent
                automation.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#4318FF] transition-colors cursor-pointer">
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
