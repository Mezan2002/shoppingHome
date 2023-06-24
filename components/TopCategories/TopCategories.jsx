import Image from "next/image";
import React from "react";

const TopCategories = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-4 gap-5 px-10 my-10">
        <div className="h-[390px] rounded-[35px] relative bg-gradient-to-r from-[#222222] to-[#363636]">
          <Image
            src="https://i.ibb.co/WVRm4XH/Mask-Group-5-1.png"
            width={370}
            height={390}
            className="z-40 absolute left-5"
          ></Image>
          <Image
            src="https://i.ibb.co/WVRm4XH/Mask-Group-5-1.png"
            width={200}
            height={220}
            className="z-40 absolute left-80 rotate-180"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-white">Enjoy</p>
            <p className="text-white text-5xl font-bold my-2">With</p>
            <p className="text-7xl font-black text-gray-800 z-0">Earphones</p>
            <button className="py-3 px-10 bg-[#fd4651] text-white mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
        <div className="h-[390px] bg-gradient-to-r from-[#FEC62E] to-[#FEC62E] rounded-[35px] relative">
          <Image
            src="https://i.ibb.co/TWwQWRj/clay-apple-watch-mockup-07.png"
            width={414}
            height={276}
            className="z-40 absolute left-32"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-white">New</p>
            <p className="text-white text-5xl font-bold my-2">Wear</p>
            <p className="text-7xl font-black text-[#FFD76A] z-0">Gadgets</p>
            <button className="py-3 px-10 bg-white text-[#FFD76A] mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
        <div className="col-span-2 h-[390px] rounded-[35px] bg-gradient-to-r from-[#F42C37] to-[#FD4853] relative">
          <Image
            src="https://i.ibb.co/G9q50NV/Laptop.png"
            width={601}
            height={412}
            className="z-40 absolute left-48"
          ></Image>
          <Image
            src="https://i.ibb.co/G9q50NV/Laptop.png"
            width={601}
            height={412}
            className="z-40 absolute left-96 -rotate-0"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-white">Trend</p>
            <p className="text-white text-5xl font-bold my-2">Device</p>
            <p className="text-7xl font-black text-[#F6565F] z-0">Laptops</p>
            <button className="py-3 px-10 bg-white text-[#FD4651] mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-10 my-10">
        <div className="col-span-2 h-[390px] rounded-[35px] bg-gradient-to-r from-[#EDEDEF] to-[#EEEFF1] relative">
          <Image
            src="https://i.ibb.co/zf3HSQD/Nice-Png-ps4-png-193822.png"
            width={319}
            height={300}
            className="z-40 absolute bottom-2 right-5"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-black">Best</p>
            <p className="text-black text-5xl font-bold my-2">Gaming</p>
            <p className="text-7xl font-black text-[#FFFFFF] z-0">Console</p>
            <button className="py-3 px-10 bg-[#fd4651] text-white mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
        <div className="h-[390px] bg-gradient-to-r from-[#2DD06F] to-[#67f59f] rounded-[35px] relative overflow-hidden">
          <Image
            src="https://i.ibb.co/MG3hd65/man-wearing-virtual-reality-headset-at-home-D7-AYCTV-2.png"
            width={535}
            height={356}
            className="z-40 absolute bottom-0 left-32"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-white">Play</p>
            <p className="text-white text-5xl font-bold my-2">Game</p>
            <p className="text-7xl font-black text-white">Oculus</p>
            <button className="py-3 px-10 bg-white text-[#2DD06F] mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
        <div className="h-[390px] bg-gradient-to-r from-[#147AFF] to-[#188FFF] rounded-[35px] relative">
          <Image
            src="https://i.ibb.co/JdkQgKr/P6YUXW1.png"
            width={414}
            height={276}
            className="z-40 absolute bottom-0 left-32"
          ></Image>
          <div className="absolute bottom-10 left-5">
            <p className="text-lg text-white">New</p>
            <p className="text-white text-5xl font-bold my-2">Amazom</p>
            <p className="text-7xl font-black text-white">Speakers</p>
            <button className="py-3 px-10 bg-white text-[#1688FF] mt-5 rounded-full">
              {" "}
              Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
