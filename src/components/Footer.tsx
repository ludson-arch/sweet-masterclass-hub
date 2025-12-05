import { Link } from "react-router-dom";
import { ChefHat, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ChefHat className="h-6 w-6" />
              </div>
              <span className="font-display text-xl font-semibold">Doce Arte</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground">
              Transforme sua paixão por confeitaria em habilidades profissionais com nossos cursos exclusivos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@docearte.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Cursos</h4>
            <ul className="space-y-2">
              {["Decoração de Bolos", "Chocolates Artesanais", "Macarons Perfeitos", "Confeitaria Básica"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Suporte</h4>
            <ul className="space-y-2">
              {["Central de Ajuda", "Contato", "FAQ", "Política de Reembolso"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              {["Termos de Uso", "Política de Privacidade", "Cookies"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Doce Arte. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Feito com 💛 para confeiteiros apaixonados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
