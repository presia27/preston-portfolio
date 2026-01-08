import { FeaturedProjects } from "@/components/featuredProjects/FeaturedProjects";

export default function Home() {
  return (
    <main className="contentMargins mt-16">
      <section>
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="bigHeader">Welcome!</h1>
            <p>
              I&apos;m Preston, a software developer in the Seattle area.
            </p>
          </div>

          <div className="border-l border-accent-darker px-10 py-4 mr-[25%]">
            <h2 className="font-bold border-b border-accent-darker">Preston Sia</h2>
            <ul>
              <li>Email: <a href="mailto:pre.sia977@outlook.com" className="text-cyan-900 underline">pre.sia977@outlook.com</a></li>
              <li>GitHub: <a href="https://github.com/presia27" className="text-cyan-900 underline">presia27</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/preston-sia" className="text-cyan-900 underline">Preston Sia</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="bigHeader">Featured</h2>
        <FeaturedProjects></FeaturedProjects>
      </section>
    </main>
  );
}
