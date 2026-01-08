'use client';

import { projects } from '../../data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured === true); // todo sort by id

  return (
    <div>
      {featuredProjects.map((project) => (
        <div key={project.id} className='flex gap-2'>
          <div>
            <img src={project.images.cardImage} alt={`Image featuring ${project.title}`} width="194" />
          </div>
          <div className='basis-[40%]'>
            <h3 className='font-semibold text-2xl'>{project.title}</h3>
            <h4 className='italic'>{project.role} | {project.association}</h4>
            <p className='mt-1 mb-1'>{project.synopsis}</p>
          </div>
          <div className='flex gap-1 flex-wrap items-start'>
            {project.stack.map((item) => (
              <div key={item} className='accentShadow bg-accent-main border border-accent-darker rounded-2xl px-4 py-1 text-[14px]'>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
