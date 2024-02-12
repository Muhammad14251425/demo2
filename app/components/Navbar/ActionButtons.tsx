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
import Logo from "./Logo"
const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-gray-300">
              <SheetHeader>
                <SheetDescription  >
                    <div className="-mt-8 -ml-6">
                    <Logo />
                    </div>
                  <div className="flex flex-col gap-y-4 w-full items-start text-lg text-black mt-10">
                    <Link href="/" className="border-b border-black w-full text-left pb-2">Sign In</Link>
                    <Link href="/" className="border-b border-black w-full text-left pb-2">Getting Started</Link>
                    <Link href="/" className="border-b border-black w-full text-left pb-2">Templates</Link>
                    <Link href="/" className="border-b border-black w-full text-left pb-2">Documentation</Link>
                    <Link href="/" className="border-b border-black w-full text-left pb-2">Pricing</Link>
                    
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