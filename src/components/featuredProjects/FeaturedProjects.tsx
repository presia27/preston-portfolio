'use client';

import { projects } from '../../data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured === true); // todo sort by id

  return (
    <div>
      {featuredProjects.map((project) => (
        
          <div key={project.id} className='flex flex-col md:flex-row gap-2 md:gap-8 mb-12 md:mb-6 min-h-36.25'>
            <div className='min-w-48.5'>
              {project.images.cardImage && project.images.cardImage !== '#' 
              ? <img
                  src={"/cardimg/" + project.images.cardImage}
                  alt={`Screenshot of ${project.title}`}
                  className='rounded-2xl border border-accent-darker'
                  width="194"
                  height="145"
                />
              : <div className='w-48.5 h-36.25 bg-accent-lighter border border-accent-darker rounded-2xl'></div>}
              
            </div>
            <div className='basis-[40%]'>
              <a href={`/software/${project.id}`} className='hover:underline' aria-labelledby={`projTitle${project.id}`}>
                <h3 className='font-semibold text-2xl underline md:no-underline' id={`projTitle${project.id}`}>{project.title}</h3>
                <div className='italic mb-2'>{project.role} | {project.association}</div>
                <p className='mt-1 mb-1'>{project.synopsis}</p>
              </a>
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
