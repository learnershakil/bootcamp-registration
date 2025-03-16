import { useState } from 'react';

const faqs = [
  { question: "What is Dev Bootcamp?", answer: "Dev Bootcamp is a free comprehensive bootcamp covering Frontend, Backend, Linux, AI, and App Development (React Native) to provide deep, hands-on learning experience." },
  { question: "Who can join?", answer: "Anyone passionate about coding and willing to put in the effort." },
  { question: "Is it really free?", answer: "Yes, completely free!" },
  { question: "What technologies will be taught?", answer: "The bootcamp covers a full technology stack including Frontend development, Backend systems, Linux fundamentals, AI concepts, and mobile App Development using React Native." },
  { question: "What support will I receive during Dev Bootcamp?", answer: "Throughout Dev Bootcamp, students will receive mentorship, access to a community of learners, and detailed project guides across all technology domains. There will be regular doubt-clearing sessions and feedback on assignments and projects to help you grow and succeed." },
  { question: "What is the selection process?", answer: "Registered students will participate in a one-week trial period of classes. During this time, their performance will be evaluated daily based on their eagerness to learn, active class participation, and consistent completion of homework. Prior knowledge in the subject is not a primary selection criterion. We value students' enthusiasm, engagement, and ability to apply concepts learned in class." }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-900 flex justify-center items-center px-4 pt-[7vw] pb-[4vw]">
      <div className="sm:w-[60vw] w-full bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center text-yellow-400 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question flex justify-between items-center cursor-pointer bg-zinc-700 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-zinc-600"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <span className="text-xl text-white">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer mt-2 p-4 bg-zinc-600 rounded-lg text-gray-300 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
