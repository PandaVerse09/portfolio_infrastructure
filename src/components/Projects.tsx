import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Cloud, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Portfolio Infrastructure",
    description:
      "Deployed a scalable static portfolio using AWS S3 and CloudFront with automated CI/CD via GitHub Actions. Configured HTTPS and caching for performance optimization.",
    tech: ["AWS", "S3", "CloudFront", "GitHub Actions"],
    icon: <Cloud className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/portfolio_infrastructure",
    live: "https://d3qvrbjs8hjfhe.cloudfront.net/",
  },
  {
    title: "Flask App Deployment (Dockerized)",
    description:
      "Containerized a Flask web application using Docker and deployed it on AWS EC2. Configured Nginx as a reverse proxy and ensured scalable, consistent deployment using containers.",
    tech: ["Docker", "AWS EC2", "Flask", "Nginx", "Linux"],
    icon: <Server className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/todo-flask-app",
    live: "https://utkarshapp.publicvm.com",
  },
  {
    title: "Recipe Finder App",
    description:
      "Developed a responsive recipe search application using HTML, CSS, and JavaScript with API integration. Enabled real-time data fetching and dynamic UI updates based on user input.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    icon: <Code className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/recipe-finder-app",
    live: "https://utkarsh-recipe-finder-app.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-card/30 relative border-y border-border/50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">#</span>deployed_projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects showcasing cloud infrastructure, CI/CD automation,
            and scalable deployment practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 flex flex-col h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-md"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-md"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
