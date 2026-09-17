import { useState } from "react";

import {
  Award,
  ExternalLink,
  Calendar,
  ShieldCheck,
} from "lucide-react";

import certificate1 from "../../assets/databases.png";
import certificate2 from "../../assets/htmlcss.png";
import certificate3 from "../../assets/java.png";
import certificate4 from "../../assets/networking-security.png";
import certificate5 from "../../assets/networking.png";
import certificate6 from "../../assets/pubdef.jpg";
import certificate7 from "../../assets/ReactJS-Cert.png";

export default function Certifications() {
  // ============================================================
  // SHOW MORE / SHOW LESS STATE
  // ============================================================

  const [showAll, setShowAll] = useState(false);

  // ============================================================
  // CERTIFICATION DATA
  // ============================================================

  const certifications = [
    {
      title: "DATABASE FUNDAMENTALS",
      issuer: "CERTIFICATION PROVIDER",
      date: "2026",
      // credential: "CREDENTIAL ID",
      image: certificate1,
      skills: ["DATABASE", "SQL"],
      link: "#",
    },

    {
      title: "HTML & CSS",
      issuer: "CERTIPORT",
      date: "2024",
      // credential: "CREDENTIAL ID",
      image: certificate2,
      skills: ["HTML", "CSS", "WEB"],
      link: "#",
    },

    {
      title: "JAVA PROGRAMMING",
      issuer: "CERTIPORT",
      date: "2024",
      // credential: "CREDENTIAL ID",
      image: certificate3,
      skills: ["JAVA", "PROGRAMMING"],
      link: "#",
    },

    {
      title: "NETWORKING SECURITY",
      issuer: "CERTIPORT",
      date: "2026",
      // credential: "CREDENTIAL ID",
      image: certificate4,
      skills: ["NETWORKING", "SECURITY"],
      link: "#",
    },

    {
      title: "NETWORKING",
      issuer: "CERTIPORT",
      date: "2025",
      // credential: "CREDENTIAL ID",
      image: certificate5,
      skills: ["NETWORKING", "TECHNOLOGY"],
      link: "#",
    },

    {
      title: "CAPSTONE PUBLIC DEFENSE",
      issuer: "UNIVERSITY OF MINDANAO",
      date: "2026",
      // credential: "CREDENTIAL ID",
      image: certificate6,
      skills: ["MOBILE PROGRAMMING", "FLUTTER", "DART"],
      link: "#",
    },

    {
      title: "REACT JS CERTIFICATION",
      issuer: "UNIVERSITY OF MINDANAO",
      date: "2026",
      // credential: "CREDENTIAL ID",
      image: certificate7,
      skills: ["REACT", "JAVASCRIPT", "WEB DEVELOPMENT"],
      link: "#",
    },
  ];

  // ============================================================
  // CERTIFICATES TO DISPLAY
  // ============================================================

  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, 3);

  return (
    <section
      id="certifications"
      className="
        scroll-mt-24
        relative
        min-h-screen
        w-full
        px-6
        sm:px-10
        lg:px-16
        py-24
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
      ============================================================ */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.07),transparent_45%)]
        "
      />

      <div
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          w-72
          h-72
          bg-cyan-400/5
          blur-[120px]
          pointer-events-none
        "
      />

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          w-full
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div className="mb-12">
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
            CERTIFICATIONS
          </p>

          <div
            className="
              mt-4
              h-px
              w-24
              bg-cyan-400/40
            "
          />

          <p
            className="
              mt-5
              text-zinc-500
              text-xs
              sm:text-sm
              tracking-[0.15em]
              max-w-2xl
              leading-relaxed
            "
          >
            VERIFIED KNOWLEDGE // SKILLS ACQUIRED THROUGH
            LEARNING AND PRACTICAL EXPERIENCE
          </p>
        </div>

        {/* ============================================================
            CERTIFICATION GRID
        ============================================================ */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {visibleCertifications.map((cert, index) => (
            <div
              key={cert.title}
              className="
                group
                relative
                border
                border-cyan-400/20
                rounded-2xl
                bg-black/50
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-400/[0.03]
                hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]
              "
            >
              {/* =====================================================
                  HUD CORNER - TOP RIGHT
              ===================================================== */}

              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-10
                  h-10
                  border-t
                  border-r
                  border-cyan-400/30
                  rounded-tr-2xl
                  z-20
                  pointer-events-none
                "
              />

              {/* =====================================================
                  HUD CORNER - BOTTOM LEFT
              ===================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-10
                  h-10
                  border-b
                  border-l
                  border-cyan-400/30
                  rounded-bl-2xl
                  z-20
                  pointer-events-none
                "
              />

              {/* =====================================================
                  CERTIFICATE IMAGE
              ===================================================== */}

              <div
                className="
                  relative
                  w-full
                  h-52
                  overflow-hidden
                  border-b
                  border-cyan-400/10
                  bg-black
                "
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                    opacity-80
                    grayscale
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    group-hover:scale-105
                  "
                />

                {/* CYAN OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-cyan-400/10
                    mix-blend-screen
                    pointer-events-none
                  "
                />

                {/* CERTIFICATE NUMBER */}

                <div
                  className="
                    absolute
                    top-3
                    left-3
                    px-2
                    py-1
                    bg-black/70
                    border
                    border-cyan-400/20
                    rounded
                    text-cyan-400
                    text-[8px]
                    tracking-[0.2em]
                  "
                >
                  CERT_{String(index + 1).padStart(3, "0")}
                </div>
              </div>

              {/* =====================================================
                  CARD CONTENT
              ===================================================== */}

              <div className="p-6">
                {/* =================================================
                    ICON + VERIFIED
                ================================================= */}

                <div className="flex items-start justify-between">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      border
                      border-cyan-400/30
                      bg-cyan-400/5
                      flex
                      items-center
                      justify-center
                      group-hover:border-cyan-400/60
                      transition
                    "
                  >
                    <Award
                      size={24}
                      className="
                        text-cyan-400
                        group-hover:drop-shadow-[0_0_8px_cyan]
                        transition
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[9px]
                      text-green-400
                      tracking-[0.25em]
                    "
                  >
                    VERIFIED
                  </span>
                </div>

                {/* =================================================
                    CERTIFICATE INFORMATION
                ================================================= */}

                <div className="mt-6">
                  <p
                    className="
                      text-[9px]
                      text-zinc-600
                      tracking-[0.35em]
                    "
                  >
                    CERTIFICATION // {String(index + 1).padStart(3, "0")}
                  </p>

                  <h2
                    className="
                      mt-3
                      text-white
                      text-sm
                      sm:text-base
                      font-bold
                      tracking-widest
                      leading-relaxed
                    "
                  >
                    {cert.title}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-cyan-400
                      text-xs
                      tracking-[0.2em]
                      leading-relaxed
                    "
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* =================================================
                    DATE
                ================================================= */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-zinc-500
                    text-[10px]
                    tracking-[0.25em]
                  "
                >
                  <Calendar
                    size={14}
                    className="text-cyan-400"
                  />

                  ISSUED: {cert.date}
                </div>

                {/* =================================================
                    CREDENTIAL
                ================================================= */}

                {cert.credential && (
                  <div
                    className="
                      mt-3
                      text-zinc-600
                      text-[9px]
                      tracking-[0.2em]
                      truncate
                    "
                  >
                    ID: {cert.credential}
                  </div>
                )}

                {/* =================================================
                    SKILLS
                ================================================= */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        text-zinc-400
                        text-[9px]
                        tracking-[0.2em]
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* =================================================
                    CARD FOOTER
                ================================================= */}

                <div
                  className="
                    mt-6
                    pt-4
                    border-t
                    border-white/10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-zinc-600
                      text-[9px]
                      tracking-widest
                    "
                  >
                    <ShieldCheck
                      size={13}
                      className="text-green-400"
                    />

                    AUTHENTIC
                  </div>

                  {/* VIEW CERTIFICATE */}

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-cyan-400
                      text-[9px]
                      tracking-[0.2em]
                      hover:text-white
                      transition
                    "
                  >
                    VIEW

                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            SEE MORE / SHOW LESS
        ============================================================ */}

        {certifications.length > 3 && (
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >
            {/* SMALL STATUS TEXT */}

            <p
              className="
                text-zinc-700
                text-[8px]
                tracking-[0.3em]
              "
            >
              {showAll
                ? `DISPLAYING ALL ${String(certifications.length).padStart(
                    2,
                    "0"
                  )} CERTIFICATIONS`
                : `DISPLAYING 03 OF ${String(
                    certifications.length
                  ).padStart(2, "0")} CERTIFICATIONS`}
            </p>

            {/* BUTTON */}

            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="
                group
                relative

                min-w-[190px]

                px-7
                py-3.5

                rounded-full

                border
                border-cyan-400/30

                bg-cyan-400/[0.02]

                text-cyan-400
                text-[9px]

                tracking-[0.35em]

                hover:border-cyan-400/70
                hover:bg-cyan-400/[0.06]
                hover:shadow-[0_0_25px_rgba(0,255,255,0.10)]

                active:scale-[0.98]

                transition-all
                duration-300
              "
            >
              {/* LEFT GLOW */}

              <span
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2

                  w-1.5
                  h-1.5

                  rounded-full

                  bg-cyan-400

                  shadow-[0_0_10px_rgba(0,255,255,0.9)]

                  opacity-60

                  group-hover:opacity-100

                  transition
                "
              />

              {/* BUTTON CONTENT */}

              <span
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {showAll ? "SHOW LESS" : "SEE MORE"}

                <span
                  className={`
                    text-sm

                    transition-transform
                    duration-300

                    ${
                      showAll
                        ? "rotate-180"
                        : "group-hover:translate-y-0.5"
                    }
                  `}
                >
                  ↓
                </span>
              </span>
            </button>
          </div>
        )}

        {/* ============================================================
            BOTTOM STATUS
        ============================================================ */}

        <div
          className="
            mt-8
            border-t
            border-white/10
            pt-5

            flex
            flex-col
            sm:flex-row

            gap-3

            items-start
            sm:items-center

            justify-between

            text-[9px]
            tracking-[0.3em]
            text-zinc-600
          "
        >
          <span>
            CERTIFICATION DATABASE
          </span>

          <span className="text-green-400">
            ● SYSTEM VERIFIED
          </span>
        </div>
      </div>
    </section>
  );
}