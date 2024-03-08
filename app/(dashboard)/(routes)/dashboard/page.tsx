import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <p className="text-2xl font-bold">Dashboard page (protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
