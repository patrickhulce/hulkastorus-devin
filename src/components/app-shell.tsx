"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/app/dashboard" },
  { name: "File Manager", href: "/app/browse" },
  { name: "Settings", href: "/app/settings" },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background">
      <div className="flex w-64 flex-col">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-background border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/" className="text-xl font-bold">
              Hulkastorus
            </Link>
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    pathname.startsWith(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
        <footer className="bg-background border-t px-4 py-2">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Hulkastorus • Privacy • Terms
          </div>
        </footer>
      </div>
    </div>
  )
}
