

export default function AboutPage() {
  return(
    <main className="contentMargins mt-32">
      <h1 className="bigHeader">About Me</h1>
      <section className="grid grid-cols-2 gap-24">
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
          <figure className="max-w-[350px] h-auto">
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
      </section>
    </main>
  )
}
