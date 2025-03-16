import { motion } from "framer-motion";
import footerbg from "../../assets/footerbg.png";
import DistortImageCanvas from "./DistortImageCanvas";
import Instagram from "./../../../public/instagram.png";

const Footer = ({ setPopUp }) => {
  const handleRegister = () => {
    setPopUp(true);
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: "circInOut" }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-zinc-900 w-full"
      id="footer"
    >
      <motion.div
        initial={{ borderRadius: 200 }}
        transition={{ duration: 1, ease: "easeIn" }}
        whileInView={{ borderRadius: 30 }}
        className="bg-zinc-950 w-full sm:h-[37vw] h-[100vw] rounded-t-[4vw] flex sm:flex-row flex-col gap-[1.5vw] p-[4vw] border-t border-zinc-400 overflow-hidden"
      >
        <div className="w-full h-full bg-zinc-800 rounded-[1.5vw] flex overflow-hidden">
          <div className="sm:w-[24vw] w-full h-full flex flex-col justify-between p-[2vw] ">
            <h1 className="audiowide-regular sm:text-[3vw] text-[6vw] sm:w-[30vw]">
              Unleash Your Potential, Code Your Future
            </h1>

            <button
              onClick={handleRegister}
              href=""
              className="bg-gradient-to-br from-indigo-400 to-indigo-700 w-fit px-[3vw] py-[1vw] rounded-[1.5vw] sm:text-[1.5vw] text-[3vw] text-zinc-100 font-medium"
            >
              Join for <span className="text-white">Free</span>
            </button>
          </div>

          <div className="sm:w-[20vw] w-[40vw] h-full relative top-[2vw]">
            <DistortImageCanvas propImage={footerbg} />
          </div>
        </div>
        <div className="w-full h-full rounded-[1.5vw] flex gap-[1.5vw]">
          <div className="w-full h-full rounded-[1.5vw] flex flex-col gap-[1.5vw]">
            <a
              href="mailto:learnersarc@gmail.com?subject=Inquiry&body=Hello, I have a query regarding..."
              className="w-full h-full bg-zinc-800 rounded-[1.5vw] flex flex-col gap-[1.5vw] p-[1vw]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h2 className="sm:text-[1.1vw] text-[3vw]">
                Have more queries?..Drop a Mail
              </h2>
              <img
                className="bg-zinc-800 sm:h-[14vw] h-[18vw] sm:object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail Icon"
              />
            </a>
            <a
              href="https://learnershakil.notion.site/winter-of-code"
              target="_blank"
              className="w-full h-full bg-zinc-800 rounded-[1.5vw] p-[1vw]"
            >
              <span className="sm:text-[1.1vw] text-[3vw]">View</span>
              <h2 className="sm:text-[2.3vw] text-[4vw] audiowide-regular text-nowrap">
                Syllabus
              </h2>
            </a>
          </div>

          <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-indigo-700 rounded-[1.5vw] p-[2vw] flex flex-col gap-[2vw]">
            <h1 className="sm:text-[2.5vw] text-[5vw] tinos-bold">
              Connect Us.
            </h1>

            <div className="w-full h-full flex flex-col gap-[1vw]">
              <a
                href="https://x.com/Learners_arc"
                target="_blank"
                className="flex gap-[1.5vw] items-center"
              >
                <div className="sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/640px-X_logo.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="sm:text-[1.2vw] text-[3vw] font-semibold">
                    Twitter
                  </h1>
                  <p className="sm:text-[1vw] text-[2vw]">@Learners_arc</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/learnersarc/"
                target="_blank"
                className="flex gap-[1.5vw] items-center"
              >
                <div className="sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg overflow-hidden ">
                  <img
                    className="w-full h-full bg-black p-[0.5vw]"
                    src={Instagram}
                    alt="Instagram"
                  />
                </div>

                <div>
                  <h1 className="sm:text-[1.2vw] text-[3vw] font-semibold">
                    Instagram
                  </h1>
                  <p className="sm:text-[1vw] text-[2vw]">@learnersarc</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/learners-arc/"
                target="_blank"
                className="flex gap-[1.5vw] items-center"
              >
                <div className="sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full bg-white"
                    src="https://www.svgrepo.com/download/16193/linkedin-logo.svg"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="sm:text-[1.2vw] text-[3vw] font-semibold">
                    Linkedin
                  </h1>
                  <p className="sm:text-[1vw] text-[2vw]">@Learners-arc</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@LearnersArc-l8i"
                target="_blank"
                className="flex gap-[1.5vw] items-center"
              >
                <div className="sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/YouTube_dark_icon_%282017%29.svg/2560px-YouTube_dark_icon_%282017%29.svg.png"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="sm:text-[1.2vw] text-[3vw] font-semibold">
                    Youtube
                  </h1>
                  <p className="sm:text-[1vw] text-[2vw]">@LearnersArc-l8i</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
