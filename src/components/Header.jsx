import Lottie from "lottie-react";
import developer from "../animations/Developer.json";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row m-10 md:p-10 justify-center ">
        <div className="md:p-5 md:m-5">
          <h1 className="text-3xl md:text-5xl font-semibold">Hi ! I am Ayush </h1>
          <div className="w-96 pr-4">
            <p>
              Lorem Ipsum texxt that can be anything which is not dtermined by
              me but i have to write it now to occupy some space
            </p>
          </div>
        </div>
        <div className="">
          <Lottie className="h-96" animationData={developer} />;
        </div>
      </div>
    </header>
  );
};
