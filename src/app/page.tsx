import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Dev-Friendly Cloud Storage,{" "}
              <span className="text-primary">Hulk-Strong</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instant public URLs & frictionless CLI / Python uploads - minus the SDK bloat.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Request an Invite</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>⚡ One-Command Share</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Ship files at Raptor speed; hulk put - link auto-copied & posted to Slack
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>↻ Keyless Auth Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Works with GitHub SSO / cloud IAM; zero keys in CI
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>📦 ML-Asset Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Multipart, resumable uploads; content-addressed caching; MD5 + SHA-256 integrity
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24 text-center">
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
            <div className="bg-background rounded border p-4 text-left font-mono text-sm">
              <div className="text-muted-foreground mb-2"># Upload a file</div>
              <div>$ hulk put model.ckpt</div>
              <div className="text-primary">https://hulk.st/or.us/abc123</div>
              <div className="text-muted-foreground">- copied to clipboard ✅</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Hulkastorus • Privacy • Terms • Twitter
          </div>
        </div>
      </footer>
    </div>
  )
}
