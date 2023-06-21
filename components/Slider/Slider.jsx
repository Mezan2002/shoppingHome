import "./Slider.css";

const Slider = () => {
  return (
    <div className="max-h-screen relative mt-[-230px]">
      <div className="carousel">
        <div id="item1" className="carousel-item relative">
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
        <div id="item2" className="carousel-item relative">
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
        <div id="item3" className="carousel-item relative text-white">
          <div className="">
            <img
              src="https://i.ibb.co/9YFqnnD/Untitled-design-1.png"
              className="w-full z-0"
            />
          </div>
          <div className="absolute top-[55%] left-20 z-40 w-1/4">
            <h2 className="text-4xl font-medium uppercase">
              Get <br />{" "}
              <span className="text-white bg-black">Anything you want</span>
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
        <div id="item4" className="carousel-item relative text-white">
          <div className="img-gradient">
            <img
              src="https://i.ibb.co/MnXxbsK/pexels-kadir-akman-16840121.jpg"
              className="w-full z-0"
            />
          </div>
          <div className="absolute top-[55%] left-20 z-40 w-1/4">
            <h2 className="text-4xl font-medium uppercase">
              Shop <br />{" "}
              <span className="text-white bg-black">for Every Occasion</span>
            </h2>
            <button className="btn btn-link mt-5 ml-[-10px] text-white">
              Shop Now
            </button>
            <div className="flex items-center mt-56">
              <h2>
                Camera Collection
                <span className="mx-5"> | </span>
              </h2>
              <button className="btn btn-xs">Go to Collection</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-[-110px]">
        <a href="#item1" className="btn btn-xs btn-circle text-center"></a>
        <a href="#item2" className="btn btn-xs btn-circle text-center"></a>
        <a href="#item3" className="btn btn-xs btn-circle text-center"></a>
        <a href="#item4" className="btn btn-xs btn-circle text-center"></a>
      </div>
    </div>
  );
};

export default Slider;
