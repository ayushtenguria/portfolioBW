import Lottie from "lottie-react";
import app from "../animations/AndroidDev.json";

export const ServiceCard = () => {
  return (
    <div className="flex md:flex-col flex-row justify-center md:justify-between ">
      <div>
        <Lottie className="h-52 md:h-72" animationData={app} />;
      </div>
      <div className="align">
        <p>Service Name</p>
        <p>Service detail</p>
      </div>
    </div>
  );
};
