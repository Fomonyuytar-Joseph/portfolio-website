"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import LogoAtom from "@/components/atoms/logo/logo.atom";
import Button from "@/components/atoms/button/button.atom";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navbarHeight = 80; // Adjust based on your navbar's actual height

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset =
            element.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            20;

          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    router.push(`${pathname}${href}`, { scroll: false }); // Prevents default Next.js scrolling

    const element = document.querySelector(href);
    if (element) {
      const offset =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        20;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-primary-navy z-50">
      <LogoAtom onClick={(e) => handleLinkClick(e, "#home")} />
      <div className="max-lg:hidden">
        <ul className="flex items-center gap-20 text-tertiary-lightest-slate font-fira text-[13px]">
          {["about", "experience", "work", "contact"].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                scroll={false} // Ensures Next.js doesn't override behavior
                className="hover:text-secondary-green transition ease-custom duration-custom"
                onClick={(e) => handleLinkClick(e, `#${section}`)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button className="max-lg:hidden" text="Resume" />
    </nav>
  );
};

export default Navbar;
