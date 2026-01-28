import React from "react";

const BlogCard = ({ title, description, image, link }) => (
  <div className="group relative flex flex-col md:flex-row items-center md:items-stretch gap-8 h-72 transition-transform duration-300 ease-in transform hover:scale-105">
    <div className="relative w-full md:w-96 h-72">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-[#e8e3d8]/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
    </div>
    <div className="flex-1 flex flex-col justify-end items-start h-72">
      <h3 className="text-lg font-semibold tracking-wide mb-2 uppercase text-black">{title}</h3>
      <p className="mb-4 text-neutral-700">{description}</p>
      <a href={link} className="text-xs tracking-widest font-medium underline-offset-4 text-black hover:underline hover:text-neutral-900 transition-colors">LEARN MORE</a>
    </div>
  </div>
);

export default BlogCard;
