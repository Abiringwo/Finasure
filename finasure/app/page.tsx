"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Calculator, PiggyBank, TrendingUp, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: TrendingUp, title: "Business Health Score", color: "text-emerald-500" },
    { icon: BarChart3, title: "Cash Flow Tracking", color: "text-blue-500" },
    { icon: Users, title: "Digital Ledger", color: "text-purple-500" },
    { icon: Calculator, title: "Smart Budgeting", color: "text-orange-500" },
    { icon: PiggyBank, title: "Smart Insights", color: "text-pink-500" },
    { icon: ArrowRight, title: "Export & Reports", color: "text-indigo-500" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-emerald-100 relative z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FinaSure</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empower Your Business with
              <span className="text-emerald-500 relative">
                <span className="relative z-10"> Smart Finance</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200 -z-10 transform scale-x-0 animate-underline"></div>
              </span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              FinaSure helps informal and semi-formal SMEs in Cameroon manage finances, track cash flow, and unlock
              access to funding with AI-powered insights.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300"
              >
                View Demo
              </Button>
            </Link>
          </div>

          {/* Animated Feature Showcase */}
          <div
            className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <span>Trusted by</span>
              <div className="flex items-center space-x-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 transition-all duration-500 ${
                      currentFeature === index ? "scale-110 opacity-100" : "scale-100 opacity-60"
                    }`}
                  >
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    <span className="hidden lg:block">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-emerald-500" />
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Your Business</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your finances and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Business Health Score",
                description:
                  "AI-powered metric that evaluates your financial performance across liquidity, profitability, and consistency.",
                delay: "0",
              },
              {
                icon: BarChart3,
                title: "Cash Flow Tracking",
                description:
                  "Record every transaction in real-time with categorization and exportable history for better financial visibility.",
                delay: "200",
              },
              {
                icon: Users,
                title: "Digital Ledger",
                description:
                  "Manage group savings (Njangi) with transparency, automated reminders, and mobile money integration.",
                delay: "400",
              },
              {
                icon: Calculator,
                title: "Smart Budgeting",
                description:
                  "Create flexible budgets for varying income streams with visual alerts and spending tracking.",
                delay: "600",
              },
              {
                icon: PiggyBank,
                title: "Smart Insights",
                description:
                  "Get personalized recommendations for expense optimization, debt management, and savings strategies.",
                delay: "800",
              },
              {
                icon: ArrowRight,
                title: "Export & Reports",
                description: "Generate detailed reports in PDF/Excel format for tax purposes and funding applications.",
                delay: "1000",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`border-emerald-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of SMEs in Cameroon who are already using FinaSure to manage their finances better.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white">FinaSure</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 FinaSure. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering SMEs across Cameroon</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes underline {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-underline {
          animation: underline 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
