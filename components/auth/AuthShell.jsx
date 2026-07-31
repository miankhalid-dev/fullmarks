import Link from "next/link";

export default function AuthShell({
  formPosition = "left",
  badge,
  panelHeadline,
  panelCopy,
  children,
}) {
  const panel = (
    <div className="auth-panel">
      <span className="auth-panel__badge">{badge}</span>
      <h2 className="auth-panel__headline">{panelHeadline}</h2>
      <p className="auth-panel__copy">{panelCopy}</p>
    </div>
  );

  const form = (
    <div className="auth-form-col">
      <div className="auth-form-col__inner fade-up">
        <Link href="/" className="auth-logo">
          <img src="/assets/fullmarks-logo-cropped.png" alt="Fullmarks" />
        </Link>
        {children}
      </div>
    </div>
  );

  return (
    <div className="auth-shell">
      {formPosition === "left" ? (
        <>
          {form}
          {panel}
        </>
      ) : (
        <>
          {panel}
          {form}
        </>
      )}
    </div>
  );
}
