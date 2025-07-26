import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Vishal Raman</p>
            <p className="subtext">
              Web developer and open source contributor with 3 years’
              experience building full-stack web and desktop applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 — Education */}
      <div
  className="grid-black-color grid-2 relative isolate rounded-2xl overflow-hidden
             shadow-2xl border border-white/10"
>
  {/* Translucent image layer */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-70 z-0"
    style={{
      backgroundImage: "url('/assets/ims.png')",
    }}
  />

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/75 z-0" />

  {/* Text content layer */}
  <div className="relative z-15 w-full md:w-[70%] px-5 py-6 text-white">
    <p className="headtext">Education:-</p>

    <ul className="flex flex-col gap-3 text-sm">
      <li>
        <p>🎓 B.Tech in Computer Science</p>
        <p>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
        <p>2022 – 2026</p>
      </li>

      <li>
        <p>🏫 Higher Secondary - CBSE</p>
        <p>PCM, 2021</p>
        <p>Holly Kids International School</p>
      </li>
    </ul>
  </div>
</div>


 
        {/* Grid 3 — Time Zone */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I’m based in Uttar Pradesh, India and open to remote as well as on-site work.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 — Call to Action */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
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

