import { motion } from "framer-motion";

const TIMELINE_DATA = [
  {
    year: "2023",
    title: "Started Programming",
    description:
      "Began learning Python and developed foundational problem-solving and programming skills.",
    tech: ["Python"],
  },
  {
    year: "2024",
    title: "Web Development Basics",
    description:
      "Learned HTML, CSS, and JavaScript. Built projects like a Recipe Finder app using REST APIs.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
  {
    year: "2025",
    title: "Backend Development",
    description:
      "Developed a Flask-based TODO application with routing, backend logic, and dynamic content handling.",
    tech: ["Python", "Flask"],
  },
  {
    year: "2026",
    title: "DevOps & Cloud Journey",
    description:
      "Deployed a portfolio using AWS S3 and CloudFront with GitHub Actions CI/CD. Currently learning Docker and server deployment.",
    tech: ["AWS", "S3", "CloudFront", "GitHub Actions", "CI/CD", "Nginx"],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>./execution_log
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center marker */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} w-full`}>
                  <div className="p-6 bg-card border border-border rounded-xl shadow-lg hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 group">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold mb-4 border border-primary/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
