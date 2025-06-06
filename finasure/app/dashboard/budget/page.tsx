"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, Plus, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DashboardLayout from "@/components/dashboard-layout"

const BudgetForm = ({ onClose, budget = null }: { onClose: () => void; budget?: any }) => {
  const [formData, setFormData] = useState({
    name: budget?.name || "",
    period: budget?.period || "monthly",
    categories: budget?.categories || [
      { name: "Rent", budgeted: "", spent: 0 },
      { name: "Supplies", budgeted: "", spent: 0 },
      { name: "Utilities", budgeted: "", spent: 0 },
      { name: "Transport", budgeted: "", spent: 0 },
      { name: "Marketing", budgeted: "", spent: 0 },
    ],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Budget saved:", formData)
    onClose()
  }

  const updateCategory = (index: number, field: string, value: string) => {
    const updatedCategories = [...formData.categories]
    updatedCategories[index] = { ...updatedCategories[index], [field]: value }
    setFormData({ ...formData, categories: updatedCategories })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Budget Name</Label>
          <Input
            id="name"
            placeholder="e.g., January 2024 Budget"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="period">Period</Label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.period}
            onChange={(e) => setFormData({ ...formData, period: e.target.value })}
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Budget Categories</Label>
        {formData.categories.map((category, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 p-3 border rounded-lg">
            <div>
              <Label className="text-sm">{category.name}</Label>
            </div>
            <div>
              <Input
                type="number"
                placeholder="Budget amount"
                value={category.budgeted}
                onChange={(e) => updateCategory(index, "budgeted", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
          {budget ? "Update Budget" : "Create Budget"}
        </Button>
      </DialogFooter>
    </form>
  )
}

export default function BudgetPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const budgets = [
    {
      id: 1,
      name: "January 2024 Budget",
      period: "Monthly",
      totalBudget: 2000000,
      totalSpent: 1650000,
      categories: [
        { name: "Rent", budgeted: 500000, spent: 500000, percentage: 100 },
        { name: "Supplies", budgeted: 400000, spent: 320000, percentage: 80 },
        { name: "Utilities", budgeted: 200000, spent: 180000, percentage: 90 },
        { name: "Transport", budgeted: 300000, spent: 250000, percentage: 83 },
        { name: "Marketing", budgeted: 600000, spent: 400000, percentage: 67 },
      ],
    },
  ]

  const currentBudget = budgets[0]
  const budgetUtilization = (currentBudget.totalSpent / currentBudget.totalBudget) * 100

  return (
    <DashboardLayout title="Budget Management" subtitle="Plan and track your spending">
      <div className="space-y-6">
        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <Target className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentBudget.totalBudget.toLocaleString()} FCFA</div>
              <p className="text-xs text-gray-600">Current period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentBudget.totalSpent.toLocaleString()} FCFA</div>
              <p className="text-xs text-blue-600">{budgetUtilization.toFixed(1)}% of budget used</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remaining</CardTitle>
              <AlertTriangle className={`h-4 w-4 ${budgetUtilization > 90 ? "text-red-600" : "text-emerald-600"}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(currentBudget.totalBudget - currentBudget.totalSpent).toLocaleString()} FCFA
              </div>
              <p className={`text-xs ${budgetUtilization > 90 ? "text-red-600" : "text-emerald-600"}`}>
                {budgetUtilization > 90 ? "Budget almost exceeded" : "Within budget"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Progress */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{currentBudget.name}</CardTitle>
                <CardDescription>Budget utilization by category</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      <Plus className="h-4 w-4 mr-2" />
                      New Budget
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Budget</DialogTitle>
                      <DialogDescription>Set up a new budget plan for your business expenses.</DialogDescription>
                    </DialogHeader>
                    <BudgetForm onClose={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentBudget.categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{category.name}</span>
                      {category.percentage > 90 && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    </div>
                    <div className="text-right">
                      <span className="font-medium">
                        {category.spent.toLocaleString()} / {category.budgeted.toLocaleString()} FCFA
                      </span>
                      <div className="text-sm text-gray-500">{category.percentage}% used</div>
                    </div>
                  </div>
                  <Progress
                    value={category.percentage}
                    className={`h-2 ${category.percentage > 90 ? "bg-red-100" : "bg-emerald-100"}`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget Insights</CardTitle>
              <CardDescription>AI-powered recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Budget Alert</p>
                    <p className="text-xs text-yellow-600">
                      You've used 100% of your rent budget. Consider reviewing your housing costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Good Progress</p>
                    <p className="text-xs text-emerald-600">
                      Marketing spending is 33% under budget. Consider investing more in growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Optimization Tip</p>
                    <p className="text-xs text-blue-600">
                      Transport costs are consistent. Consider negotiating bulk rates with suppliers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spending Trends</CardTitle>
              <CardDescription>Monthly comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-end justify-around p-4">
                  {[70, 85, 60, 90, 75].map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-blue-500 rounded-t mb-2 w-6"
                        style={{ height: `${height}px` }}
                        title={`Month ${index + 1}: ${height}%`}
                      />
                      <span className="text-xs text-gray-600">M{index + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center">Budget utilization over the last 5 months</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
