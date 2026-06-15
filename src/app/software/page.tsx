import { ProjectDetailCard } from '@/components/projectDetailCard/ProjectDetailCard';
import { projects } from '../../data/projects';

function ProjectListLoader() {
  return(
    <div>
      {projects.map((project) => (
        <ProjectDetailCard project={project} key={project.id}></ProjectDetailCard>
      ))}
    </div>
  )
}

export default function SoftwarePage() {
  return (
    <main id="content" tabIndex={-1} className="contentMargins mt-32">
      <h1 className="bigHeader">Software &amp; Design Portfolio</h1>
      <section>
        <ProjectListLoader></ProjectListLoader>
      </section>
    </main>
  );
}
