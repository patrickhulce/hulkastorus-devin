import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FileManagerPageProps {
  params: Promise<{
    path?: string[]
  }>
}

export default async function FileManagerPage({ params }: FileManagerPageProps) {
  const resolvedParams = await params
  const currentPath = resolvedParams.path ? `/${resolvedParams.path.join('/')}` : '/'

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">File Manager</h1>
        <p className="text-muted-foreground">
          Browse and manage your files and directories
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Path:</span>
            <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
              {currentPath}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search files..."
              className="w-64"
            />
            <Button variant="outline">New Folder</Button>
            <Button>Upload</Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Files and Directories</CardTitle>
            <CardDescription>
              Your files and folders in {currentPath}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="space-y-4">
                <div className="text-4xl">📂</div>
                <div>
                  <p className="text-lg font-medium">No files yet</p>
                  <p className="text-sm text-muted-foreground">
                    File listing and management functionality will be implemented here.
                    This will include file/folder operations, permissions, and metadata.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
