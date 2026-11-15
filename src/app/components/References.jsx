import SectionHeading from "./SectionHeading";
import { materials } from "../data/portfolio";

export default function References() {
  return <section id="references" aria-labelledby="references-title" tabIndex={-1} className="section">
    <SectionHeading number="07" title="References"><span id="references-title">Sources that inform my perspective.</span></SectionHeading>
    <ul className="reference-list">
      <li id="ref-ftc" tabIndex={-1}>Federal Trade Commission. (2018, October 25). <cite>In the matter of Uber Technologies, Inc.</cite> (Docket No. C-4662) [Complaint]. <a href="https://www.ftc.gov/system/files/documents/cases/152_3054_c-4662_uber_technologies_revised_complaint.pdf">https://www.ftc.gov/system/files/documents/cases/152_3054_c-4662_uber_technologies_revised_complaint.pdf</a></li>
      {[...materials].sort((a, b) => a.letter.localeCompare(b.letter)).map((material) => <li key={material.id} id={`ref-${material.id}`} tabIndex={-1}>
        The Church of Jesus Christ of Latter-day Saints. (n.d.-{material.letter}). <cite>{material.chapter}.</cite>{" "}<a href={material.url}>{material.url}</a>
      </li>)}
      <li id="ref-doj" tabIndex={-1}>U.S. Department of Justice. (2022, October 5). <cite>Former chief security officer of Uber convicted of federal charges for covering up data breach involving millions of Uber user records.</cite>{" "}<a href="https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-convicted-federal-charges-covering-data-breach">https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-convicted-federal-charges-covering-data-breach</a></li>
    </ul>
  </section>;
}
