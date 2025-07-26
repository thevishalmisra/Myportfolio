import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Card from "../components/Card";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* --- Grid 1 : Hero ------------------------------------------------- */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="coding pov"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Vishal Raman</p>
            <p className="subtext">
              Web developer and open source contributor with 3 years’ experience building full-stack web and desktop applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* --- Grid 2 : Education with draggable Cards ------------------------- */}
  <div className="grid-black-color grid-2 relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/assets/ims.png')", // <-- Update path if needed
    }}
  />

  {/* Strong Dark Overlay */}
  <div className="absolute inset-0 bg-black/80 z-10" />

  {/* Foreground Education Text */}
  {/* Adjusted responsive widths to provide more space for text, potentially slightly wider */}
  <div className="relative z-20 w-full p-6 text-white sm:w-[60%] md:w-[65%] lg:w-[60%] xl:w-[55%]">
    <p className="headtext mb-5 text-2xl font-bold">Education</p> {/* Slightly reduced margin-bottom */}

    {/* College */}
    <div className="mb-3"> {/* Reduced margin-bottom to create more vertical space */}
      <p className="text-base font-semibold flex items-center gap-2"> {/* Slightly reduced degree font size */}
        🎓 B.Tech in Computer Science
      </p>
      <p className="text-sm text-white/90 leading-snug"> {/* Kept text-sm, slightly looser leading for readability */}
        Dr. A.P.J. Abdul Kalam Technical University (AKTU)
      </p>
      <p className="text-xs ">2022 – 2026</p>
    </div>

    {/* School */}
    <div>
      <p className="text-base font-semibold flex items-center gap-2"> {/* Slightly reduced degree font size */}
        🏫 Higher Secondary - PCM
      </p>
      <p className="text-sm text-white/90 leading-snug"> {/* Kept text-sm, slightly looser leading for readability */}
        Holly Kids International School
      </p>
      <p className="text-xs">CBSE, 2021</p> {/* This line needs to show! */}
    </div>
  </div>
</div>

        {/* --- Grid 3 : Location --------------------------------------------- */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              I’m based in Uttar Pradesh, India and open to remote as well as on-site work.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* --- Grid 4 : CTA -------------------------------------------------- */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* --- Grid 5 : Tech Stack -------------------------------------------- */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable Web applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;