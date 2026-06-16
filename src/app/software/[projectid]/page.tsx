import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import dayjs from "dayjs";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";

export async function generateMetadata({ params }: { params: Promise<{ projectid: string }> }): Promise<Metadata> {
  const { projectid } = await params;
  const project = projects.find((p) => p.id === Number(projectid))
  return {
    title: project?.title ?? 'Project',
  }
}

export default async function DetailsPage({ params }: { params: Promise<{ projectid: string }>}) {
  const { projectid } = await params; 

  if (!projectid) return;
  const projectFilter = projects.filter((project) => project.id === Number(projectid))
  if (projectFilter.length < 1) {
    notFound()
  }

  const projectData = projectFilter[0];
  
  return (
    <main id="content" tabIndex={-1} className="mt-32">
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
            <div>
              <div>Project Link:</div>
              <div>
                {projectData.projectPage !== null ? (
                  <a href={projectData.projectPage} className="link" target="_blank">
                    {projectData.projectPage} <ArrowSquareOutIcon />
                  </a>
                ) : <>Not Available</>}
              </div>
            </div>
            <div>
              <div>Live Demo:</div>
              <div>
                {projectData.liveSite !== null ? (
                  <a href={projectData.liveSite} className="link" target="_blank">
                    {projectData.liveSite} <ArrowSquareOutIcon />
                  </a>
                ): <>Not Available</>}
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
          <div className="contentMargins pt-8 pb-8 md:w-[70vw]">
            <h2 className="smallHeader">Contributions</h2>
            <ul className="bulletList">
              {projectData.contributions.map((contrib) => (
                <li key={contrib.length}>{contrib}</li>
              ))}
            </ul>
          </div>
        </section>

        { projectData.pageDetails !== undefined ? projectData.pageDetails.map((section) => (
          <section className="contentMargins mt-8 md:max-w-[60vw]" key={section.section}>
            <h2 className="smallHeader">{section.section}</h2>
            <h3 className="bigHeader2">{section.title}</h3>
            <p>
              {section.description}
            </p>

            <ul className="bulletList mt-2">
              { section.subcontent && section.subcontent.map((content) => (
                <li
                  key={content.content.length}
                  className={content.type === 'listpoint' ? 'list-item' : 'list-none'}
                >
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

        <section className="contentMargins mt-8  md:max-w-[60vw]">
          <h2 className="smallHeader">Contributors</h2>
          <ul className="bulletList">
            {projectData.contributors.map((contributor) => (
              <li key={contributor.name}>
                {
                  contributor.url 
                  ? <a href={contributor.url} className="link" target="_blank">{contributor.name}</a>
                  : <>{contributor.name}</>
                }
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
