import Lottie from "lottie-react";
import developer from "../animations/Developer.json";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row m-10 md:p-10 justify-center ">
        <div className="md:p-5 md:m-5">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Hey, I'm Ayush{" "}
          </h1>
          <div className="w-96 pr-4 mt-6">
            <p className="font-semibold">
              your go-to developer, here to turn your crazy ideas into digital
              gold. I'm all about making magic with code – from mind-blowing
              apps to fresh-as-dew websites. Consider me your coding companion
              and meme-sharing extraordinaire. Together, we'll tackle bugs and
              bring your brainwaves to life. Startups or daydreamers, I've got
              your back in this digital rodeo. Let's chat and turn those "what
              ifs" into "heck yeahs." Ready to rock the code? 
            </p>
            <button className="bg-[#111F4D] text-[#F2F4F7] p-3 rounded-2xl my-5"><a href="#connect">Connect with me..🚀</a></button>
          </div>
        </div>
        <div className="">
          <Lottie className="h-96" animationData={developer} />;
        </div>
      </div>
    </header>
  );
};
