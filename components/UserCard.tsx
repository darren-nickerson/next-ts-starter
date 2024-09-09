import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type User = {
  id: number
  name: string
  email: string
}

export default function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{user.email}</p>
      </CardContent>
    </Card>
  )
}