"use client"
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="w-full bg-gray-950 container mx-auto text-gray-300 pt-16 pb-8 px-6 rounded-t-2xl  border-gray-800">
            <div className="max-w-7xl mx-auto">
    
              {/* Main Grid: Logo + 4 Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
    
                {/* Brand Column */}
                <div className="col-span-2">
                  <Image draggable="false" className='flex select-none h-8 w-40 object-cover' alt='logo' width={600} height={100} src={"/logoM.png"} />
                  <p className="text-gray-400 mt-4 ml-6 text-sm leading-relaxed max-w-xs">
                       Building software's that moves the world forward.
                  </p>
                </div>
    
                {/* Column 1: Product */}
                <div>
                  <h4 className="text-white font-semibold mb-6">Product</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="#" >PixezAI</a></li>
    
                  </ul>
                </div>
                 <div>
                  <h4 className="text-white font-semibold mb-6">Company</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="/aboutus" >About</a></li>
                    <li><a href="/comingsoon" >Blogs</a></li>
                    <li><a href="#" >Contact us</a></li>
                  </ul>
                </div>
    
                {/* Column 4: Legal */}
                <div>
                  <h4 className="text-white font-semibold mb-6">User terms & Privacy</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                    
                  </ul>
                </div>
              </div>
    
              {/* Bottom Row: Social & Copyright */}
              <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs text-gray-500">
                  © 2026 Asaeun Pvt. Ltd. All rights reserved.
                </p>
    
                {/* Social Media Icons */}
                <div className="flex items-center gap-5">
                  <a href="https://x.com/AsaeunHQ" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900">
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 ">
                    <span className="sr-only">Instagram</span>
                    <IoLogoInstagram />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 ">
                    <span className="sr-only">Linkedin</span>
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/@Asaeun" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 ">
                    <span className="sr-only">Youtube</span>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer