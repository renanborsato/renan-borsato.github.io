import SectionHeading from "./SectionHeading";
import ScriptureText from "./ScriptureText";

export default function Reflection() {
  return <section id="reflection" aria-labelledby="reflection-title" tabIndex={-1} className="section">
    <SectionHeading number="06" title="Reflection"><span id="reflection-title">Making room for peace and direction.</span></SectionHeading>
    <div className="prose essay">
      <h3>A visit to the Saratoga Springs Utah Temple</h3>
      <p className="meta">October 2026</p>
      <p>In October 2026, I visited the Saratoga Springs Utah Temple. Being in the temple helped me feel peace and safety and gave me an opportunity to reflect on my faith and the direction of my life. That experience matters to me as I prepare for a career in technology. I am still figuring out my professional direction, and I want to make room for spiritual peace while working toward my goals. My education is preparing me to develop technical abilities, while my faith helps me consider the purpose and direction of that preparation.</p>
      <p>As I connect this visit with my career preparation, I want my faith to guide the decisions I make. Learning by study and faith gives me a way to approach uncertainty: I can continue developing my skills while making space to consider what matters to me spiritually. Service gives those skills a purpose, and humility and integrity guide how I want to use them. I want my professional growth to include useful work and honest communication, alongside the spiritual peace I felt in the temple. These commitments can help me move forward while I continue to find my direction.</p>
      <p>My next step is to learn about the history of the Saratoga Springs Temple and the other temples I have visited: Campinas, São Paulo, and Manhattan. This is something I plan to do. I want to understand their stories better and deepen my appreciation for the places where I have felt that peace. Continuing that learning is one way I want to give my spiritual growth attention as I also prepare for my future work.</p>
      <h3 className="week-four-reflection">Week 4 reflection on agency</h3>
      <p>The temple visit gives me a starting point for considering how I use my agency now. Peace can help me decide what matters, but I still need to act on those priorities. <ScriptureText>Doctrine and Covenants 58:27–28 connects willing action with the ability to do good.</ScriptureText> I understand this as a responsibility to choose useful next steps while I am still learning and finding my professional direction.</p>
      <h4>Choices that have influenced my development</h4>
      <p>One concrete choice was to build MovieList and include it in my portfolio. Publishing a project makes my work available for someone else to try, which reveals needs I may overlook when describing its features. My peer could create a guest list but reported problems adding movies, loading information, and importing lists. That feedback gave me a specific opportunity to decide how I would respond.</p>
      <p>I chose to use that feedback to guide the refinement: clearer movie-addition steps, more helpful errors, and recovery that protects saved lists. This connects agency with service because it asks me to consider the person encountering a problem. It also connects with humility. A project can demonstrate real effort and still need improvement. Listening to another person helps me judge the work by how well it serves them.</p>
      <p>Another choice was to document the limits of the results. The refinement has passing local checks, but those checks do not prove that the deployed service and account permissions work. Keeping that distinction in the report is a practical application of integrity. I want employers and users to be able to trust what I say about my work, including what remains unfinished. In my tutoring work, I face a related responsibility: guide someone toward understanding instead of simply supplying an answer. In both settings, my choices affect another person’s ability to move forward.</p>
      <h4>Responding to uncertainty with faith</h4>
      <p>In <a href="#ref-wirthlin">Come What May, and Love It</a>, Elder Joseph B. Wirthlin teaches that our response to adversity matters and encourages trust in Heavenly Father and Jesus Christ. I connect that counsel with career uncertainty and project setbacks. Faith can help me respond patiently while I investigate a problem, accept feedback, and do the work within my control. A technical difficulty does not need to decide how I treat people or whether I act honestly.</p>
      <h4>What I will do next</h4>
      <ul className="bullet-list">
        <li><strong>Act on feedback:</strong> Before the next portfolio submission, complete the remaining MovieList deployment checks, request a peer retest of the original tasks, and record what succeeds and what still needs attention.</li>
        <li><strong>Make reflection a deliberate choice:</strong> Set aside a quiet period to consider one recent decision alongside Doctrine and Covenants 58:26–28. Record the choice, who it affected, and one adjustment I can make.</li>
        <li><strong>Continue spiritual learning:</strong> Follow through on learning the history of one temple I have visited and add a personal reflection connecting that learning to service or preparation.</li>
      </ul>
      <p>My progress depends on choices I can repeat: begin useful work, listen when someone identifies a weakness, and describe the results honestly. These actions give practical meaning to the spiritual principles I want to carry into my career.</p>
    </div>
  </section>;
}
