import prisma from "@/lib/prismaClient";

export const metadata = {
  title: "Fullstack ed",
};

export default async function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <h1 className="font-black text-[36px] font-mono">next app</h1>
    </main>
  );
}
