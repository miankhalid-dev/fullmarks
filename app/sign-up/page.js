"use client";

import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import SocialAuthButtons from "@/components/auth/SocialAuthButtons";

export default function SignUpPage() {
  function handleSubmit(event) {
    event.preventDefault();
    // Placeholder submit — wire to actual auth provider.
    console.log("Sign up submitted");
  }

  return (
    <AuthShell
      formPosition="right"
      badge="Covering every exam board"
      panelHeadline="Join thousands revising smarter"
      panelCopy="Revision notes and past papers for GCSE, IGCSE, IB, and A-Level, built around your exact exam board specification."
    >
      <h1 className="auth-title">Create your account</h1>
      <p className="auth-subhead">Get started with notes and past papers built for your board.</p>

      <SocialAuthButtons />

      <div className="auth-divider">
        <span />
        <span>OR</span>
        <span />
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Jane Smith" required />
        </div>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="••••••••" required />
        </div>

        <button type="submit" className="auth-submit">
          Create account
        </button>
      </form>

      <p className="auth-terms">
        By creating an account, you agree to our <Link href="#">Terms</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </p>

      <p className="auth-switch">
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </p>
    </AuthShell>
  );
}
