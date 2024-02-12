import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
              <SheetHeader>
                <SheetDescription >
                  <div className="flex flex-col gap-y-4 w-full items-start text-lg text-black mt-10">
                    <Link href="/">Sign In</Link>
                    <Link href="/">Getting Started</Link>
                    <Link href="/">Templates</Link>
                    <Link href="/">Documentation</Link>
                    <Link href="/">Pricing</Link>
                    
                  </div>
                </SheetDescription>
              </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:gap-x-4">
        <Button className="text-md" variant="ghost">Sign in</Button>
        <Button className="text-md bg-blue-500" >Get Started</Button>
      </div>
    </div>
  )
}

export default ActionButtons