import { motion } from "framer-motion";
import { Sparkles, BookOpen, Eye, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Академический рисунок",
    description: "Владею основами классического искусства",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Профессиональная литература",
    description: "Постоянно изучаю новые материалы",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Слежу за трендами",
    description: "В курсе актуальных тенденций дизайна",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Насмотренность",
    description: "Постоянно развиваю визуальный вкус",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Обо мне</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-item"
          >
            <p className="text-lg text-foreground leading-relaxed mb-6">
              С подросткового возраста знала, что буду заниматься дизайном. За 5+ лет в индустрии прошла путь от фриланса до работы в крупных компаниях.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Прошла курс по frontend-разработке, чтобы лучше понимать, как подготавливать макеты для разработчиков и знать все тонкости создания сайтов. Это помогает мне создавать реализуемые и продуманные интерфейсы.
            </p>

            {/* Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-lg font-display font-medium text-foreground italic">
                «Дизайн — это не только красиво, но и функционально»
              </p>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bento-item group text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-display font-medium text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;