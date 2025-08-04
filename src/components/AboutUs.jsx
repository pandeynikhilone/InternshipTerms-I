function AboutUs() {
  return (
    <div>
      <div className="flex flex-col text-center mx-auto p-4 bg-[#234540] mt-5 rounded-t-[40px]">
        <div className="text-[32px] lg:text-[38px] font-bold mt-4">
          About
          <span className="Comic text-[#fdb235]"> us</span>
        </div>
        <div className="">
          <div className=" text-justify p-6 text-[18px] md:text-[21px] text-zinc-400 Lato">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            quidem ducimus laborum quae nostrum expedita sint ipsa amet est!
            Magnam necessitatibus aspernatur quibusdam iure vero. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Veritatis quidem
            ducimus laborum quae nostrum expedita sint ipsa amet est! Magnam
            necessitatibus aspernatur quibusdam iure vero.
          </div>

          <div className="flex justify-end">
            <img className="w-[150px]" src="/Logo-1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
