import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold">
            Hulkastorus
          </Link>
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome back, beast.</CardTitle>
            <CardDescription>Log in to crush some bytes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button className="w-full" size="lg">
              🦖 Log In
            </Button>
            <div className="text-center">
              <Button variant="link" size="sm">
                Forgot your password?
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Sign up →
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          © 2025 Hulkastorus • Terms • Privacy
        </footer>
      </div>
    </div>
  )
}
