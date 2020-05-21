/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input type="password" id="password" />
          </label>
        </div>
        <div>
          <label htmlFor="remember">
            Remember me
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
        <div>
          <Link href="/auth/recover-password">
            <a>Recover password</a>
          </Link>
        </div>
      </form>
    </section>
  );
}
