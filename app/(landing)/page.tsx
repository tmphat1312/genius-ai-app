import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>landing page (unprotected) </h1>
      <div>
        <Link href="/sign-in">sign in</Link>
        <Link href="/sign-up">sign up</Link>
      </div>
    </div>
  );
}
