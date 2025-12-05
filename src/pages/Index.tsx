import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import ScarcityBanner from "@/components/ScarcityBanner";
import PurchaseModal from "@/components/PurchaseModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Play,
  Video,
  FileText,
  MessageCircle,
  Radio,
  Award,
  Users,
  Clock,
  Shield,
  Star,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import heroImage from "@/assets/hero-confectionery.jpg";
import chefImage from "@/assets/chef-instructor.jpg";
import courseChocolate from "@/assets/course-chocolate.jpg";
import courseCakes from "@/assets/course-cakes.jpg";
import courseMacarons from "@/assets/course-macarons.jpg";

const Index = () => {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({
    title: "Decoração de Bolos Profissional",
    price: 297,
    originalPrice: 497,
    image: courseCakes,
  });

  const handlePurchase = (course: typeof selectedCourse) => {
    setSelectedCourse(course);
    setIsPurchaseOpen(true);
  };

  const courses = [
    {
      id: "decoracao-bolos",
      title: "Decoração de Bolos Profissional",
      description:
        "Aprenda técnicas avançadas de decoração, desde glacê real até flores de açúcar.",
      image: courseCakes,
      duration: "8 semanas",
      lessons: 24,
      level: "Intermediário" as const,
      price: 297,
      originalPrice: 497,
      spotsLeft: 7,
      isNew: true,
    },
    {
      id: "chocolates-artesanais",
      title: "Chocolates Artesanais",
      description:
        "Domine a temperagem do chocolate e crie bombons dignos de confeitarias premium.",
      image: courseChocolate,
      duration: "6 semanas",
      lessons: 18,
      level: "Avançado" as const,
      price: 347,
      originalPrice: 547,
      spotsLeft: 12,
    },
    {
      id: "macarons-perfeitos",
      title: "Macarons Perfeitos",
      description:
        "Os segredos para macarons com casquinha crocante e recheio cremoso.",
      image: courseMacarons,
      duration: "4 semanas",
      lessons: 12,
      level: "Iniciante" as const,
      price: 197,
      originalPrice: 297,
      spotsLeft: 5,
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Vídeo-aulas HD",
      description: "Conteúdo gravado em alta qualidade com close-ups detalhados",
    },
    {
      icon: FileText,
      title: "Materiais em PDF",
      description: "Receitas, fichas técnicas e guias para download",
    },
    {
      icon: MessageCircle,
      title: "Chat com Professor",
      description: "Tire dúvidas em tempo real durante todo o curso",
    },
    {
      icon: Radio,
      title: "Aulas ao Vivo",
      description: "Sessões semanais de perguntas e demonstrações exclusivas",
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Certificado de conclusão reconhecido no mercado",
    },
    {
      icon: Shield,
      title: "Garantia 7 Dias",
      description: "Não gostou? Devolvemos 100% do seu investimento",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Escolha seu curso",
      description:
        "Selecione o curso ideal para seu nível e objetivos na confeitaria",
    },
    {
      step: 2,
      title: "Acesse imediatamente",
      description:
        "Após o pagamento, você já pode começar a assistir às aulas",
    },
    {
      step: 3,
      title: "Pratique e evolua",
      description:
        "Coloque em prática, tire dúvidas e conquiste seu certificado",
    },
  ];

  const testimonials = [
    {
      name: "Maria Clara",
      role: "Confeiteira Profissional",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "O curso transformou minha confeitaria. Hoje recebo encomendas de todo o estado e meus bolos são reconhecidos pela qualidade.",
      rating: 5,
      courseName: "Decoração de Bolos",
    },
    {
      name: "João Paulo",
      role: "Empreendedor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "Comecei do zero e em 3 meses já tinha minha própria linha de chocolates. O suporte do professor fez toda a diferença.",
      rating: 5,
      courseName: "Chocolates Artesanais",
    },
    {
      name: "Ana Beatriz",
      role: "Hobby → Profissão",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Sempre amei confeitaria mas tinha medo de empreender. O curso me deu confiança e técnica para dar o salto.",
      rating: 5,
      courseName: "Macarons Perfeitos",
    },
  ];

  const faqs = [
    {
      question: "Por quanto tempo tenho acesso ao curso?",
      answer:
        "Você tem acesso vitalício ao conteúdo. Pode assistir quando quiser, quantas vezes precisar, sem prazo de expiração.",
    },
    {
      question: "Preciso ter experiência prévia?",
      answer:
        "Depende do curso. Temos opções para iniciantes absolutos e também cursos avançados para quem já trabalha na área. Cada curso indica claramente o nível recomendado.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer:
        "Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail em até 7 dias após a compra e devolvemos 100% do valor, sem perguntas.",
    },
    {
      question: "Os materiais PDF são inclusos?",
      answer:
        "Sim! Todos os cursos incluem receitas detalhadas, fichas técnicas e materiais de apoio em PDF para download.",
    },
    {
      question: "Como funciona o chat com o professor?",
      answer:
        "Cada curso tem uma área de chat exclusiva onde você pode tirar dúvidas diretamente com o instrutor. As respostas costumam chegar em até 24h úteis.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Scarcity Banner */}
      <ScarcityBanner
        spotsLeft={7}
        endDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}
        variant="banner"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-background" />
        <div className="absolute inset-0 bg-texture-dots bg-dots-md opacity-50" />

        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="animate-slide-up space-y-8">
              <div className="space-y-4">
                <Badge variant="gold" className="text-sm">
                  Mestres da Confeitaria — Turma Exclusiva
                </Badge>
                <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Aprenda confeitaria profissional —{" "}
                  <span className="text-primary">do básico às receitas de assinatura</span>
                </h1>
                <p className="font-body text-lg text-muted-foreground md:text-xl">
                  Aulas práticas, PDF de apoio e mentorias ao vivo. Vagas limitadas — garanta a sua.
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">+2.500 alunos</strong> já transformaram suas vidas
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() =>
                    handlePurchase({
                      title: "Decoração de Bolos Profissional",
                      price: 297,
                      originalPrice: 497,
                      image: courseCakes,
                    })
                  }
                >
                  Garantir minha vaga
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button variant="cta-secondary" size="xl">
                  <Play className="h-5 w-5" />
                  Assistir aula grátis
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {["Pagamento Seguro", "Certificado Incluso", "Garantia 7 dias"].map(
                  (badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="font-body text-sm text-muted-foreground">
                        {badge}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl shadow-warm-lg">
                <img
                  src={heroImage}
                  alt="Confeitaria profissional"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 animate-float rounded-2xl bg-card p-4 shadow-warm-lg md:-bottom-8 md:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20 text-success">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">+150 receitas</p>
                    <p className="font-body text-xs text-muted-foreground">
                      Exclusivas da escola
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24" id="beneficios">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              O que você recebe
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Tudo que você precisa para dominar a confeitaria
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-muted/30 py-16 md:py-24" id="cursos">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Nossos Cursos
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Escolha seu caminho na confeitaria
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Cursos completos com certificado, do iniciante ao profissional
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onPurchase={() =>
                  handlePurchase({
                    title: course.title,
                    price: course.price,
                    originalPrice: course.originalPrice,
                    image: course.image,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24" id="como-funciona">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Como funciona
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              3 passos simples para começar
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src={chefImage}
                alt="Chef Instrutor"
                className="rounded-3xl shadow-warm-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-primary p-4 text-primary-foreground shadow-warm-md md:-bottom-6 md:-right-6">
                <p className="font-display text-3xl font-bold">15+</p>
                <p className="font-body text-sm">anos de experiência</p>
              </div>
            </div>

            <div className="space-y-6">
              <Badge variant="gold">Seu Instrutor</Badge>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Chef Rafael Mendes
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Formado pela Le Cordon Bleu Paris, com passagens por confeitarias
                premiadas na Europa. Hoje dedica sua carreira a formar a nova
                geração de confeiteiros brasileiros.
              </p>

              <ul className="space-y-3">
                {[
                  "Medalha de Ouro - World Pastry Cup 2019",
                  "Consultor de grandes redes de confeitaria",
                  "+2.500 alunos formados online",
                  "Autor do livro 'Doces com Alma'",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24" id="depoimentos">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Depoimentos
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              O que nossos alunos dizem
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-center text-primary-foreground md:grid-cols-4 md:p-12">
            {[
              { value: "2.500+", label: "Alunos" },
              { value: "98%", label: "Satisfação" },
              { value: "150+", label: "Receitas" },
              { value: "4.9★", label: "Avaliação" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold">{stat.value}</p>
                <p className="font-body text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="gold" className="mb-4">
              Oferta Exclusiva
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Assista uma aula grátis
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Receba acesso gratuito a uma aula completa + PDF com 5 receitas
              exclusivas direto no seu e-mail.
            </p>

            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
                inputSize="lg"
              />
              <Button variant="hero" size="lg">
                Quero a aula grátis
              </Button>
            </form>

            <p className="mt-4 font-body text-xs text-muted-foreground">
              Prometemos não enviar spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24" id="faq">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Dúvidas Frequentes
            </Badge>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border bg-card px-6"
                >
                  <AccordionTrigger className="font-display text-left text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-chocolate to-chocolate-light py-16 text-cream md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Pronto para transformar sua paixão em profissão?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-cream/80">
            Junte-se a mais de 2.500 alunos que já estão dominando a arte da
            confeitaria. Vagas limitadas para a próxima turma.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              onClick={() =>
                handlePurchase({
                  title: "Decoração de Bolos Profissional",
                  price: 297,
                  originalPrice: 497,
                  image: courseCakes,
                })
              }
            >
              Garantir minha vaga agora
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <ScarcityBanner spotsLeft={7} />
        </div>
      </section>

      <Footer />

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
        course={selectedCourse}
      />
    </div>
  );
};

export default Index;
