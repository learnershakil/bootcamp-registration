import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coupon from "../../assets/coupon.png";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = ({ setPopUp }) => {
  const handleApply = () => {
    setPopUp(true);
  };
  useEffect(() => {
    gsap.fromTo(
      ".why-us-title",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".why-us-title",
          start: "top 90%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".why-us-description",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".why-us-description",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".video-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".video-card",
          start: "top 75%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".community-card, .free-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".community-card, .free-card",
          start: "top bottom",
          end: "top 80%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".coupon-img",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".coupon-img",
          start: "top 75%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );

    // Scroll-triggered animation for Apply Now button
    gsap.fromTo(
      ".apply-btn",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".apply-btn",
          start: "top 75%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="w-full sm:min-h-[57vw] min-h-[120vw] bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      <div className="w-full h-[30vw] relative bottom-[4vw]">
        <h1 className="why-us-title sm:text-[7vw] text-[8vw] w-full text-center py-[9vw] font-bold">
          Why Learner&apos;s Arc?
        </h1>
        <div className="w-full absolute sm:top-[20vw] top-[26vw] text-center mt-[1.5vw]">
          <h2 className="why-us-description sm:w-[50vw] w-[65vw] sm:text-[1.2vw] text-[3vw] mx-auto border-t py-[3vw]">
            A transformative learning experience that goes beyond the basics,
            offering advanced skills, real-world applications, and a
            collaborative community—all for free.
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-[1.5vw] sm:w-[60vw] w-[85vw] sm:mx-[12vw] mx-[7vw] pb-[5vw] relative sm:mt-0 mt-[20vw]">
        <div className="flex gap-[1.5vw] sm:h-[25vw] h-[35vw]">
          <div
            className="project-card sm:w-[16vw] w-[28vw] shrink-0 rounded-[2vw] flex flex-col justify-between p-[1.5vw]"
            style={{
              background:
                "linear-gradient(135deg, rgba(52, 82, 82, 0.8), rgba(52, 82, 82, 0.4), rgba(134, 61, 53, 0.5))",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              color: "#fff",
              fontSize: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p className="sm:text-[1.1vw] text-[2vw]">
              <span className="bg-gradient-to-r from-[#ffffffda] to-[#ffffff8e] text-transparent bg-clip-text">
                Gain experience with{" "}
              </span>
              <span className="bg-gradient-to-r from-[#ffffff] via-[#ffffffdd] to-[#ffffff9c] text-transparent bg-clip-text">
                real-world applications{" "}
              </span>
              <span className="bg-gradient-to-r from-[#fffffff9] to-[#ffffff83] text-transparent bg-clip-text">
                and tools used in{" "}
              </span>
              <span className="bg-gradient-to-r from-[#ffffffd2] to-[#ffffffae] text-transparent bg-clip-text">
                modern tech stacks with
              </span>
            </p>

            <div>
              <div>
                <h1 className="sm:text-[2vw] text-[5vw] audiowide-regular leading-none bg-gradient-to-r from-[#fffffffd] to-[#ffffffb8] text-transparent bg-clip-text">
                  <span className="sm:text-[5vw] text-[7vw]">5+</span> Projects
                </h1>
              </div>
            </div>
          </div>

          <div className="video-card w-full rounded-[2vw] relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://videos.pexels.com/video-files/7898649/7898649-hd_1920_1080_15fps.mp4"
            ></video>
            <div
              className="w-full h-full bg-slate-100 rounded-[2vw] absolute top-0 left-0 backdrop-blur-md p-[2vw] text-zinc-900 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220, 220, 220, 1), rgba(225, 225, 225, 0.4), rgba(225, 225, 225, 0))",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <a
                href="https://learnershakil.notion.site/winter-of-code"
                className="bg-zinc-900 text-white w-fit px-[1.9vw] py-[0.7vw] sm:text-[1.1vw] text-[2vw] rounded-full"
              >
                Syllabus
              </a>
              <div>
                <p className="sm:text-[1.1vw] text-[2vw]">
                  We don’t just scratch the surface
                </p>
                <h1 className="sm:text-[4vw] text-[6vw] font-bold sm:w-[29vw] leading-none audiowide-regular">
                  Depth Over Breadth
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[1.5vw] sm:h-[10vw] h-[25vw] w-full">
          <div className="community-card sm:w-full w-[45vw] bg-gradient-to-br from-[#cfecf64c] to-[#dba4f285] rounded-[2vw] backdrop-blur-sm border border-zinc-500">
            <div className="w-full h-full flex flex-col justify-center items-center p-[1vw]">
              <h1 className="sm:text-[2vw] text-[4vw] text-zinc-300 font-bold audiowide-regular">
                Supportive Community
              </h1>
              <p className="sm:text-[1vw] text-[2vw] text-zinc-200 sm:text-center font-medium">
                Join a network of learners and mentors who are here to support
                you every step of the way
              </p>
            </div>
          </div>
          <div className="free-card sm:w-[26vw] w-[39vw] bg-zinc-700 border border-zinc-500 shrink-0 rounded-[2vw]">
            <div className="w-full h-full flex flex-col justify-center items-center p-[1vw]">
              <h1 className="sm:text-[2vw] text-[4vw] text-zinc-300 font-bold audiowide-regular">
                Completely Free
              </h1>
              <p className="sm:text-[1vw] text-[2vw] text-zinc-200 text-center font-medium">
                No hidden costs—just learning, growing, and building for free.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 sm:right-[-18vw] right-[-10vw] flex flex-col items-center gap-[0.5vw]">
          <div className="coupon-img w-[30vw] h-[12vw] overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src={coupon} alt="" />
          </div>

          <button
            onClick={handleApply}
            className="apply-btn border w-fit px-[4vw] py-[1.5vw] bg-indigo-600 hover:bg-indigo-700 rounded-[2vw] text-[2vw] audiowide-regular shadow-md shadow-indigo-500 border-zinc-400"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
