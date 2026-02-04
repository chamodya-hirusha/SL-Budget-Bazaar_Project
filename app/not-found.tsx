import Link from "next/link"
import { Home, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="rounded-xl gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link href="/shop">
            <Button
              variant="outline"
              className="rounded-xl gap-2 w-full sm:w-auto bg-transparent"
            >
              <ShoppingBag className="h-4 w-4" />
              Browse Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
