import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    year: "2020",
    institution: "МГХПА им С.Г. Строганова",
    degree: "Графический дизайнер / преподаватель",
  },
];

const courses = [
  {
    year: "2022",
    institution: "Wanna be like",
    course: "Веб-дизайн",
  },
  {
    year: "2021",
    institution: "ГБОУ ДПО центр «Профессионал»",
    course: "Frontend разработка",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Образование и курсы</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-item"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Образование</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1.5" />
                  <span className="text-sm text-primary font-medium">{edu.year}</span>
                  <h4 className="text-lg font-display font-medium text-foreground mt-1">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-item"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold">Курсы</h3>
            </div>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1.5" />
                  <span className="text-sm text-accent font-medium">{course.year}</span>
                  <h4 className="text-lg font-display font-medium text-foreground mt-1">
                    {course.institution}
                  </h4>
                  <p className="text-muted-foreground">{course.course}</p>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground">
                Прошла курс по frontend-разработке, чтобы лучше понимать процесс создания сайтов и подготовки макетов для разработки.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;