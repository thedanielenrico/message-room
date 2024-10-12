"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="p-4 bg-blue-400">
      <div className="text-center">
        <h1 className="text-xl">
          <Link href={"/"}>Message Room</Link>
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
