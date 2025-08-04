function AboutUs() {
  return (
    <div id="about">
      <div className="flex flex-col text-center mx-auto p-4 bg-[#234540] mt-5 rounded-t-[40px]">
        <div className="text-[32px] lg:text-[38px] font-bold mt-4">
          About
          <span className="Comic text-[#fdb235]"> us</span>
        </div>
        <div className="">
          <div className=" text-justify p-6 text-[18px] md:text-[21px] text-zinc-400 Lato">
            We are a non-profit organization committed to driving positive
            change through education, healthcare, environmental protection, and
            women empowerment. By working closely with communities, volunteers,
            and partners, we strive to uplift the underprivileged and build a
            more inclusive and sustainable future. Join us in making a
            meaningful impact, one step and one life at a time.
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
