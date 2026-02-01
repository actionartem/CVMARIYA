import { motion } from "framer-motion";

const designSkills = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
  "Cinema 4D",
  "Tilda",
];

const uxSkills = [
  "UI Design",
  "UX Design",
  "Прототипирование",
  "Юзабилити-тестирование",
  "Дизайн-системы",
  "Веб-дизайн",
];

const devSkills = ["HTML", "CSS", "Frontend разработка"];

const languages = [
  { name: "Русский", level: "Родной" },
  { name: "Английский", level: "B1 — Средний" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const SkillsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Навыки</span>
          </h2>
          <p className="text-muted-foreground text-lg">Инструменты и технологии</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Design Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-item"
          >
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Дизайн-инструменты
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {designSkills.map((skill) => (
                <motion.span key={skill} variants={tagVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* UX Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-item"
          >
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              UI/UX Дизайн
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {uxSkills.map((skill) => (
                <motion.span key={skill} variants={tagVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Dev Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-item"
          >
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Разработка
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {devSkills.map((skill) => (
                <motion.span key={skill} variants={tagVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-item md:col-span-2 lg:col-span-3"
          >
            <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Языки
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card px-4 py-3 flex items-center gap-3"
                >
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;