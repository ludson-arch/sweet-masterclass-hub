import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PurchaseModal from "@/components/PurchaseModal";
import ScarcityBanner from "@/components/ScarcityBanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Play,
  Clock,
  BookOpen,
  Users,
  Star,
  CheckCircle2,
  Download,
  MessageCircle,
  Award,
  Shield,
  ChevronRight,
  Lock,
} from "lucide-react";

import courseCakes from "@/assets/course-cakes.jpg";
import chefImage from "@/assets/chef-instructor.jpg";

const CourseDetail = () => {
  const { id } = useParams();
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);

  // Mock course data - in real app, fetch based on id
  const course = {
    id: "decoracao-bolos",
    title: "Decoração de Bolos Profissional",
    description:
      "Aprenda técnicas avançadas de decoração que vão transformar seus bolos em verdadeiras obras de arte. Do glacê real às flores de açúcar, domine tudo que você precisa.",
    longDescription:
      "Neste curso completo, você vai aprender todas as técnicas essenciais para se tornar um decorador de bolos profissional. Começamos do básico, entendendo os diferentes tipos de coberturas e suas aplicações, até técnicas avançadas como modelagem em pasta americana e flores de açúcar realistas.",
    image: courseCakes,
    duration: "8 semanas",
    lessons: 24,
    level: "Intermediário",
    price: 297,
    originalPrice: 497,
    spotsLeft: 7,
    rating: 4.9,
    students: 847,
    instructor: {
      name: "Chef Rafael Mendes",
      image: chefImage,
      bio: "15 anos de experiência, formado pela Le Cordon Bleu Paris",
    },
    includes: [
      "24 vídeo-aulas em HD",
      "Material de apoio em PDF",
      "Chat direto com o professor",
      "3 aulas ao vivo por mês",
      "Certificado de conclusão",
      "Acesso vitalício",
    ],
    curriculum: [
      {
        title: "Módulo 1: Fundamentos",
        lessons: [
          { title: "Introdução à decoração profissional", duration: "15:30", free: true },
          { title: "Equipamentos essenciais", duration: "22:45", free: true },
          { title: "Tipos de cobertura e quando usar cada uma", duration: "28:15", free: false },
          { title: "Preparando a massa perfeita", duration: "35:00", free: false },
        ],
      },
      {
        title: "Módulo 2: Glacê e Buttercream",
        lessons: [
          { title: "Glacê real: técnica clássica", duration: "25:30", free: false },
          { title: "Buttercream suíço e italiano", duration: "32:00", free: false },
          { title: "Texturas e acabamentos", duration: "28:45", free: false },
          { title: "Degradê e ombré perfeitos", duration: "24:15", free: false },
        ],
      },
      {
        title: "Módulo 3: Pasta Americana",
        lessons: [
          { title: "Cobrindo bolos com pasta americana", duration: "38:00", free: false },
          { title: "Modelagem básica", duration: "42:30", free: false },
          { title: "Figuras e personagens", duration: "45:00", free: false },
          { title: "Acabamento profissional", duration: "30:15", free: false },
        ],
      },
      {
        title: "Módulo 4: Flores de Açúcar",
        lessons: [
          { title: "Rosas clássicas", duration: "48:00", free: false },
          { title: "Peônias realistas", duration: "52:30", free: false },
          { title: "Folhagens e complementos", duration: "35:45", free: false },
          { title: "Arranjos e composição", duration: "40:00", free: false },
        ],
      },
      {
        title: "Módulo 5: Técnicas Avançadas",
        lessons: [
          { title: "Bolos esculpidos", duration: "55:00", free: false },
          { title: "Efeitos especiais com aerógrafo", duration: "38:30", free: false },
          { title: "Decoração com chocolate", duration: "42:15", free: false },
          { title: "Tendências atuais", duration: "30:00", free: false },
        ],
      },
      {
        title: "Módulo 6: Profissionalização",
        lessons: [
          { title: "Precificação correta", duration: "28:00", free: false },
          { title: "Atendimento ao cliente", duration: "25:45", free: false },
          { title: "Fotografia de bolos", duration: "35:30", free: false },
          { title: "Construindo sua marca", duration: "32:00", free: false },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <ScarcityBanner
        spotsLeft={course.spotsLeft}
        endDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)}
        variant="banner"
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-background py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Video Preview */}
            <div className="relative">
              <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-warm-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-chocolate/40" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-warm-lg transition-transform hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </button>
                <Badge
                  variant="secondary"
                  className="absolute left-4 top-4"
                >
                  Aula de demonstração grátis
                </Badge>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant="level">{course.level}</Badge>
                  <Badge variant="new">Atualizado 2024</Badge>
                </div>
                <h1 className="font-display text-3xl font-bold md:text-4xl">
                  {course.title}
                </h1>
                <p className="mt-4 font-body text-lg text-muted-foreground">
                  {course.description}
                </p>
              </div>

              {/* Rating & Students */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i <= Math.floor(course.rating)
                            ? "fill-gold text-gold"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-body text-sm font-semibold">
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span className="font-body text-sm">
                    {course.students} alunos
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="font-body text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-body text-sm">
                    {course.lessons} aulas
                  </span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-display text-sm font-semibold">
                    {course.instructor.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>

              {/* Price & CTA */}
              <Card variant="highlight" className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-body text-sm text-muted-foreground line-through">
                      De R$ {course.originalPrice?.toFixed(2)}
                    </p>
                    <p className="font-display text-3xl font-bold text-primary">
                      R$ {course.price.toFixed(2)}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      ou 12x de R$ {(course.price / 12).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => setIsPurchaseOpen(true)}
                    >
                      Garantir minha vaga
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    <ScarcityBanner spotsLeft={course.spotsLeft} />
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                  {[
                    { icon: Shield, text: "Garantia 7 dias" },
                    { icon: Award, text: "Certificado incluso" },
                    { icon: Lock, text: "Pagamento seguro" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-success" />
                      <span className="font-body text-xs text-muted-foreground">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            O que está incluso
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-muted/50 p-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
                <span className="font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Conteúdo do curso
            </h2>
            <p className="font-body text-sm text-muted-foreground">
              {course.curriculum.reduce(
                (acc, mod) => acc + mod.lessons.length,
                0
              )}{" "}
              aulas • {course.duration}
            </p>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {course.curriculum.map((module, moduleIndex) => (
              <AccordionItem
                key={moduleIndex}
                value={`module-${moduleIndex}`}
                className="rounded-xl border bg-card"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                      {moduleIndex + 1}
                    </div>
                    <div className="text-left">
                      <p className="font-display font-semibold">
                        {module.title}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {module.lessons.length} aulas
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lessonIndex}
                        className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.free ? (
                            <Play className="h-4 w-4 text-primary" />
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className="font-body text-sm">
                            {lesson.title}
                          </span>
                          {lesson.free && (
                            <Badge variant="success" className="text-xs">
                              Grátis
                            </Badge>
                          )}
                        </div>
                        <span className="font-body text-xs text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Card variant="premium" className="p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Pronto para começar sua jornada?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              Junte-se a {course.students} alunos que já estão transformando
              suas vidas com este curso.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="mt-8"
              onClick={() => setIsPurchaseOpen(true)}
            >
              Garantir minha vaga por R$ {course.price}
            </Button>
            <p className="mt-4 font-body text-xs text-muted-foreground">
              Garantia de 7 dias • Certificado incluso • Acesso vitalício
            </p>
          </Card>
        </div>
      </section>

      <Footer />

      <PurchaseModal
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
        course={{
          title: course.title,
          price: course.price,
          originalPrice: course.originalPrice,
          image: course.image,
        }}
      />
    </div>
  );
};

export default CourseDetail;
