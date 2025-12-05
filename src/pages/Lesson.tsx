import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize2,
  Settings,
  CheckCircle2,
  Circle,
  Download,
  MessageCircle,
  FileText,
  Clock,
  Send,
  ChevronLeft,
  ChevronRight,
  Radio,
} from "lucide-react";

import courseCakes from "@/assets/course-cakes.jpg";

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      user: "Chef Rafael",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      message: "Olá pessoal! Alguma dúvida sobre a aula de hoje?",
      time: "10:30",
      isInstructor: true,
    },
    {
      id: 2,
      user: "Ana Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
      message: "Chef, qual a melhor marca de pasta americana?",
      time: "10:32",
      isInstructor: false,
    },
    {
      id: 3,
      user: "Chef Rafael",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      message:
        "Ótima pergunta! Recomendo a Arcolor para iniciantes e a Confeitare para trabalhos mais elaborados.",
      time: "10:35",
      isInstructor: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const currentLesson = {
    id: "lesson-10",
    title: "Cobrindo bolos com pasta americana",
    duration: "38:00",
    module: "Módulo 3: Pasta Americana",
    videoUrl: courseCakes, // Placeholder - in real app, this would be video URL
  };

  const curriculum = [
    {
      title: "Módulo 3: Pasta Americana",
      lessons: [
        { id: "lesson-9", title: "Introdução à pasta americana", duration: "15:30", completed: true },
        { id: "lesson-10", title: "Cobrindo bolos com pasta americana", duration: "38:00", completed: false, current: true },
        { id: "lesson-11", title: "Modelagem básica", duration: "42:30", completed: false },
        { id: "lesson-12", title: "Figuras e personagens", duration: "45:00", completed: false },
      ],
    },
    {
      title: "Módulo 4: Flores de Açúcar",
      lessons: [
        { id: "lesson-13", title: "Rosas clássicas", duration: "48:00", completed: false },
        { id: "lesson-14", title: "Peônias realistas", duration: "52:30", completed: false },
        { id: "lesson-15", title: "Folhagens e complementos", duration: "35:45", completed: false },
      ],
    },
  ];

  const materials = [
    { title: "Ficha técnica: Pasta Americana", type: "PDF", size: "2.3 MB" },
    { title: "Checklist de materiais", type: "PDF", size: "890 KB" },
    { title: "Receita: Pasta americana caseira", type: "PDF", size: "1.5 MB" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        user: "Você",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
        message: newMessage,
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isInstructor: false,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/dashboard/curso/${courseId}`} className="hover:text-foreground">
            Decoração de Bolos
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{currentLesson.module}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Video Player */}
            <div className="relative overflow-hidden rounded-2xl bg-chocolate shadow-warm-lg">
              {/* Video area */}
              <div className="relative aspect-video">
                <img
                  src={currentLesson.videoUrl}
                  alt={currentLesson.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-chocolate/40">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-warm-lg transition-transform hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 fill-current" />
                    )}
                  </button>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-chocolate to-transparent p-4">
                {/* Progress bar */}
                <div className="mb-3">
                  <Progress value={35} className="h-1" />
                </div>

                <div className="flex items-center justify-between text-primary-foreground">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-gold">
                      <SkipBack className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-gold"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    <button className="hover:text-gold">
                      <SkipForward className="h-5 w-5" />
                    </button>
                    <span className="font-body text-sm">13:25 / 38:00</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="hover:text-gold">
                      <Volume2 className="h-5 w-5" />
                    </button>
                    <button className="hover:text-gold">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button className="hover:text-gold">
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Info */}
            <div>
              <Badge variant="secondary" className="mb-2">
                {currentLesson.module}
              </Badge>
              <h1 className="font-display text-2xl font-bold">
                {currentLesson.title}
              </h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{currentLesson.duration}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="materials" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Materiais
                </TabsTrigger>
                <TabsTrigger value="notes" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Notas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <ul className="divide-y divide-border">
                      {materials.map((material, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-body text-sm font-medium">
                                {material.title}
                              </p>
                              <p className="font-body text-xs text-muted-foreground">
                                {material.type} • {material.size}
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
              </TabsContent>

              <TabsContent value="notes" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <textarea
                      className="w-full h-32 resize-none rounded-lg border border-input bg-background p-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Faça suas anotações sobre esta aula..."
                    />
                    <Button variant="cta" size="sm" className="mt-3">
                      Salvar notas
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4" />
                Aula anterior
              </Button>
              <Button variant="cta">
                Próxima aula
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Progress */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Conteúdo do Curso</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px]">
                  {curriculum.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border-b border-border last:border-0">
                      <div className="bg-muted/50 px-4 py-2">
                        <p className="font-display text-sm font-semibold">
                          {module.title}
                        </p>
                      </div>
                      <ul>
                        {module.lessons.map((lesson) => (
                          <li key={lesson.id}>
                            <Link
                              to={`/dashboard/curso/${courseId}/aula/${lesson.id}`}
                              className={`flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50 ${
                                lesson.current ? "bg-primary/5" : ""
                              }`}
                            >
                              {lesson.completed ? (
                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
                              ) : lesson.current ? (
                                <Play className="h-5 w-5 flex-shrink-0 text-primary" />
                              ) : (
                                <Circle className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                              )}
                              <div className="min-w-0 flex-1">
                                <p
                                  className={`font-body text-sm truncate ${
                                    lesson.current
                                      ? "font-medium text-primary"
                                      : ""
                                  }`}
                                >
                                  {lesson.title}
                                </p>
                                <p className="font-body text-xs text-muted-foreground">
                                  {lesson.duration}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageCircle className="h-5 w-5" />
                  Chat do Curso
                  <Badge variant="success" className="ml-auto text-xs">
                    <span className="mr-1 h-2 w-2 rounded-full bg-current animate-pulse" />
                    Professor online
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[250px] px-4">
                  <div className="space-y-4 py-4">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="flex gap-3">
                        <img
                          src={msg.avatar}
                          alt={msg.user}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-body text-sm font-medium ${
                                msg.isInstructor ? "text-primary" : ""
                              }`}
                            >
                              {msg.user}
                            </span>
                            {msg.isInstructor && (
                              <Badge variant="gold" className="text-xs">
                                Professor
                              </Badge>
                            )}
                            <span className="font-body text-xs text-muted-foreground">
                              {msg.time}
                            </span>
                          </div>
                          <p className="mt-1 font-body text-sm text-muted-foreground">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <form
                  onSubmit={handleSendMessage}
                  className="flex gap-2 border-t border-border p-4"
                >
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" variant="cta" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson;
