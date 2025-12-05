import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Clock,
  BookOpen,
  Calendar,
  Award,
  MessageCircle,
  Download,
  ChevronRight,
  Radio,
} from "lucide-react";

import courseCakes from "@/assets/course-cakes.jpg";
import courseChocolate from "@/assets/course-chocolate.jpg";

const Dashboard = () => {
  const user = {
    name: "Maria",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  };

  const enrolledCourses = [
    {
      id: "decoracao-bolos",
      title: "Decoração de Bolos Profissional",
      image: courseCakes,
      progress: 65,
      currentLesson: "Módulo 3: Pasta Americana",
      totalLessons: 24,
      completedLessons: 16,
      nextLiveClass: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: "chocolates-artesanais",
      title: "Chocolates Artesanais",
      image: courseChocolate,
      progress: 20,
      currentLesson: "Módulo 1: Temperagem",
      totalLessons: 18,
      completedLessons: 4,
      nextLiveClass: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    },
  ];

  const upcomingLiveClasses = [
    {
      title: "Tirando dúvidas sobre flores de açúcar",
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      course: "Decoração de Bolos",
      instructor: "Chef Rafael",
    },
    {
      title: "Demonstração: Bombons recheados",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      course: "Chocolates Artesanais",
      instructor: "Chef Rafael",
    },
  ];

  const recentMaterials = [
    { title: "Receita: Bolo Red Velvet", type: "PDF", course: "Decoração de Bolos" },
    { title: "Ficha Técnica: Ganache", type: "PDF", course: "Chocolates Artesanais" },
    { title: "Guia: Temperaturas do Chocolate", type: "PDF", course: "Chocolates Artesanais" },
  ];

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">
              Olá, {user.name}! 👋
            </h1>
            <p className="font-body text-muted-foreground">
              Continue de onde parou e evolua na confeitaria
            </p>
          </div>
          <Link to="/">
            <Button variant="outline">Ver mais cursos</Button>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Enrolled Courses */}
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold">
                Meus Cursos
              </h2>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} variant="default" className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative h-48 w-full sm:h-auto sm:w-48 flex-shrink-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent sm:bg-gradient-to-r" />
                      </div>
                      <CardContent className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <h3 className="font-display text-lg font-semibold">
                            {course.title}
                          </h3>
                          <p className="mt-1 font-body text-sm text-muted-foreground">
                            {course.currentLesson}
                          </p>

                          {/* Progress */}
                          <div className="mt-4">
                            <div className="mb-2 flex items-center justify-between text-sm">
                              <span className="font-body text-muted-foreground">
                                Progresso
                              </span>
                              <span className="font-body font-medium">
                                {course.progress}%
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <p className="mt-1 font-body text-xs text-muted-foreground">
                              {course.completedLessons} de {course.totalLessons} aulas
                              concluídas
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <Link to={`/dashboard/curso/${course.id}/aula`}>
                            <Button variant="cta" size="sm">
                              <Play className="h-4 w-4" />
                              Continuar
                            </Button>
                          </Link>
                          <Link to={`/dashboard/curso/${course.id}`}>
                            <Button variant="outline" size="sm">
                              Ver curso
                            </Button>
                          </Link>
                          {course.nextLiveClass && (
                            <Badge variant="live" className="gap-1">
                              <Radio className="h-3 w-3" />
                              Live {formatDate(course.nextLiveClass)}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Materials */}
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold">
                Materiais Recentes
              </h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {recentMaterials.map((material, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Download className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-body text-sm font-medium">
                              {material.title}
                            </p>
                            <p className="font-body text-xs text-muted-foreground">
                              {material.course}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">
                  20
                </div>
                <p className="font-body text-xs text-muted-foreground">
                  Aulas concluídas
                </p>
              </Card>
              <Card className="p-4 text-center">
                <div className="font-display text-2xl font-bold text-gold">
                  12h
                </div>
                <p className="font-body text-xs text-muted-foreground">
                  Tempo de estudo
                </p>
              </Card>
            </div>

            {/* Upcoming Live Classes */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Radio className="h-5 w-5 text-destructive" />
                  Próximas Lives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingLiveClasses.map((liveClass, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-muted/50 p-3"
                  >
                    <p className="font-body text-sm font-medium">
                      {liveClass.title}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(liveClass.date)}</span>
                    </div>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {liveClass.course}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  Ver todas as lives
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { icon: MessageCircle, label: "Chat do curso", href: "#" },
                  { icon: Download, label: "Materiais PDF", href: "#" },
                  { icon: Award, label: "Certificados", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-body text-sm">{label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
