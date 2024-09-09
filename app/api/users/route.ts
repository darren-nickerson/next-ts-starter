import { NextResponse } from "next/server";

export async function GET() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 5, name: "Bob Smith", email: "bob@example.com" },
    { id: 6, name: "Charlie Brown", email: "charlie@example.com" },
  ];

  return NextResponse.json({ users });
}
