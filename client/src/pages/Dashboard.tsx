import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface User {
  username: string;
  id: string;
}

function Dashboard() {
  const navigate = useNavigate();

  // TODO: Get user data from localStorage
  // Hint: localStorage.getItem('user')
  const user: User | null = null;

  useEffect(() => {
    // TODO: Redirect to login if no user data
    // Hint: Use navigate('/login') if user is null
    // Don't forget the dependency array!
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Hi, {user.username}!</CardTitle>
            <CardDescription>Welcome to your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                // TODO: Clear user data from localStorage
                // Hint: localStorage.removeItem('user')
                // TODO: Navigate back to login
                // Hint: navigate('/login')
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
