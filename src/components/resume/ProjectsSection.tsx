import { motion } from "framer-motion";
import { Palette, Smartphone, Globe, Award } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Маркетплейс «АртХаус»",
    description: "Адаптивный сайт для продажи картин. Исследование, интервью, CJM, прототип, UI-KIT.",
    icon: <Palette className="w-6 h-6" />,
    tags: ["UX Research", "UI Design", "E-commerce"],
  },
  {
    title: "Water Balance App",
    description: "Приложение для iOS отслеживания водного баланса. Анимация в Principle, iOS гайдлайны.",
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["iOS", "Mobile App", "Animation"],
  },
  {
    title: "Хакатон TUI/FUN&SUN",
    description: "Помощник для онлайн-бронирования. 44 экрана, 10 глубинных интервью, CJM.",
    icon: <Award className="w-6 h-6" />,
    tags: ["Hackathon", "UX Research", "Prototyping"],
  },
  {
    title: "SKOLKOVO Стартап Академия",
    description: "Образовательная платформа для поиска репетиторов. Создана за 3 дня с нуля.",
    icon: <Award className="w-6 h-6" />,
    tags: ["Hackathon", "Product Design", "EdTech"],
  },
  {
    title: "Ветклиника «Кот+Бегемот»",
    description: "Адаптивный лендинг с целевым действием. Верстка в Tilda Zero Block.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Landing Page", "Tilda", "Conversion"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const ProjectsSection = () => {
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
            <span className="gradient-text">Проекты</span>
          </h2>
          <p className="text-muted-foreground text-lg">Избранные работы и кейсы</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bento-item group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;