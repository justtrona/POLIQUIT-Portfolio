import { useState } from "react";

import {
  Terminal,
  User,
  Cpu,
  Folder,
  Award,
  Menu,
  X,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function Sidebar({ setSidebarOpen, resetApp }) {
  const [open, setOpen] = useState(true);

  // =====================================================
  // TOGGLE SIDEBAR
  // =====================================================

  const toggleSidebar = () => {
    const newState = !open;

    setOpen(newState);
    setSidebarOpen(newState);
  };

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavigation = (item) => {
    // HOME
    if (item.target === "home") {
      resetApp();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(item.target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close sidebar after navigation
      setTimeout(() => {
        setOpen(false);
        setSidebarOpen(false);
      }, 500);
    } else {
      console.log("Section not found:", item.target);
    }
  };

  // =====================================================
  // MENU ITEMS
  // =====================================================

  const menuItems = [
    {
      name: "Home",
      icon: Terminal,
      target: "home",
    },
    {
      name: "Skills",
      icon: Cpu,
      target: "skills",
    },
    {
      name: "Projects",
      icon: Folder,
      target: "projects",
    },
    {
      name: "Certifications",
      icon: Award,
      target: "certifications",
    },
    {
      name: "About",
      icon: User,
      target: "about",
    },
  ];

  // =====================================================
  // SOCIAL LINKS
  //
  // Replace the placeholder URLs below with your real
  // social media profile links.
  // =====================================================

  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/justtrona",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "YOUR_LINKEDIN_URL",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/jugheadjones2323/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/jieunvx00",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.com/jjustrronajjane",
    },
  ];

  return (
    <aside
      className={`
        fixed
        top-0
        left-0

        h-screen

        bg-[#050505]
        text-white

        border-r
        border-cyan-400/20

        shadow-[0_0_25px_rgba(0,255,255,0.08)]

        transition-all
        duration-500
        ease-in-out

        z-50

        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* =================================================
          HEADER
          ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between

          h-[82px]

          px-5

          border-b
          border-cyan-400/20
        "
      >
        {/* BRAND */}

        {open && (
          <button
            type="button"
            onClick={() =>
              handleNavigation({
                target: "home",
              })
            }
            className="
              text-left
              group
            "
          >
            <p
              className="
                text-[9px]
                text-cyan-400

                tracking-[0.5em]

                group-hover:text-cyan-300

                transition
              "
            >
              RONA JANE
            </p>

            <h1
              className="
                mt-1

                text-xs
                font-bold

                tracking-[0.15em]

                text-zinc-100
              "
            >
              POLIQUIT
            </h1>
          </button>
        )}

        {/* TOGGLE */}

        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          className="
            flex
            items-center
            justify-center

            w-9
            h-9

            rounded-lg

            text-cyan-400

            hover:text-white
            hover:bg-cyan-400/10

            transition
            duration-300
          "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* =================================================
          NAVIGATION
          ================================================= */}

      <nav
        className="
          mt-7
          px-3
        "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavigation(item)}
              aria-label={item.name}
              title={!open ? item.name : undefined}
              className="
                group

                relative

                flex
                items-center

                gap-4

                w-full

                px-3
                py-3

                mb-1

                rounded-lg

                text-zinc-500

                hover:text-cyan-300
                hover:bg-cyan-400/[0.04]

                transition
                duration-300
              "
            >
              {/* HOVER LINE */}

              <span
                className="
                  absolute
                  left-0

                  w-px
                  h-5

                  bg-cyan-400

                  opacity-0

                  shadow-[0_0_8px_rgba(0,255,255,0.8)]

                  group-hover:opacity-100

                  transition
                "
              />

              {/* ICON */}

              <Icon
                size={19}
                className="
                  shrink-0

                  group-hover:text-cyan-400

                  group-hover:drop-shadow-[0_0_7px_rgba(0,255,255,0.7)]

                  transition
                  duration-300
                "
              />

              {/* LABEL */}

              {open && (
                <span
                  className="
                    text-[10px]

                    tracking-[0.3em]

                    whitespace-nowrap
                  "
                >
                  {item.name.toUpperCase()}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* =================================================
          EXPANDED SIDEBAR FOOTER
          ================================================= */}

      {open && (
        <div
          className="
            absolute
            bottom-0
            left-0

            w-full

            px-5
            pb-5
          "
        >
          {/* TOP DIVIDER */}

          <div
            className="
              w-full
              h-px

              mb-5

              bg-gradient-to-r
              from-cyan-400/30
              via-white/10
              to-transparent
            "
          />

          {/* =================================================
              CONTACT MESSAGE
              ================================================= */}

          <p
            className="
              text-zinc-600

              text-[8px]

              leading-4

              tracking-[0.18em]
            "
          >
            FOR WORK, COLLABS &
            <br />
            EVERYTHING ELSE, REACH ME AT
          </p>

          {/* =================================================
              EMAIL
              ================================================= */}

          <a
            href="mailto:mrlavalava048@gmail.com"
            className="
              group

              mt-3

              flex
              items-center
              gap-2

              text-cyan-400

              hover:text-white

              transition
              duration-300
            "
          >
            <Mail
              size={13}
              className="
                shrink-0

                group-hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]

                transition
              "
            />

            <span
              className="
                text-[9px]

                tracking-[0.04em]

                truncate
              "
            >
              mrlavalava048@gmail.com
            </span>
          </a>

          {/* =================================================
              LOCATION
              ================================================= */}

          <div
            className="
              mt-3

              flex
              items-center
              gap-2

              text-zinc-600
            "
          >
            <MapPin
              size={12}
              className="
                shrink-0
                text-cyan-400/60
              "
            />

            <span
              className="
                text-[8px]
                tracking-[0.15em]
              "
            >
              DAVAO CITY, PHILIPPINES
            </span>
          </div>

          {/* =================================================
              SOCIAL LINKS
              ================================================= */}

          <div
            className="
              mt-5

              flex
              items-center

              gap-2
            "
          >
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    group

                    flex
                    items-center
                    justify-center

                    w-8
                    h-8

                    rounded-lg

                    border
                    border-white/10

                    bg-white/[0.015]

                    text-zinc-600

                    hover:text-cyan-400
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/[0.05]

                    hover:shadow-[0_0_15px_rgba(0,255,255,0.08)]

                    transition
                    duration-300
                  "
                >
                  <Icon
                    size={14}
                    className="
                      group-hover:scale-110

                      transition-transform
                      duration-300
                    "
                  />
                </a>
              );
            })}
          </div>

          {/* =================================================
              FOOTER STATUS
              ================================================= */}

          <div
            className="
              mt-5
              pt-4

              border-t
              border-white/[0.06]

              flex
              items-center
              justify-between
            "
          >
            {/* AVAILABLE */}

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

                  bg-green-400

                  shadow-[0_0_8px_rgba(74,222,128,0.8)]
                "
              />

              <span
                className="
                  text-zinc-600

                  text-[8px]

                  tracking-[0.2em]
                "
              >
                AVAILABLE
              </span>
            </div>

            {/* COPYRIGHT */}

            <p
              className="
                text-zinc-700

                text-[8px]

                tracking-[0.15em]
              "
            >
              © 2026 RJP
            </p>
          </div>
        </div>
      )}

      {/* =================================================
          COLLAPSED SIDEBAR FOOTER
          ================================================= */}

      {!open && (
        <div
          className="
            absolute
            bottom-6
            left-0

            w-full

            flex
            flex-col
            items-center

            gap-3
          "
        >
          {/* EMAIL */}

          <a
            href="mailto:mrlavalava048@gmail.com"
            aria-label="Email"
            title="Email"
            className="
              flex
              items-center
              justify-center

              w-9
              h-9

              rounded-lg

              border
              border-white/10

              text-zinc-600

              hover:text-cyan-400
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]

              transition
              duration-300
            "
          >
            <Mail size={15} />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/justtrona"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="
              flex
              items-center
              justify-center

              w-9
              h-9

              rounded-lg

              border
              border-white/10

              text-zinc-600

              hover:text-cyan-400
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]

              transition
              duration-300
            "
          >
            <FaGithub size={15} />
          </a>

          {/* ONLINE / AVAILABLE INDICATOR */}

          <div
            className="
              mt-1

              relative

              flex
              items-center
              justify-center

              w-5
              h-5
            "
            title="Available"
          >
            {/* GLOW */}

            <span
              className="
                absolute

                w-3
                h-3

                rounded-full

                bg-green-400/10

                animate-ping
              "
            />

            {/* DOT */}

            <span
              className="
                relative

                w-2
                h-2

                rounded-full

                bg-green-400

                shadow-[0_0_9px_rgba(74,222,128,0.9)]
              "
            />
          </div>
        </div>
      )}
    </aside>
  );
}