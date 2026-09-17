import { useState } from "react";
import Sidebar from "./components/SideBar";
import TypingText from "./components/TypingText";
import RevealText from "./components/RevealText";
import ProjectCarousel from "./components/ProjectCarousel";
import ProfileStatus from "./components/ProfileStatus";
import ProfileVisual from "./components/ProfileVisual";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showName, setShowName] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [appKey, setAppKey] = useState(0);

  const techModules = [
    {
      title: "WEB",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "PHP",
      ],
    },

    {
      title: "MOBILE",
      items: [
        "Flutter",
        "Dart",
      ],
    },

    {
      title: "BACKEND",
      items: [
        "Node.js",
        ".NET C#",
        "Java",
        "Python",
      ],
    },

    {
      title: "DATABASE",
      items: [
        "Supabase",
        "PostgreSQL",
        "SQL",
      ],
    },

    {
      title: "CLOUD",
      items: [
        "Azure",
      ],
    },

    {
      title: "DEPLOYMENT",
      items: [
        "Google Play Store",
        "GitHub",
      ],
    },

    {
      title: "API",
      items: [
        "REST API",
        "Integration",
        "Paymongo",
      ],
    },
  ];

  return (
    <>
      {/* =====================================================
          SIDEBAR
          ===================================================== */}

     <Sidebar
  setSidebarOpen={setSidebarOpen}
  resetApp={() => setAppKey(prev => prev + 1)}
/>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <main
  key={appKey}
  className={`
    relative
    min-h-screen
    bg-[#050505]
    text-white
    overflow-x-hidden
    transition-all
    duration-500
    ${sidebarOpen ? "ml-64" : "ml-20"}
  `}
>

        {/* =====================================================
            ATMOSPHERE
            ===================================================== */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-[radial-gradient(circle_at_40%_40%,rgba(0,255,255,0.08),transparent_35%)]
          "
        />


        {/* =====================================================
            HERO SECTION
            ===================================================== */}

        <section
          className="
            relative
            min-h-screen
            px-8
            sm:px-10
            lg:px-12
            xl:px-16
            py-10
          "
        >

          {/* =================================================
              DOWNLOAD CV
              ================================================= */}

          {showName && (
            <a
              href="/Rona-Jane-Poliquit-CV.pdf"
              download
              className="
                absolute
                top-6
                right-6
                sm:top-8
                sm:right-8
                lg:top-10
                lg:right-12
                xl:right-16
                px-5
                py-3
                sm:px-6
                rounded-full
                border
                border-cyan-400/40
                text-cyan-400
                text-[10px]
                sm:text-xs
                tracking-[0.2em]
                sm:tracking-[0.3em]
                hover:bg-cyan-400/10
                hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]
                transitionS
                z-50
              "
            >
              ↓ DOWNLOAD RESUME
            </a>
          )}


          {/* =================================================
              HERO LAYOUT

              LEFT  = TEXT
              RIGHT = PROFILE

              The grid keeps these two aligned regardless
              of monitor width.
              ================================================= */}

          <div
            className="
              min-h-[calc(100vh-5rem)]
              w-full
              max-w-[1350px]
              mx-auto
              grid
              grid-cols-1
              lg:grid-cols-[minmax(0,1fr)_340px]
              xl:grid-cols-[minmax(0,1fr)_380px]
              2xl:grid-cols-[minmax(0,1fr)_420px]
              gap-10
              xl:gap-14
              2xl:gap-20
              items-center
            "
          >

            {/* =================================================
                HERO TEXT
                ================================================= */}

            <div
              className="
                w-full
                max-w-3xl
                pt-8
                lg:pt-0
              "
            >

              {/* INITIALIZING */}

              <p
                className="
                  text-cyan-400
                  text-[10px]
                  sm:text-xs
                  tracking-[0.35em]
                  sm:tracking-[0.5em]
                "
              >
                <TypingText
                  text="INITIALIZING PORTFOLIO..."
                  onComplete={() => setShowName(true)}
                />
              </p>


              {/* =================================================
                  NAME + CONTENT
                  ================================================= */}

              {showName && (
                <div
                  className="
                    mt-7
                    sm:mt-8
                    animate-in
                    fade-in
                    duration-1000
                  "
                >

                  {/* NAME */}

                  <h1
                    className="
                      text-4xl
                      sm:text-5xl
                      lg:text-5xl
                      xl:text-6xl
                      font-bold
                      tracking-[0.08em]
                      sm:tracking-widest
                      whitespace-nowrap
                    "
                  >
                    <RevealText text="RONA JANE POLIQUIT" />
                  </h1>


                  {/* JOB TITLE */}

                  <p
                    className="
                      mt-4
                      text-zinc-400
                      text-sm
                      tracking-[0.3em]
                    "
                  >
                    SOFTWARE ENGINEER
                  </p>


                  {/* =================================================
                      ROLE MODULES
                      ================================================= */}

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {[
                      "FULL STACK",
                      "MOBILE DEVELOPMENT",
                      "UI/UX DESIGN",
                    ].map((role) => (
                      <span
                        key={role}
                        className="
                          px-5
                          py-2
                          rounded-full
                          border
                          border-cyan-400/30
                          text-cyan-400
                          text-xs
                          tracking-widest
                          bg-cyan-400/5
                          hover:bg-cyan-400/10
                          transition
                        "
                      >
                        {role}
                      </span>
                    ))}

                  </div>


                  {/* =================================================
                      DESCRIPTION
                      ================================================= */}

                  <p
                    className="
                      mt-8
                      max-w-xl
                      text-zinc-500
                      leading-relaxed
                    "
                  >
                    Building digital experiences across web,
                    mobile applications, and software systems
                    through engineering, design, and technology.
                  </p>


                  {/* =================================================
                      BUTTONS
                      ================================================= */}

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-4
                    "
                  >

                    {/* VIEW PROJECTS */}

                    <a
                      href="#projects"
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        px-6
                        py-3
                        rounded-full
                        border
                        border-cyan-400/40
                        text-cyan-400
                        text-xs
                        tracking-[0.3em]
                        bg-cyan-400/5
                        hover:bg-cyan-400/10
                        hover:border-cyan-400
                        hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                        transition
                      "
                    >
                      <span>
                        VIEW PROJECTS
                      </span>

                      <span
                        className="
                          group-hover:translate-x-1
                          transition
                        "
                      >
                        →
                      </span>
                    </a>

                    


                    {/* CONTACT */}

                    <a
                      href="#contact"
                      className="
                        px-6
                        py-3
                        rounded-full
                        border
                        border-white/10
                        text-zinc-400
                        text-xs
                        tracking-[0.3em]
                        hover:text-white
                        hover:border-white/30
                        transition
                      "
                    >
                      CONTACT
                    </a>

                  </div>

                </div>
              )}

            </div>


            {/* =================================================
                PROFILE IMAGE

                This is now part of the grid, NOT absolute
                positioning.

                items-center = vertically aligns it with
                the hero text.

                translate-x-4 = gives it a little extra push
                toward the right.
                ================================================= */}

            {showName && (
              <div
                className="
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  translate-x-2
                  xl:translate-x-4
                  2xl:translate-x-6
                "
              >
                <ProfileVisual />
              </div>
            )}

          </div>


          {/* =====================================================
              PROJECT ARCHIVE

              This is OUTSIDE the hero grid.

              Therefore it can center independently from the
              text and profile image.
              ===================================================== */}
{/* PROJECT ARCHIVE */}

<div
  id="projects"
  className="
    relative
    z-20
    w-full
    flex
    flex-col
    justify-center
    items-center
    mt-4
    sm:mt-6
    lg:mt-8
    px-2
    sm:px-6
    overflow-hidden
  "
>
  {/* SECTION TITLE */}

 <p
  className="
    text-cyan-400
    text-base
    sm:text-lg
    lg:text-xl
    tracking-[0.35em]
    sm:tracking-[0.45em]
    lg:tracking-[0.5em]
  "
>
  A GLIMPSE BEHIND THE BUILDS
</p>


  {/* CAROUSEL */}

  <div
    className="
      w-full
      max-w-6xl
      flex
      justify-center
      items-center
      mt-0
    "
  >
    <ProjectCarousel />
  </div>
</div>

        {/* =====================================================
    TECH STACK
    ===================================================== */}

{showName && (
  <div id="skills "
    className="
      relative
      z-20
      w-full
      max-w-6xl
      mx-auto
      mt-16
      sm:mt-20
      lg:mt-24
    "
  >

    {/* =================================================
        SECTION TITLE
        ================================================= */}

    <div
      className="
        flex
        justify-center
        items-center
        mb-8
        sm:mb-10
      "
    >

      <p
        className="
          text-cyan-400
          text-lg
          sm:text-xl
          lg:text-2xl
          tracking-[0.35em]
          sm:tracking-[0.45em]
          lg:tracking-[0.5em]
          text-center
        "
      >
        TECH STACK
      </p>

    </div>


    {/* =================================================
        TECH STACK PANEL
        ================================================= */}

    <div
      className="
        w-full
        border
        border-cyan-400/20
        rounded-3xl
        p-6
        sm:p-8
        lg:p-10
        bg-black/50
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(0,255,255,0.10)]
      "
    >

      {/* =================================================
          MATRIX HEADER
          ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-7
          sm:mb-8
        "
      >

        <p
          className="
            text-zinc-500
            text-xs
            sm:text-sm
            tracking-[0.4em]
            sm:tracking-[0.5em]
          "
        >
          TECH MATRIX
        </p>


        <p
          className="
            text-cyan-400
            text-[10px]
            sm:text-xs
            tracking-widest
          "
        >
          CURRENT
        </p>

      </div>


      {/* =================================================
          TECH GRID
          ================================================= */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >

        {techModules.map((module) => (

          <div
            key={module.title}
            className="
              group
              min-h-[180px]
              sm:min-h-[190px]
              border
              border-white/10
              rounded-2xl
              p-5
              sm:p-6
              bg-black/20
              hover:border-cyan-400/40
              hover:bg-cyan-400/5
              hover:shadow-[0_0_25px_rgba(0,255,255,0.06)]
              transition
              duration-300
            "
          >

            {/* =================================================
                MODULE HEADER
                ================================================= */}

            <div
              className="
                flex
                items-center
                gap-2
                mb-4
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.8)]
                  group-hover:shadow-[0_0_15px_rgba(0,255,255,1)]
                  transition
                "
              />

              <p
                className="
                  text-cyan-400
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                {module.title}
              </p>

            </div>


            {/* =================================================
                MODULE ITEMS
                ================================================= */}

            <div className="space-y-1">

              {module.items.map((item) => (

                <p
                  key={item}
                  className="
                    text-zinc-300
                    text-sm
                    sm:text-base
                    leading-relaxed
                  "
                >
                  {item}
                </p>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
)}

      {/* CERTIFICATIONS*/}

      <Certifications />


        </section>


           {/* =====================================================
            ABOUT SECTION
            ===================================================== */}

        <About />

              {/* =====================================================
            FLOATING PROFILE STATUS
            ===================================================== */}

        {showName && <ProfileStatus />}

      </main>
    </>
  );
}

export default App;