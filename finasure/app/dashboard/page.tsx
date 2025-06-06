"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calculator,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  LogOut,
  Menu,
  PiggyBank,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock chart components
const BusinessHealthChart = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Overall Score</span>
      <span className="text-2xl font-bold text-emerald-600">78/100</span>
    </div>
    <Progress value={78} className="h-3" />
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="flex justify-between">
        <span>Liquidity:</span>
        <span className="font-medium text-emerald-600">85%</span>
      </div>
      <div className="flex justify-between">
        <span>Profitability:</span>
        <span className="font-medium text-emerald-600">72%</span>
      </div>
      <div className="flex justify-between">
        <span>Consistency:</span>
        <span className="font-medium text-yellow-600">68%</span>
      </div>
      <div className="flex justify-between">
        <span>Savings:</span>
        <span className="font-medium text-emerald-600">81%</span>
      </div>
    </div>
  </div>
)

const CashFlowChart = () => (
  <div className="space-y-4">
    <div className="h-32 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-lg flex items-end justify-around p-4">
      {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
        <div key={index} className="bg-emerald-500 rounded-t" style={{ height: `${height}%`, width: "12px" }} />
      ))}
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  </div>
)

const ExpenseBreakdown = () => (
  <div className="space-y-3">
    {[
      { category: "Rent", amount: 150000, percentage: 35, color: "bg-emerald-500" },
      { category: "Supplies", amount: 80000, percentage: 20, color: "bg-emerald-400" },
      { category: "Utilities", amount: 60000, percentage: 15, color: "bg-emerald-300" },
      { category: "Transport", amount: 40000, percentage: 10, color: "bg-emerald-200" },
      { category: "Other", amount: 70000, percentage: 20, color: "bg-emerald-100" },
    ].map((item, index) => (
      <div key={index} className="flex items-center space-x-3">
        <div className={`w-3 h-3 rounded-full ${item.color}`} />
        <div className="flex-1 flex justify-between">
          <span className="text-sm">{item.category}</span>
          <span className="text-sm font-medium">{item.amount.toLocaleString()} FCFA</span>
        </div>
      </div>
    ))}
  </div>
)

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true, href: "/dashboard" },
    { icon: BarChart3, label: "Cash Flow", href: "/dashboard/cashflow" },
    { icon: Calculator, label: "Budget", href: "/dashboard/budget" },
    { icon: Users, label: "Njangi Groups", href: "/dashboard/njangi" },
    { icon: PiggyBank, label: "Savings", href: "/dashboard/savings" },
    { icon: CreditCard, label: "Transactions", href: "/dashboard/transactions" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="font-bold text-gray-900">FinaSure</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    item.active ? "bg-emerald-100 text-emerald-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:bg-white lg:border-r lg:border-gray-200 lg:block">
        <div className="flex items-center space-x-2 p-6 border-b">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="font-bold text-gray-900">FinaSure</span>
        </div>
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                item.active ? "bg-emerald-100 text-emerald-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">JD</span>
                    </div>
                    <span className="hidden md:block">John Doe</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/" className="flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,450,000 FCFA</div>
                <p className="text-xs text-emerald-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,850,000 FCFA</div>
                <p className="text-xs text-red-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">600,000 FCFA</div>
                <p className="text-xs text-emerald-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +24.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cash Balance</CardTitle>
                <PiggyBank className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,200,000 FCFA</div>
                <p className="text-xs text-emerald-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Healthy balance
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                  <span>Weekly Cash Flow</span>
                </CardTitle>
                <CardDescription>Your cash flow trend for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <CashFlowChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <span>Business Health Score</span>
                </CardTitle>
                <CardDescription>AI-powered financial health assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <BusinessHealthChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your spending categories this month</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseBreakdown />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smart Insights</CardTitle>
                <CardDescription>AI-powered recommendations for your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-emerald-800">Optimize Expenses</p>
                      <p className="text-xs text-emerald-600">
                        Consider reducing transport costs by 15% to improve profit margins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Savings Goal</p>
                      <p className="text-xs text-blue-600">
                        You're on track to save 200,000 FCFA this month. Keep it up!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Record Keeping</p>
                      <p className="text-xs text-yellow-600">
                        Update your transactions daily to improve your health score.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
