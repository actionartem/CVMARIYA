import { motion } from "framer-motion";
import { Mail, Phone, Send, ExternalLink, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-item glow-effect text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Давайте работать <span className="gradient-text">вместе</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Открыта к новым проектам и интересным предложениям
          </p>

          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:marycrystalart@yandex.ru"
              className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Почта</p>
                <p className="text-foreground font-medium">marycrystalart@yandex.ru</p>
              </div>
            </a>

            <a
              href="tel:+79151387946"
              className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="text-foreground font-medium">+7 (915) 138-79-46</p>
              </div>
            </a>

            <a
              href="https://t.me/baselee"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Send className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Telegram</p>
                <p className="text-foreground font-medium">@baselee</p>
              </div>
            </a>

            <a
              href="https://www.behance.net/kuzihkac015"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Behance</p>
                <p className="text-foreground font-medium">Портфолио</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Москва, Россия • Готова к командировкам</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground/50 mt-12"
        >
          © 2026 Мария Базилевская • UI/UX Дизайнер
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;