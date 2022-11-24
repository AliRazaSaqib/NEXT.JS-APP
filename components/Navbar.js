import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  // detect outside click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <nav className="flex bg-[#002D74] py-[12px] px-[24px] items-center justify-between">
      <ul className="text-white p-0 m-0 flex gap-8">
        <Link href="/" className="hover:text-[#F3F4F6]">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#F3F4F6]">
          About
        </Link>
      </ul>

      {/* profile dropdown */}
      <div
        className="relative rounded-full drop-shadow-[rgb(202 16 51) 0px 0px 4px] bg-[#FFFFFF] w-10 h-10 flex justify-center items-center cursor-pointer"
        ref={ref}
      >
        <div
          className="flex justify-center items-center text-black font-bold text-xl"
          onClick={() => setToggle(!toggle)}
        >
          L
        </div>
        {toggle ? (
          <div className="bg-black p-4 absolute mt-[6rem] mr-[2.5rem]">
            <ul>
              <li className="text-white">Logout</li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
