import DistortImageCanvas from "./DistortImageCanvas";
import image from "../../assets/wocImage1.jpg";

const Stats = ({ setPopUp }) => {
  const handleJoin = () => {
    setPopUp(true);
  };
  
  const courses = [
    {
      title: "Frontend Mastery",
      description:
        "Build stunning interfaces with modern React, advanced CSS, and performance optimization techniques that employers demand.",
      linkText: "View Syllabus",
      link: "https://learnershakil.notion.site/winter-of-code"
    },
    {
      title: "Backend & DevOps",
      description:
        "Master server architecture, databases, API design, Linux fundamentals, and deployment workflows that power modern applications.",
      linkText: "View Syllabus",
      link: "https://learnershakil.notion.site/winter-of-code"
    },
    {
      title: "AI & App Dev",
      description:
        "Learn React Native for cross-platform apps and explore AI fundamentals with practical applications for tomorrow's tech landscape.",
      linkText: "View Syllabus",
      link: "https://learnershakil.notion.site/winter-of-code"
    },
  ];

  return (
    <div className="w-full relative sm:h-[56vw] h-[120vw] bg-gradient-to-r from-black via-zinc-900 to-black px-[7vw]">
      <div className="w-full h-full flex sm:flex-row flex-col justify-between sm:items-center z-20">
        <div className="flex flex-col gap-[5vw] z-10">
          <div className="sm:w-[30vw] w-[45vw] flex flex-col gap-[2vw] pt-[8vw]">
            <h2 className="sm:text-[1.2vw] text-[3.5vw] montserrat text-blue-400">
              by Learner&#39;s Arc
            </h2>
            <h1 className="sm:text-[4vw] text-[9vw] audiowide-regular leading-none">
              Build <span className="text-blue-400">real-world</span> skills <span className="font-light merienda">that matter</span>
            </h1>

            <p className="sm:text-[1.2vw] text-[3vw] montserrat">
              Join our FREE comprehensive bootcamp and transform yourself into a job-ready full stack developer.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:text-[0.9vw] text-[2.5vw]">
              <span className="bg-blue-900/30 border border-blue-500/30 rounded-full px-3 py-1">Frontend</span>
              <span className="bg-green-900/30 border border-green-500/30 rounded-full px-3 py-1">Backend</span>
              <span className="bg-purple-900/30 border border-purple-500/30 rounded-full px-3 py-1">React Native</span>
              <span className="bg-red-900/30 border border-red-500/30 rounded-full px-3 py-1">Linux</span>
              <span className="bg-yellow-900/30 border border-yellow-500/30 rounded-full px-3 py-1">AI</span>
            </div>
          </div>

          <button
            onClick={handleJoin}
            className="sm:text-[1.2vw] text-[4.5vw] bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full sm:py-3 py-2 px-6 text-center flex justify-center items-center sm:w-[15vw] w-[35vw] transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Join Now — Free!
          </button>
        </div>

        <div className="flex sm:flex-col sm:gap-[2vw] gap-[5vw] sm:w-[25vw] z-10 sm:mt-0 mt-[8vw]">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col gap-[1.5vw] sm:justify-normal justify-end hover:translate-y-[-0.2vw] transition-all duration-300"
            >
              <h1 className="sm:text-[1.7vw] text-[4vw] audiowide-regular leading-none text-blue-400">
                {course.title}
              </h1>

              <p className="sm:text-[1vw] text-[2.5vw] montserrat sm:flex hidden text-gray-300">
                {course.description}
              </p>

              <a href={course.link} target="_blank" rel="noopener noreferrer" className="sm:text-[1vw] text-[2.5vw] border border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-full sm:py-2 sm:px-[1vw] py-[1vw] px-[2vw] text-center flex justify-center items-center w-fit text-nowrap">
                {course.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute h-full sm:w-[40vw] w-[80vw] top-0 sm:left-[47%] left-[79vw] sm:right-auto z-0 -translate-x-[50%]">
        <DistortImageCanvas propImage={image} />
      </div>
      
      <div className="absolute bottom-[2vw] left-[7vw] sm:flex hidden gap-4 z-10">
        <div className="flex items-center gap-1 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">100% Free</span>
        </div>
        <div className="flex items-center gap-1 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Real Projects</span>
        </div>
        <div className="flex items-center gap-1 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Industry Ready</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
