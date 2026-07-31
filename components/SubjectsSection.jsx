const BOARD_FILTERS = ["All boards", "AQA", "Edexcel", "OCR", "Cambridge (CIE)"];

const SUBJECTS = [
  { icon: "🧮", name: "Maths" },
  { icon: "➗", name: "Further Maths" },
  { icon: "⚗️", name: "Chemistry" },
  { icon: "🧬", name: "Biology" },
  { icon: "⚛️", name: "Physics" },
  { icon: "📈", name: "Economics" },
  { icon: "💼", name: "Business" },
  { icon: "💻", name: "Computer Science" },
];

export default function SubjectsSection() {
  return (
    <section className="section fade-up" style={{ animationDelay: "0.3s" }}>
      <div className="section-heading-row">
        <h2 className="section-heading">Popular subjects</h2>
        <div className="board-filters">
          {BOARD_FILTERS.map((name, index) => (
            <div
              className={`board-filter${index === 0 ? " is-active" : ""}`}
              key={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="subject-grid">
        {SUBJECTS.map((s) => (
          <div className="subject-card" key={s.name}>
            <div className="subject-card__icon">{s.icon}</div>
            <div className="subject-card__name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
