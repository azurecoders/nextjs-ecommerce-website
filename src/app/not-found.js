import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h1 className="">Page Not Found</h1>
      <Link href="/">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-pink-500 rounded-lg h-[60px]">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
