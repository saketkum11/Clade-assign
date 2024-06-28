import Description from "../component/Description";
import Header from "../component/Header";
import JobStatics from "../component/JobStatics";
import Tab from "../component/Tab";

const Home = () => {
  return (
    <div className="bg-utilityBackground">
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <Header />
      </div>
      <div className="pl-[6.25rem] py-5 border bg-white">
        <Tab />
      </div>
      <main className="flex ">
        <section className="bg-white w-full border-r-2">
          <Description />
        </section>
        <section className="max-w-[25rem] w-full">
          <JobStatics />
        </section>
      </main>
    </div>
  );
};

export default Home;
