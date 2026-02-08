"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-10 flex sticky z-50 container mx-auto  backdrop-blur p-6 rounded-b-2xl supports-[backdrop-filter]:bg-white inset-0 items-center justify-between mx-10">
      <div className=" flex items-center gap-4 text-sm h-10">
        <Link href={"/"}>
         <Image draggable="false" className="object-cover  select-none h-10 w-10" alt="logo-navbar" width={150} src={"/alogo.png"} height={200} />
        </Link>
      </div>
      <div className="flex text-black font-semibold cursor-pointer  gap-6">
        <span>Products</span>
        <Link href={"/comingsoon"}> <span>Careers</span></Link>
        <Link href={"/comingsoon"}> <span>Blogs</span></Link>
        <Link href={"/aboutus"}> <span>About</span> </Link>
        <span>FAQ</span>

      </div>
      <div >
        <Button className="bg-black  flex cursor-pointer h-8 text-white">For business</Button>
      </div>
    </header>
  )
}