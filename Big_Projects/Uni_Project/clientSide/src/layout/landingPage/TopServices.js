import carpanterPic from "../../Assets/Component_Pics/carpanterPic.png";
import cctvPic from "../../Assets/Component_Pics/cctvPic.png";
import cleaningPic from "../../Assets/Component_Pics/cleaningPic.png";
import electricPic from "../../Assets/Component_Pics/electricPic.png";
import pestPic from "../../Assets/Component_Pics/pestPic.png";
import plumbingPic from "../../Assets/Component_Pics/plumbingPic.png";
import repairPic from "../../Assets/Component_Pics/repairPic.png";
import SmallCard from "../../components/SmallCard";

const TopServices = () => {
  return (
    <section className="text-gray-600 ] pt-6 pb-10  " id="Services">
      <div>
        <h1 className="mb-1 text-3xl font-bold text-center text-black">
          {" "}
          Our Top Services
        </h1>
        <p className="mx-2 mb-5 text-center text-md sm:mx-0">
          Services Hub provides ultimate installations, repairs, maintenance,
          and grooming services at your doorstep
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <SmallCard
          name={"Home Appliance Repair"}
          image={repairPic}
          route={"services/applianceRepair"}
        />
        <SmallCard
          name={"Cleaning Services"}
          image={cleaningPic}
          route={"services/cleaningServices"}
        />
        <SmallCard
          name={"Electrical Services"}
          image={electricPic}
          route={"services/electricalServices"}
        />
        <SmallCard
          name={"CCTV Services"}
          image={cctvPic}
          route={"services/cctvServices"}
        />
        <SmallCard
          name={"Plumbing Services"}
          image={plumbingPic}
          route={"services/plumbingServices"}
        />
        <SmallCard
          name={"Pest Control Services"}
          image={pestPic}
          route={"services/pestControl"}
        />
        <SmallCard
          name={"Carpenter Services"}
          image={carpanterPic}
          route={"services/carpenterServices"}
        />
      </div>
    </section>
  );
};

export default TopServices;
