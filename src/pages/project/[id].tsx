import { ProjectDetails } from '@/components/projects/project-details';
import { ProjectSections } from '@/components/projects/project-sections';
import { projects } from '@/lib/data';
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project in the projects array based on the ID
  const project = projects.find((p) => p.id === id);

  return (
    <div>
      {/* Display project details here */}
      {project && (
        <>
          <ProjectDetails project={project} />
        </>
      )}
      {project && (
        <>
          <ProjectSections sections={project.sections} />
        </>
      )}
    </div>
  );
};

export default ProjectPage;
