"use client"

import { useState } from "react"
import { Download, PieChart, TrendingUp, BarChart3, DollarSign, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"

// Mock chart components with better visuals
const IncomeChart = () => (
  <div className="space-y-4">
    <div className="h-64 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />
      <div className="relative z-10 h-full flex items-end justify-around">
        {[
          { month: "Jan", income: 2200000, expenses: 1800000 },
          { month: "Feb", income: 2450000, expenses: 1950000 },
          { month: "Mar", income: 2100000, expenses: 1750000 },
          { month: "Apr", income: 2800000, expenses: 2100000 },
          { month: "May", income: 2650000, expenses: 2000000 },
          { month: "Jun", income: 2900000, expenses: 2200000 },
        ].map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              <div
                className="bg-emerald-500 rounded-t w-4 shadow-lg"
                style={{ height: `${(data.income / 3000000) * 180}px` }}
                title={`Income: ${data.income.toLocaleString()} FCFA`}
              />
              <div
                className="bg-red-400 rounded-t w-4 shadow-lg"
                style={{ height: `${(data.expenses / 3000000) * 180}px` }}
                title={`Expenses: ${data.expenses.toLocaleString()} FCFA`}
              />
            </div>
            <span className="text-xs font-medium text-gray-600">{data.month}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center space-x-6 text-sm">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-emerald-500 rounded" />
        <span>Income</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-400 rounded" />
        <span>Expenses</span>
      </div>
    </div>
  </div>
)

const CashFlowChart = () => (
  <div className="space-y-4">
    <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 relative">
      <div className="h-full flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <defs>
            <linearGradient id="cashflowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 20 150 Q 80 120 140 130 T 260 110 T 380 90"
            stroke="#3B82F6"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-sm"
          />
          <path d="M 20 150 Q 80 120 140 130 T 260 110 T 380 90 L 380 180 L 20 180 Z" fill="url(#cashflowGradient)" />
          {[
            { x: 20, y: 150 },
            { x: 80, y: 120 },
            { x: 140, y: 130 },
            { x: 200, y: 115 },
            { x: 260, y: 110 },
            { x: 320, y: 100 },
            { x: 380, y: 90 },
          ].map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="4" fill="#3B82F6" className="drop-shadow-sm" />
          ))}
        </svg>
      </div>
    </div>
  </div>
)

