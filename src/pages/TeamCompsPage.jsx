import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import TeamComps from "../components/TeamComps";

const TeamCompsPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="p-main-wrapper">
        <Aside></Aside>
        <TeamComps></TeamComps>
      </main>
    </div>
  );
};

export default TeamCompsPage;
