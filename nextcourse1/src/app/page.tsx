import Image from "next/image";
import light from "../../public/lebronsunshinecover.jpg";
import dark from "../../public/lebronsunshinecover-blacknwhite.jpg";
import Link from "next/link";

export default function Home() {
  console.log("Haza keren");

  return (
    <main className="flex justify-center items-center">
      <div className="h-[700px]"></div>
      <div className="flex flex-col w-[400px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-medium text-6xl text-center">
            Go To About Section
          </h1>
          <Link
            href="/about"
            className="text-white hover:text-gray-400 underline underline-offset-4 hover:underline-offset-8 duration-500 text-3xl mt-12"
          >
            About Us
          </Link>
        </div>
      </div>
      <div></div>
    </main>
  );
}
