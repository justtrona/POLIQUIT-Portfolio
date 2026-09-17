import {
  GraduationCap,
  MapPin,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function About() {
  // =====================================================
  // PROFILE STATS
  // =====================================================

  const stats = [
    {
      label: "STATUS",
      value: "OPEN TO WORK",
    },
    {
      label: "UNIVERSITY",
      value: "UNIVERSITY OF MINDANAO",
    },
    {
      label: "FIELD",
      value: "INFORMATION TECHNOLOGY",
    },
    {
      label: "MODE",
      value: "UNDERGRADUATE",
    },
  ];

  // =====================================================
  // CUSTOM SOCIAL ICONS
  // =====================================================

  const GithubIcon = () => (
    <span className="text-[10px] font-bold tracking-[-0.05em]">
      GH
    </span>
  );

  const LinkedinIcon = () => (
    <span className="text-[15px] font-bold font-sans leading-none">
      in
    </span>
  );

  const FacebookIcon = () => (
    <span className="text-[18px] font-bold font-sans leading-none">
      f
    </span>
  );

  const InstagramIcon = () => (
    <span
      className="
        relative
        block
        w-[17px]
        h-[17px]
        rounded-[5px]
        border-[1.5px]
        border-current
      "
    >
      <span
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[6px]
          h-[6px]
          rounded-full
          border-[1.5px]
          border-current
        "
      />

      <span
        className="
          absolute
          top-[3px]
          right-[3px]
          w-[2px]
          h-[2px]
          rounded-full
          bg-current
        "
      />
    </span>
  );

  const DiscordIcon = () => (
    <span
      className="
        text-[9px]
        font-bold
        tracking-[-0.05em]
      "
    >
      DC
    </span>
  );

  // =====================================================
  // SOCIAL LINKS
  // Replace "#" with your real social profile URLs.
  // =====================================================

  const socials = [
    {
      name: "GITHUB",
      username: "@justtrona",
      url: "https://github.com/justtrona",
      icon: GithubIcon,
    },
    {
      name: "LINKEDIN",
      username: "CONNECT",
      url: "#",
      icon: LinkedinIcon,
    },
    {
      name: "FACEBOOK",
      username: "PROFILE",
      url: "https://www.facebook.com/jugheadjones2323/",
      icon: FacebookIcon,
    },
    {
      name: "INSTAGRAM",
      username: "FOLLOW",
      url: "https://www.instagram.com/jieunvx00",
      icon: InstagramIcon,
    },
    {
      name: "DISCORD",
      username: "CONNECT",
      url: "https://discord.com/jjustrronajjane",
      icon: DiscordIcon,
    },
    {
      name: "EMAIL",
      username: "mrlavalava048@gmail.com",
      url: "mailto:mrlavalava048@gmail.com",
      icon: Mail,
    },
  ];

  // =====================================================
  // SOCIAL CLICK HANDLER
  // =====================================================

  const handleSocialClick = (event, social) => {
    if (social.url === "#") {
      event.preventDefault();
    }
  };

  return (
    <section
      id="about"
      className="
        scroll-mt-24
        relative
        w-full
        min-h-screen
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        py-20
        sm:py-24
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.055),transparent_48%)]
        "
      />

      <div
        className="
          absolute
          left-[10%]
          top-[35%]
          w-80
          h-80
          rounded-full
          bg-cyan-400/[0.035]
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[5%]
          top-[30%]
          w-96
          h-96
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="text-center mb-12">
          <div
            className="
              w-24
              h-px
              mx-auto
              mb-6
              bg-cyan-400/50
            "
          />

          <p
            className="
              text-cyan-400
              text-lg
              sm:text-xl
              lg:text-2xl
              tracking-[0.4em]
              sm:tracking-[0.5em]
            "
          >
            ABOUT ME
          </p>

          <p
            className="
              mt-5
              text-zinc-600
              text-[8px]
              sm:text-[9px]
              tracking-[0.5em]
            "
          >
            SYSTEM USER // 001
          </p>

          {/* ===============================================
              HORIZONTAL NAME
          =============================================== */}

          <h1
            className="
              mt-6
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-[0.12em]
              sm:tracking-[0.16em]
              leading-tight
            "
          >
            RONA JANE POLIQUIT
          </h1>

          <p
            className="
              mt-4
              text-cyan-400
              text-[10px]
              sm:text-xs
              lg:text-sm
              tracking-[0.3em]
              sm:tracking-[0.45em]
            "
          >
            MOBILE & SOFTWARE DEVELOPER
          </p>
        </div>

        {/* =================================================
            MAIN TWO-COLUMN AREA
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-5
            items-stretch
          "
        >
          {/* =================================================
              LEFT CARD — ABOUT.EXE
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              rounded-2xl
              border
              border-cyan-400/30
              bg-black/40
              backdrop-blur-xl
              overflow-hidden
              shadow-[0_0_35px_rgba(0,255,255,0.035)]
            "
          >
            {/* WINDOW HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-white/10
              "
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />

                <span className="w-2 h-2 rounded-full bg-green-400" />

                <span className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>

              <span
                className="
                  text-cyan-400/60
                  text-[8px]
                  tracking-[0.35em]
                "
              >
                ABOUT.EXE
              </span>
            </div>

            {/* BIO CONTENT */}

            <div
              className="
                flex-1
                p-5
                sm:p-7
                font-mono
              "
            >
              <p
                className="
                  text-zinc-500
                  text-xs
                  sm:text-sm
                "
              >
                $ whoami
              </p>

              <a
                href="mailto:mrlavalava048@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-3
                  text-green-400
                  text-xs
                  sm:text-sm
                  hover:text-cyan-400
                  transition
                "
              >
                <Mail size={14} />

                mrlavalava048@gmail.com
              </a>

              <div
                className="
                  mt-6
                  text-zinc-300
                  text-xs
                  sm:text-sm
                  leading-6
                  sm:leading-7
                "
              >
                <p>
                  I’m an Information Technology student at the
                  University of Mindanao with a strong interest in
                  mobile application development. I enjoy building
                  mobile applications, exploring different programming
                  concepts, and turning ideas into functional and
                  user-friendly experiences.
                </p>

                <p className="mt-5">
                  While mobile development is my main focus, I’m also
                  interested in software development, web development,
                  databases, and other areas of technology. I’m always
                  willing to explore new tools, languages, and frameworks
                  that can help me expand my skills and become a more
                  versatile developer.
                </p>

                <p className="mt-5">
                  My goal is to continuously improve as a developer,
                  gain real-world experience, and build applications
                  that are useful, reliable, and meaningful.
                </p>
              </div>

              {/* TERMINAL BOTTOM */}

              <div
                className="
                  mt-6
                  pt-4
                  border-t
                  border-white/10
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-[3px]
                    h-4
                    bg-cyan-400
                    shadow-[0_0_8px_rgba(0,255,255,0.8)]
                  "
                />

                <p
                  className="
                    text-cyan-400/60
                    text-xs
                    tracking-[0.08em]
                  "
                >
                  &gt; building a better version...
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CARD — PROFILE.DAT
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              rounded-2xl
              border
              border-cyan-400/30
              bg-black/40
              backdrop-blur-xl
              overflow-hidden
              shadow-[0_0_35px_rgba(0,255,255,0.035)]
            "
          >
            {/* HUD CORNER */}

            <div
              className="
                absolute
                top-0
                right-0
                w-16
                h-16
                border-t
                border-r
                border-cyan-400/50
                rounded-tr-2xl
                pointer-events-none
              "
            />

            {/* PROFILE HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-white/10
              "
            >
              <p
                className="
                  text-zinc-400
                  text-[9px]
                  tracking-[0.25em]
                "
              >
                PROFILE.DAT
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
                    text-green-400
                    text-[8px]
                    tracking-[0.3em]
                  "
                >
                  // ONLINE
                </span>

                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-green-400
                    shadow-[0_0_8px_rgba(74,222,128,0.9)]
                  "
                />
              </div>
            </div>

            {/* PROFILE CONTENT */}

            <div
              className="
                flex
                flex-col
                flex-1
                p-5
                sm:p-7
              "
            >
              {/* ===============================================
                  PHOTO + BASIC INFO
              =============================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-[180px_1fr]
                  gap-7
                  items-center
                "
              >
                {/* PHOTO */}

                <div className="flex justify-center">
                  <div
                    className="
                      relative
                      w-36
                      h-36
                      sm:w-40
                      sm:h-40
                      rounded-full
                      border
                      border-cyan-400/60
                      bg-cyan-400/5
                      p-1
                      shadow-[0_0_35px_rgba(0,255,255,0.18)]
                      overflow-hidden
                    "
                  >
                    <img
                      src="/images/profile.jpg"
                      alt="Rona Jane Poliquit"
                      className="
                        w-full
                        h-full
                        rounded-full
                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* INFO */}

                <div
                  className="
                    space-y-7
                    sm:border-l
                    sm:border-cyan-400/20
                    sm:pl-7
                  "
                >
                  {/* EDUCATION */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        shrink-0
                        rounded-lg
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.03]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <GraduationCap
                        size={19}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-zinc-600
                          text-[8px]
                          tracking-[0.4em]
                        "
                      >
                        EDUCATION
                      </p>

                      <p
                        className="
                          mt-2
                          text-white
                          text-xs
                          sm:text-sm
                          tracking-[0.12em]
                        "
                      >
                        UNIVERSITY OF MINDANAO
                      </p>
                    </div>
                  </div>

                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        shrink-0
                        rounded-lg
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.03]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <MapPin
                        size={19}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-zinc-600
                          text-[8px]
                          tracking-[0.4em]
                        "
                      >
                        LOCATION
                      </p>

                      <p
                        className="
                          mt-2
                          text-white
                          text-xs
                          sm:text-sm
                          tracking-[0.12em]
                        "
                      >
                        DAVAO CITY, PH
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===============================================
                  SYSTEM METRICS
              =============================================== */}

              <div
                className="
                  mt-7
                  pt-5
                  border-t
                  border-white/10
                "
              >
                <p
                  className="
                    text-zinc-500
                    text-[9px]
                    tracking-[0.4em]
                    mb-4
                  "
                >
                  SYSTEM METRICS
                </p>

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                  "
                >
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="
                        group
                        relative
                        overflow-hidden
                        min-h-[68px]
                        p-4
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.012]
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/[0.02]
                        transition
                        duration-300
                      "
                    >
                      {/* MINI HUD CORNER */}

                      <span
                        className="
                          absolute
                          top-2
                          left-2
                          w-2
                          h-2
                          border-t
                          border-l
                          border-cyan-400/40
                        "
                      />

                      <span
                        className="
                          absolute
                          bottom-2
                          right-2
                          w-2
                          h-2
                          border-b
                          border-r
                          border-cyan-400/40
                        "
                      />

                      <p
                        className="
                          text-zinc-600
                          text-[8px]
                          tracking-[0.2em]
                        "
                      >
                        {item.label}
                      </p>

                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5
                            shrink-0
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_7px_rgba(0,255,255,0.7)]
                          "
                        />

                        <p
                          className="
                            text-cyan-400
                            text-[10px]
                            sm:text-xs
                            leading-relaxed
                          "
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===============================================
                  AVAILABILITY
              =============================================== */}

              <div
                className="
                  mt-auto
                  pt-6
                "
              >
                <div
                  className="
                    border-t
                    border-white/10
                    pt-5
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      w-2
                      h-2
                      shrink-0
                    "
                  >
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        rounded-full
                        bg-green-400
                        opacity-40
                        animate-ping
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        w-2
                        h-2
                        rounded-full
                        bg-green-400
                        shadow-[0_0_9px_rgba(74,222,128,0.9)]
                      "
                    />
                  </span>

                  <p
                    className="
                      text-green-400
                      text-[8px]
                      sm:text-[9px]
                      tracking-[0.3em]
                      text-center
                    "
                  >
                    AVAILABLE FOR LEARNING + BUILDING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SOCIALS
        ===================================================== */}

        <div className="mt-10">
          {/* SOCIAL HEADER */}

          <div
            className="
              flex
              items-center
              gap-5
              mb-5
            "
          >
            <p
              className="
                text-zinc-500
                text-[9px]
                tracking-[0.45em]
                whitespace-nowrap
              "
            >
              CONNECT // SOCIALS
            </p>

            <div
              className="
                flex-1
                h-px
                bg-white/10
              "
            />
          </div>

          {/* =================================================
              3 SOCIALS PER ROW
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
            "
          >
            {socials.map((social) => {
              const Icon = social.icon;
              const isPlaceholder = social.url === "#";
              const isEmail = social.url.startsWith("mailto:");

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={
                    !isPlaceholder && !isEmail
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    !isPlaceholder && !isEmail
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={(event) =>
                    handleSocialClick(event, social)
                  }
                  className="
                    group
                    relative
                    min-w-0
                    flex
                    items-center
                    justify-between
                    gap-4
                    min-h-[72px]
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-white/10
                    bg-black/30
                    overflow-hidden
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.025]
                    hover:shadow-[0_0_20px_rgba(0,255,255,0.035)]
                    transition
                    duration-300
                  "
                >
                  {/* LEFT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-3
                      min-w-0
                    "
                  >
                    {/* ICON BOX */}

                    <div
                      className="
                        w-10
                        h-10
                        shrink-0
                        rounded-lg
                        border
                        border-white/10
                        bg-black/40
                        flex
                        items-center
                        justify-center
                        text-zinc-400
                        group-hover:text-cyan-400
                        group-hover:border-cyan-400/30
                        group-hover:shadow-[0_0_12px_rgba(0,255,255,0.08)]
                        transition
                        duration-300
                      "
                    >
                      <Icon size={17} />
                    </div>

                    {/* SOCIAL TEXT */}

                    <div className="min-w-0">
                      <p
                        className="
                          text-zinc-300
                          text-[9px]
                          sm:text-[10px]
                          tracking-[0.2em]
                          group-hover:text-white
                          transition
                        "
                      >
                        {social.name}
                      </p>

                      <p
                        className="
                          mt-1
                          text-zinc-600
                          text-[8px]
                          sm:text-[9px]
                          truncate
                        "
                      >
                        {social.username}
                      </p>
                    </div>
                  </div>

                  {/* EXTERNAL LINK */}

                  <ExternalLink
                    size={13}
                    className="
                      relative
                      z-10
                      shrink-0
                      text-zinc-700
                      group-hover:text-cyan-400
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      transition
                      duration-300
                    "
                  />

                  {/* LEFT HOVER LINE */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-px
                      bg-cyan-400
                      opacity-0
                      shadow-[0_0_12px_rgba(0,255,255,0.8)]
                      group-hover:opacity-100
                      transition
                      duration-300
                    "
                  />

                  {/* HOVER GLOW */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      bg-[radial-gradient(circle_at_left,rgba(0,255,255,0.045),transparent_60%)]
                      group-hover:opacity-100
                      transition
                      duration-300
                      pointer-events-none
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div
          className="
            mt-8
            pt-5
            border-t
            border-white/10
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_8px_rgba(0,255,255,0.8)]
              "
            />

            <p
              className="
                text-zinc-700
                text-[8px]
                tracking-[0.35em]
              "
            >
              PROFILE DATABASE // RJP
            </p>
          </div>

          <p
            className="
              text-zinc-700
              text-[8px]
              tracking-[0.35em]
            "
          >
            DAVAO CITY, PHILIPPINES // 2026
          </p>
        </div>
      </div>
    </section>
  );
}