import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/landing/logo";

export function Footer() {
  return (
    <footer className="container mt-10 flex flex-wrap justify-between pb-16 pt-10 mt-20">
      <div className="flex basis-full justify-between gap-8 md:basis-auto md:flex-col md:justify-start">
        <Logo />
       <div className="flex items-center gap-4 ml-3">
  {/* GitHub Icon */}
  <a
    href="https://github.com/ali-sorathiya64"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground w-6 h-6 flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.814 1.096.814 2.21 0 1.595-.015 2.88-.015 3.27 0 .323.216.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z"
      />
    </svg>
  </a>

  {/* LeetCode Icon */}
  <a
    href="https://leetcode.com/u/StackedCoder/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground w-6 h-6 flex items-center justify-center"
  >
    <Image
      src="/leetcode.png"
      alt="LeetCode"
      width={24}
      height={24}
      className="opacity-70 hover:opacity-100 w-full h-full object-contain"
    />
  </a>
</div>

      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Product</h3>
        <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
          Features
        </Link>
        <Link href="/#" className="text-sm text-muted-foreground hover:text-foreground">
          Integrations
        </Link>
        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
          Pricing
        </Link>
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          Changelog
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Resources</h3>
        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
          Contact
        </Link>
        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
          Terms of service
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Company</h3>
        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
          About us
        </Link>
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          Blog
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Developers</h3>
        <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-foreground">
          Coming Soon
        </Link>
      </div>
    </footer>
  );
}