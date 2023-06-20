const Slider = () => {
  return (
    <div className="max-h-screen relative mt-[-170px]">
      <div className="carousel">
        <div id="item1" className="carousel-item">
          <img
            src="https://i.ibb.co/CJgpGnX/pexels-moose-photos-1037995-1.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item">
          <img
            src="https://i.ibb.co/hWbvy48/pexels-moose-photos-1037992.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5">
        <a href="#item1" className="btn btn-xs btn-circle text-center"></a>
        <a href="#item2" className="btn btn-xs btn-circle text-center"></a>
      </div>
    </div>
  );
};

export default Slider;
