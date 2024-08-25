import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-3">
      <p className="">Welcome to Ecommerce Website</p>
      <Link href="/products">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
          View Products
        </button>
      </Link>
    </main>
  );
}
