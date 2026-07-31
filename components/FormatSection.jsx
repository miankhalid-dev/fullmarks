import { NotebookPen, FileText } from "lucide-react";

const CONTENT_TYPES = [
  {
    icon: NotebookPen,
    title: "Revision Notes",
    desc: "Concise, exam-board-matched notes covering every topic on the syllabus.",
    variant: "notes",
  },
  {
    icon: FileText,
    title: "Past Papers",
    desc: "Real past papers with mark schemes, organised by year and session.",
    variant: "papers",
  },
];

export default function FormatSection() {
  return (
    <section className="section fade-up" style={{ animationDelay: "0.24s" }}>
      <h2 className="section-heading">Two Formats, One Goal: Exam-Ready</h2>
      <div className="format-grid">
        {CONTENT_TYPES.map((t) => (
          <div className={`format-card format-card--${t.variant}`} key={t.title}>
            <div className="format-card__icon">
              <t.icon size={26} aria-hidden="true" />
            </div>
            <div className="format-card__title">{t.title}</div>
            <div className="format-card__desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
