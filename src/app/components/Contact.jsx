import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" tabIndex={-1} className="section">
      <SectionHeading number="08" title="Contact"><span id="contact-title">Let’s connect.</span></SectionHeading>
      <p className="prose">I’m preparing for opportunities in software development. I’d welcome a conversation about useful projects, learning, and ways I can contribute.</p>

      <div className="contact-links">
        <a
          href="mailto:renanborsato2@gmail.com"
        >
          <Image
            unoptimized
            src="/email.svg"
            alt=""
            width={24}
            height={24}
            className="dark:invert"
          />
          <span>renanborsato2@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/renanborsato/"
        >
          <Image
            unoptimized
            src="/linkedin.svg"
            alt=""
            width={24}
            height={24}
            className="dark:invert"
          />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/renan-borsato"><Image unoptimized src="/github.svg" alt="" width={24} height={24} className="dark:invert" /><span>GitHub</span></a>
      </div>
    </section>
  );
}
