import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex">
        <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-h-screen">
          <div className="p-6">
            <h2 className="font-semibold mb-4">Documentation</h2>
            <nav className="space-y-2">
              <div className="text-sm">
                <div className="font-medium text-primary">Getting Started</div>
                <div className="ml-2 mt-1 space-y-1 text-muted-foreground">
                  <div>Quick Start</div>
                  <div>Installation</div>
                  <div>Authentication</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">API Reference</div>
                <div className="ml-2 mt-1 space-y-1 text-muted-foreground">
                  <div>Upload Files</div>
                  <div>Download Files</div>
                  <div>File Management</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">FAQ</div>
              </div>
            </nav>
          </div>
        </aside>
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Learn how to use Hulkastorus for dev-friendly cloud storage.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    Quick start guide to get you up and running with Hulkastorus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Documentation content will be implemented here. This includes installation instructions,
                    authentication setup, and basic usage examples.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>
                    Complete API documentation for programmatic access
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed API endpoints documentation will be implemented here, including request/response
                    examples and authentication requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>
                    Frequently asked questions and troubleshooting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Common questions and answers will be implemented here to help users troubleshoot
                    issues and understand best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
