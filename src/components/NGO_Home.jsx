// NGO_Home Component
import AboutUs from "./AboutUs.jsx";
import Button from "./Button.jsx";
import Navigation from "./nav/Navigation.jsx";
import VolunteerForm from "./VolunteerForm.jsx";

const CardSection = () => {
  const data = [
    "Promote your business, support humanity with our products",
    "Mark your calendar: Exciting programs on 15 September at",
    "Celebrating our latest achievement: 50K happy members",
  ];

  const img = [
    "/icons/program-1.png",
    "/icons/program 2.png",
    "/icons/program 3.png",
  ];

  // Combine text and icon into one array
  const cards = data.map((text, i) => ({
    text,
    icon: img[i],
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-zinc-200 p-7 flex flex-col gap-5 rounded-2xl w-full sm:w-[300px] md:w-[342px] h-[226px] hover:translate-y-1.5 duration-200"
        >
          <img className="w-[56px]" src={card.icon} alt="card icon" />
          <div>{card.text}</div>
          <span className="text-[#fdb235] w-fit font-bold hover:cursor-pointer">
            GET HELP
          </span>
        </div>
      ))}
    </div>
  );
};

function NGO_Home() {
  return (
    <>
      <div className="flex gap-[45px] flex-col bg-[#234540]">
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

        <section className="mx-auto mb-5">
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

        <CardSection />
      </section>
      <VolunteerForm/>
      <AboutUs/>
    </>
  );
}

export default NGO_Home;
