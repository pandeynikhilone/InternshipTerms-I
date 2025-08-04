import Button from './Button.jsx';
import Navigation from './nav/Navigation.jsx'

function NGO_Home() {
  return (
    <>
      <div className="flex gap-[85px] flex-col bg-[#234540]">
        <Navigation />
        <main className="flex flex-col mx-auto justify-center md:w-[840px] w-full Lato gap-4">
          <div className="text-[32px] md:text-[50px] lg:text-[53px] mx-auto text-white font-bold text-center ">
            Let's make the world a better place by
            <span className="Comic text-[#fdb235] sm:whitespace-nowrap">
              {" "}
              creating a brighter future
            </span>
          </div>
          <div className="text-[#92a5a4] text-center text-[16px] sm:text-[18px] md:text-[20px]">
            Empowering individuals and communities to collaborate, innovate, &
            solve global challenges, fostering a brighter future for all.
          </div>
          <Button />
        </main>
        <section className="mx-auto">
          <div className="gap-10 hidden md:flex ">
            <img src="/image copy.png" alt="small baby" />
            <img src="/image copy 2.png" alt="small baby" />
            <img src="/image copy 3.png" alt="small baby" />
            <img src="/image copy 4.png" alt="small baby" />
          </div>
        </section>
      </div>

      <section>
        <div className="text-[32px] lg:text-[38px] mx-auto font-bold text-center mt-4">
          Our upcoming
          <span className="Comic text-[#fdb235]"> Programs</span>
        </div>
          <div className="rounded-[4px] bg-zinc-500">
            <img src="" alt="" />
            <div>Promote your business, support humanity with our products</div>
            <span>GET HELP</span>
          </div>
      </section>
    </>
  );
}

export default NGO_Home
