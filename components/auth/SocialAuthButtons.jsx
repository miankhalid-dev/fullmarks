"use client";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
      <path
        fill="#000"
        d="M13.15 9.53c-.02-2.03 1.66-3 1.73-3.05-.95-1.38-2.42-1.57-2.95-1.6-1.26-.13-2.46.74-3.1.74-.64 0-1.62-.72-2.67-.7-1.37.02-2.64.8-3.34 2.02-1.43 2.47-.36 6.13 1.02 8.14.68.98 1.48 2.08 2.53 2.04 1.02-.04 1.4-.66 2.64-.66 1.23 0 1.58.66 2.65.64 1.1-.02 1.79-.99 2.46-1.98a8.6 8.6 0 0 0 1.11-2.27c-.03-.01-2.1-.81-2.08-3.32Z"
      />
      <path
        fill="#000"
        d="M11.24 3.5c.56-.68.94-1.62.83-2.56-.8.03-1.78.53-2.36 1.2-.52.6-.97 1.56-.85 2.48.9.07 1.82-.45 2.38-1.12Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#1877F2" />
      <path
        fill="#fff"
        d="M11.5 9.5h-1.63V15H7.75V9.5H6.5V7.62h1.25v-1.1c0-1.28.6-2.27 2.27-2.27h1.48v1.83h-1c-.44 0-.62.28-.62.68v.86h1.62l-.25 1.88Z"
      />
    </svg>
  );
}

const PROVIDERS = [
  { id: "google", label: "Continue with Google", Icon: GoogleIcon },
  { id: "apple", label: "Continue with Apple", Icon: AppleIcon },
  { id: "facebook", label: "Continue with Facebook", Icon: FacebookIcon },
];

export default function SocialAuthButtons() {
  function handleClick(providerId) {
    // Placeholder OAuth trigger — wire to actual auth provider.
    console.log(`Sign in with ${providerId}`);
  }

  return (
    <div className="social-auth">
      {PROVIDERS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          className="social-auth__btn"
          onClick={() => handleClick(id)}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
