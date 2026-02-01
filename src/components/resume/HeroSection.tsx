import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div 
          className="floating-shape animate-float bg-primary/30 w-96 h-96 -top-20 -left-20"
        />
        <div 
          className="floating-shape animate-float-delayed bg-accent/20 w-80 h-80 top-1/2 -right-20"
        />
        <div 
          className="floating-shape animate-pulse-glow bg-primary/20 w-64 h-64 bottom-20 left-1/3"
        />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Avatar placeholder */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8 w-32 h-32 rounded-full gradient-border glow-effect overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-4xl font-display font-bold gradient-text">МБ</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight"
          >
            <span className="text-foreground">Мария</span>
            <br />
            <span className="gradient-text">Базилевская</span>
          </motion.h1>

          {/* Title */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-body"
          >
            UI/UX Дизайнер интерфейсов
          </motion.p>

          {/* Contact badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <a 
              href="tel:+79151387946" 
              className="glass-card px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">+7 (915) 138-79-46</span>
            </a>
            <a 
              href="mailto:marycrystalart@yandex.ru" 
              className="glass-card px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform gradient-border"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">marycrystalart@yandex.ru</span>
            </a>
            <a 
              href="https://t.me/baselee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm">@baselee</span>
            </a>
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Москва, м. Преображенская площадь</span>
            </div>
          </motion.div>

          {/* Experience badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 glass-card px-6 py-3 glow-effect"
          >
            <div className="text-left">
              <p className="text-3xl font-display font-bold gradient-text">5+ лет</p>
              <p className="text-sm text-muted-foreground">опыта в дизайне</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-left">
              <p className="text-lg font-display font-semibold text-foreground">Полная занятость</p>
              <p className="text-sm text-muted-foreground">Готова к командировкам</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;