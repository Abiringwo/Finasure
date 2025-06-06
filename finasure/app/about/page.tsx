"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Users, Target, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe every SME deserves access to professional financial tools, regardless of size or location.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to solve the unique challenges faced by informal and semi-formal businesses.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster financial inclusion and community growth through collaborative savings and shared knowledge.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from user experience to data security.",
    },
  ]

  const team = [
    {
      name: "Marie Ngozi",
      role: "CEO & Co-Founder",
      description: "Former banking executive with 15+ years in microfinance across Central Africa.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Paul Biya Jr.",
      role: "CTO & Co-Founder",
      description: "Tech entrepreneur with expertise in fintech and mobile payment solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Kom",
      role: "Head of Product",
      description: "UX specialist focused on creating intuitive financial tools for emerging markets.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jean Mballa",
      role: "Head of Operations",
      description: "Operations expert with deep understanding of SME challenges in Cameroon.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "FinaSure was born from the vision to democratize financial management for SMEs in Cameroon.",
    },
    {
      year: "2023",
      title: "MVP Launch",
      description: "Launched our minimum viable product with core features for cash flow tracking and budgeting.",
    },
    {
      year: "2023",
      title: "1,000+ Users",
      description: "Reached our first milestone of 1,000 active users across major Cameroonian cities.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced AI-powered insights and business health scoring for smarter financial decisions.",
    },
    {
      year: "2024",
      title: "Mobile Money Integration",
      description: "Partnered with major mobile money providers for seamless transaction integration.",
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
            <Link href="/features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-emerald-600 font-medium">
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering SMEs Across
              <span className="text-emerald-500"> Cameroon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize financial management for small and medium enterprises, providing them
              with the tools they need to thrive in today's economy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower small and medium enterprises in Cameroon with accessible, intelligent financial management
                  tools that drive sustainable growth and economic prosperity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every business, regardless of size or formality, deserves access to professional-grade
                  financial tools that were once only available to large corporations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading financial platform for SMEs across Central Africa, fostering financial inclusion
                  and driving economic growth through technology and innovation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-2xl transform rotate-3"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Our Mission"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming SME finance in Cameroon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Key milestones in our mission to empower SMEs</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-emerald-500 text-white">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-emerald-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Real numbers showing the difference we're making
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Active Users", description: "SMEs using our platform" },
              { number: "₣2.5B+", label: "Transactions Tracked", description: "Total value processed" },
              { number: "15+", label: "Cities Covered", description: "Across Cameroon" },
              { number: "98%", label: "User Satisfaction", description: "Customer satisfaction rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-emerald-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the financial revolution for SMEs in Cameroon. Start your journey with FinaSure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                Contact Our Team
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
