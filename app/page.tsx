
import Image from "next/image";

export default function Home() {
  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          meghana<span>®</span>
        </a>

        <div className="brand-role">
          AI / ML ENGINEER
        </div>

        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#projects">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-main">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
              <span className="hero-year">2026 — 2027</span>
            </div>

            <h1>
              Turning ideas
              <br />
              into <span>intelligent</span>
              <br />
              solutions<span className="heading-dot">.</span>
            </h1>

            <p className="hero-description">
              I'm Meghana, an AI/ML engineering student
              passionate about creating intelligent
              applications, exploring emerging technologies
              and solving real-world problems through code.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                EXPLORE MY WORK <span>↗</span>
              </a>

              <a href="/Meghana7.pdf" download className="secondary-button">
                DOWNLOAD CV ↓
              </a>
            </div>

            <div className="hero-bottom-info">
              <span>BASED IN BENGALURU, INDIA</span>
              <span>CURIOUS BY NATURE. BUILDER BY CHOICE.</span>
            </div>

          </div>

          {/* PROFILE IMAGE */}
          <div className="hero-visual">

            <div className="portrait-card">

              <Image
                src="/images/meghana.jpeg"
                alt="Meghana B - AI and ML Engineer"
                width={600}
                height={800}
                priority
                className="profile-photo"
              />

              <div className="portrait-overlay">
                <span>THE PERSON BEHIND THE CODE</span>
                <strong>Meghana B.</strong>
              </div>

            </div>

            <div className="floating-note">
              <span>01</span>
              <div>
                <strong>LEARN.</strong>
                <strong>BUILD.</strong>
                <strong>REPEAT.</strong>
              </div>
            </div>

            <div className="visual-decoration">✳</div>

          </div>
        </div>

        {/* EXPERTISE STRIP */}
        <div className="expertise-strip">
          <span>MY INTERESTS</span>
          <div>MACHINE LEARNING</div>
          <i>*</i>
          <div>DEEP LEARNING</div>
          <i>*</i>
          <div>GENERATIVE AI</div>
          <i>*</i>
          <div>SOFTWARE DEVELOPMENT</div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-topline">
          <span>01 / ABOUT ME</span>
          <span>A LITTLE CONTEXT ABOUT MY JOURNEY</span>
        </div>

        <div className="about-layout">

          <div className="about-heading">
            <h2>
              More than
              <br />
              just <span>code.</span>
            </h2>

            <div className="about-symbol">✳</div>
          </div>

          <div className="about-description">

            <span className="about-label">
              HELLO, I'M MEGHANA.
            </span>

            <p>
              I am an Artificial Intelligence and Machine
              Learning engineering student at RNS Institute
              of Technology, interested in building intelligent
              systems that solve practical problems.
            </p>

            <p>
              My interests span machine learning, deep
              learning, large language models and full-stack
              development. I enjoy transforming ideas into
              working applications and experimenting with
              emerging technologies.
            </p>

            <p>
              I believe in learning by building, asking
              questions and continuously improving the way
              I approach problems.
            </p>

            <a href="/Meghana7.pdf" download className="text-link">
              MORE ABOUT MY JOURNEY <span>↗</span>
            </a>

          </div>

        </div>

        {/* EDUCATION */}
        <div className="education-heading">
          <span>MY ACADEMIC BACKGROUND</span>
          <span>2021 — 2027</span>
        </div>

        <div className="education-list">

          <div className="education-row">
            <span className="education-date">2023 — 2027</span>
            <div>
              <h3>RNS Institute of Technology</h3>
              <p>B.E. Artificial Intelligence & Machine Learning</p>
            </div>
            <strong>8.94 CGPA</strong>
          </div>

          <div className="education-row">
            <span className="education-date">2023</span>
            <div>
              <h3>RK Vision PU College</h3>
              <p>Pre-University Education</p>
            </div>
            <strong>93.50%</strong>
          </div>

          <div className="education-row">
            <span className="education-date">2021</span>
            <div>
              <h3>Sri Bhairaveshwara Vidya Samaste</h3>
              <p>Secondary School Education</p>
            </div>
            <strong>96%</strong>
          </div>

        </div>

      </section>
      
      {/* FEATURED PROJECTS */}
      <section className="projects-section" id="projects">

        <div className="projects-topline">
          <span>02 / SELECTED WORK</span>
          <span>A COLLECTION OF THINGS I'VE BUILT</span>
        </div>

        <div className="projects-intro">
          <h2>
            Ideas put
            <br />
            into <span>practice.</span>
          </h2>

          <p>
            I enjoy exploring how technology can solve
            real-world problems. Here are some projects
            that reflect my curiosity and technical journey.
          </p>
        </div>

        <div className="project-grid">

          {/* PROJECT 01 */}
          <article className="project-card project-featured">
            <div className="project-visual project-visual-one">
              <span className="project-number">01</span>
              <div className="project-graphic">
                <span>AI</span>
                <span>VISION</span>
                <span>DETECTION</span>
              </div>
              <span className="project-category">COMPUTER VISION</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>DEEP LEARNING</span>
                <span>2026</span>
              </div>

              <h3>Riverine Plastic Pollution Detection</h3>

              <p>
                A deep learning-based system that detects
                floating plastic waste in river environments
                using YOLO and computer vision techniques.
                Designed to support real-time environmental
                monitoring.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>YOLO</span>
                <span>OpenCV</span>
                <span>FastAPI</span>
              </div>
            </div>
          </article>

          {/* PROJECT 02 */}
          <article className="project-card">
            <div className="project-visual project-visual-two">
              <span className="project-number">02</span>
              <div className="research-graphic">
                <span>RESEARCH</span>
                <span className="research-line"></span>
                <span>KNOWLEDGE</span>
                <span className="research-line"></span>
                <span>INSIGHTS</span>
              </div>
              <span className="project-category">GENERATIVE AI</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>LARGE LANGUAGE MODELS</span>
                <span>2026</span>
              </div>

              <h3>Research KG Explorer</h3>

              <p>
                An LLM-powered research exploration platform
                that helps users understand academic papers,
                discover relationships between research
                concepts and explore knowledge connections.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Ollama</span>
                <span>LLMs</span>
                <span>Neo4j</span>
              </div>
            </div>
          </article>

        </div>

        <div className="projects-footer">
          <span>BUILT WITH CURIOSITY AND PURPOSE.</span>
          <span>MORE EXPERIMENTS. MORE LEARNING. MORE TO COME.</span>
        </div>

      </section>

      {/* TECHNICAL SKILLS */}
      <section className="skills-section" id="skills">

        <div className="skills-topline">
          <span>03 / TECHNICAL EXPERTISE</span>
          <span>WHAT I WORK WITH</span>
        </div>

        <div className="skills-intro">
          <h2>
            Tools of
            <br />
            my <span>trade.</span>
          </h2>

          <p>
            A growing collection of technologies, concepts
            and tools I use to explore ideas, build
            applications and solve problems.
          </p>
        </div>

        <div className="skills-grid">

          {/* CATEGORY 01 */}
          <article className="skill-card">
            <div className="skill-card-top">
              <span>01</span>
              <span>PROGRAMMING</span>
            </div>

            <h3>Writing the logic.</h3>

            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>SQL</span>
            </div>
          </article>

          {/* CATEGORY 02 */}
          <article className="skill-card">
            <div className="skill-card-top">
              <span>02</span>
              <span>AI & MACHINE LEARNING</span>
            </div>

            <h3>Making systems intelligent.</h3>

            <div className="skill-tags">
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
              <span>NLP</span>
              <span>Generative AI</span>
              <span>LLMs</span>
            </div>
          </article>

          {/* CATEGORY 03 */}
          <article className="skill-card">
            <div className="skill-card-top">
              <span>03</span>
              <span>FRAMEWORKS & TOOLS</span>
            </div>

            <h3>Building with technology.</h3>

            <div className="skill-tags">
              <span>YOLO</span>
              <span>OpenCV</span>
              <span>FastAPI</span>
              <span>Ollama</span>
              <span>Neo4j</span>
            </div>
          </article>

          {/* CATEGORY 04 */}
          <article className="skill-card">
            <div className="skill-card-top">
              <span>04</span>
              <span>DEVELOPMENT</span>
            </div>

            <h3>Turning ideas into applications.</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Next.js</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </article>

        </div>

        <div className="skills-footer">
          <span>ALWAYS LEARNING. ALWAYS EXPERIMENTING.</span>
          <span>THE TOOLBOX KEEPS GROWING ↗</span>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">

        <div className="contact-topline">
          <span>04 / GET IN TOUCH</span>
          <span>THE NEXT CHAPTER STARTS HERE</span>
        </div>

        <div className="contact-content">

          <div className="contact-heading">
            <span className="contact-label">
              HAVE AN IDEA OR AN OPPORTUNITY?
            </span>

            <h2>
              Let's make
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h2>
          </div>

          <div className="contact-details">

            <p>
              I'm always interested in connecting with
              people, exploring opportunities and discussing
              ideas around AI, machine learning and technology.
            </p>

            <a
              href="mailto:meghanabgowda266@gmail.com"
              className="contact-email"
            >
              SAY HELLO <span>↗</span>
            </a>

            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/meghana-gowda-124a70300/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN <span>↗</span>
              </a>

              <a
                href="https://github.com/Meghana-B266"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB <span>↗</span>
              </a>

              <a href="mailto:meghanabgowda266@gmail.com">
                EMAIL <span>↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="contact-bottom">
          <div className="contact-availability">
            <span className="status-dot"></span>
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <span>BASED IN BENGALURU, INDIA</span>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="footer-brand">
          meghana<span>®</span>
        </a>

        <p>
          Designed with curiosity. Built with purpose.
        </p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <div className="footer-bottom">
          <span>© 2026 MEGHANA B.</span>
          <span>AI / ML ENGINEER · PORTFOLIO</span>
          <span>MADE WITH NEXT.JS</span>
        </div>

      </footer>




    </main>
  );
}
