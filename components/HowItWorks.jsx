const STEPS = [
  {
    n: "1",
    title: "Find your board & subject",
    desc: "Filter by curriculum, exam board and subject in seconds.",
  },
  {
    n: "2",
    title: "Buy instantly",
    desc: "One-time purchase, no subscription needed.",
  },
  {
    n: "3",
    title: "Download & revise",
    desc: "Access your resources immediately from your library.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section fade-up" style={{ animationDelay: "0.42s" }}>
      <h2 className="section-heading steps-heading">How Fullmarks works</h2>
      <div className="steps-grid">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <div className="step__number">{step.n}</div>
            <div className="step__title">{step.title}</div>
            <div className="step__desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
