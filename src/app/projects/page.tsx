import { projects } from '@/content/content';
import { ProjectItem } from '@/components/project';

export default function Projects() {
  return (
    <section className="py-5 md:py-20 px-10 md:px-52 min-h-full">
      <h2 className="text-4xl md:text-6xl text-center mb-12 uppercase text-primary-cta">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
