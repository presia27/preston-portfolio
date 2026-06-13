'use client';

import { projects } from '../../data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured === true); // todo sort by id

  return (
    <div>
      {featuredProjects.map((project) => (
        <div key={project.id} className='flex gap-8 mb-6'>
          <div>
            {project.images.cardImage && project.images.cardImage !== '#' 
              ? <img src={"/cardimg/" + project.images.cardImage} alt={`Image featuring ${project.title}`} width="194" height="145" />
              : <div className='w-48.5 h-36.25 bg-accent-lighter border border-accent-darker rounded-4xl'></div>}
            
          </div>
          <div className='basis-[40%]'>
            <h3 className='font-semibold text-2xl'>{project.title}</h3>
            <h4 className='italic mb-2'>{project.role} | {project.association}</h4>
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
