import Image from "next/image";
import HeadshotImg from "@public/legacy-portfolio/SeanOrmiston_headshot_0817.jpg";
import SquirrelTalesImg from "@public/legacy-portfolio/SquirrelTales.png";
import HiveproImg from "@public/legacy-portfolio/hivepro.png";
import MydiemImg from "@public/legacy-portfolio/Mydiem.png";
import P3formImg from "@public/legacy-portfolio/p3form.png";
import Link from "next/link";

export default function LegacyPortfolioContent() {
  return (
    <main>
      <section id="landing">
        <h1 className="lg-heading">
          Sean <span className="text-secondary">Ormiston</span>
        </h1>
        <h2 className="sm-heading">Full-Stack Engineer ⎈ Musician</h2>
        <div className="icons">
          <i className="devicon-html5-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-ruby-plain"></i>
          <i className="devicon-rails-plain"></i>
          <i className="devicon-express-original"></i>
          <i className="devicon-nodejs-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-postgresql-plain"></i>
          <i>💅</i>
          <i className="devicon-sass-original"></i>
        </div>
      </section>
      <section id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">A few words...</h2>
        <div className="about-info">
          <div className="social-card">
            <Image
              src={HeadshotImg}
              alt="headshot Sean Ormiston"
              className="bio-image"
              width={250}
              height={250}
            />
            <div className="icons">
              <a href="https://github.com/sormiston">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/sormiston/">
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="https://dev.to/sormiston">
                <i
                  className="fab fa-dev fa-3x"
                  title="sormiston's DEV Profile"
                ></i>
              </a>
            </div>
            <Link href="/resume" className="resume">
              View my <span style={{ fontWeight: 600 }}>Resume</span>
            </Link>
          </div>

          <div className="bio">
            <p>
              Hi, my name is Sean Ormiston. <br />
              <br />I like <span className="text-secondary">software</span> that
              <span className="text-secondary">solves</span> problems. I like
              designs that
              <span className="text-secondary">foster</span> clear thinking, and
              I admire an open-source ethos where tools are
              <span className="text-secondary">specific</span> and knowledge is
              <span className="text-secondary">shared</span>.
              <br />
              <br />
              As a newly graduated classical musician in 2012, I relocated to
              Brazil for 4 years of performance work, learning the language as I
              went. When I returned to the US, I started work as a logistics
              coordinator for an international performing arts agency.
              <br />
              <br />
              As an information worker who had to multi-task across the globe,
              and anticipate clients&apos; needs with great detail, I began
              writing my first Python scripts to create efficiencies and
              eliminate human error during repetitive tasks. I began looking at
              every operation in terms of its constants and variables...and
              thinking about the kind of software I wish I&apos;d had.
              <br />
              <br />
              When I&apos;m not coding, I enjoy reading science fiction and
              history, foreign films, kettlebell training, and keeping up chops
              on my instrument - the double bass.
              <br />
              <br />
              As a continuing learner, I strive to write code that brings
              original ideas to life, and that is lean and scalable. I&apos;m a
              proud self-starter eager to grow as a full-stack developer. Check
              out the rest of my site to see some of my projects!
            </p>
          </div>
        </div>
      </section>
      <div id="graphic-break"></div>
      <section id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item-1">
            <Image
              src={SquirrelTalesImg}
              alt="P1 - SquirrelTales"
              width={500}
              height={300}
            />
          </div>
          <div className="description-1">
            <h2>Squirrel Tales</h2>
            <span>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-javascript-plain"></i>
            </span>
            <p>
              Squirrel Tales brings NYC Open Data&apos;s archival notes of the
              2018 Central Park Squirrel Census to life. A JSON set of
              approximately 800 records is accessed via a CSS grid that fits
              snugly atop the beautiful engraving work of the official census
              map. Click &quot;Fetch a story&quot; to get started.
            </p>
            <a
              href="https://sormiston.github.io/SquirrelTales/"
              className="btn-light"
            >
              <i className="fas fa-globe"></i> Site
            </a>
            <a
              href="https://github.com/sormiston/SquirrelTales"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="divider"></div>
          <div className="item-2">
            <Image
              src={HiveproImg}
              alt="P4 - HivePro"
              width={500}
              height={300}
            />
          </div>
          <div className="description-2">
            <h2>HivePro</h2>
            <h4>Rehearsal Studio Booking</h4>
            <span>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-ruby-plain"></i>
              <i className="devicon-rails-plain"></i>
              <i className="devicon-react-original"></i>
            </span>

            <p>
              HivePro is a full stack application where band-affiliated users
              can check session availability at a hypothetical rehearsal studio,
              and manage their bookings with full CRUD functionality.
            </p>

            <a href="https://hivepro.netlify.app/" className="btn-light">
              <i className="fas fa-globe"></i> Site
            </a>
            <a href="https://github.com/sormiston/HivePro" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="divider"></div>
          <div className="item-3">
            <Image src={MydiemImg} alt="P3 - Mydiem" width={500} height={300} />
          </div>
          <div className="description-3">
            <h2>Mydiem</h2>
            <span>
              <i className="devicon-react-original"></i>
              💅
            </span>
            <p>
              A study in design fidelity and React-based componentization,
              Mydiem also features persistent CRUD hacked out through an
              AirTable backend. Speak lorem ipsum? Leave a comment!
            </p>
            <a href="https://mydiem.netlify.app/" className="btn-light">
              <i className="fas fa-globe"></i> Site
            </a>
            <a
              href="https://github.com/sormiston/NewsReader-Clone"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="divider"></div>
          <div className="item-4">
            <Image
              src={P3formImg}
              alt="P3 - The Door Nonprofit"
              width={500}
              height={300}
            />
          </div>
          <div className="description-4">
            <h2>The Door</h2>
            <h4>Collaborative Project</h4>
            <span>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-nodejs-plain"></i>
            </span>
            <p>
              In this tandem programming project split among a 4-person team, we
              coded a UX team&apos;s high-fidelity redesign of a community
              service website with NoSQL-based CRUD and near pixel-perfect
              accuracy.
            </p>
            <a href="https://the-door-nyc.netlify.app/" className="btn-light">
              <i className="fas fa-globe"></i> Site
            </a>
            <a
              href="https://github.com/Ricomitch/The-Door"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="divider"></div>
        </div>
      </section>
      <section id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">It&apos;d be great to hear from you...</h2>

        <form
          id="contact-form"
          name="contact"
          data-netlify="true"
          method="POST"
        >
          <input placeholder="Name" type="text" name="name" required />
          <input
            placeholder="Email"
            data-replyto
            type="email"
            name="email"
            required
          />
          <textarea placeholder="Message" name="message" rows={8}></textarea>
          <input id="contact-button" type="submit" value="SUBMIT" />
        </form>
      </section>
    </main>
  );
}
