import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

export default function ResetPasswordPage() {
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
            <CardTitle>Reset your password</CardTitle>
            <CardDescription>Enter your new password below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                New Password
              </label>
              <Input id="password" type="password" placeholder="Enter your new password" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your new password"
                required
              />
            </div>
            <Button className="w-full" size="lg">
              Reset Password
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Back to login
              </Link>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          © 2025 Hulkastorus • Terms • Privacy
        </footer>
      </div>
    </div>
  );
}
