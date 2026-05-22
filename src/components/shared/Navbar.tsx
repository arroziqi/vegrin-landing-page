import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Sprout, Menu, X, Github } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { navLinks } from "@/constants/navigation";

export function Navbar() {
  const isScrolled = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (link: { label: string; id: string; path?: string }) => {
    if (link.path === "/team") {
      navigate("/team");
      setIsMobileMenuOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate(`/#${link.id}`);
      } else {
        scrollToSection(link.id);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick({ label: "Home", id: "home", path: "/" })}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--vegrin-green-500)] opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity" />
                <Sprout className="w-8 h-8 text-[var(--vegrin-green-600)] relative z-10" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Vegrin</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive =
                    (link.path === "/team" && location.pathname === "/team") ||
                    (link.path === "/" &&
                      location.pathname === "/" &&
                      (location.hash === `#${link.id}` || (!location.hash && link.id === "home")));
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link)}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[var(--vegrin-green-600)] font-semibold"
                          : "text-gray-700 hover:text-[var(--vegrin-green-600)]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/Arroziqi/mobile-vegrin.git", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  variant="vegrin"
                  onClick={() => navigate("/maintenance")}
                >
                  Try App
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[var(--vegrin-green-600)] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 md:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive =
                    (link.path === "/team" && location.pathname === "/team") ||
                    (link.path === "/" &&
                      location.pathname === "/" &&
                      (location.hash === `#${link.id}` || (!location.hash && link.id === "home")));
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link)}
                      className={`text-left text-base font-medium transition-colors py-2 ${
                        isActive
                          ? "text-[var(--vegrin-green-600)] font-semibold"
                          : "text-gray-700 hover:text-[var(--vegrin-green-600)]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://github.com/Arroziqi/mobile-vegrin.git", "_blank")}
                    className="w-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="vegrin"
                    onClick={() => {
                      navigate("/maintenance");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Try App
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
