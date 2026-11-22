export default function RefinementReport({ projectId, refinement }) {
  const report = refinement.report;
  const id = `${projectId}-refinement-report`;
  return <section id={id} tabIndex={-1} className="refinement-report" aria-labelledby={`${id}-title`}>
    <h4 id={`${id}-title`}>MovieList refinement report</h4>
    <p className="meta">{refinement.status}</p>
    <p>{report.summary}</p>

    <h5>Original problems and investigation</h5>
    <p>{report.investigation}</p>

    <h5>Before and after evidence and decisions</h5>
    <div className="refinement-cases">{report.cases.map(item => <article key={item.title} className="refinement-case">
      <h6>{item.title}</h6>
      <dl>
        <div><dt>Before</dt><dd>{item.before}</dd></div>
        <div><dt>After</dt><dd>{item.after}</dd></div>
        <div><dt>Why I chose this approach</dt><dd>{item.reason}</dd></div>
        <div><dt>Verified evidence and limits</dt><dd>{item.verified}</dd></div>
      </dl>
    </article>)}</div>

    <h5>Ethical considerations</h5>
    <ul className="bullet-list">{report.ethics.map(item => <li key={item.title}><strong>{item.title}.</strong> {item.text}</li>)}</ul>

    <h5>Recorded validation results</h5>
    <div className="validation-table-wrap" role="region" aria-label="MovieList validation results" tabIndex={0}>
      <table className="validation-table">
        <caption>Local checks of refinement commit ee59c2f</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Result</th><th scope="col">What it verifies</th></tr></thead>
        <tbody>{report.checks.map(check => <tr key={check.command}><th scope="row"><code>{check.command}</code></th><td>{check.result}</td><td>{check.scope}</td></tr>)}</tbody>
      </table>
    </div>

    <h5>Impact and reflection</h5>
    <p>{report.impact}</p>
    <h5>Remaining live verification</h5>
    <p>{report.nextSteps}</p>
    <h5>Source evidence</h5>
    <p>The source comparison documents the implementation before and after refinement. The test links document the checks behind the recorded results.</p>
    <ul className="bullet-list">{report.evidence.map(link => <li key={link.url}><a href={link.url}>{link.label}</a></li>)}</ul>
  </section>;
}
