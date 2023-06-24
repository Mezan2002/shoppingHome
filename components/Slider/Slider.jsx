"use client";
import { Carousel } from "@material-tailwind/react";

export default function Slider() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      prevArrow={false}
      nextArrow={false}
      className="relative mt-[-230px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="carousel-item relative">
        <img
          src="https://i.ibb.co/hWbvy48/pexels-moose-photos-1037992.jpg"
          className="w-full z-0"
        />
        <div className="absolute top-[55%] left-20 z-40 w-1/5 text-black">
          <h2 className="text-4xl font-medium uppercase">
            Find <br /> <span className="bg-[#C0E5DE]">the Perfect Gift</span>
          </h2>
          <button className="btn btn-link mt-5 ml-[-10px] text-black">
            Shop Now
          </button>
          <div className="flex items-center mt-56">
            <h2>
              Headphones Collection
              <span className="mx-5"> | </span>
            </h2>
            <button className="btn btn-xs">Go to Collection</button>
          </div>
        </div>
      </div>
      <div className="carousel-item relative">
        <div className="">
          <img
            src="https://i.ibb.co/CJgpGnX/pexels-moose-photos-1037995-1.jpg"
            className="w-full z-0"
          />
        </div>
        <div className="absolute top-[55%] left-20 z-40 w-1/5 text-black">
          <h2 className="text-4xl font-medium uppercase stroke-red-500">
            Shop <br />{" "}
            <span className="bg-black text-white">with Confidence</span>
          </h2>
          <button className="btn btn-link mt-5 ml-[-10px] text-black">
            Shop Now
          </button>
          <div className="flex items-center mt-56">
            <h2>
              Toys Collection <span className="mx-5"> | </span>
            </h2>
            <button className="btn btn-xs">Go to Collection</button>
          </div>
        </div>
      </div>
      <div className="carousel-item relative text-white">
        <div className="">
          <img
            src="https://i.ibb.co/9YFqnnD/Untitled-design-1.png"
            className="w-full z-0"
          />
        </div>
        <div className="absolute top-[55%] left-20 z-40 w-1/4">
          <h2 className="text-4xl font-medium uppercase text-black">
            Get <br /> <span className=" bg-[#C0E5DE]">Anything you want</span>
          </h2>
          <button className="btn btn-link mt-5 ml-[-10px] text-white">
            Shop Now
          </button>
          <div className="flex items-center mt-56">
            <h2>
              Ladies Bags Collection
              <span className="mx-5"> | </span>
            </h2>
            <button className="btn btn-xs">Go to Collection</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
