'use client';

import { notFound, useParams } from "next/navigation";
import { projects } from "../../../data/projects";
import dayjs from "dayjs";

export default function DetailsPage() {
  const params = useParams();

  if (!params) return;
  //console.log(params.projectid);
  const projectFilter = projects.filter((project) => project.id === Number(params.projectid))
  if (projectFilter.length < 1) {
    notFound()
  }

  const projectData = projectFilter[0];
  
  return (
    <main className="mt-32">
      <article>
        <div className="contentMargins">
          <h1 className="bigHeader">{projectData.title}</h1>
          <p className="text-[20px] md:w-[60vw]">
            {projectData.longDescription}
          </p>
        </div>

        <section className="contentMargins mt-6">
          <div className="text-[18px] grid md:grid-cols-[356px_356px] gap-8">
            <div>
              <div>Role:</div>
              <div>{projectData.role}</div>
            </div>
            <div>
              <div>Organization:</div>
              <div>{projectData.association}</div>
            </div>
            <div>
              <div>Client:</div>
              <div>{projectData.client ?? "None"}</div>
            </div>
            <div>
              <div>Dates Active:</div>
              <div>
                {dayjs(projectData.startDate).format('MMMM YYYY')} - {
                  projectData.endDate === null
                  ? <>Present</>
                  : dayjs(projectData.endDate).format('MMMM YYYY')
                }
              </div>
            </div>
          </div>

          <div className='flex gap-1 flex-wrap items-start mt-8'>
            {projectData.stack.map((item) => (
              <div key={item} className='accentShadow bg-accent-main border border-accent-darker rounded-2xl px-4 py-1 text-[14px]'>{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          {/*images*/}
        </section>

        <section className="bg-accent-main mt-8">
          <div className="contentMargins pt-8 pb-8 w-[70vw]">
            <h2 className="smallHeader">Contributions</h2>
            <ul className="bulletList">
              {projectData.contributions.map((contrib) => (
                <li key={contrib.length}>{contrib}</li>
              ))}
            </ul>
          </div>
        </section>

        { projectData.pageDetails !== undefined ? projectData.pageDetails.map((section) => (
          <section className="contentMargins mt-8" key={section.section}>
            <h2 className="smallHeader">{section.section}</h2>
            <h3 className="bigHeader2">{section.title}</h3>
            <p>
              {section.description}
            </p>

            <ul className="bulletList mt-2">
              { section.subcontent && section.subcontent.map((content) => (
                <li key={content.content.length}>
                  {content.type === "listpoint" && (
                    <>
                      <span className="font-bold">{content.heading}: </span>
                      {content.content}
                    </>
                  )}
                  {content.type === "image" && (
                    <img src={content.content} alt={content.heading} />
                  )}
                </li>
              ))}
            </ul>
          </section>
        )) : <></> }
      </article>
    </main>
  );
}
