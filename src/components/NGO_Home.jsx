import Button from './Button.jsx';
import Navigation from './nav/Navigation.jsx'

function NGO_Home() {
  return (
    <div className="flex gap-[85px] flex-col">
      <Navigation />
      <main className="flex flex-col mx-auto justify-center w-[840px] Lato gap-4">
        <div className="text-[53px] mx-auto text-white font-bold">
          Let's make the world a better place by
          <span className="Comic text-[#fdb235] whitespace-nowrap">
            {" "}
            creating a brighter future
          </span>
        </div>
        <div className="text-[#92a5a4] text-center text-[20px]">
          Empowering individuals and communities to collaborate, innovate, &
          solve global challenges, fostering a brighter future for all.
        </div>
      <Button/>
      </main>
    </div>
  );
}

export default NGO_Home
