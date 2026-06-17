import { FeaturedProjects } from "@/components/featuredProjects/FeaturedProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: 'Preston Sia - Home'
  }
}

export default function Home() {
  return (
    <main id="content" tabIndex={-1} className="contentMargins mt-32">
      <section className="flex flex-col sm:flex-row justify-between pb-20 gap-4">
        <div>
          <h1 className="bigHeader">Hi There!</h1>
          <p>
            I&apos;m Preston, a person from the Seattle/Tacoma area passionate about software, UI Design, and geospatial technologies.
            See my featured works below, or read more about me on my <a href="/about-me" className="link">about page</a>!
          </p>
        </div>

        <div
          className="border-t sm:border-t-0 sm:border-l border-accent-darker px-4 md:px-10 py-4 xl:mr-[20%] md:min-w-82.5"
        >
          <h2 className="font-bold sm:border-b border-accent-darker mb-1 sm:mb-0">Preston Sia</h2>
          <ul>
            <li className="mb-1 sm:mb-0">Email: <a href="mailto:pre.sia977@outlook.com" className="link">pre.sia977@outlook.com</a></li>
            <li className="mb-1 sm:mb-0">GitHub: <a href="https://github.com/presia27" className="link">presia27</a></li>
            <li className="mb-1 sm:mb-0">LinkedIn: <a href="https://www.linkedin.com/in/preston-sia" className="link">Preston Sia</a></li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="bigHeader">Featured</h2>
        <FeaturedProjects></FeaturedProjects>
      </section>
    </main>
  );
}
