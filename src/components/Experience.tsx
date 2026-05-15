import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer Intern",
    company: "i2k2 Networks (P) Limited",
    location: "Remote",
    duration: "Jan 2026 - April 2026",
    points: [
      "Automated deployment pipelines using GitHub Actions reducing release time by 40%.",
      "Provisioned and managed AWS S3 + CloudFront for static site hosting.",
      "Containerized services using Docker and orchestrated with Kubernetes.",
    ],
  },
  // add more entries here
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative border-t border-border/50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-mono text-foreground">
            <span className="text-primary mr-2">git log</span>experience
          </h2>

          <div className="relative border-l-2 border-border/50 pl-8 space-y-10 ml-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                <div className="bg-background border border-border rounded-xl p-6 shadow-md hover:border-primary/30 transition-colors relative overflow-hidden">
                  {/* Top gradient accent — same as Contact card */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-t-xl" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold font-mono text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-mono text-sm mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-muted-foreground font-mono text-xs">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-muted-foreground text-sm font-mono leading-relaxed"
                      >
                        <span className="text-primary mt-0.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
