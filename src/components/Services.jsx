import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section>
      <div className="">
        <div className=" flex justify-center align-middle">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Do you Need ?{" "}
          </h1>
        </div>
        <div className="mt-12 md:mt-36">
            <ServiceCard/>
            {/* <ServiceCard/>
            <ServiceCard/> */}
        </div>
      </div>
    </section>
  );
};
