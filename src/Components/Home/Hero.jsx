import { motion } from "framer-motion";
import logo from "../../assets/Logos/IconWhite.svg";

const Hero = ({ setPopUp }) => {
  const handleRegister = () => {
    setPopUp(true);
  };
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-0.2"
        className="w-full min-h-[45vw] sm:flex hidden justify-between items-center px-[6vw]"
      >
        <motion.div
          className="w-[40vw] flex flex-col gap-[2vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="flex items-center gap-[1vw] mb-[0.5vw]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-500 h-[0.5vw] w-[3vw] rounded-full"></span>
            <span className="text-blue-400 font-semibold tracking-wider text-[1vw]">LIMITED-TIME OPPORTUNITY</span>
          </motion.div>

          <motion.h1
            className="text-[3.5vw] font-bold leading-[4.2vw] bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            Launch Your Dream Tech Career: Elite Full-Stack Bootcamp — Absolutely FREE
          </motion.h1>
          <motion.p
            className="text-[1.2vw] text-zinc-300 leading-[1.8vw]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Accelerate your development journey with our industry-recognized bootcamp covering Frontend, Backend, DevOps, AI/ML, and Mobile Development. Learn directly from Hackathon Winners and build an impressive portfolio that hiring managers can&apos;t ignore. Join a vibrant community of tech enthusiasts at our state-of-the-art LPU campus facilities.
          </motion.p>

          <motion.div 
            className="flex items-center gap-[2vw] mt-[1vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="text-amber-300 text-[1vw] font-semibold border border-amber-400 bg-amber-900 bg-opacity-30 px-[1vw] py-[0.3vw] rounded-md flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-[0.9vw] h-[0.9vw]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              ENROLLMENT OPENS MARCH 20, 2025
            </motion.div>
            <motion.div 
              className="text-emerald-300 text-[1vw] font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "rgba(16, 185, 129, 1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-[1.1vw] h-[1.1vw]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 4.707a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414L12 11.414l2.293 2.293a1 1 0 001.414-1.414L13.414 10l2.293-2.293a1 1 0 00-1.414-1.414L12 8.586 9.707 6.293z" clipRule="evenodd" />
              </svg>
              INDUSTRY-LEVEL TRAINING AT ZERO COST
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-[2vw] mt-[1.5vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              onClick={handleRegister}
              className="w-[12vw] py-[0.9vw] bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-[1.2vw] font-medium shadow-lg shadow-purple-900/30 flex items-center justify-center gap-[0.5vw]"
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px -5px rgba(147, 51, 234, 0.5)",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #7c3aed)" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Secure Your Spot Today</span>
              <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <motion.button
              className="w-[10vw] py-[0.9vw] border border-zinc-400 rounded-full text-[1.2vw] flex items-center justify-center gap-[0.5vw]"
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1)",
                borderColor: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-[1vw] h-[1vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Explore Curriculum</span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex mt-[2vw] gap-[1.2vw] items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  className="w-[1.8vw] h-[1.8vw] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-zinc-800"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                ></motion.div>
              ))}
            </div>
            <p className="text-zinc-300 text-[0.9vw]"><span className="text-white font-semibold">100+ professionals</span> already securing their future</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[1.5vw] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="flex gap-[1.5vw] items-end relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.div
              data-scroll
              data-scroll-speed=".1"
              className="w-[16vw] h-[22vw] rounded-[2vw] overflow-hidden shadow-xl shadow-purple-900/20 border border-zinc-700"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1,
              }}
              whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(147, 51, 234, 0.3)", transition: { duration: 0.3 } }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/4a/82/af/4a82aff856e4175f1c29a2ec1ae032e1.jpg"
                alt="Coding student"
              />
            </motion.div>

            <motion.div
              className="w-[8vw] h-[8vw] bg-gradient-to-br from-[#0425B1] to-[#C144FF] border-zinc-900 border-[0.7vw] absolute top-[-2vw] left-[12vw] rounded-full overflow-hidden shadow-lg shadow-purple-900/40 flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8,
                delay: 0.8,
              }}
              whileHover={{ rotate: 15, scale: 1.1, transition: { duration: 0.4 } }}
            >
              <img
                className="w-[5vw] h-[5vw] object-contain"
                src={logo}
                alt="Bootcamp logo"
              />
            </motion.div>

            <motion.div
              data-scroll
              data-scroll-speed=".4"
              className="w-[16vw] h-[20vw] rounded-[2vw] overflow-hidden relative top-[3vw] shadow-xl shadow-blue-900/20 border border-zinc-700"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 1,
              }}
              whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/d5/b8/56/d5b85646e59db988d3eb47b1947092c7.jpg"
                alt="Developer coding"
              />
            </motion.div>
          </motion.div>

          <motion.div
            data-scroll
            data-scroll-speed=".2"
            className="w-[22vw] h-[15vw] rounded-[2vw] overflow-hidden relative right-[5vw] shadow-xl shadow-blue-900/20 border border-zinc-700"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src="https://cdn.dribbble.com/userupload/2712527/file/original-70b2acaa3f9e74763188feb56776ee85.mp4"
            ></video>
          </motion.div>

          <motion.div
            data-scroll
            data-scroll-speed=".15"
            className="w-[12vw] h-[5vw] bg-gradient-to-br from-[#1C2970] to-[#4F529D] border-zinc-900 border-[0.7vw] absolute bottom-[12vw] left-[12vw] rounded-full flex justify-center items-center text-[1.2vw] font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
              delay: 0.8,
            }}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
          >
            <span className="flex items-center gap-2 pl-2">
              <svg className="w-[1.2vw] h-[1.2vw]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              @ LPU Campus
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full h-[210vw] overflow-hidden relative sm:hidden">
        <motion.video
          data-scroll
          data-scroll-speed="-.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://v1.pinimg.com/videos/mc/720p/3b/c4/69/3bc4693a457a865a28e35cb47615bf5e.mp4"
        ></motion.video>

        <motion.div
          className="w-full h-full flex flex-col px-[6vw] bg-gradient-to-br from-zinc-900 via-[#000000e1] to-[#0000001e] absolute top-0 left-0 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full pt-[6vw] pb-[2vw]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue-500 h-[1vw] w-[10vw] rounded-full inline-block mr-[3vw]"></span>
            <span className="text-blue-400 font-semibold tracking-wider text-[3.5vw]">EXCLUSIVE OPPORTUNITY</span>
          </motion.div>

          <motion.h1
            className="w-full text-[9vw] leading-[10vw] mb-[3vw] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Your Gateway to Tech Excellence — 100% FREE
          </motion.h1>

          <motion.div 
            className="flex items-center gap-[3vw] mb-[4vw]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-amber-300 text-[4vw] font-semibold border border-amber-400 bg-amber-900 bg-opacity-30 px-[3vw] py-[1vw] rounded-md flex items-center gap-[2vw]">
              <svg className="w-[4vw] h-[4vw]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              STARTING MARCH 20, 2025
            </div>
          </motion.div>

          <div className="flex flex-col px-[4vw]">
            <motion.div
              data-scroll
              data-scroll-speed="0.1"
              className="w-[30vw] h-[30vw] rounded-[4vw] overflow-hidden border border-zinc-700 shadow-lg shadow-purple-900/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/4a/82/af/4a82aff856e4175f1c29a2ec1ae032e1.jpg"
                alt="Coding student"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>

            <motion.div
              data-scroll
              data-scroll-speed="0.2"
              className="w-[60vw] h-[35vw] rounded-[4vw] overflow-hidden border border-zinc-700 relative left-[15vw] bottom-[10vw] shadow-lg shadow-blue-900/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/d5/b8/56/d5b85646e59db988d3eb47b1947092c7.jpg"
                alt="Developer coding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              data-scroll
              data-scroll-speed="0.3"
              className="w-[54vw] h-[45vw] rounded-[4vw] overflow-hidden border border-zinc-700 relative bottom-[7vw] shadow-lg shadow-purple-900/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.video
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                src="https://cdn.dribbble.com/userupload/2712527/file/original-70b2acaa3f9e74763188feb56776ee85.mp4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              ></motion.video>
            </motion.div>
          </div>

          <motion.p
            className="w-[70vw] p-[5vw] text-[4vw] rounded-[4vw] backdrop-blur-md relative left-[15vw] bottom-[25vw] leading-[5vw]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.4), rgba(147, 51, 234, 0.3))",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.3)",
            }}
          >
            Master in-demand skills and build impressive projects alongside industry experts. Transform your passion into a thriving tech career!
          </motion.p>

          <motion.div 
            className="flex items-center gap-[4vw] relative bottom-[20vw] mb-[4vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-[5vw] h-[5vw] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-zinc-800"></div>
              ))}
            </div>
            <p className="text-zinc-300 text-[3.5vw]"><span className="text-white font-semibold">100+ ambitious learners</span> already enrolled</p>
          </motion.div>

          <motion.button 
            onClick={handleRegister}
            className="text-[5vw] font-bold relative bottom-[10vw] rounded-full py-[3vw] w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-900/30 flex items-center justify-center gap-[2vw]"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02, background: "linear-gradient(to right, #3b82f6, #8b5cf6, #7c3aed)" }}
          >
            <span>Join the Tech Elite Today</span>
            <svg className="w-[4vw] h-[4vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
