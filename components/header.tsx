import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Numbers Pay"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-medium text-white">Numbers Pay</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#security"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Security
          </Link>
          <Link
            href="#faq"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <a href={"https://forms.gle/JZYcJkJH43ZuTpqk6"} target={"_blank"}>
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100"
          >
            Download App
          </Button>
        </a>
      </div>
    </header>
  );
}
