import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff00] backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Mehak
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "Projects", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-medium hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <a
          href="https://calendar.app.google/fpRU2qDXNfbg4BSK8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary"> Contact </Button>
        </a>
      </div>
    </header>
  );
}
