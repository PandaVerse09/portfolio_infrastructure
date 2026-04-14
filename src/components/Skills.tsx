import { motion } from "framer-motion";
import {
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiPython,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGnubash,
  SiGit,
  SiLinux,
  SiVim,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { Cloud, ArrowRightLeft } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS(EC2, S3, CloudFront", icon: FaAws },
      { name: "Nginx", icon: SiNginx },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD", icon: ArrowRightLeft },
    ],
  },
  {
    title: "Development & Backend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Tools & Environment",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "Bash", icon: SiGnubash },
      { name: "Vim", icon: SiVim },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">~</span>cat tools.txt
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="font-mono text-8xl font-black">{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-foreground font-mono">{category.title}</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={sIdx}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-background border border-border p-3 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                    >
                      <Icon className="text-muted-foreground group-hover:text-primary transition-colors text-xl" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
