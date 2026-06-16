import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Me'
}

export default function AboutPage() {
  return(
    <main id="content" tabIndex={-1} className="contentMargins mt-32">
      <section>
        <h1 className="bigHeader">About Me</h1>
        <div className="grid grid-cols-2 gap-24">
          <div>
            <p>
              My name is Preston, and I&apos;m a student at the
              University of Washington Tacoma with a background in
              Computer Science and Urban Studies. I enjoy building full-stack
              web applications with a focus on front-end and UI development.
              I&apos;m driven by designing and building interfaces to be
              intuitive and accessible to benefit our communities.
            </p><br />
            <p>
              I&apos;m also passionate about maps and GIS, with a particular interest
              in transportation. As someone studying Geographic Information Systems
              (GIS), I understand the power of using maps and data to reveal
              patterns in our communities and our environment, and I hope to use
              such analyses to empower well-informed decision making to allow our
              communities to thrive.
            </p><br />
            <p>
              Outside of these interests, I enjoy playing pickleball, hiking,
              cycling, photography, and exploring cities on public transit.
            </p>
          </div>
          <div>
            <figure className="max-w-87.5 h-auto">
              <img
                src="/psportrait_2026_crop.jpg"
                alt="Preston, standing at the bottom of a waterfall and rocky cliff at Little Mashel Falls near Eatonville"
                width="350"
                height="350"
                className="object-center"
              />
              <figcaption className="text-[14px] text-center italic">Preston at Little Mashel Falls</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="bigHeader2">Education</h2>
        <div className="mb-4">
          <div className="font-bold">University of Washington Tacoma</div>
          <div>Bachelor of Arts in Urban Studies - GIS and Spatial Planning</div>
          <div>Bachelor of Science in Computer Science and Systems</div>
          <div>*Expected Graduation June 2027</div>
        </div>
        <div className="mb-4">
          <div className="font-bold">Highline College</div>
          <div>Associates in Arts</div>
          <div>Graduated June 2023</div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="bigHeader2">Contact</h2>
        Connect with me using the following methods:
        <ul>
          <li>Email: <a href="mailto:pre.sia977@outlook.com" className="link">pre.sia977@outlook.com</a></li>
          <li>GitHub: <a href="https://github.com/presia27" className="link">presia27</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/preston-sia" className="link">Preston Sia</a></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="bigHeader2">Accessibility</h2>
        <p>
          It is essential to ensure that interfaces are accessible to all users in our communities, whether it&apos;s
          a mobile app or a street crossing. I am committed to ensuring that the content on this site meets accessibility standards
          to ensure that all users are able to access this site equitably and with dignity. That said, I am not perfect and
          still have a lot to learn when it comes to accessible design, and as a mostly able-bodied person, my perspective is
          limited. If you spot an accessibility issue on this site, please reach out to me
          at <a href="pre.sia977@outlook.com" className="link">pre.sia977@outlook.com</a> and I will work on a fix. Updates to
          this site may take time depending on my workload, so your patience is appreciated.
        </p>
      </section>
    </main>
  )
}
