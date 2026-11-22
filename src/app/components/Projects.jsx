import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";
import RefinementReport from "./RefinementReport";
import PeerReview from "./PeerReview";

export default function Projects() {
  return <section id="projects" aria-labelledby="projects-title" tabIndex={-1} className="section">
    <SectionHeading number="03" title="Projects & experience"><span id="projects-title">Practical work. Lasting lessons.</span></SectionHeading>
    <p className="section-lead">From a live movie-list application to robotics and teaching, these projects and experiences connect practical problem solving with service. <a href="#peer-review">Read my completed peer evaluation of Michael’s project.</a></p>
    <div className="project-list">{projects.map((project, index) => <article id={project.id} tabIndex={-1} className="project-card" key={project.id}>
      <div className="project-sidebar"><span className="project-number" aria-hidden="true">0{index + 1}</span><p className="eyebrow">{project.kind}</p><h3>{project.title}</h3><p className="meta">{project.context}</p>
        <dl className="project-facts"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Tools & skills</dt><dd>{project.tools}</dd></div></dl>
        {project.links && <div className="link-row" aria-label={`${project.title} links`}>{project.links.map((link) => <a key={link.url} href={link.url}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        {project.refinement && <p className="meta"><a href={`#${project.id}-refinement-report`}>Read the refinement report</a></p>}
      </div>
      <div className="prose project-story">{project.paragraphs.map((paragraph, i) => <div key={paragraph}><h4>{["The work", "Challenge & outcome", "What I learned · Faith & growth"][i]}</h4><p>{paragraph}</p></div>)}
        {project.peerFeedback && <div><h4>Peer feedback & response</h4><p>{project.peerFeedback}</p></div>}
      </div>
      {project.refinement && <RefinementReport projectId={project.id} refinement={project.refinement} />}
    </article>)}</div>
    <PeerReview />
  </section>;
}
