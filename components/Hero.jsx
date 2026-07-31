export default function Hero() {
  return (
    <section className="hero fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="hero-content">
        <div className="hero-badge">Covering every exam board</div>

        <h1 className="hero-heading">
          Every Note, mapped{" "}
          <span className="hero-highlight">spec point by spec point</span> to
          your exact Exam Board.
        </h1>

        <p className="hero-copy">
          No generic revision guides. Every set of notes is mapped line-by-line
          to the official specification of your exam board — so nothing
          you&rsquo;re examined on is ever missing.
        </p>

        <div className="hero-check">
          <span aria-hidden="true">✓</span> Written specifically for AQA,
          Edexcel, OCR, CAIE, IB &amp; more
        </div>
        <div className="hero-check">
          <span aria-hidden="true">✓</span> 100% specification coverage, board
          by board
        </div>

        <div className="hero-actions">
          <button type="button" className="hero-btn-primary">
            Browse resources
          </button>
          <button type="button" className="hero-btn-outline">
            How it works
          </button>
        </div>

        <div className="hero-stat">
          <span>📚 6,000+ resources</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        [ hero product photo ]
      </div>
    </section>
  );
}
