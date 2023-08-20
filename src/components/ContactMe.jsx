import linkedin from "../animations/Linkedin.json";
import mail from "../animations/Mail.json"
import Lottie from "lottie-react";
import instagram from "../animations/Instagram.json"

export const ContactMe = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Connect with Me{" "}
          </h1>
        </div>

        <div>
          <div className="flex md:flex-row flex-col justify-around mt-10 md:mt-32">
            <a href="https://www.linkedin.com/in/ayush-sharma-800853120/">
              <Lottie className="h-60" animationData={linkedin} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-sharma-800853120/">
              <Lottie className="h-60" animationData={instagram} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-sharma-800853120/">
              <Lottie className="h-60" animationData={mail} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
