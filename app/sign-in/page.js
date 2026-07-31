"use client";

import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import SocialAuthButtons from "@/components/auth/SocialAuthButtons";

export default function SignInPage() {
  function handleSubmit(event) {
    event.preventDefault();
    // Placeholder submit — wire to actual auth provider.
    console.log("Sign in submitted");
  }

  return (
    <AuthShell
      formPosition="left"
      badge="Covering every exam board"
      panelHeadline="Notes mapped spec point by spec point"
      panelCopy="Revision notes and past papers for GCSE, IGCSE, IB, and A-Level, built around your exact exam board specification."
    >
      <h1 className="auth-title">Welcome back</h1>
      <p className="auth-subhead">Sign in to keep revising where you left off.</p>

      <SocialAuthButtons />

      <div className="auth-divider">
        <span />
        <span>OR</span>
        <span />
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="auth-field">
          <div className="auth-field__row">
            <label htmlFor="password">Password</label>
            <Link href="#" className="auth-forgot">
              Forgot password?
            </Link>
          </div>
          <input id="password" name="password" type="password" placeholder="••••••••" required />
        </div>

        <button type="submit" className="auth-submit">
          Sign in
        </button>
      </form>

      <p className="auth-switch">
        Don&rsquo;t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </AuthShell>
  );
}
