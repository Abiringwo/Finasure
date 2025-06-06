"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Crown, Plus, Send, Users, Wallet } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "@/components/dashboard-layout"

const CreateGroupForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contributionAmount: "",
    frequency: "monthly",
    maxMembers: "",
    startDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Group created:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Group Name</Label>
        <Input
          id="name"
          placeholder="e.g., Business Growth Njangi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Brief description of the group purpose"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="contributionAmount">Contribution Amount (FCFA)</Label>
          <Input
            id="contributionAmount"
            type="number"
            placeholder="50000"
            value={formData.contributionAmount}
            onChange={(e) => setFormData({ ...formData, contributionAmount: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frequency</Label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maxMembers">Maximum Members</Label>
          <Input
            id="maxMembers"
            type="number"
            placeholder="10"
            value={formData.maxMembers}
            onChange={(e) => setFormData({ ...formData, maxMembers: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
          Create Group
        </Button>
      </DialogFooter>
    </form>
  )
}

export default function NjangiPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const njangiGroups = [
    {
      id: 1,
      name: "Business Growth Njangi",
      description: "Monthly savings for business expansion",
      members: 8,
      maxMembers: 10,
      contributionAmount: 50000,
      frequency: "Monthly",
      totalSaved: 2400000,
      nextPayout: "2024-02-15",
      isAdmin: true,
      status: "active",
    },
    {
      id: 2,
      name: "Equipment Purchase Group",
      description: "Saving for new equipment",
      members: 5,
      maxMembers: 6,
      contributionAmount: 100000,
      frequency: "Monthly",
      totalSaved: 1500000,
      nextPayout: "2024-02-20",
      isAdmin: false,
      status: "active",
    },
    {
      id: 3,
      name: "Emergency Fund Njangi",
      description: "Emergency savings for unexpected expenses",
      members: 12,
      maxMembers: 12,
      contributionAmount: 25000,
      frequency: "Weekly",
      totalSaved: 3600000,
      nextPayout: "2024-01-22",
      isAdmin: false,
      status: "completed",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "contribution",
      member: "Marie Ngozi",
      amount: 50000,
      group: "Business Growth Njangi",
      date: "2024-01-15",
    },
    {
      id: 2,
      type: "payout",
      member: "Paul Biya",
      amount: 400000,
      group: "Equipment Purchase Group",
      date: "2024-01-14",
    },
    {
      id: 3,
      type: "contribution",
      member: "John Doe",
      amount: 25000,
      group: "Emergency Fund Njangi",
      date: "2024-01-14",
    },
    { id: 4, type: "join", member: "Sarah Kom", amount: 0, group: "Business Growth Njangi", date: "2024-01-13" },
  ]

  return (
    <DashboardLayout title="Njangi Groups" subtitle="Manage your group savings and contributions">
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Groups</CardTitle>
              <Users className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-emerald-600">2 as member, 1 as admin</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contributions</CardTitle>
              <Wallet className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">425,000 FCFA</div>
              <p className="text-xs text-blue-600">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
              <Send className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7,500,000 FCFA</div>
              <p className="text-xs text-purple-600">Across all groups</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
              <Calendar className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Jan 22</div>
              <p className="text-xs text-orange-600">Emergency Fund Njangi</p>
            </CardContent>
          </Card>
        </div>

        {/* Groups Management */}
        <Tabs defaultValue="my-groups" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="my-groups">My Groups</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Group
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Njangi Group</DialogTitle>
                  <DialogDescription>Set up a new savings group and invite members to join.</DialogDescription>
                </DialogHeader>
                <CreateGroupForm onClose={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="my-groups" className="space-y-4">
            {njangiGroups.map((group) => (
              <Card key={group.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="flex items-center space-x-2">
                        <span>{group.name}</span>
                        {group.isAdmin && <Crown className="h-4 w-4 text-yellow-500" />}
                      </CardTitle>
                      <Badge variant={group.status === "active" ? "default" : "secondary"}>{group.status}</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Members</p>
                      <p className="font-medium">
                        {group.members}/{group.maxMembers}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contribution</p>
                      <p className="font-medium">{group.contributionAmount.toLocaleString()} FCFA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Frequency</p>
                      <p className="font-medium">{group.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next Payout</p>
                      <p className="font-medium">{group.nextPayout}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Saved</span>
                      <span className="font-medium">{group.totalSaved.toLocaleString()} FCFA</span>
                    </div>
                    <Progress value={(group.members / group.maxMembers) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest transactions and group activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activity.type === "contribution"
                              ? "bg-emerald-500"
                              : activity.type === "payout"
                                ? "bg-blue-500"
                                : "bg-purple-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium">
                            {activity.type === "contribution" && `${activity.member} contributed`}
                            {activity.type === "payout" && `${activity.member} received payout`}
                            {activity.type === "join" && `${activity.member} joined group`}
                          </p>
                          <p className="text-sm text-gray-500">{activity.group}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {activity.amount > 0 && <p className="font-medium">{activity.amount.toLocaleString()} FCFA</p>}
                        <p className="text-sm text-gray-500">{activity.date}</p>
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
