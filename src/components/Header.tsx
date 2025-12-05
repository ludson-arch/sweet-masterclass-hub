import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChefHat, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  const navLinks = isDashboard
    ? [
        { href: "/dashboard", label: "Meus Cursos" },
        { href: "/dashboard/live", label: "Aulas ao Vivo" },
        { href: "/dashboard/profile", label: "Perfil" },
      ]
    : [
        { href: "/", label: "Início" },
        { href: "/#cursos", label: "Cursos" },
        { href: "/#como-funciona", label: "Como Funciona" },
        { href: "/#depoimentos", label: "Depoimentos" },
        { href: "/#faq", label: "FAQ" },
      ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-18">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ChefHat className="h-6 w-6" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Doce Arte
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                location.pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isDashboard ? (
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          ) : (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Entrar
                </Button>
              </Link>
              <Link to="/curso/decoracao-bolos">
                <Button variant="cta" size="sm">
                  Garantir Vaga
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-slide-up border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 font-body text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {isDashboard ? (
                <Link to="/dashboard/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Meu Perfil
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Entrar
                    </Button>
                  </Link>
                  <Link to="/curso/decoracao-bolos" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="cta" className="w-full">
                      Garantir Vaga
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