const ProfitabilityChart = () => (
  <div className="space-y-4">
    <div className="h-64 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
          <circle cx="100" cy="100" r="80" stroke="#E5E7EB" strokeWidth="20" fill="none" />
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#8B5CF6"
            strokeWidth="20"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 80 * 0.75} ${2 * Math.PI * 80}`}
            strokeLinecap="round"
            className="drop-shadow-sm"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">75%</div>
            <div className="text-sm text-gray-600">Profit Margin</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedYear, setSelectedYear] = useState("2024")

  const financialData = {
    revenue: 15600000,
    expenses: 11200000,
    netIncome: 4400000,
    assets: 8500000,
    liabilities: 3200000,
    equity: 5300000,
    cashFlow: 3800000,
  }

  const incomeStatement = [
    { item: "Revenue", amount: 15600000, percentage: 100 },
    { item: "Cost of Goods Sold", amount: -8400000, percentage: -53.8 },
    { item: "Gross Profit", amount: 7200000, percentage: 46.2 },
    { item: "Operating Expenses", amount: -2800000, percentage: -17.9 },
    { item: "Operating Income", amount: 4400000, percentage: 28.2 },
    { item: "Interest Expense", amount: -200000, percentage: -1.3 },
    { item: "Net Income", amount: 4200000, percentage: 26.9 },
  ]

  const balanceSheet = {
    assets: [
      { item: "Cash and Cash Equivalents", amount: 1200000 },
      { item: "Accounts Receivable", amount: 800000 },
      { item: "Inventory", amount: 2500000 },
      { item: "Equipment", amount: 3200000 },
      { item: "Other Assets", amount: 800000 },
    ],
    liabilities: [
      { item: "Accounts Payable", amount: 600000 },
      { item: "Short-term Loans", amount: 1200000 },
      { item: "Long-term Debt", amount: 1400000 },
    ],
    equity: [
      { item: "Owner's Equity", amount: 3000000 },
      { item: "Retained Earnings", amount: 2300000 },
    ],
  }

  const recommendations = [
    {
      category: "Revenue Growth",
      priority: "High",
      description: "Consider expanding your product line to increase revenue by 15-20%",
      impact: "High",
      timeframe: "3-6 months",
    },
    {
      category: "Cost Optimization",
      priority: "Medium",
      description: "Negotiate better rates with suppliers to reduce COGS by 5%",
      impact: "Medium",
      timeframe: "1-3 months",
    },
    {
      category: "Cash Flow",
      priority: "High",
      description: "Implement better inventory management to free up 800,000 FCFA",
      impact: "High",
      timeframe: "2-4 months",
    },
    {
      category: "Debt Management",
      priority: "Medium",
      description: "Consider refinancing high-interest debt to reduce monthly payments",
      impact: "Medium",
      timeframe: "1-2 months",
    },
  ]

  const exportToPDF = (reportType: string) => {
    console.log(`Exporting ${reportType} to PDF...`)
    // Implementation for PDF export would go here
  }

  return (
    <DashboardLayout title="Financial Reports" subtitle="Comprehensive business analytics and insights">
      <div className="space-y-6">
        {/* Controls */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div>
                <CardTitle>Report Dashboard</CardTitle>
                <CardDescription>Generate and export comprehensive financial reports</CardDescription>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{financialData.revenue.toLocaleString()} FCFA</div>
              <p className="text-xs opacity-90">+12.5% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Net Income</CardTitle>
              <TrendingUp className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{financialData.netIncome.toLocaleString()} FCFA</div>
              <p className="text-xs opacity-90">+18.3% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Assets</CardTitle>
              <Target className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{financialData.assets.toLocaleString()} FCFA</div>
              <p className="text-xs opacity-90">+8.7% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Cash Flow</CardTitle>
              <BarChart3 className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{financialData.cashFlow.toLocaleString()} FCFA</div>
              <p className="text-xs opacity-90">+15.2% from last period</p>
            </CardContent>
          </Card>
        </div>

        {/* Visual Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-emerald-600" />
                <span>Income vs Expenses</span>
              </CardTitle>
              <CardDescription>Monthly comparison over 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <IncomeChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span>Cash Flow Trend</span>
              </CardTitle>
              <CardDescription>Weekly cash flow analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <CashFlowChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                <span>Profitability</span>
              </CardTitle>
              <CardDescription>Overall profit margin analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfitabilityChart />
            </CardContent>
          </Card>
        </div>

        {/* Financial Reports Tabs */}
        <Tabs defaultValue="income-statement" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="income-statement">Income Statement</TabsTrigger>
            <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
            <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
            <TabsTrigger value="recommendations">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="income-statement" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Income Statement</CardTitle>
                    <CardDescription>Profit and Loss for {selectedPeriod} period</CardDescription>
                  </div>
                  <Button
                    onClick={() => exportToPDF("income-statement")}
                    className="bg-emerald-500 hover:bg-emerald-600"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incomeStatement.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        item.item === "Gross Profit" || item.item === "Operating Income" || item.item === "Net Income"
                          ? "bg-emerald-50 border border-emerald-200"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            item.amount < 0
                              ? "text-red-600"
                              : item.item.includes("Income") || item.item.includes("Profit")
                                ? "text-emerald-600"
                                : "text-gray-900"
                          }`}
                        >
                          {item.item}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold text-lg ${
                            item.amount < 0
                              ? "text-red-600"
                              : item.item.includes("Income") || item.item.includes("Profit")
                                ? "text-emerald-600"
                                : "text-gray-900"
                          }`}
                        >
                          {item.amount.toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-500">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance-sheet" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Balance Sheet</CardTitle>
                    <CardDescription>Financial position as of {selectedPeriod} end</CardDescription>
                  </div>
                  <Button onClick={() => exportToPDF("balance-sheet")} className="bg-emerald-500 hover:bg-emerald-600">
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Assets */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-emerald-600 border-b border-emerald-200 pb-2">Assets</h3>
                    {balanceSheet.assets.map((asset, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span className="text-sm">{asset.item}</span>
                        <span className="font-medium">{asset.amount.toLocaleString()} FCFA</span>
                      </div>
                    ))}
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-bold text-emerald-600">
                        <span>Total Assets</span>
                        <span>{financialData.assets.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>

                  {/* Liabilities */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">Liabilities</h3>
                    {balanceSheet.liabilities.map((liability, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span className="text-sm">{liability.item}</span>
                        <span className="font-medium">{liability.amount.toLocaleString()} FCFA</span>
                      </div>
                    ))}
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-bold text-red-600">
                        <span>Total Liabilities</span>
                        <span>{financialData.liabilities.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>

                  {/* Equity */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 border-b border-blue-200 pb-2">Equity</h3>
                    {balanceSheet.equity.map((equity, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span className="text-sm">{equity.item}</span>
                        <span className="font-medium">{equity.amount.toLocaleString()} FCFA</span>
                      </div>
                    ))}
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-bold text-blue-600">
                        <span>Total Equity</span>
                        <span>{financialData.equity.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cash-flow" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Cash Flow Statement</CardTitle>
                    <CardDescription>Cash movements for {selectedPeriod} period</CardDescription>
                  </div>
                  <Button onClick={() => exportToPDF("cash-flow")} className="bg-emerald-500 hover:bg-emerald-600">
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Operating Activities */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-emerald-600 border-b border-emerald-200 pb-2">
                      Cash Flow from Operating Activities
                    </h3>
                    <div className="space-y-2 pl-4">
                      <div className="flex justify-between">
                        <span>Net Income</span>
                        <span className="font-medium text-emerald-600">4,200,000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Depreciation</span>
                        <span className="font-medium">320,000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Changes in Working Capital</span>
                        <span className="font-medium text-red-600">-180,000 FCFA</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-emerald-600">
                          <span>Net Operating Cash Flow</span>
                          <span>4,340,000 FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investing Activities */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-600 border-b border-blue-200 pb-2">
                      Cash Flow from Investing Activities
                    </h3>
                    <div className="space-y-2 pl-4">
                      <div className="flex justify-between">
                        <span>Equipment Purchases</span>
                        <span className="font-medium text-red-600">-800,000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Asset Sales</span>
                        <span className="font-medium text-emerald-600">150,000 FCFA</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-red-600">
                          <span>Net Investing Cash Flow</span>
                          <span>-650,000 FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financing Activities */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-purple-600 border-b border-purple-200 pb-2">
                      Cash Flow from Financing Activities
                    </h3>
                    <div className="space-y-2 pl-4">
                      <div className="flex justify-between">
                        <span>Loan Proceeds</span>
                        <span className="font-medium text-emerald-600">500,000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loan Repayments</span>
                        <span className="font-medium text-red-600">-390,000 FCFA</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-emerald-600">
                          <span>Net Financing Cash Flow</span>
                          <span>110,000 FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Net Change */}
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex justify-between items-center font-bold text-lg text-emerald-600">
                      <span>Net Change in Cash</span>
                      <span>3,800,000 FCFA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>AI-Powered Insights & Recommendations</CardTitle>
                    <CardDescription>Strategic recommendations based on your financial data</CardDescription>
                  </div>
                  <Button
                    onClick={() => exportToPDF("recommendations")}
                    className="bg-emerald-500 hover:bg-emerald-600"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              rec.priority === "High"
                                ? "bg-red-500"
                                : rec.priority === "Medium"
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                            }`}
                          />
                          <h4 className="font-semibold text-lg">{rec.category}</h4>
                        </div>
                        <div className="flex space-x-2">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              rec.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : rec.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {rec.priority} Priority
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              rec.impact === "High" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {rec.impact} Impact
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{rec.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Timeframe: {rec.timeframe}</span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
