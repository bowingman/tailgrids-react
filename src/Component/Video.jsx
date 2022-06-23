/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

const Video = () => {
  const [videoOpen, setvideoOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Video Section Start --> */}
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-10/12">
              <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[450px]">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-primary bg-opacity-90">
                  <a
                    href="/#"
                    onClick={() => setvideoOpen(true)}
                    className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary md:h-[100px] md:w-[100px]"
                  >
                    <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      className="fill-current"
                    >
                      <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                    </svg>
                  </a>
                </div>

                <div>
                  <span className="absolute z-40 top-4 left-4">
                    <svg
                      width="50"
                      height="79"
                      viewBox="0 0 50 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="47.7119"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 47.7119 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="61.6385"
                        r="1.74121"
                        transform="rotate(180 47.7119 61.6385)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="46.3163"
                        r="1.74121"
                        transform="rotate(180 47.7119 46.3163)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="16.7159"
                        r="1.74121"
                        transform="rotate(180 47.7119 16.7159)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="31.3421"
                        r="1.74121"
                        transform="rotate(180 47.7119 31.3421)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 47.7119 1.74121)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 32.3916 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 32.3877 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 32.3916 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 32.3916 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 32.3877 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 32.3916 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 17.0674 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 17.0674 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 17.0674 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 17.0674 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 17.0674 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 17.0674 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 1.74316 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 1.74316 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 1.74316 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 1.74316 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 1.74316 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 1.74316 1.74145)"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="absolute z-40 bottom-4 right-4">
                    <svg
                      width="50"
                      height="79"
                      viewBox="0 0 50 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="47.7119"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 47.7119 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="61.6385"
                        r="1.74121"
                        transform="rotate(180 47.7119 61.6385)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="46.3163"
                        r="1.74121"
                        transform="rotate(180 47.7119 46.3163)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="16.7159"
                        r="1.74121"
                        transform="rotate(180 47.7119 16.7159)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="31.3421"
                        r="1.74121"
                        transform="rotate(180 47.7119 31.3421)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 47.7119 1.74121)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 32.3916 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 32.3877 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 32.3916 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 32.3916 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 32.3877 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 32.3916 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 17.0674 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 17.0674 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 17.0674 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 17.0674 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 17.0674 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 17.0674 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 1.74316 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 1.74316 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 1.74316 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 1.74316 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 1.74316 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 1.74316 1.74145)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-70">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            {videoOpen && (
              <>
                <iframe
                  className="h-[320px] w-full"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                />
              </>
            )}
          </div>

          <button
            onClick={() => setvideoOpen(false)}
            className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 cursor-pointer text-body-color hover:bg-black"
          >
            <svg viewBox="0 0 16 15" className="w-8 h-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
            </svg>
          </button>
        </div>
      </section>
      {/* <!-- ====== Video Section End -->    */}
    </>
  );
};

export default Video;
