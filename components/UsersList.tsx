'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import UserCard from './UserCard';
import { Skeleton } from "@/components/ui/skeleton";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Button onClick={fetchUsers} className="mb-4" disabled={loading}>
        {loading ? 'Loading...' : 'Refresh Users'}
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2 p-4 border rounded-lg">
                <Skeleton className="h-6 w-[200px] bg-muted" />
                <Skeleton className="h-4 w-[150px] bg-muted" />
                <Skeleton className="h-4 w-[100px] bg-muted" />
              </div>
            ))}
          </>
        ) : (
          users.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  );
}