import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = ({ setPopUp }) => {
  const [info, setInfo] = useState(false);

  const handleToggle = () => {
    setInfo(!info);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    linkedin: "",
    college: "",
    course: "",
    year: "",
    phone: "",
    reg: "",
    discord: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    if (!formData.name) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.email) {
      toast.error("Email is required");
      return false;
    }
    if (!formData.github) {
      toast.error("GitHub URL is required");
      return false;
    }
    if (!formData.linkedin) {
      toast.error("LinkedIn URL is required");
      return false;
    }
    if (!formData.college) {
      toast.error("College name is required");
      return false;
    }
    if (!formData.course) {
      toast.error("Course name is required");
      return false;
    }
    if (!formData.year) {
      toast.error("Year is required");
      return false;
    }
    if (!formData.phone || formData.phone.length < 10) {
      toast.error("Phone number should be at least 10 characters");
      return false;
    }
    if (!formData.reg) {
      toast.error("Registration no. is required");
      return false;
    }
    if (!formData.discord || formData.discord.length < 2) {
      toast.error("Discord username should be at least 2 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://dev.learnersarc.com:3000/api/register",
        formData
      );
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        github: "",
        linkedin: "",
        college: "",
        course: "",
        year: "",
        phone: "",
        reg: "",
        discord: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }

    setIsSubmitting(false);
  };

  const closeForm = (event) => {
    setPopUp(false);
    event.stopPropagation();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="flex justify-center sm:items-center sm:h-screen w-full bg-gradient-to-br from-indigo-900/50 via-purple-900/60 to-zinc-900 bg-opacity-95 backdrop-blur-md overflow-auto sm:p-[5vw] p-4 z-50 transition-all duration-300"
      onClick={closeForm}
    >
      <form
        onClick={stopPropagation}
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-8 rounded-2xl w-full max-w-4xl shadow-2xl border border-indigo-500/20 z-50 relative transform transition-all duration-300 hover:shadow-indigo-500/10"
      >
        <div className="flex items-center space-x-3 mb-8">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full"></div>
          <h2 className="text-3xl text-white font-bold">
            Join Our Dev Bootcamp!
          </h2>
        </div>
        <p className="text-indigo-300 mb-6 -mt-4 ml-4">
          We&apos;re excited to have you on board! Let&apos;s get to know you
          better.
        </p>

        <div className="sm:space-y-5 space-y-3 w-full">
          <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 w-full">
            {/* Name */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="What should we call you?"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Where can we reach you?"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 w-full">
            {/* Github */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                GitHub Profile
              </label>
              <input
                type="text"
                name="github"
                placeholder="Share your awesome projects"
                value={formData.github}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>

            {/* LinkedIn */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                LinkedIn Profile
              </label>
              <input
                type="text"
                name="linkedin"
                placeholder="Connect with us professionally"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 w-full">
            {/* College */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Your College
              </label>
              <input
                type="text"
                name="college"
                placeholder="Where are you studying?"
                value={formData.college}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>

            {/* Course */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Field of Study
              </label>
              <input
                type="text"
                name="course"
                placeholder="What are you passionate about?"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 w-full">
            {/* Year */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Current Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Which year are you in?"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Contact Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="How can we reach you?"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-6 gap-3 w-full">
            {/* Registration No.: */}
            <div className="w-full relative group">
              <label className="text-indigo-200 flex items-center gap-2 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                University Registration no.
                <div
                  onClick={handleToggle}
                  className="w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-400 flex justify-center items-center text-xs text-indigo-200 font-medium cursor-pointer hover:bg-indigo-500/50 transition-all duration-200"
                >
                  i
                </div>
              </label>
              <input
                type="text"
                name="reg"
                placeholder="What's your University Registration no.?"
                value={formData.reg}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />

              {info && (
                <div className="absolute z-10 top-full mt-2 left-0 bg-zinc-700 p-4 rounded-xl shadow-lg border border-indigo-500/30 text-indigo-100 text-sm max-w-md">
                  <p className="mb-3">
                    If you are unable to find your University Registration no.,
                    please check your University Id Card or LPU-UMS!!
                  </p>

                  <button
                    onClick={handleToggle}
                    className="w-full bg-indigo-600 py-2 text-center rounded-lg cursor-pointer hover:bg-indigo-500 transition-all duration-200 font-medium"
                  >
                    Got it!
                  </button>
                </div>
              )}
            </div>

            {/* Discord */}
            <div className="w-full group">
              <label className="block text-indigo-200 font-medium mb-1 text-sm transition-all duration-200 group-focus-within:text-indigo-400">
                Discord Username
              </label>
              <input
                type="text"
                name="discord"
                placeholder="Let's chat on Discord"
                value={formData.discord}
                onChange={handleChange}
                className="w-full p-3 mt-1 bg-zinc-700/70 text-white rounded-lg border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none font-medium text-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing Your Application...
              </div>
            ) : (
              "Join Bootcamp! 🚀"
            )}
          </button>
        </div>

        <div>
          <button
            className="absolute top-5 right-5 rounded-full border border-zinc-500 h-8 w-8 flex items-center justify-center hover:bg-zinc-700 hover:border-indigo-400 transition-all duration-200 text-zinc-400 hover:text-indigo-200"
            onClick={() => setPopUp(false)}
            aria-label="Close form"
          >
            ✕
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegistrationForm;
