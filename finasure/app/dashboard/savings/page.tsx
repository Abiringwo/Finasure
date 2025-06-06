"use client"

import type React from "react"

import { useState } from "react"
import { Goal, PiggyBank, Plus, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

const SavingsGoalForm = ({ onClose, goal = null }: { onClose: () => void; goal?: any }) => {
  const [formData, setFormData] = useState({
    name: goal?.name || "",
    targetAmount: goal?.targetAmount || "",
    currentAmount: goal?.currentAmount || "",
    targetDate: goal?.targetDate || "",
    description: goal?.description || "",
    category: goal?.category || "business",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Savings goal saved:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Goal Name</Label>
        <Input
          id="name"
          placeholder="e.g., New Equipment Fund"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Brief description of your savings goal"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="targetAmount">Target Amount (FCFA)</Label>
          <Input
            id="targetAmount"
            type="number"
            placeholder="1000000"
            value={formData.targetAmount}
            onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentAmount">Current Amount (FCFA)</Label>
          <Input
            id="currentAmount"
            type="number"
            placeholder="0"
            value={formData.currentAmount}
            onChange={(e) => setFormData({ ...formData, currentAmount: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="targetDate">Target Date</Label>
          <Input
            id="targetDate"
            type="date"
            value={formData.targetDate}
            onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="business">Business</option>
            <option value="equipment">Equipment</option>
            <option value="emergency">Emergency</option>
            <option value="expansion">Expansion</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
          {goal ? "Update Goal" : "Create Goal"}
        </Button>
      </DialogFooter>
    </form>
  )
}

export default function SavingsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const savingsGoals = [
    {
      id: 1,
      name: "New Equipment Fund",
      description: "Saving for new production equipment",
      targetAmount: 2000000,
      currentAmount: 1200000,
      targetDate: "2024-06-30",
      category: "Equipment",
      progress: 60,
      monthlyTarget: 200000,
    },
    {
      id: 2,
      name: "Emergency Fund",
      description: "6 months of operating expenses",
      targetAmount: 3000000,
      currentAmount: 1800000,
      targetDate: "2024-12-31",
      category: "Emergency",
      progress: 60,
      monthlyTarget: 150000,
    },
    {
      id: 3,
      name: "Business Expansion",
      description: "Opening second location",
      targetAmount: 5000000,
      currentAmount: 800000,
      targetDate: "2025-03-31",
      category: "Expansion",
      progress: 16,
      monthlyTarget: 350000,
    },
  ]

  const totalSavings = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0)
  const totalTargets = savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0)
  const overallProgress = (totalSavings / totalTargets) * 100

  const savingsHistory = [
    { date: "2024-01-15", amount: 200000, goal: "New Equipment Fund", type: "deposit" },
    { date: "2024-01-10", amount: 150000, goal: "Emergency Fund", type: "deposit" },
    { date: "2024-01-05", amount: 100000, goal: "Business Expansion", type: "deposit" },
    { date: "2024-01-01", amount: 250000, goal: "New Equipment Fund", type: "deposit" },
  ]

  return (
    <DashboardLayout title="Savings Goals" subtitle="Track and manage your savings targets">
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
              <PiggyBank className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSavings.toLocaleString()} FCFA</div>
              <p className="text-xs text-emerald-600">Across all goals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Target Amount</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTargets.toLocaleString()} FCFA</div>
              <p className="text-xs text-blue-600">Total target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress.toFixed(1)}%</div>
              <p className="text-xs text-purple-600">Of total goals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
              <Goal className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{savingsGoals.length}</div>
              <p className="text-xs text-orange-600">In progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Savings Goals */}
        <Tabs defaultValue="goals" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="goals">Savings Goals</TabsTrigger>
              <TabsTrigger value="history">Transaction History</TabsTrigger>
            </TabsList>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  <Plus className="h-4 w-4 mr-2" />
                  New Goal
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Savings Goal</DialogTitle>
                  <DialogDescription>Set up a new savings target to track your progress.</DialogDescription>
                </DialogHeader>
                <SavingsGoalForm onClose={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="goals" className="space-y-4">
            {savingsGoals.map((goal) => (
              <Card key={goal.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{goal.name}</span>
                        <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                          {goal.category}
                        </span>
                      </CardTitle>
                      <CardDescription>{goal.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      Add Funds
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Current Amount</p>
                      <p className="font-medium text-lg">{goal.currentAmount.toLocaleString()} FCFA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Target Amount</p>
                      <p className="font-medium text-lg">{goal.targetAmount.toLocaleString()} FCFA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Target Date</p>
                      <p className="font-medium">{goal.targetDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Monthly Target</p>
                      <p className="font-medium">{goal.monthlyTarget.toLocaleString()} FCFA</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{goal.progress}% complete</span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0 FCFA</span>
                      <span>{goal.targetAmount.toLocaleString()} FCFA</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-700">
                      <strong>Remaining:</strong> {(goal.targetAmount - goal.currentAmount).toLocaleString()} FCFA
                      <br />
                      <strong>Time left:</strong>{" "}
                      {Math.ceil((new Date(goal.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}{" "}
                      days
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Savings History</CardTitle>
                <CardDescription>Recent deposits and withdrawals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savingsHistory.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                        <div>
                          <p className="font-medium">Deposit to {transaction.goal}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">+{transaction.amount.toLocaleString()} FCFA</p>
                        <p className="text-sm text-gray-500">{transaction.type}</p>
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
