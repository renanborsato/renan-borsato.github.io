import SectionHeading from "./SectionHeading";
import ScriptureText from "./ScriptureText";
import { principles, materials } from "../data/portfolio";

export default function Principles() {
  return <section id="faith" aria-labelledby="faith-title" tabIndex={-1} className="section">
    <SectionHeading number="04" title="Faith & technology"><span id="faith-title">The principles behind my work.</span></SectionHeading>
    <p className="section-lead">My spiritual and professional growth share a direction: develop my abilities, use them to help others, and be worthy of trust.</p>
    <div className="principle-list">{principles.map((principle, index) => <article className="principle" key={principle.title}>
      <div className="principle-title"><span className="accent" aria-hidden="true">0{index + 1}</span><h3>{principle.title}</h3><p className="meta">{principle.subtitle}</p></div>
      <div className="prose">{principle.paragraphs.map((paragraph) => <p key={paragraph}><ScriptureText>{paragraph}</ScriptureText></p>)}</div>
    </article>)}</div>
    <div className="materials-heading"><h3>Spiritual materials & everyday application</h3><p className="prose">These readings help me connect the principles I believe with the choices I make as a student, tutor, and future developer.</p></div>
    <div className="materials-grid">{materials.map((material) => <article className="material-card" key={material.id}>
      <h4><a href={material.verse ? `${material.url}&id=p${material.verse}#p${material.verse}` : material.url}>{material.title}</a></h4>
      <p>{material.description}</p>
      <p className="citation"><a href={`#ref-${material.id}`}>({material.citation || `The Church of Jesus Christ of Latter-day Saints, n.d.-${material.letter}`})</a></p>
    </article>)}</div>
  </section>;
}
