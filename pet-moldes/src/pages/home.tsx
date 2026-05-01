import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search } from "lucide-react";
import { 
  PawPrint, Scissors, Download, Heart, Check, Star, Shield, 
  Clock, FileText, Sparkles, ArrowRight, Printer, Gift, 
  Smartphone, Headphones, CheckCircle2, Lock, CreditCard
} from "lucide-react";

import seamstressPet from "@/assets/seamstress-pet.png";
import productMockup from "@/assets/product-mockup.png";
import moldeTecnico1 from "@/assets/molde-tecnico-1.png";
import moldeTecnico2 from "@/assets/molde-tecnico-2.png";
import moldeTecnico3 from "@/assets/molde-tecnico-3.png";
import moldeTecnico4 from "@/assets/molde-tecnico-4.png";
import moldeTecnico5 from "@/assets/molde-tecnico-5.png";
import moldeTecnico6 from "@/assets/molde-tecnico-6.png";
const avatarPhotos = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"as const} }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const offerRef = useRef<HTMLDivElement>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    setToday(`${day}/${month}/${year}`);
  }, []);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">

      {/* ANNOUNCEMENT BAR */}
      <style>{`
        @keyframes pulse-emoji {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(255,220,0,0)); }
          50% { transform: scale(1.25); filter: drop-shadow(0 0 6px rgba(255,220,0,0.7)); }
        }
        .announce-emoji { display: inline-block; animation: pulse-emoji 1.4s ease-in-out infinite; }
        .announce-bar:hover { background: hsl(135,45%,22%) !important; }

        @keyframes btn-pulse {
          0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(0,128,0,0.4); }
          50%  { transform: scale(1.04); box-shadow: 0 0 15px 5px rgba(0,128,0,0.2); }
          100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(0,128,0,0); }
        }
        .botao-oferta { animation: btn-pulse 1.8s ease-in-out infinite; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="announce-bar fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-colors duration-300"
        style={{ background: "hsl(135,45%,24%)" }}
      >
        <div
          className="w-full flex items-center justify-center gap-2 px-4 text-white text-xs sm:text-sm font-bold text-center"
          style={{ minHeight: "44px", paddingTop: "8px", paddingBottom: "8px" }}
        >
          <span className="announce-emoji text-base sm:text-lg">🔥</span>
          <span className="whitespace-nowrap">
            Oferta válida somente hoje —&nbsp;<span className="underline underline-offset-2">{today}</span>
          </span>
        </div>
      </motion.div>

      {/* spacer so content doesn't hide behind bar */}
      <div style={{ height: "44px" }} />

      {/* 1. HERO */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 opacity-40">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        
        <div className="flex flex-col items-center gap-12 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-6"
            >
              TRANSFORME SUA <span className="text-primary">COSTURA</span> EM <span className="text-primary">RENDA</span> COM <span className="text-primary">+ 100 MOLDES</span> DE ROUPAS PARA <span className="text-primary">PETS</span> PRONTOS PARA IMPRIMIR
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Comece <span className="text-primary font-semibold">hoje mesmo</span> a criar e vender roupas para pets, mesmo sem experiência.
            </motion.p>

            <motion.div variants={fadeInUp} className="w-full mt-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-10 text-center">
                📦 O QUE VOCÊ VAI RECEBER?
              </h2>

              <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                <ul className="space-y-5 text-left">
                  {[
                    { text: "+100 moldes profissionais em PDF (prontos para imprimir)", fileIcon: true },
                    { text: "Modelos para cães, gatos e até porquinhos-da-índia." },
                    { text: "Moldes testados, organizados por categorias e tamanhos." },
                    { text: "Acesso Imediato e Vitalício." },
                    { text: "Atualizações Futuras Grátis." },
                    { text: "Instruções simples de uso + bônus exclusivos para facilitar a costura e as vendas." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.fileIcon
                        ? <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        : <span className="text-xl leading-tight shrink-0" aria-hidden>✅</span>
                      }
                      <span className="text-foreground/90 text-base leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square bg-white">
                  <img
                    src={productMockup}
                    alt="Capa do kit +100 Moldes de Roupas para Pets com cachorro e gato vestidos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* 2.5. PARA QUEM É ESTE PRODUTO */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground inline-flex items-center gap-3 justify-center flex-wrap">
              🎯 PARA QUEM É ESTE PRODUTO?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={seamstressPet}
                alt="Costureira sorrindo com cachorrinho ao lado costurando roupas para pets"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5 text-left">
              {[
                <span>Costureiras e artesãs que querem <strong className="text-primary">ganhar dinheiro com roupas para pets</strong>.</span>,
                <span>Donas de pets que sabem costurar e buscam <strong className="text-primary">economia</strong>.</span>,
                <span>Quem quer iniciar um <strong className="text-primary">pequeno negócio</strong> com baixo investimento.</span>,
                <span>Pessoas que querem <strong className="text-primary">moldes prontos</strong>, variados e com qualidade.</span>,
                <span>Quem está cansada de moldes mal feitos e quer <strong className="text-primary">resultado de verdade</strong>.</span>
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-foreground/90 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto text-center">
            <p className="text-foreground font-bold uppercase text-sm sm:text-base leading-relaxed tracking-wide">
              Mesmo que você nunca tenha usado moldes digitais, este material é fácil de entender e aplicar!
            </p>
          </div>
        </div>
      </section>

      {/* 2.6. POR DENTRO DO MATERIAL */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground inline-flex items-center justify-center gap-3 flex-wrap">
              <Search className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              POR DENTRO DO MATERIAL
            </h2>
          </motion.div>

          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 2500, stopOnMouseEnter: false, stopOnInteraction: false, stopOnFocusIn: false })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {[
                { img: moldeTecnico1, alt: "Molde técnico de costura para roupa pet" },
                { img: moldeTecnico2, alt: "Peças de molde de costura para pet" },
                { img: moldeTecnico3, alt: "Molde de moletom para cachorro" },
                { img: moldeTecnico4, alt: "Peças de molde recortadas para vestido pet" },
                { img: moldeTecnico5, alt: "Croqui técnico de costura com medidas" },
                { img: moldeTecnico6, alt: "Molde de roupinha para gato com tecidos" }
              ].map((slide, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-white"
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-white/90 border-primary/20 text-primary hover:bg-white" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-white/90 border-primary/20 text-primary hover:bg-white" />
          </Carousel>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 sm:mt-12 text-center text-base sm:text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed"
          >
            Você não vai receber só moldes — vai receber uma <strong className="font-bold text-primary">estratégia completa</strong> para costurar e lucrar com roupas pet, sem complicação!
          </motion.p>
        </div>
      </section>

      {/* 3. BÔNUS EXCLUSIVOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-foreground mb-4 uppercase tracking-tight flex items-center justify-center gap-3">
            <Gift className="w-10 h-10 text-primary shrink-0" />
            BÔNUS EXCLUSIVOS PARA VOCÊ!
          </h2>
          <p className="text-base font-bold uppercase tracking-widest text-foreground/80 mb-6 leading-snug">
            ALÉM DOS MOLDES COMPLETOS<br />VAI RECEBER TAMBÉM MAIS
          </p>
          <p className="text-2xl md:text-4xl font-serif font-bold flex items-center justify-center gap-2 whitespace-nowrap">
            <img src="/star-face-emoji.png" alt="" aria-hidden="true" className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
            <span className="text-primary">10 Bônus</span>
            <span className="text-foreground">Exclusivos</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { label: "BÔNUS 1:", name: "Guia Rápido de Medidas para Pets", desc: "Tabela completa de medidas por raça e porte para você acertar no tamanho de cada peça sem erro." },
            { label: "BÔNUS 2:", name: "Planner de Produção e Organização", desc: "Planeje sua semana de costura, controle encomendas e nunca mais perca prazo de entrega." },
            { label: "BÔNUS 3:", name: "Sugestões de Tecidos e Acabamentos Ideais", desc: "Descubra quais tecidos e acabamentos combinam com cada tipo de peça para um resultado profissional." },
            { label: "BÔNUS 4:", name: "Guia de Precificação com Lucro Inteligente", desc: "Aprenda a calcular o preço certo de cada peça para cobrir custos e garantir lucro de verdade." },
            { label: "BÔNUS 5:", name: "Ideias de Personalização Criativa", desc: "Inspirações para customizar as peças com bordados, apliques e detalhes que encantam os tutores." },
            { label: "BÔNUS 6:", name: "Mini-Coleções Temáticas para o Ano Todo", desc: "Sugestões de coleções sazonais para datas comemorativas, mantendo seu catálogo sempre fresco e vendendo o ano todo." },
            { label: "BÔNUS 7:", name: "Dicas de Fotos e Vendas no Instagram", desc: "Como fotografar suas peças de forma atraente e estratégias simples para vender mais pelo Instagram." },
            { label: "BÔNUS 8:", name: "Manual do Tamanho Perfeito Para Seu Pet", desc: "Guia completo para tirar medidas com precisão de cães e gatos de qualquer porte, evitando erros e retrabalho nas peças." },
            { label: "BÔNUS 9:", name: "Manual da Costura Pet", desc: "Tudo o que você precisa saber sobre técnicas, pontos e acabamentos específicos para confeccionar roupinhas de pet com qualidade profissional." },
            { label: "BÔNUS 10:", name: "Guia Visual de Costura Pet Passo a Passo", desc: "Ilustrações e instruções visuais detalhadas que guiam cada etapa da costura, ideal para iniciantes e quem aprende melhor com imagens." },
          ].map((bonus, i) => (
            <Card key={i} className="border border-gray-200 bg-gray-50 shadow-none hover:shadow-sm transition-all rounded-2xl overflow-hidden">
              <CardContent className="p-5">
                <p className="font-bold text-base mb-2 text-left leading-snug">
                  <Gift className="inline w-5 h-5 text-primary mr-1.5 align-text-bottom shrink-0" />
                  <span className="text-primary">{bonus.label}</span>{" "}
                  <span className="text-foreground">{bonus.name}</span>
                </p>
                <p className="text-gray-500 text-sm leading-relaxed text-left">{bonus.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </section>

      {/* 4. DEPOIMENTOS */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Quem comprou, <span className="text-primary">aprova e recomenda</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que nossas clientes estão falando sobre a qualidade dos moldes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                name: "Mariana S.",
                city: "Belo Horizonte/MG",
                avatar: "/avatars/avatar-1.jpg",
                text: "Menina eu fiz o primeiro e já vendi 😍 não sabia que era tão simples! No primeiro mês vendi 15 peças pro pet shop aqui do bairro. Esse kit mudou minha vida sério."
              },
              {
                name: "Juliana R.",
                city: "Curitiba/PR",
                avatar: "/avatars/avatar-2.jpg",
                text: "Achei que não ia conseguir porque sou iniciante... mas é MUITO fácil sério. Imprimi, cortei e o vestidinho da minha shih-tzu ficou perfeito! As medidas são claras demais 🐾"
              },
              {
                name: "Patrícia L.",
                city: "Recife/PE",
                avatar: "/avatars/avatar-3.jpg",
                text: "Gente isso aqui vale MUITO mais que 10 reais, comprei com medo e me arrependi de ter demorado tanto. Só os bônus já valem umas 10 vezes o preço. Corre enquanto tá barato assim!!"
              },
              {
                name: "Camila A.",
                city: "São Paulo/SP",
                avatar: "/avatars/avatar-4.jpg",
                text: "Minha renda extra oficial haha 😂 trabalho fora a semana toda mas no fds costuro com esses moldes e vendo no insta. Já tenho clientes fixas. Em 3 dias já fiz minhas primeiras vendas!"
              }
            ].map((test, i) => (
              <Card key={i} className="border-none shadow-sm bg-white rounded-[2rem]">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="flex justify-center text-amber-400 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed text-lg">"{test.text}"</p>
                  <div className="flex flex-col items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={test.avatar} />
                      <AvatarFallback>{test.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{test.name}</p>
                      <p className="text-sm text-muted-foreground">{test.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Micro-prova abaixo dos depoimentos */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-foreground/70">
            <span className="flex items-center gap-1.5"><span className="text-primary text-lg">★</span> +3.247 clientes satisfeitas</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><span className="text-primary text-lg">↓</span> Mais de 1.000 downloads este mês</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><span className="text-primary text-lg">✓</span> 97% recomendam</span>
          </div>

          {/* WhatsApp-style provas */}
          <div className="mt-16 max-w-lg mx-auto">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">💬 O que estão falando agora</p>
            <div className="space-y-3">
              {[
                { name: "Ana P.", msg: "Ainda tá por 10 reais?? corre meninas 😱", time: "agora mesmo", photo: avatarPhotos[0] },
                { name: "Fernanda L.", msg: "Acabei de comprar agora 😍 mal posso esperar pra começar!", time: "há 2 min", photo: avatarPhotos[1] },
                { name: "Renata M.", msg: "Fiz a primeira roupinha ontem e já recebi encomenda hoje haha", time: "há 8 min", photo: avatarPhotos[2] },
                { name: "Silvia C.", msg: "Gente o guia de medidas sozinho já vale tudo isso 🙌", time: "há 15 min", photo: avatarPhotos[3] },
              ].map((msg, i) => (
                <div key={i} className="flex items-end gap-2">
                  <img src={msg.photo} alt={msg.name} className="w-8 h-8 rounded-full object-cover shrink-0 border border-primary/20" />
                  <div className="bg-[#dcf8c6] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-xs shadow-sm">
                    <p className="text-xs font-bold text-primary mb-0.5">{msg.name}</p>
                    <p className="text-sm text-foreground/90 leading-snug">{msg.msg}</p>
                    <p className="text-[10px] text-foreground/40 text-right mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. OFERTA */}
      <section ref={offerRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden relative">
          {/* Top banner */}
          <div className="bg-primary py-3 px-4 text-center">
            <p className="text-primary-foreground font-medium text-sm flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Oferta especial por <strong>tempo limitado</strong>
            </p>
          </div>
          
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
              
              {/* Resumo */}
              <div className="space-y-6 w-full text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground">O que você leva hoje:</h3>
                
                <ul className="space-y-3 inline-flex flex-col items-start mx-auto w-full text-left list-none">
                  {[
                    { text: "+ 100 MOLDES DE ROUPAS PARA PETS", bold: true },
                    { text: "Guia Rápido de Medidas para Pets" },
                    { text: "Planner de Produção e Organização" },
                    { text: "Sugestões de Tecidos e Acabamentos Ideais" },
                    { text: "Guia de Precificação com Lucro Inteligente" },
                    { text: "Ideias de Personalização Criativa" },
                    { text: "Mini-Coleções Temáticas para o Ano Todo" },
                    { text: "Dicas de Fotos e Vendas no Instagram" },
                    { text: "Manual do Tamanho Perfeito Para Seu Pet" },
                    { text: "Manual da Costura Pet" },
                    { text: "Guia Visual de Costura Pet Passo a Passo" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-[18px] h-[18px] text-primary shrink-0 mt-[3px]" />
                      <span className={item.bold ? "font-bold text-base text-foreground leading-snug" : "font-normal text-sm text-foreground/90 leading-snug"}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preço e CTA */}
              <div className="bg-secondary/40 rounded-3xl p-4 sm:p-8 text-center border border-border/60 w-full">
                <p className="text-xs text-primary font-semibold mb-3 flex items-center justify-center gap-1">
                  <span>↓</span> Mais de 1.000 downloads nas últimas semanas
                </p>
                <p className="text-muted-foreground font-medium mb-2">Valor original: <span className="line-through">R$ 97,00</span></p>
                <div className="flex items-end justify-center gap-1 mb-8">
                  <span className="text-2xl font-bold text-foreground mb-1">R$</span>
                  <span className="text-6xl font-black text-primary leading-none tracking-tighter">10</span>
                  <span className="text-2xl font-bold text-foreground mb-1">,00</span>
                </div>

                <Button className="botao-oferta w-full h-14 sm:h-16 text-sm sm:text-lg font-bold rounded-2xl mb-3 uppercase tracking-wide px-4">
                  SIM, QUERO GARANTIR A OFERTA
                </Button>

                <p className="text-xs text-primary font-semibold text-center mb-4">
                  ★ +3.247 clientes satisfeitas com esta oferta
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4" /> Compra segura
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4" /> Acesso imediato
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4" /> Pix ou Cartão
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. GARANTIA */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 bg-white p-8 rounded-[2rem] shadow-sm border border-border">
          <div className="bg-primary/10 p-5 rounded-full">
            <div className="relative flex items-center justify-center w-12 h-12">
              <Shield className="w-12 h-12 text-primary" />
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-primary" strokeWidth={3} />
              </motion.div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-primary font-semibold mb-1">✓ 97% das clientes recomendam</p>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2"><span className="text-primary">Risco Zero:</span> Garantia de <span className="text-primary">7 Dias</span></h3>
            <p className="text-muted-foreground">
              Garantia incondicional de 7 dias. Se você abrir o material e achar que não é para você, devolvemos <span className="text-primary font-semibold">100% do seu dinheiro</span>. Sem perguntas, sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            {
              q: "Preciso saber costurar?",
              a: "É recomendado ter noções básicas de costura reta para montar as peças. Junto com os moldes, enviamos um manual para iniciantes que ajuda muito nos primeiros passos."
            },
            {
              q: "Como recebo o material?",
              a: "Logo após a confirmação do pagamento, você receberá um e-mail com o link para acessar e baixar todos os arquivos em PDF."
            },
            {
              q: "Funciona no celular?",
              a: "Sim! Você pode acessar e baixar os materiais pelo celular. Porém, para utilizar os moldes, você precisará imprimi-los em tamanho A4."
            },
            {
              q: "Posso imprimir quantas vezes quiser?",
              a: "Sim, o material é seu para sempre. Você faz o download dos PDFs e pode imprimir as numerações que precisar, quantas vezes quiser."
            },
            {
              q: "Tem suporte?",
              a: "Sim! Temos uma equipe pronta para tirar suas dúvidas por e-mail, além do grupo VIP no WhatsApp exclusivo para alunas."
            },
            {
              q: "Como posso pagar?",
              a: "Aceitamos Pix, que tem liberação imediata do acesso, e todos os principais cartões de crédito."
            },
            {
              q: "E se eu não gostar?",
              a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, basta mandar um e-mail e devolvemos 100% do seu dinheiro."
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="botao-oferta h-14 px-10 rounded-2xl text-lg"
            onClick={scrollToOffer}
          >
            Quero garantir meus moldes
          </Button>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2 text-primary-foreground font-serif font-bold text-xl">
            <PawPrint className="w-6 h-6 text-primary" />
            <span>PetMoldes</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-background transition-colors">Política de privacidade</a>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              suporte@petmoldes.com.br
            </span>
          </div>
        </div>
        
        <Separator className="bg-background/10 my-8 max-w-7xl mx-auto" />
        
        <div className="text-center text-xs text-background/40 max-w-4xl mx-auto leading-relaxed">
          <p className="mb-2">© {new Date().getFullYear()} PetMoldes. Todos os direitos reservados.</p>
          <p>
            Este é um produto digital. Você não receberá nenhum material impresso em sua casa. 
            O acesso ao conteúdo será enviado por e-mail logo após a confirmação do pagamento.
            Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
}