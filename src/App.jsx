import { useState } from "react";

import Sidebar from "./components/SideBar";
import TypingText from "./components/TypingText";
import RevealText from "./components/RevealText";
import Projects from "./components/Projects";
import ProfileStatus from "./components/ProfileStatus";
import ProfileVisual from "./components/ProfileVisual";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showName, setShowName] = useState(false);
  const [appKey, setAppKey] = useState(0);

  // =====================================================
  // TECH STACK DATA
  // =====================================================

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
        resetApp={() => setAppKey((prev) => prev + 1)}
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
            GLOBAL ATMOSPHERE
            ===================================================== */}

        <div
          className="
            fixed
            inset-0
            pointer-events-none

            bg-[radial-gradient(circle_at_40%_30%,rgba(0,255,255,0.06),transparent_35%)]

            z-0
          "
        />

        {/* =====================================================
            HERO SECTION
            ===================================================== */}

        <section
          id="home"
          className="
            relative
            z-10

            min-h-screen

            px-8
            sm:px-10
            lg:px-12
            xl:px-16

            py-10
          "
        >
          {/* =================================================
              DOWNLOAD RESUME
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

                z-50

                px-5
                py-3

                sm:px-6

                rounded-full

                border
                border-cyan-400/40

                bg-black/20
                backdrop-blur-md

                text-cyan-400

                text-[10px]
                sm:text-xs

                tracking-[0.2em]
                sm:tracking-[0.3em]

                hover:bg-cyan-400/10
                hover:border-cyan-400/70
                hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]

                transition
                duration-300
              "
            >
              ↓ DOWNLOAD RESUME
            </a>
          )}

          {/* =================================================
              HERO LAYOUT
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
              {/* =================================================
                  INITIALIZING
                  ================================================= */}

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
                  HERO CONTENT
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
                  {/* =================================================
                      NAME
                      ================================================= */}

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

                  {/* =================================================
                      JOB TITLE
                      ================================================= */}

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
                      ROLES
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

                          bg-cyan-400/5

                          text-cyan-400
                          text-xs

                          tracking-widest

                          hover:bg-cyan-400/10
                          hover:border-cyan-400/50

                          transition
                          duration-300
                        "
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* =================================================
                      INTRODUCTION
                      ================================================= */}

                  <p
                    className="
                      mt-8

                      max-w-xl

                      text-zinc-500

                      leading-relaxed
                    "
                  >
                    I build thoughtful digital experiences for the web
                    and mobile, turning ideas into functional, intuitive,
                    and well-crafted applications through code and design.
                  </p>

                  {/* =================================================
                      HERO BUTTONS
                      ================================================= */}

                  <div
                    className="
                      mt-8

                      flex
                      flex-wrap
                      gap-4
                    "
                  >
                    {/* =================================================
                        VIEW PROJECTS
                        ================================================= */}

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

                        bg-cyan-400/5

                        text-cyan-400
                        text-xs

                        tracking-[0.3em]

                        hover:bg-cyan-400/10
                        hover:border-cyan-400
                        hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]

                        transition
                        duration-300
                      "
                    >
                      <span>VIEW PROJECTS</span>

                      <span
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </a>

                    {/* =================================================
                        ABOUT
                        ================================================= */}

                    <a
                      href="#about"
                      className="
                        group

                        flex
                        items-center
                        gap-3

                        px-6
                        py-3

                        rounded-full

                        border
                        border-white/10

                        text-zinc-400
                        text-xs

                        tracking-[0.3em]

                        hover:text-cyan-400
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/[0.03]

                        transition
                        duration-300
                      "
                    >
                      <span>ABOUT</span>

                      <span
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                PROFILE VISUAL
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
        </section>

        {/* =====================================================
            PROJECTS SECTION
            ===================================================== */}

        {showName && (
          <div
            className="
              relative
              z-10
              w-full
            "
          >
            <Projects />
          </div>
        )}

        {/* =====================================================
            TECH STACK SECTION
            ===================================================== */}

        {showName && (
          <section
            id="skills"
            className="
              relative
              z-10

              w-full

              px-8
              sm:px-10
              lg:px-12
              xl:px-16

              py-20
              sm:py-24
              lg:py-28
            "
          >
            <div
              className="
                w-full
                max-w-6xl
                mx-auto
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

                  mb-10
                  sm:mb-12
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
                  relative

                  w-full

                  overflow-hidden

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
                    SUBTLE PANEL GLOW
                    ================================================= */}

                <div
                  className="
                    absolute
                    inset-0

                    pointer-events-none

                    bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.06),transparent_40%)]
                  "
                />

                {/* =================================================
                    MATRIX HEADER
                    ================================================= */}

                <div
                  className="
                    relative
                    z-10

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

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5

                        rounded-full

                        bg-cyan-400

                        shadow-[0_0_8px_rgba(0,255,255,0.9)]
                      "
                    />

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
                </div>

                {/* =================================================
                    TECH GRID
                    ================================================= */}

                <div
                  className="
                    relative
                    z-10

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
          </section>
        )}

        {/* =====================================================
            CERTIFICATIONS SECTION
            ===================================================== */}

        {showName && (
          <div
            id="certifications"
            className="
              relative
              z-10
              w-full
            "
          >
            <Certifications />
          </div>
        )}

        {/* =====================================================
            ABOUT SECTION
            ===================================================== */}

        {showName && (
          <div
            id="about"
            className="
              relative
              z-10
              w-full
              scroll-mt-20
            "
          >
            <About />
          </div>
        )}

        {/* =====================================================
            FLOATING PROFILE STATUS
            ===================================================== */}

        {showName && <ProfileStatus />}
      </main>
    </>
  );
}

export default App;