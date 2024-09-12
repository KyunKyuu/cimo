"use client";
import Image from "next/image";
import ProgressBar from "./progressBar";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function Navbar() {
  return (
    <nav className="navbar bg-black">
      <div className="flex items-center px-10 py-5">
        <div className="profile me-auto">
          <Image
            loader={imageLoader}
            src="user.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="button-group flex">
          <button className="relative text-black bg-[#EECE61] py-2 px-5 rounded-sm button-nav mx-5">
            Petunjuk Keuangan
          </button>
          <button className="relative flex items-center justify-between text-black bg-[#9FB366] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="babi.svg"
              alt="Penyimpanan"
              width={20}
              height={20}
              className="mx-1"
            />
            <span className="me-10">4 / 10</span>
            <Image
              loader={imageLoader}
              src="invest.svg"
              alt="Penyimpanan"
              width={20}
              height={20}
              className="mx-1"
            />
            <span className="mx-2">0 / 3</span>
            <span className="ms-10">
              Your Wish
              <ProgressBar />
            </span>
          </button>
          <button className="relative flex items-center justify-between text-black bg-[#44BEF0] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="dollar.svg"
              alt="dollar"
              width={20}
              height={20}
              className="mx-1"
            />
            Rp.9,000,000
          </button>
          <button className="relative flex items-center justify-between text-black bg-[#FFC654] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="dollar-coin.png"
              alt="dollar coin"
              width={30}
              height={30}
              className="mx-1"
            />
            Rp.23,000,000
          </button>
        </div>
      </div>
    </nav>
  );
}
