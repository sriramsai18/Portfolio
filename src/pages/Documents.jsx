import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import { DATA } from "../data";

const DOCS = [
  {
    title: "10th grade certificate",
    desc: "secondary school leaving certificate (sslc). overall percentage and board details.",
    tags: ["doc", "gdrive"],
    date: "mar 2020'",
    href: "https://drive.google.com/file/d/1wJBkXFpPchAQJIZRj-X68KqMGud0FrNd/view?usp=sharing",
  },
  {
    title: "12th grade certificate",
    desc: "higher secondary certificate (hsc), maths physics chemisty(mpc) overall percentage and board details.",
    tags: ["doc", "gdrive"],
    date: "mar 2022'",
    href: "https://drive.google.com/file/d/1rMG_ieLSe8g6vuWrr9u6yMBMxGuj8iOa/view?usp=sharing",
  },
  {
    title: "provisional degree certificate ug2026'",
    desc: "provisional certificate of ug 2026, first class with distinction. year of passing: april 2026.",
    tags: ["doc", "gdrive", "Yet to Come"],
    date: "aug 2024'",
    href: "https://aec.edu.in",
  },
  {
    title: "resume",
    desc: "educational background, projects, work experience, and technical skills.",
    tags: ["doc", "gdrive"],
    date: "last updated: april 2026",
    href: "https://drive.google.com/file/d/1OLzhKzBaWM4TDDtSMb55Ddb7Q1Zj3sii/view?usp=sharing",
  },
];

export default function Documents() {
  return (
    <div className="page">
      <Topbar />
      <Link to="/" className="back-link">← back</Link>

      <h1 className="sub-title">academic documents</h1>
      <p className="sub-subtitle">
        4 entries &nbsp;·&nbsp; certificates, transcripts, and resume
      </p>

      <section className="section">
        <div className="section-header">
          <span className="section-label">documents</span>
          <span className="section-rule" />
          <span className="section-count">4 files</span>
        </div>
        <div className="doc-grid">
          {DOCS.map((doc, i) => (
            <a
              key={i}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className="doc-card"
            >
              <div className="doc-card-title">{doc.title}</div>
              <div className="doc-card-desc">{doc.desc}</div>
              <div className="doc-card-tags">
                {doc.tags.map((t, j) => (
                  <span key={j} className="entry-tag">{t}</span>
                ))}
              </div>
              <div className="doc-card-date">{doc.date}</div>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <a href={DATA.email}>collaborate</a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer">linkedin</a>
        </div>
        <span>last updated: apr 2026'</span>
      </footer>
    </div>
  );
}
