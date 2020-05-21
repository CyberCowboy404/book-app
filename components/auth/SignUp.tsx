/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function SignUp() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="firstName">
            First name *
            <input type="text" id="firstName" />
          </label>
          <label htmlFor="lastName">
            Last name *
            <input type="text" id="lastName" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email *
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="confirmEmail">
            Confirm email *
            <input type="email" name="email" id="confirmEmail" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Choose a password *
            <input type="password" id="password" />
          </label>
          <label htmlFor="passwordConfirm">
            Confirm password *
            <input type="password" id="confirmPassword" />
          </label>
        </div>
        <div>
          <label htmlFor="agree">
            I agree to the
            <Link href="/legal/terms-and-conditions"><a>Terms and conditions</a></Link>
            <input type="checkbox" id="agree" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
