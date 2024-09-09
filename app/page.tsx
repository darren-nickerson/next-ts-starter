import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Users App</h1>
      <Link href="/users">
        <Button>Go to Users Page</Button>
      </Link>
    </main>
  )
}