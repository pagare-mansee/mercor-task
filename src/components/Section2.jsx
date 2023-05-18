import { useState, useEffect } from "react";
import React from "react";

function Section2() {
  const [card, setCard] = useState("01");
  const [height, setheight] = useState(10);
  const [scrolled, setScrolled] = useState(0);

  const changeHeight = () => {
    
    var pre = scrolled;
    var y = window.scrollY;
    var h = height;

    if (y>=1700) h = 100;
    else {
      if (y > 1500) {
        if (pre > y) {
          if (height - 10 > 10) h = height - 10;
          else h = 10;
        } else {
          if (height + 10 < 100) h = height + 10;
          else h = 100;
        }
      } else h = 15;
    }
    console.log(h);
    console.log(y);
    setheight(h);
    setScrolled(y);
  };

 useEffect(()=>change())

  const change = () => {
    if (height <= 33) {
      document.getElementById("one").style.opacity = 1;
      document.getElementById("one").style.transform = "translate(0px, 0px)";
      document.getElementById("two").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("two").style.opacity = 0;
      document.getElementById("three").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("three").style.opacity = 0;
      setCard("01")

    } else if (height > 33 && height <= 66) {
      document.getElementById("two").style.opacity = 1;
      document.getElementById("two").style.transform = "translate(0px, 0px)";
      document.getElementById("one").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("one").style.opacity = 0;
      document.getElementById("three").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("three").style.opacity = 0;
      setCard("02")
    } else {
      document.getElementById("three").style.opacity = 1;
      document.getElementById("three").style.transform = "translate(0px, 0px)";
      document.getElementById("two").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("two").style.opacity = 0;
      document.getElementById("one").style.transform =
        "translate3d(0px,250px,0px) scale(0.8, 0.8)";
      document.getElementById("one").style.opacity = 0;
      setCard("03")
    }
  };
  

  window.addEventListener("scroll", changeHeight);
  return (
    <section className="h-full bg-black flex items-center justify-center my-40" id="sec2">
      
      <div className="h-full w-[50%] flex items-center">
        <div className="w-[90%]  px-[5rem]">
          <div className="flex items-center gap-[5px] mb-4 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[3px]"
            >
              <path
                d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                fill="#A594FD"
              ></path>
            </svg>
            <h4 className="font-normal text-[#A594FD] text-[1.5rem]">Workflow</h4>
          </div>
          <h2 className="font-semibold text-[5.5rem] leading-none text-white mb-[2.5rem]">
            Create at the speed of thought.
          </h2>
          <p className="text-white text-[1rem]">
            Focus on your getting your thoughts out and crafting the best
            message while Chronicle does the heavy lifting for you
          </p>
        </div>
      </div>

      <div className="h-full w-1/2 bg-black flex items-center relative">
        <div className="h-screen">
          <div
            id="one"
            className="absolute h-full top-0 left-0 w-full flex items-center pr-16 "
            style={{
              transform: "translate(0px, 0px)",
              opacity: 1,
              transition: "opacity 0.5s linear, transform 0.5s linear",
            }}
          >
            <div className="bg-[#101010] rounded-xl text-white h-[75%] w-[80%] flex flex-col px-[2rem]">
              <div className="h-1/2 w-[80%] bg-white opacity-[0.1]  mx-auto rounded-lg mt-4"></div>
              <div className="pt-16 pb-16 text-center  w-[90%] mx-auto">
                <h3 className="text-[2.375rem]  tracking-normal font-semibold leading-none">
                  A keyboard
                  <br />
                  first experience.
                </h3>
                <p className="text-[1.25rem] font-normal pt-4 tracking-tight">
                  Powerful shortcuts and a keyboard-first workflow means you
                  will get to your finish line in no time!
                </p>
              </div>
            </div>
          </div>

          <div
            id="two"
            className=" absolute h-full top-0 left-0 w-full flex items-center pr-16"
            style={{
              opacity: 0,
              transform: "translate(0px, 250px) scale(0.8, 0.8)",
              transition: "opacity 0.5s linear, transform 0.5s linear",
            }}
          >
            <div className="bg-[#101010] rounded-xl text-white h-[75%] w-[80%] flex flex-col px-[2rem]">
              <div className="h-1/2 w-[80%] bg-white opacity-[0.1]  mx-auto rounded-lg mt-4"></div>
              <div className="py-16 text-center  w-[90%] mx-auto">
                <h3 className="text-[2.375rem] tracking-normal font-semibold leading-none">
                  Bullets to visuals
                  <br />
                  in a click.
                </h3>
                <p className="text-[1.25rem] font-normal pt-4 tracking-tight">
                  Transform any block to any other and try different options
                  without any design hassle
                </p>
              </div>
            </div>
          </div>

          <div
            id="three"
            className=" absolute h-full top-0 left-0 w-full flex items-center pr-16"
            style={{
              opacity: 0,
              transform: "translate(0px, 250px) scale(0.8, 0.8)",
              transition: "opacity 0.5s linear, transform 0.5s linear",
            }}
          >
            <div className="bg-[#101010] rounded-xl text-white h-[75%] w-[80%] flex flex-col px-[2rem]">
              <div className="h-1/2 w-[80%] bg-white opacity-[0.1]  mx-auto rounded-lg mt-4"></div>
              <div className="py-16 text-center  w-[90%] mx-auto">
                <h3 className="text-[2.375rem] tracking-normal font-semibold leading-none">
                  A powerful assistant
                  <br />
                  just a click away.
                </h3>
                <p className="text-[1.25rem] font-normal pt-4 tracking-tight">
                  Insert blocks, perform powerful actions and leverage the
                  limitless power of AI - all without leaving your keyboard
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] right-32 -translate-y-[50%] flex flex-col items-center gap-2">
            <span className="text-[12px] opacity-40 text-white">{card}</span>
            <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
              <span
                className="absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"
                style={{ height: `${height}%` }}
              ></span>
            </div>
            <span className="text-[12px] opacity-40  text-white">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
