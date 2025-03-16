import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Show = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 728);

  useEffect(() => {
    // Function to update screen size state on resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 728);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // GSAP animation with updated page height based on screen size
    const pageH = isSmallScreen ? "150vw" : "58vw";

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Show",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    timeline.fromTo(
      ".page1 span",
      {
        yPercent: 200,
        xPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        xPercent: 0,
        stagger: 0.1,
        opacity: 1,
      }
    ),
      timeline.fromTo(
        ".page2",
        {
          yPercent: 0,
          height: 100,
          width: 100,
          borderRadius: "40%",
        },
        {
          yPercent: -100,
          borderRadius: "0%",
          height: pageH,
          width: "100%",
        }
      );

    // Cleanup: remove event listener and kill GSAP animation on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
    };
  }, [isSmallScreen]); // Add isSmallScreen as a dependency to recalculate animations on resize

  return (
    <div className="w-full sm:h-[58vw] h-[150vw] overflow-hidden relative Show">
      {/* Pinned Section */}
      <div className=" relative bg-black">
        {/* Page 1 */}
        <div className="page1 relative w-full sm:h-[58vw] h-[150vw] bg-indigo-700  text-indigo-200 flex gap-[2vw] flex-wrap items-center justify-center text-[7vw] text-center font-bold sm:py-[20vw] py-[50vw]">
          <span>Its </span> <span> Not </span> <span>Your </span>{" "}
          <span>Regular</span> <span>Course</span>
        </div>

        {/* Page 2 */}
        <div className="page2 relative w-full sm:h-[58vw] h-[150vw] bg-[#000000] text-white flex justify-between items-center overflow-hidden origin-center mx-auto">
          <div className="w-[100vw] sm:h-[58vw] h-[150vw] flex justify-center items-center shrink-0">
            <div className="text-[4vw] w-[30vw] font-semibold text-center">
              <h1>Let&apos;s Go Beyond Limits</h1>
            </div>
            {!isSmallScreen ? (
              <div className="w-[100vw] sm:h-[58vw] h-[150vw] absolute top-0 left-0 flex justify-between items-center">
                <div className="w-[35vw] h-full flex flex-wrap justify-center items-center gap-[2vw] text-[1.3vw] text-center">
                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative rotate-12"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Open Source</h1>
                  </motion.div>

                  <motion.div
                    className="w-[12vw] h-[10vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative top-[5vw] -rotate-2"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Cyber Security</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[7vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative bottom-[5vw] left-[2vw] -rotate-6"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Hackathons</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[9vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative bottom-[3vw] left-[4vw]"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Profile Building</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative top-[8vw] right-[15vw] -rotate-12"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>CI/CD Pipelines</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative right-[2vw] -rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>ThreeJS</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>NextJS</h1>
                  </motion.div>
                </div>
                <div className="w-[35vw] h-full flex flex-wrap justify-center items-center gap-[2vw] text-[1.3vw] text-center">
                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative right-[3vw] -rotate-6"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>UI Libraries</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[7vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative top-[9vw] right-[7vw] -rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Kubernetes</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700  relative top-[5vw] right-[5vw] rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Docker</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700 relative top-[10vw] rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Testing</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Databases</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>Pub Subs</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[6vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700  relative right-[5vw] -rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>openAPI spec</h1>
                  </motion.div>

                  <motion.div
                    className="w-[10vw] h-[5vw] flex justify-center items-center border rounded-[1vw] p-2 bg-indigo-700  relative bottom-[5vw] right-[2vw] rotate-3"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>GRPC</h1>
                  </motion.div>
                </div>
              </div>
            ) : (
              <video
                autoPlay
                muted
                loop
                className="w-[100vw] sm:h-[58vw] h-[150vw] absolute top-0 left-0"
                src="https://v1.pinimg.com/videos/iht/720p/d0/8c/59/d08c594527c00a51885a1b593ac8ce77.mp4"
              ></video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
