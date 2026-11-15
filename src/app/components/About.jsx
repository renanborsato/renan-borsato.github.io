import SectionHeading from "./SectionHeading";

export default function About() {
  return <section id="about" aria-labelledby="about-title" tabIndex={-1} className="section">
    <SectionHeading number="02" title="About & résumé"><span id="about-title">Learning, building, and helping others.</span></SectionHeading>
    <div className="resume-header">
      <h3>Renan Borsato</h3><p>IT student · Software development</p>
      <div className="link-row compact"><a href="mailto:renanborsato2@gmail.com">Email</a><a href="https://www.linkedin.com/in/renanborsato/">LinkedIn</a><a href="https://github.com/renan-borsato">GitHub</a><a href="https://renan-borsato.github.io">Portfolio</a></div>
      <p className="prose">I bring experience in programming, robotics, and one-on-one math and computer science tutoring. I am developing full stack application skills and preparing for software development opportunities, with a focus on practical problem solving, clear technical communication, and helping learners build independent understanding.</p>
    </div>
    <div className="resume-row"><h3>Education</h3><div className="resume-entries">
      <article><h4>Bachelor of Applied Science (BAS) in Information Technology, Software Engineering</h4><p className="meta">Ensign College · Expected April 2027</p></article>
      <article><h4>Technical Diploma in Industrial Automation</h4><p className="meta">Federal Institute of Education, Science and Technology · São José dos Campos, Brazil · December 2019</p><p>Studies in programming, robotics, and automation, including a self-balancing robot project completed in 2019.</p></article>
    </div></div>
    <div className="resume-row"><h3>Skills</h3><dl className="skills-list">
      <div><dt>Programming</dt><dd>C, Python, Java, JavaScript, TypeScript, and VBA; programming logic, debugging, and problem solving.</dd></div>
      <div><dt>Technical foundations</dt><dd>Control algorithms, electronics, and robotics.</dd></div>
      <div><dt>Frameworks & tools</dt><dd>React, Next.js, Node.js, Tailwind CSS, PostgreSQL, Git, Docker, AWS, and Vercel.</dd></div>
      <div><dt>Communication</dt><dd>Individual tutoring, lesson planning, technical explanation, and adapting instruction to different learners.</dd></div>
    </dl></div>
    <div className="resume-row"><h3>Work experience</h3><div className="resume-entries">
      <article><h4>Math and Computer Science Tutor</h4><p className="meta">Ensign College · February 2026–Present</p><ul className="bullet-list"><li>Support students individually with programming logic, debugging, and problem solving.</li><li>Adapt explanations to help learners develop independent understanding.</li><li>Supported more than 40 students and averaged more than 20 appointments per month.</li><li>Helped contribute to an increase of more than 50% in scheduled appointments.</li></ul></article>
      <article><h4>EnglishConnect Instructor</h4><p className="meta">BYU-Pathway · April 2023–August 2024</p><ul className="bullet-list"><li>Taught English to more than 10 adult learners using structured lesson plans.</li><li>Adapted activities for learners with different levels of experience.</li><li>Encouraged participation and helped learners develop confidence.</li></ul></article>
    </div></div>
    <div className="resume-row"><h3>Volunteer experience</h3><article><h4>Pantry Volunteer</h4><p className="meta">Tabitha’s Way · October 2024–April 2025</p><ul className="bullet-list"><li>Sorted, inspected, and stocked donated food.</li><li>Helped maintain supplies at a pantry serving more than 1,700 people monthly.</li><li>Worked with other volunteers to support reliable pantry operations.</li></ul></article></div>
    <div className="resume-row"><h3>Technical project</h3><article><h4><a href="#robot">Self-Balancing Robot</a></h4><p className="meta">Industrial Automation Program · 2019</p><p>Designed and programmed a functional robot using C, electronics, and control algorithms. Worked within a small budget and adjusted the software to compensate for hardware limitations, developing practical troubleshooting skills.</p></article></div>
  </section>;
}
