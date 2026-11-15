import SectionHeading from "./SectionHeading";
import ScriptureText from "./ScriptureText";

export default function Ethics() {
  return <section id="ethics" aria-labelledby="ethics-title" tabIndex={-1} className="section">
    <SectionHeading number="05" title="Ethics"><span id="ethics-title">Accountability when something goes wrong.</span></SectionHeading>
    <article className="prose essay">
      <h3>Uber’s 2016 data breach</h3>
      <p>The Uber data breach illustrates a conflict between protecting an organization’s reputation and being accountable to people whose information has been exposed. According to the <a href="#ref-doj">U.S. Department of Justice (2022)</a>, attackers stole records associated with approximately 57 million Uber users and 600,000 driver’s license numbers. Uber paid the attackers $100,000 in December 2016, and nondisclosure agreements falsely stated that no data had been taken or stored. The breach was disclosed publicly and to the Federal Trade Commission in November 2017.</p>
      <p>The <a href="#ref-ftc">Federal Trade Commission (2018, paras. 24–27)</a> described the access key exposed in a private GitHub repository and reported that the attackers used previously compromised passwords to reach it. Uber routed the payment through its bug bounty administrator, even though the attackers had stolen personal information rather than responsibly reported a vulnerability.</p>
      <p>The ethical concern is how the organization handled the incident after discovering it. A company entrusted with personal information has a responsibility to respond honestly and consider the people affected. Treating a serious intrusion as a routine bug bounty matter obscures the harm and misrepresents what happened. Concealment can prevent affected people from evaluating their exposure and undermines the trust needed between a company, its users, and those responsible for oversight. The DOJ’s account documents a deliberate effort to keep the breach from the FTC during an existing investigation <a href="#ref-doj">(U.S. Department of Justice, 2022)</a>.</p>
      <h4>What I would carry into my work</h4>
      <p>My assessment is that professional integrity requires accurate incident documentation and communication through the appropriate security, leadership, and legal channels. A developer may not control public disclosure, but can report concerns promptly, preserve relevant information, and avoid misleading descriptions. Organizational pressure does not remove the responsibility to be truthful.</p>
      <p>This case connects directly to my principle of humility and integrity. <ScriptureText>Proverbs 11:3 teaches that integrity should guide decisions, and Articles of Faith 1:13 emphasizes honesty.</ScriptureText> I want to apply those commitments by acknowledging problems and helping resolve them responsibly. The lesson I take from this case is that technical competence must include accountability for how security problems are handled and how affected people are treated.</p>
    </article>
  </section>;
}
