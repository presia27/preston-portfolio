'use client';

import dayjs from 'dayjs';
/**
 * For displaying project information in depth as part of a list.
 */

import { ProjectDescription } from '../../data/projects';

interface IProjectDetailCard {
  project: ProjectDescription
}

export function ProjectDetailCard({project}: IProjectDetailCard) {
  return (
    <div key={project.id} className='flex flex-col md:flex-row gap-2 md:gap-8 mb-16 md:mb-8 min-h-36.25'>
      <div className='min-w-48.5'>
        {project.images.cardImage && project.images.cardImage !== '#' 
          ? <img
              src={"/cardimg/" + project.images.cardImage}
              alt={`Image featuring ${project.title}`}
              className='rounded-2xl border border-accent-darker'
              width="194"
              height="145"
            />
          : <div className='w-48.5 h-36.25 bg-accent-lighter border border-accent-darker rounded-2xl'></div>}
        
      </div>
      <div className='basis-[40%]'>
        <a href={`/software/${project.id}`} className='hover:underline' aria-labelledby={`projTitle${project.id}`}>
          <h2 className='font-semibold text-2xl underline md:no-underline' id={`projTitle${project.id}`}>{project.title}</h2>
          <div className='italic mb-2'>{project.role} | {project.association}</div>
          <p className='mt-1 mb-1'>{project.synopsis}</p>
        </a>
      </div>
      <div className='grid grid-rows-[2fr_1fr]'>
        <div className='flex gap-1 flex-wrap items-start'>
          {project.stack.map((item: string) => (
            <div key={item} className='accentShadow bg-accent-main border border-accent-darker rounded-2xl px-4 py-1 text-[14px]'>{item}</div>
          ))}
        </div>
        <div className='font-semibold italic'>
          {dayjs(project.startDate).format('MMMM YYYY')} - {
            project.endDate === null
            ? <>Present</>
            : dayjs(project.endDate).format('MMMM YYYY')
          }
        </div>
      </div>
    </div>
  )
}
