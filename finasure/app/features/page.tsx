"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Calculator,
  PiggyBank,
  TrendingUp,
  Users,
  FileText,
  Shield,
  Smartphone,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreFeatures = [
    {
      icon: TrendingUp,
      title: "Business Health Score",
      description: "AI-powered comprehensive evaluation of your business financial health",
      features: [
        "Real-time liquidity analysis",
        "Profitability tracking",
        "Consistency metrics",
        "Predictive insights",
        "Benchmarking against industry standards",
      ],
      color: "emerald",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BarChart3,
      title: "Advanced Cash Flow Management",
      description: "Complete visibility into your money movements with intelligent categorization",
      features: [
        "Real-time transaction recording",
        "Automatic categorization",
        "Multi-currency support",
        "Cash flow forecasting",
        "Visual trend analysis",
      ],
      color: "blue",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Users,
      title: "Digital Njangi Platform",
      description: "Modernize traditional group savings with digital transparency and automation",
      features: [
        "Group creation and management",
        "Automated contribution reminders",
        "Transparent payout scheduling",
        "Mobile money integration",
        "Member communication tools",
      ],
      color: "purple",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Calculator,
      title: "Intelligent Budgeting",
      description: "Smart budgeting tools that adapt to your irregular income patterns",
      features: [
        "Flexible budget templates",
        "Income variability handling",
        "Spending alerts and limits",
        "Goal-based budgeting",
        "Seasonal adjustment tools",
      ],
      color: "orange",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: PiggyBank,
      title: "AI-Powered Financial Insights",
      description: "Get personalized recommendations to optimize your business finances",
      features: [
        "Expense optimization suggestions",
        "Revenue growth opportunities",
        "Debt management strategies",
        "Savings goal recommendations",
        "Risk assessment alerts",
      ],
      color: "pink",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: FileText,
      title: "Professional Reporting Suite",
      description: "Generate comprehensive financial reports for stakeholders and compliance",
      features: [
        "Income statements",
        "Balance sheets",
        "Cash flow statements",
        "Tax-ready reports",
        "Custom report builder",
      ],
      color: "indigo",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your financial data is protected with enterprise-level security measures",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with offline capabilities for rural areas",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick loading times and instant synchronization across all devices",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in English and French to serve all Cameroon regions",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-emerald-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FinaSure</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-emerald-600 font-medium">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              Comprehensive Financial Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-emerald-500"> Modern SMEs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how FinaSure's comprehensive suite of financial tools can transform your business operations and
              drive sustainable growth.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Six powerful modules designed specifically for SMEs in Cameroon
            </p>
          </div>

          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <Badge variant="outline" className={`text-${feature.color}-600 border-${feature.color}-200`}>
                      Core Feature
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 text-${feature.color}-500`} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`bg-${feature.color}-500 hover:bg-${feature.color}-600 text-white`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${feature.color}-200 rounded-2xl transform rotate-3`}></div>
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with the unique needs of Cameroonian SMEs in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with the tools and services you already use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Money</h3>
              <p className="text-gray-600 mb-6">
                Direct integration with MTN Mobile Money, Orange Money, and other local payment providers.
              </p>
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                Coming Soon
              </Badge>
            </Card>

            <Card className="text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Banking APIs</h3>
              <p className="text-gray-600 mb-6">
                Connect with major Cameroonian banks for automatic transaction import and reconciliation.
              </p>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                In Development
              </Badge>
            </Card>

            <Card className="text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accounting Software</h3>
              <p className="text-gray-600 mb-6">
                Export data to popular accounting software and tax preparation tools.
              </p>
              <Badge className="bg-purple-100 text-purple-700">Available</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of SMEs already using FinaSure to streamline their financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                View Live Demo
              </Button>
            </Link>
          </div>
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
    </div>
  )
}
