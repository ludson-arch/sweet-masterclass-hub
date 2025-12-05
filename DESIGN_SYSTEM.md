# Design System — Doce Arte

## Paletas de Cores (3 Variantes)

### 1. Padaria Aconchegante (Padrão) 🍞
Tons quentes e acolhedores que evocam tradição e conforto.

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `--background` | 30 40% 98% | #FDFBF8 | Fundo principal |
| `--foreground` | 25 30% 15% | #2D2620 | Texto principal |
| `--primary` | 25 60% 45% | #B87333 | CTA, links, destaques |
| `--accent` | 15 70% 55% | #D96941 | Secundário, hover |
| `--gold` | 42 75% 55% | #D4A94A | Premium, badges |
| `--cream` | 38 45% 95% | #FAF6F0 | Backgrounds suaves |
| `--chocolate` | 25 45% 20% | #4A3728 | Texto forte, dark sections |
| `--peach` | 20 70% 85% | #F5D5C8 | Highlights suaves |

### 2. Minimal Premium 💎
Elegante e sofisticado com toques dourados.

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `--background` | 0 0% 99% | #FDFDFD | Fundo principal |
| `--foreground` | 0 0% 15% | #262626 | Texto principal |
| `--primary` | 0 0% 20% | #333333 | CTA, links |
| `--accent` | 42 60% 50% | #CC9933 | Dourado/Bronze |
| `--muted` | 0 0% 96% | #F5F5F5 | Backgrounds |
| `--border` | 0 0% 90% | #E6E6E6 | Bordas |

### 3. Moderna & Vibrante 🎨
Coral e roxo suave para uma estética contemporânea.

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `--background` | 40 30% 98% | #FDFCF9 | Fundo principal |
| `--foreground` | 250 20% 20% | #302840 | Texto principal |
| `--primary` | 15 85% 60% | #F06449 | Coral - CTA principal |
| `--accent` | 270 40% 65% | #9B7BB8 | Roxo suave |
| `--cream` | 40 40% 95% | #F9F5ED | Off-white |
| `--success` | 160 60% 45% | #2DB87D | Confirmações |

---

## Tipografia

### Fontes
- **Display (Títulos)**: Playfair Display — serif elegante
- **Body (Corpo)**: Inter — sans-serif legível

### Escala
```css
/* Títulos */
h1: text-4xl md:text-5xl lg:text-6xl (font-display font-bold)
h2: text-3xl md:text-4xl (font-display font-bold)
h3: text-xl md:text-2xl (font-display font-semibold)
h4: text-lg (font-display font-semibold)

/* Corpo */
body-lg: text-lg (font-body)
body: text-base (font-body)
body-sm: text-sm (font-body)
caption: text-xs (font-body)
```

---

## Espaçamento (Escala Modular)

```
4px  = p-1
8px  = p-2
16px = p-4
24px = p-6
32px = p-8
48px = p-12
64px = p-16
```

---

## Componentes Principais

### Button Variants
| Variant | Uso |
|---------|-----|
| `hero` | CTA principal com gradiente |
| `cta` | CTA secundário sólido |
| `cta-secondary` | CTA outline/ghost |
| `gold` | Premium/destaque especial |
| `premium` | Dark/exclusivo |
| `outline` | Secundário/alternativo |

### Badge Variants
| Variant | Uso |
|---------|-----|
| `scarcity` | Vagas limitadas (animado) |
| `live` | Aulas ao vivo |
| `gold` | Premium/destaque |
| `success` | Concluído/disponível |
| `level` | Nível do curso |
| `new` | Conteúdo novo |

### Card Variants
| Variant | Uso |
|---------|-----|
| `default` | Cards padrão |
| `interactive` | Cards clicáveis com hover |
| `elevated` | Cards com sombra maior |
| `premium` | Cards com borda dourada |
| `highlight` | Cards com destaque (glow) |

---

## Sombras

```css
--shadow-sm: 0 2px 8px -2px hsl(25 30% 15% / 0.08)
--shadow-md: 0 8px 24px -8px hsl(25 30% 15% / 0.12)
--shadow-lg: 0 16px 48px -12px hsl(25 30% 15% / 0.18)
--shadow-glow: 0 0 40px hsl(25 60% 45% / 0.25)
--shadow-gold: 0 8px 32px -8px hsl(42 75% 55% / 0.35)
```

---

## Animações

```css
/* Entrada */
animate-slide-up: slide + fade (0.6s)
animate-fade-in: fade (0.5s)
animate-scale-in: scale + fade (0.4s)

/* Contínuas */
animate-float: flutuação suave (6s loop)
animate-pulse-soft: pulse suave (3s loop)
animate-bounce-soft: bounce suave (2s loop)

/* Especiais */
animate-confetti: celebração (0.8s)
```

---

## Breakpoints (Mobile-First)

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1400px
```

---

## Acessibilidade (WCAG AA)

- ✅ Contraste mínimo 4.5:1 para texto
- ✅ Focus visível em todos elementos interativos
- ✅ Labels em todos os inputs
- ✅ ARIA labels em ícones/botões
- ✅ Navegação por teclado funcional
- ✅ Skip links (a implementar)

---

## Componentes Criados

1. **Header** — Navegação responsiva com menu mobile
2. **Footer** — Links, social, legal
3. **CourseCard** — Card de curso com badges, preço, CTA
4. **TestimonialCard** — Depoimento com rating, avatar
5. **FeatureCard** — Ícone + título + descrição
6. **StepCard** — Passo numerado
7. **ScarcityBanner** — Urgência (vagas/tempo)
8. **PurchaseModal** — Checkout single-screen
9. **Progress** — Barra de progresso

---

## Páginas Implementadas

1. **Landing Page (/)** — Hero, features, cursos, testimonials, FAQ
2. **Course Detail (/curso/:id)** — Detalhes, curriculum, CTA
3. **Dashboard (/dashboard)** — Visão geral do aluno
4. **Lesson (/dashboard/curso/:id/aula)** — Player, chat, materiais

---

## Integrações Necessárias

| Componente | Integração |
|------------|------------|
| `PurchaseModal` | Stripe/PIX API |
| `VideoPlayer` | YouTube embed / Vimeo / HLS |
| `Chat` | WebSocket / Firebase / Pusher |
| `Live Classes` | YouTube Live (unlisted) embed |
| `Auth` | Supabase Auth |
| `Database` | Supabase DB |
