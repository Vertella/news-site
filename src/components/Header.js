import Link from "next/link";

export default function HeaderComponent() {
  return (
    <Link href={"/"}>
      <h1 className="text-4xl pt-8 border-b-8">ONLY COOL SPACE NEWS</h1>
    </Link>
  );
}