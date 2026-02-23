import { Link, useLocation } from "react-router";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-[#0A0A0A] border-b-2 border-[#2A2A2A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white tracking-widest uppercase">
              Eightball Coffee
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`text-base font-bold transition-colors uppercase tracking-wider ${
                isActive("/")
                  ? "text-[#FDE047]"
                  : "text-white hover:text-[#DC2626]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-base font-bold transition-colors uppercase tracking-wider ${
                isActive("/menu")
                  ? "text-[#FDE047]"
                  : "text-white hover:text-[#DC2626]"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/location"
              className={`text-base font-bold transition-colors uppercase tracking-wider ${
                isActive("/location")
                  ? "text-[#FDE047]"
                  : "text-white hover:text-[#DC2626]"
              }`}
            >
              Location
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#FDE047] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2A2A2A]">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold transition-colors uppercase tracking-wider ${
                  isActive("/")
                    ? "text-[#FDE047]"
                    : "text-white hover:text-[#DC2626]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold transition-colors uppercase tracking-wider ${
                  isActive("/menu")
                    ? "text-[#FDE047]"
                    : "text-white hover:text-[#DC2626]"
                }`}
              >
                Menu
              </Link>
              <Link
                to="/location"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold transition-colors uppercase tracking-wider ${
                  isActive("/location")
                    ? "text-[#FDE047]"
                    : "text-white hover:text-[#DC2626]"
                }`}
              >
                Location
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}