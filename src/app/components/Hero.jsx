import Image from "next/image";
import { introduction } from "../data/portfolio";

export default function Hero() {
  return <section id="home" aria-labelledby="home-title" tabIndex={-1} className="hero section">
    <div className="hero-intro">
      <div className="portrait-wrap"><Image src="/headshot_nobg.png" alt="Renan Borsato" width={256} height={256} priority unoptimized className="portrait" /></div>
      <div>
        <p className="eyebrow">Hey there! I’m</p>
        <h1 id="home-title">Renan Borsato</h1>
        <p className="hero-role">Software engineering student</p>
        <p className="hero-motto">Curiosity in how things work.<br />Purpose in whom they help.</p>
        <div className="link-row"><a className="button-link" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a href="#about">Read my résumé <span aria-hidden="true">↗</span></a></div>
      </div>
    </div>
    <div className="hero-story prose">{introduction.map((text) => <p key={text}>{text}</p>)}</div>
  </section>;
}
