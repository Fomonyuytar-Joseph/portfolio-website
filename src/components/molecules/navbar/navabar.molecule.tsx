"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import LogoAtom from "@/components/atoms/logo/logo.atom";
import Button from "@/components/atoms/button/button.atom";
import { IconRepository } from "@/lib/repository/icons/icon.repository";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navbarHeight = 80; // Adjust based on your navbar's actual height
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showShadow, setShowShadow] = useState(false); // State for box-shadow
  const [showOverlay, setShowOverlay] = useState(false); // Overlay state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle navbar visibility based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      // Add shadow only if not at the top
      setShowShadow(currentScrollY > 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  useEffect(() => {
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

  const handleBurgerClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-primary-navy z-[9999] transition-transform duration-[600ms] ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } `} // Conditionally add shadow
        style={{
          boxShadow: showShadow
            ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)"
            : "none", // Shadow only when not at the top
        }}
      >
        <LogoAtom onClick={(e) => handleLinkClick(e, "#home")} />
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-20 text-tertiary-lightest-slate font-fira text-[13px]">
            {["about", "experience", "work", "contact"].map((section) => {
              const label = section.charAt(0).toUpperCase() + section.slice(1);

              return (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    scroll={false}
                    onClick={(e) => handleLinkClick(e, `#${section}`)}
                    className="relative group block overflow-hidden"
                  >
                    {/* Main text (shoots upward out of view) */}
                    <span className="relative z-10 block transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0">
                      {label}
                    </span>

                    {/* Duplicate text (rises into view) */}
                    <span className="absolute left-0 top-0 w-full h-full flex items-center text-[13px] font-fira text-secondary-green opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Button className="max-lg:hidden" text="Resume" />
        <IconRepository.BurgerMenuIcon
          className="hidden max-lg:block cursor-pointer"
          onClick={handleBurgerClick}
        />
      </nav>
      {/* Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[10000]"
          onClick={() => setShowOverlay(false)} // Close overlay on click outside
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-4">
              {["about", "experience", "work", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => {
                      handleLinkClick(e, `#${section}`);
                      setShowOverlay(false); // Close overlay after link click
                    }}
                    className="text-gray-800 hover:text-secondary-green"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
