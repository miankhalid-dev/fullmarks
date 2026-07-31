import { BookOpen, Globe2, GraduationCap, BookMarked } from "lucide-react";

const CURRICULA = [
  { icon: BookOpen, name: "GCSE", count: "1,800" },
  { icon: Globe2, name: "IGCSE", count: "1,400" },
  { icon: GraduationCap, name: "IB (MYP & DP)", count: "1,100" },
  { icon: BookMarked, name: "A-Level", count: "1,900" },
];

export default function CurriculumSection() {
  return (
    <section className="section fade-up" style={{ animationDelay: "0.18s" }}>
      <h2 className="section-heading">Shop by curriculum</h2>
      <div className="curriculum-grid">
        {CURRICULA.map((c) => (
          <div className="curriculum-card" key={c.name}>
            <div className="curriculum-card__icon">
              <c.icon size={28} aria-hidden="true" />
            </div>
            <div className="curriculum-card__name">{c.name}</div>
            <div className="curriculum-card__count">{c.count} resources</div>
          </div>
        ))}
      </div>
    </section>
  );
}
