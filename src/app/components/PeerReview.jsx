import { peerReview } from "../data/peerReview";

export default function PeerReview() {
  return <section id="peer-review" className="peer-review" tabIndex={-1} aria-labelledby="peer-review-title">
    <p className="eyebrow">Completed peer evaluation</p>
    <h3 id="peer-review-title">My review of {peerReview.author}’s {peerReview.title} project</h3>
    <p className="meta">Reviewer: {peerReview.reviewer} · IT 497</p>
    <p className="prose">I chose Michael’s historical and genealogical research website for my peer review. My evaluation assesses his technical approach, ethical integration, and documented progress, and provides concrete recommendations for further refinement.</p>
    <p className="prose">I highlighted the reusable design and motion systems, attention to historical accuracy, and privacy commitments. My main recommendation was to complete production validation and demonstrate accessibility, performance, and ethical safeguards through observable examples. The evaluation is based on Michael’s project report; its test results are reported by him and were not independently verified by me.</p>
    <div className="link-row">
      <a className="button-link" href={peerReview.documentUrl} download>Download my completed evaluation <span className="meta">Word document</span></a>
      <a href={peerReview.projectUrl}>Michael’s project <span aria-hidden="true">↗</span></a>
      <a href={peerReview.stagingUrl}>Staging site <span aria-hidden="true">↗</span></a>
    </div>
    <details className="peer-review-details">
      <summary>Read the full completed evaluation</summary>
      <div className="prose peer-review-content">{peerReview.sections.map(section => <div key={section.heading}>
        <h4>{section.heading}</h4>
        {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>)}</div>
    </details>
  </section>;
}
