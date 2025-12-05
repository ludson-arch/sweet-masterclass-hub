import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  QrCode,
  Lock,
  Check,
  Loader2,
  ShieldCheck,
  PartyPopper,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
  };
}

type Step = "form" | "processing" | "success";
type PaymentMethod = "card" | "pix";

const PurchaseModal = ({ isOpen, onClose, course }: PurchaseModalProps) => {
  const [step, setStep] = useState<Step>("form");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      email: "",
      password: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      cardName: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Finalizar Inscrição
              </DialogTitle>
            </DialogHeader>

            {/* Course Summary */}
            <div className="flex gap-4 rounded-xl bg-muted/50 p-4">
              <img
                src={course.image}
                alt={course.title}
                className="h-20 w-28 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-display text-sm font-semibold line-clamp-2">
                  {course.title}
                </h4>
                <div className="mt-2 flex items-baseline gap-2">
                  {course.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {course.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-display text-xl font-bold text-primary">
                    R$ {course.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Section */}
              <div className="space-y-4">
                <h4 className="font-display text-sm font-semibold text-muted-foreground">
                  Sua Conta
                </h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Criar senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      required
                      minLength={8}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h4 className="font-display text-sm font-semibold text-muted-foreground">
                  Forma de Pagamento
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all",
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span className="font-body text-sm font-medium">Cartão</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all",
                      paymentMethod === "pix"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <QrCode className="h-5 w-5" />
                    <span className="font-body text-sm font-medium">PIX</span>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no cartão</Label>
                      <Input
                        id="cardName"
                        placeholder="Como está no cartão"
                        required
                        value={formData.cardName}
                        onChange={(e) =>
                          setFormData({ ...formData, cardName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        required
                        value={formData.cardNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, cardNumber: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry">Validade</Label>
                        <Input
                          id="cardExpiry"
                          placeholder="MM/AA"
                          required
                          value={formData.cardExpiry}
                          onChange={(e) =>
                            setFormData({ ...formData, cardExpiry: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardCvc">CVV</Label>
                        <Input
                          id="cardCvc"
                          placeholder="123"
                          required
                          maxLength={4}
                          value={formData.cardCvc}
                          onChange={(e) =>
                            setFormData({ ...formData, cardCvc: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "pix" && (
                  <div className="animate-fade-in rounded-xl border border-dashed border-primary/50 bg-primary/5 p-6 text-center">
                    <QrCode className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-3 font-body text-sm text-muted-foreground">
                      O código PIX será gerado após confirmar o pedido
                    </p>
                  </div>
                )}
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 rounded-lg bg-success/10 p-3">
                <ShieldCheck className="h-5 w-5 text-success" />
                <span className="font-body text-xs text-success">
                  Pagamento seguro — criptografia SSL e PCI-compliant
                </span>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Lock className="h-4 w-4" />
                Pagar e Acessar Curso
              </Button>

              <p className="text-center font-body text-xs text-muted-foreground">
                Garantia de 7 dias — cancele e receba reembolso total
              </p>
            </form>
          </>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
            <p className="mt-6 font-display text-xl font-semibold">
              Processando pagamento...
            </p>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Aguarde, estamos confirmando seu pedido
            </p>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="animate-confetti flex h-20 w-20 items-center justify-center rounded-full bg-success/20">
              <PartyPopper className="h-10 w-10 text-success" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">
              Parabéns! 🎉
            </h3>
            <p className="mt-2 font-body text-muted-foreground">
              Você agora faz parte da turma
            </p>
            
            <div className="mt-6 w-full rounded-xl bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success text-success-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-body text-sm font-medium">
                    Confirmação enviada para
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {formData.email}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="hero"
              className="mt-8 w-full"
              size="lg"
              onClick={() => {
                handleClose();
                window.location.href = "/dashboard";
              }}
            >
              Ir para o Curso
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
