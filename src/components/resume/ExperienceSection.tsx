import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import pariLogo from "@/assets/logos/pari-logo.webp";
import webmoneyLogo from "@/assets/logos/webmoney-logo.webp";

interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  responsibilities: string[];
  logo?: string;
  logoType?: "image" | "initials";
}

const experiences: Experience[] = [
  {
    company: "PARI",
    role: "Дизайнер интерфейсов",
    period: "Март 2024 — настоящее время",
    duration: "2 года",
    logo: pariLogo,
    logoType: "image",
    responsibilities: [
      "Разработка дизайна пользовательского интерфейса с учетом стандартов бренда",
      "Создание прототипов и тестирование юзабилити",
      "Разработка стайл-гайдов и библиотек компонентов",
      "Кросс-функциональная работа с PM и разработчиками",
    ],
  },
  {
    company: "WebMoney",
    role: "UX/UI дизайнер",
    period: "Апрель 2023 — Ноябрь 2023",
    duration: "8 месяцев",
    logo: webmoneyLogo,
    logoType: "image",
    responsibilities: [
      "Разработка UI с учетом стандартов бренда и UX",
      "Прототипирование и юзабилити-тестирование",
      "Создание UI-KIT и дизайн-систем",
      "Поддержка и обновление дизайна продукта",
    ],
  },
  {
    company: "Devs Marketing",
    role: "Веб-дизайнер",
    period: "Декабрь 2021 — Март 2023",
    duration: "1 год 4 месяца",
    logoType: "initials",
    responsibilities: [
      "Создание фирменного стиля и айдентики",
      "Проектирование лендингов и веб-сайтов",
      "Дизайн мобильных приложений",
      "Работа с полиграфией и печатной продукцией",
    ],
  },
];

const freelanceExperience = {
  period: "Июль 2020 — Ноябрь 2021",
  duration: "1 год 5 месяцев",
  items: [
    "Учебные проекты и хакатоны (TUI/FUN&SUN, SKOLKOVO)",
    "Сотрудничество с британской школой Heritage",
    "Электронные каталоги для XGATE Dental",
    "Иллюстрации для Biblioteka Aromatov",
    "Стажировка в студии panindesign",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const CompanyLogo = ({ exp }: { exp: Experience }) => {
  if (exp.logoType === "image" && exp.logo) {
    return (
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
        <img 
          src={exp.logo} 
          alt={`${exp.company} logo`} 
          className="w-12 h-12 object-contain"
        />
      </div>
    );
  }
  
  // DM initials logo for Devs Marketing
  return (
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
      <span className="text-xl font-display font-bold text-white">DM</span>
    </div>
  );
};

const ExperienceSection = () => {
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
            <span className="gradient-text">Опыт работы</span>
          </h2>
          <p className="text-muted-foreground text-lg">4+ лет в дизайне интерфейсов</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 timeline-dot hidden md:block" />

                <div className="bento-item group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <CompanyLogo exp={exp} />
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <span className="glass-card px-3 py-1 text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Freelance section - separate block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bento-item border-dashed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-muted-foreground">
                  Фриланс и стажировки
                </h3>
                <p className="text-sm text-muted-foreground/70">{freelanceExperience.period}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {freelanceExperience.items.map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 rounded-full text-sm bg-secondary text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;