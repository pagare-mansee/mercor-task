import React,{useState} from 'react';

function Section1() {
const [scrolled, setScrolled] = useState(0);
  const height = 640;
  var y = 0;
  const check = () => {
    y = window.scrollY;
    setScrolled(y);
  };
    window.addEventListener("scroll", check);
    return (
      <section className="h-full flex flex-col items-center justify-center bg-black">
          <div className="w-full px-[5rem]">
            <div className="w-[80%] px-[5rem]">
              <p className="font-semibold text-[3.875rem] leading-none">
                <span
                  className={`${
                    scrolled < height ? "text-[#202020]" : "text-white"
                  }`}
                >
                  In{" "}
                </span>
                <span
                  className={`${
                    scrolled < height ? "text-[#202020]" : "text-white"
                  }`}
                >
                  Chronicle{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 10 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  everything{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 40 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  is{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 40 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  made{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 80 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  with{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 80 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  Blocks{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 100 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  that{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 100 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  come{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 100 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  with{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 140 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  pixel{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 180 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  perfect{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 180 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  design,{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 180 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  interactivity{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 200 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  and{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 200 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  motion{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 200 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  out{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 220 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  of{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 240 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  the{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 240 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  box.{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 280 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  Instead{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 280 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  of{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 310 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  designing{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 340 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  from{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 340 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  sratch,{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 380 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  {" "}
                  simply{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 380 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  choose{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 420 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  the{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 420 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  right{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 420 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  one{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 440 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  from{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 440 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  our{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 480 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  library{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 480 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  of{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 480 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  blocks{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 520 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  and{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 520 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  see{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 520 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  the{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 540 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  magic{" "}
                </span>
                <span
                  className={`${
                    scrolled < height + 540 ? "text-[#202020]" : "text-white"
                  }`}
                >
                  unfold.{" "}
                </span>
              </p>
            </div>
          </div>
        </section>
     
    );
}

export default Section1;