export const TestimonialCard = () => {
  return (
    <div className="flex p-5">
      <div className="flex border-[#111F4D] border-2 p-2 rounded-xl">
        <div className="rounded-full">
          <img
            className="rounded-full md:h-24"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          />
        </div>
        <div className="ml-6">
          <p>Name</p>
          <p className="font-light italic">Designation</p>
          <p className="w-60 md:w-80">
            Testimonial in text lamba chodha sa text lkhka checkkarunga ki kya
            likha hua h abhi mhi a pt kya type kar rha hoo
          </p>
        </div>
      </div>
    </div>
  );
};
