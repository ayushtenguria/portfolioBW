import app from "../animations/AndroidDev.json";
import Lottie from "lottie-react";
import design from "../animations/design.json";
import dev from "../animations/Development.json";

export const Services = () => {
  return (
    <section>
      <div className="">
        <div className=" flex justify-center align-middle">
          <h1 className="text-3xl md:text-5xl font-semibold">Do you Need ? </h1>
        </div>
        <div className="my-12 md:my-36 flex md:flex-row flex-col">
          <div className="flex align-middle justify-center mx-6">
            <div>
              <Lottie className="h-52 md:h-72" animationData={app} />;
            </div>
            <div className="mt-4 mx-2 p-2">
              <p className="text-xl md:text-2xl font-semibold">Android Developement</p>
              <p className="w-48 font-semibold italic">
                Crafting stellar Android apps that bring ideas to life. From
                concept to code, I'm your partner in app excellence.
              </p>
            </div>
          </div>
          <div className="flex align-middle justify-center mx-6">
            <div>
              <Lottie className="h-52 md:h-72" animationData={dev} />;
            </div>
            <div className="mt-4 mx-2 p-2">
              <p className="text-xl md:text-2xl font-semibold">Web Developement</p>
              <p className="w-48 font-semibold italic">
                Coding dreams into functional websites. From e-commerce to
                portfolios, I transform ideas into user-friendly, feature-rich
                online realities.
              </p>
            </div>
          </div>
          <div className="flex align-middle justify-center mx-6">
            <div>
              <Lottie className="h-52 md:h-64" animationData={design} />;
            </div>
            <div className="mt-4 mx-2 p-2">
              <p className="text-xl md:text-2xl font-semibold">Web Design</p>
              <p className="w-48 font-semibold italic">
                Elevate your online presence with stunning web designs that
                captivate and engage. Your website, your story – beautifully
                told.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
