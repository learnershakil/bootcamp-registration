import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const scheduleRef = useRef(null);
  const titleRef = useRef(null);
  const dayRefs = useRef([]);

  useEffect(() => {
    const schedule = scheduleRef.current;
    const title = titleRef.current;
    const days = dayRefs.current;

    // Title Animation
    gsap.fromTo(
      title,
      { y: 300, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: { trigger: schedule, start: "top 85%" },
      }
    );

    // Day Cards Animation
    days.forEach((day, index) => {
      gsap.fromTo(
        day,
        { opacity: 0, x: index % 2 === 0 ? -150 : 150, scale: 0.85 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
          delay: index * 0.2,
          scrollTrigger: { trigger: day, start: "top 90%" },
        }
      );
    });
  }, []);

  const scheduleData = [
    {
      date: "18 March",
      day: 1,
      events: [
        { time: "5:15PM - 6PM", title: "Orientation" },
        { time: "6PM - 7PM", title: "HTML" },
      ],
    },
    {
      date: "19 March",
      day: 2,
      events: [
        { time: "5:15PM - 6PM", title: "Deep Dive CSS & Project" },
        { time: "6PM - 7PM", title: "Tailwind-CSS" },
      ],
    },
    {
      date: "20 March",
      day: 3,
      events: [
        { time: "5:15PM - 6PM", title: "Tailwind-CSS Project" },
        { time: "6PM - 7PM", title: "JS Foundation" },
      ],
    },
    {
      date: "21 March (Friday)",
      day: 4,
      events: [
        { time: "10AM - 12PM", title: "JS - Intermediate" },
        { time: "12PM - 1PM", title: "Lunch" },
        { time: "1PM - 2PM", title: "Basic Project - Todo App Drag & Drop" },
        { time: "2PM - 2:30PM", title: "AMA & Doubt Clearing" },
        { time: "2:30PM - 4PM", title: "Advance Concept & Project P-1" },
        { time: "4PM - 5PM", title: "Tea Break" },
        { time: "5PM - 7PM", title: "Advance Concept & Project P-2" },
      ],
    },
    {
      date: "22 March",
      day: 5,
      events: [
        { time: "10AM - 12PM", title: "Linux" },
        { time: "12PM - 1PM", title: "Lunch" },
        { time: "1PM - 2PM", title: "Git" },
        { time: "2PM - 2:30PM", title: "Github" },
        { time: "2:30PM - 4PM", title: "Nodejs & Express" },
        { time: "4PM - 5PM", title: "Tea Break" },
        { time: "5PM - 7PM", title: "DB & Zod & Global Catches" },
      ],
    },
    {
      date: "23 March",
      day: 6,
      events: [{ time: "HW", title: "Bun, HTTP server from http module, and explore 5 packages" }],
    },
    {
      date: "24 March",
      day: 7,
      events: [
        { time: "5:15PM - 6PM", title: "Auth" },
        { time: "6PM - 7PM", title: "Project" },
      ],
    },
    {
      date: "25 March",
      day: 8,
      events: [
        { time: "5:15PM - 6PM", title: "Auth" },
        { time: "6PM - 7PM", title: "Project" },
      ],
    },
    {
      date: "26 March",
      day: 9,
      events: [{ time: "5PM - 7PM", title: "React Foundation" }],
    },
    {
      date: "27 March",
      day: 10,
      events: [{ time: "5PM - 7PM", title: "React Intermediate" }],
    },
    {
      date: "28 March (Friday)",
      day: 11,
      events: [
        { time: "10AM - 12PM", title: "React Advance" },
        { time: "12PM - 1PM", title: "Lunch" },
        { time: "1PM - 4PM", title: "UI Library and Project" },
        { time: "4PM - 5PM", title: "Tea Break" },
        { time: "5PM - 7PM", title: "Typescript" },
      ],
    },
    {
      date: "29 March",
      day: 12,
      events: [
        { time: "10AM - 12PM", title: "Websockets" },
        { time: "12PM - 1PM", title: "Lunch" },
        { time: "1PM - 4PM", title: "AI in Web" },
        { time: "4PM - 5PM", title: "Tea Break" },
        { time: "5PM - 7PM", title: "Nextjs" },
      ],
    },
    {
      date: "30 March",
      day: 13,
      events: [{ time: "HW", title: "Build chatting App by Own" }],
    },
    {
      date: "31 March",
      day: 14,
      events: [{ time: "5:15PM - 7PM", title: "React-Native" }],
    },
    {
      date: "1 April",
      day: 15,
      events: [{ time: "5:15PM - 7PM", title: "Project: React-Native AI Powered App" }],
    },
  ];

  const currentDate = new Date("2025-03-16"); 
  const isCurrentDay = (date) => {
    const dayDate = new Date(`2025-${date.split(" ")[1]}-${date.split(" ")[0]}`);
    return (
      dayDate.getDate() === currentDate.getDate() &&
      dayDate.getMonth() === currentDate.getMonth()
    );
  };

  return (
    <section
      ref={scheduleRef}
      className="min-h-screen bg-[#070B18] py-40 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.25)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-15 bg-repeat bg-[length:800px_800px] bg-[linear-gradient(135deg,rgba(255,0,122,0.2)_0%,transparent_40%)]"></div>
      {/* Floating Orbs */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-[#00D4FF] rounded-full opacity-25 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#FF007A] rounded-full opacity-25 blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#FF007A] mb-24 drop-shadow-[0_0_40px_rgba(0,212,255,0.7)] tracking-wider"
        >
          Dev Bootcamp Timeline
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D4FF] via-[#FF007A] to-[#00D4FF] transform -translate-x-1/2 opacity-85"></div>

          {scheduleData.map((day, index) => (
            <div
              key={index}
              ref={(el) => (dayRefs.current[index] = el)}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Day Card */}
              <div
                className={`w-full md:w-1/2 bg-gradient-to-br from-[#1A1F35]/90 to-[#070B18]/90 backdrop-blur-3xl p-6 rounded-2xl border-2 border-t-[#00D4FF] border-r-[#FF007A] border-b-[#00D4FF] border-l-[#FF007A] shadow-[0_10px_40px_rgba(255,0,122,0.3)] hover:shadow-[0_10px_60px_rgba(0,212,255,0.4)] transition-all duration-400 transform hover:-translate-y-2 relative overflow-hidden ${
                  isCurrentDay(day.date)
                    ? "border-[#00D4FF] shadow-[0_10px_60px_rgba(0,212,255,0.6)] animate-pulse"
                    : ""
                } ${index % 2 === 0 ? "mr-12" : "ml-12"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-[#FF007A]/10 pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#00D4FF] mb-5 tracking-wide">
                  Day {day.day}: {day.date}
                </h3>
                <ul className="space-y-4">
                  {day.events.map((event, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-400"
                    >
                      <span className="text-[#FF007A] font-semibold text-sm md:text-base min-w-[110px] flex-shrink-0 group-hover:text-[#00D4FF] transition-colors duration-400">
                        {event.time}
                      </span>
                      <span className="text-white text-base md:text-lg font-medium group-hover:text-[#00D4FF] transition-colors duration-400 break-words">
                        {event.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Dot */}
              <div
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.9)] ${
                  isCurrentDay(day.date)
                    ? "bg-[#00D4FF] animate-ping"
                    : "bg-gradient-to-br from-[#FF007A] to-[#00D4FF]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;