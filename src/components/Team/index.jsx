import React from "react";

const Team = ({ children, title, subtitle, description }) => {
  return (
    <>
      {/* ====== Team Section Start */}
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">
                {subtitle}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                {title}
              </h2>
              <p className="text-base text-body-color">{description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">{children}</div>
      </div>
    </>
  );
};

export default Team;
