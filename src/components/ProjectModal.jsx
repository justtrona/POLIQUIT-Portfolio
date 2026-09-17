import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const [showAllGallery, setShowAllGallery] = useState(false);

  const INITIAL_GALLERY_COUNT = 3;

  const gallery = project?.gallery ?? [];

  const visibleGallery = showAllGallery
    ? gallery
    : gallery.slice(0, INITIAL_GALLERY_COUNT);

  const remainingImages = Math.max(
    gallery.length - INITIAL_GALLERY_COUNT,
    0
  );

  // ============================================================
  // LOCK BACKGROUND SCROLL + ESCAPE
  // ============================================================

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // ============================================================
  // RESET GALLERY WHEN PROJECT CHANGES
  // ============================================================

  useEffect(() => {
    setShowAllGallery(false);
  }, [project?.id]);

  if (!project) {
    return null;
  }

  // ============================================================
  // MODAL
  // ============================================================

  const modal = (
    <div
      className="
        fixed
        inset-0
        z-[99999]

        flex
        items-center
        justify-center

        p-3
        sm:p-5
        lg:p-8

        bg-black/75
        backdrop-blur-md
      "
      onMouseDown={onClose}
    >
      {/* ========================================================
          ACTUAL MODAL WINDOW
          ======================================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="
          relative

          w-full
          max-w-[1180px]

          h-[92vh]
          max-h-[920px]

          overflow-hidden

          rounded-[28px]

          border
          border-cyan-400/25

          bg-[#070909]

          shadow-[0_0_80px_rgba(0,255,255,0.12)]
        "
      >
        {/* ========================================================
            MODAL BACKGROUND EFFECT
            ======================================================== */}

        <div
          className="
            absolute
            inset-0

            pointer-events-none

            bg-[radial-gradient(circle_at_30%_0%,rgba(0,255,255,0.06),transparent_35%)]
          "
        />

        {/* ========================================================
            FIXED MODAL HEADER
            ======================================================== */}

        <div
          className="
            absolute
            top-0
            left-0
            right-0

            z-50

            flex
            items-center
            justify-between

            px-5
            sm:px-7
            lg:px-9

            h-[70px]

            border-b
            border-white/10

            bg-[#070909]/90
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                w-2
                h-2

                rounded-full

                bg-cyan-400

                shadow-[0_0_12px_rgba(0,255,255,0.9)]
              "
            />

            <div>
              <p
                className="
                  text-cyan-400

                  text-[9px]

                  tracking-[0.4em]
                "
              >
                PROJECT / {project.number}
              </p>

              <p
                className="
                  mt-1

                  text-zinc-600

                  text-[8px]

                  tracking-[0.3em]
                "
              >
                PROJECT ARCHIVE
              </p>
            </div>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            className="
              group

              flex
              items-center
              gap-3

              px-4
              py-2

              rounded-full

              border
              border-transparent

              text-zinc-500

              text-[9px]

              tracking-[0.3em]

              hover:text-cyan-400
              hover:border-cyan-400/20
              hover:bg-cyan-400/[0.04]

              transition
              duration-300
            "
          >
            <span
              className="
                text-sm

                transition-transform
                duration-300

                group-hover:rotate-90
              "
            >
              ✕
            </span>

            <span className="hidden sm:inline">
              CLOSE
            </span>
          </button>
        </div>

        {/* ========================================================
            SCROLLABLE MODAL CONTENT
            ======================================================== */}

        <div
          className="
            relative
            z-10

            h-full

            overflow-y-auto
            overscroll-contain

            pt-[70px]

            [scrollbar-width:thin]
            [scrollbar-color:rgba(0,255,255,0.25)_transparent]
          "
        >
          <div
            className="
              px-5
              sm:px-7
              lg:px-10

              py-8
              sm:py-10
              lg:py-12
            "
          >
            {/* ====================================================
                PROJECT TITLE
                ==================================================== */}

            <div className="max-w-4xl">
              <p
                className="
                  text-cyan-400

                  text-[9px]

                  tracking-[0.45em]
                "
              >
                FEATURED PROJECT
              </p>

              <h2
                id="project-modal-title"
                className="
                  mt-4

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-semibold

                  tracking-[0.1em]

                  text-white
                "
              >
                {project.title}
              </h2>

              {project.subtitle && (
                <p
                  className="
                    mt-4

                    max-w-3xl

                    text-zinc-500

                    text-xs
                    sm:text-sm

                    leading-7

                    tracking-[0.06em]
                  "
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* ====================================================
                PROJECT HERO
                ==================================================== */}

            <div
              className="
                mt-8

                grid
                grid-cols-1

                lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]

                gap-4
              "
            >
              {/* ==================================================
                  PROJECT IMAGE
                  ================================================== */}

              <div
                className="
                  group
                  relative

                  min-h-[300px]
                  sm:min-h-[360px]

                  flex
                  items-center
                  justify-center

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.015]
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.07),transparent_60%)]
                  "
                />

                {/* LABEL */}

                <p
                  className="
                    absolute
                    top-5
                    left-5

                    text-zinc-700

                    text-[8px]

                    tracking-[0.35em]
                  "
                >
                  {project.title} // PROJECT_{project.number}
                </p>

                {/* IMAGE */}

                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="
                      relative
                      z-10

                      w-auto

                      max-w-[190px]
                      sm:max-w-[230px]
                      lg:max-w-[260px]

                      max-h-[260px]

                      object-contain

                      transition
                      duration-500

                      group-hover:scale-[1.03]
                    "
                  />
                )}

                {/* CATEGORY */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5

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

                      shadow-[0_0_10px_rgba(0,255,255,0.9)]
                    "
                  />

                  <span
                    className="
                      text-zinc-600

                      text-[8px]

                      tracking-[0.3em]
                    "
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* ==================================================
                  PROJECT DATA
                  ================================================== */}

              <div
                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.015]

                  p-5
                  sm:p-6
                "
              >
                <p
                  className="
                    text-zinc-600

                    text-[8px]

                    tracking-[0.4em]
                  "
                >
                  PROJECT DATA
                </p>

                <ProjectDataItem
                  label="CATEGORY"
                  value={project.category}
                />

                <ProjectDataItem
                  label="YEAR"
                  value={project.year}
                />

                <ProjectDataItem
                  label="ROLE"
                  value={project.role}
                />

                {/* TECHNOLOGIES */}

                {project.technologies?.length > 0 && (
                  <div className="pt-5">
                    <p
                      className="
                        text-zinc-600

                        text-[8px]

                        tracking-[0.3em]
                      "
                    >
                      TECHNOLOGIES
                    </p>

                    <div
                      className="
                        mt-4

                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            px-3
                            py-1.5

                            rounded-full

                            border
                            border-cyan-400/20

                            bg-cyan-400/[0.03]

                            text-cyan-400

                            text-[8px]

                            tracking-wider
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ====================================================
                PROJECT INFORMATION
                ==================================================== */}

            <div className="mt-14">
              <InfoSection
                number="01"
                title="OVERVIEW"
              >
                {project.overview}
              </InfoSection>

              <InfoSection
                number="02"
                title="THE PROBLEM"
              >
                {project.problem}
              </InfoSection>

              <InfoSection
                number="03"
                title="THE SOLUTION"
              >
                {project.solution}
              </InfoSection>
            </div>

            {/* ====================================================
                KEY FEATURES
                ==================================================== */}

            {project.features?.length > 0 && (
              <section className="mt-16">
                <SectionHeading
                  number="04"
                  title="KEY FEATURES"
                  subtitle="CORE SYSTEM CAPABILITIES"
                />

                <div
                  className="
                    mt-6

                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3

                    gap-3
                  "
                >
                  {project.features.map((feature, index) => (
                    <div
                      key={`${feature}-${index}`}
                      className="
                        group

                        min-h-[110px]

                        rounded-xl

                        border
                        border-white/10

                        bg-white/[0.015]

                        p-4

                        flex
                        flex-col
                        justify-between

                        hover:border-cyan-400/30
                        hover:bg-cyan-400/[0.025]

                        transition
                        duration-300
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <span
                          className="
                            text-cyan-400

                            text-[8px]

                            tracking-[0.3em]
                          "
                        >
                          FEATURE
                        </span>

                        <span
                          className="
                            text-zinc-700

                            text-[9px]

                            group-hover:text-cyan-400

                            transition
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p
                        className="
                          mt-6

                          text-zinc-300

                          text-xs
                          sm:text-sm

                          tracking-wide
                        "
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ====================================================
                PROJECT GALLERY
                ==================================================== */}

            {gallery.length > 0 && (
              <section className="mt-16">
                <SectionHeading
                  number="05"
                  title="PROJECT GALLERY"
                  subtitle="INTERFACE & SYSTEM PREVIEW"
                />

                {/* ================================================
                    ONLY FIRST 3 SCREENSHOTS INITIALLY
                    ================================================ */}

                <div
                  className="
                    mt-6

                    grid
                    grid-cols-1
                    md:grid-cols-2

                    gap-4
                  "
                >
                  {visibleGallery.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className={`
                        group
                        relative

                        rounded-xl

                        border
                        border-white/10

                        bg-white/[0.015]

                        overflow-hidden

                        ${
                          index === 0
                            ? "md:col-span-2"
                            : ""
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-center

                          min-h-[240px]

                          bg-black/20
                        "
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${
                            index + 1
                          }`}
                          loading="lazy"
                          decoding="async"
                          className="
                            w-full
                            h-auto

                            max-h-[500px]

                            object-contain

                            transition
                            duration-500

                            group-hover:scale-[1.01]
                          "
                        />
                      </div>

                      <div
                        className="
                          absolute
                          top-3
                          left-3

                          px-3
                          py-1.5

                          rounded-full

                          border
                          border-white/10

                          bg-black/80
                          backdrop-blur-md

                          text-zinc-500

                          text-[7px]

                          tracking-[0.3em]
                        "
                      >
                        SCREEN_
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ================================================
                    SHOW MORE BUTTON
                    ================================================ */}

                {gallery.length > INITIAL_GALLERY_COUNT && (
                  <div
                    className="
                      mt-8

                      flex
                      flex-col
                      items-center

                      gap-3
                    "
                  >
                    <p
                      className="
                        text-zinc-700

                        text-[7px]

                        tracking-[0.35em]
                      "
                    >
                      SHOWING{" "}
                      {showAllGallery
                        ? gallery.length
                        : Math.min(
                            INITIAL_GALLERY_COUNT,
                            gallery.length
                          )}{" "}
                      OF {gallery.length} SCREENS
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setShowAllGallery(
                          (previous) => !previous
                        )
                      }
                      className="
                        group

                        flex
                        items-center
                        justify-center

                        gap-4

                        min-w-[220px]

                        px-6
                        py-3

                        rounded-full

                        border
                        border-cyan-400/25

                        bg-cyan-400/[0.03]

                        text-cyan-400

                        text-[8px]

                        tracking-[0.35em]

                        hover:border-cyan-400/50
                        hover:bg-cyan-400/[0.07]
                        hover:shadow-[0_0_20px_rgba(0,255,255,0.08)]

                        transition
                        duration-300
                      "
                    >
                      {showAllGallery
                        ? "SHOW LESS"
                        : `SHOW MORE (${remainingImages})`}

                      <span
                        className={`
                          text-xs

                          transition-transform
                          duration-300

                          ${
                            showAllGallery
                              ? "rotate-180"
                              : "group-hover:translate-y-0.5"
                          }
                        `}
                      >
                        ↓
                      </span>
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* ====================================================
                DEVELOPMENT
                ==================================================== */}

            {(project.challenges || project.learnings) && (
              <section className="mt-16">
                <SectionHeading
                  number={gallery.length > 0 ? "06" : "05"}
                  title="DEVELOPMENT"
                  subtitle="CHALLENGES & LEARNINGS"
                />

                <div
                  className="
                    mt-6

                    grid
                    grid-cols-1
                    lg:grid-cols-2

                    gap-4
                  "
                >
                  {project.challenges && (
                    <DevelopmentCard
                      title="CHALLENGES"
                      content={project.challenges}
                    />
                  )}

                  {project.learnings && (
                    <DevelopmentCard
                      title="WHAT I LEARNED"
                      content={project.learnings}
                    />
                  )}
                </div>
              </section>
            )}

            {/* ====================================================
                PROJECT LINKS
                ==================================================== */}

            {(project.github || project.liveUrl) && (
              <section
                className="
                  mt-16

                  pt-8

                  border-t
                  border-white/10
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    sm:flex-row
                    sm:items-center
                    sm:justify-between

                    gap-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-cyan-400

                        text-[8px]

                        tracking-[0.4em]
                      "
                    >
                      EXPLORE PROJECT
                    </p>

                    <p
                      className="
                        mt-2

                        text-zinc-600

                        text-[9px]

                        tracking-wider
                      "
                    >
                      VIEW THE PROJECT BEYOND THE PORTFOLIO
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5
                          py-2.5

                          rounded-full

                          border
                          border-white/10

                          text-zinc-400

                          text-[8px]

                          tracking-[0.25em]

                          hover:text-white
                          hover:border-white/30

                          transition
                        "
                      >
                        VIEW CODE ↗
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5
                          py-2.5

                          rounded-full

                          border
                          border-cyan-400/30

                          bg-cyan-400/[0.05]

                          text-cyan-400

                          text-[8px]

                          tracking-[0.25em]

                          hover:border-cyan-400
                          hover:bg-cyan-400/10

                          transition
                        "
                      >
                        LIVE PROJECT ↗
                      </a>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* ====================================================
                FOOTER
                ==================================================== */}

            <div
              className="
                mt-16

                pt-6
                pb-2

                border-t
                border-white/10

                flex
                items-center
                justify-between

                gap-5
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

                    shadow-[0_0_10px_rgba(0,255,255,0.9)]
                  "
                />

                <p
                  className="
                    text-zinc-700

                    text-[7px]
                    sm:text-[8px]

                    tracking-[0.35em]
                  "
                >
                  PROJECT_ARCHIVE // {project.number}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  text-zinc-600

                  text-[8px]

                  tracking-[0.3em]

                  hover:text-cyan-400

                  transition
                "
              >
                CLOSE PROJECT ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

// ============================================================
// PROJECT DATA ITEM
// ============================================================

function ProjectDataItem({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <div
      className="
        py-5

        border-b
        border-white/10
      "
    >
      <p
        className="
          text-zinc-600

          text-[8px]

          tracking-[0.3em]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2

          text-zinc-200

          text-xs
          sm:text-sm

          tracking-wider
        "
      >
        {value}
      </p>
    </div>
  );
}

// ============================================================
// INFORMATION SECTION
// ============================================================

function InfoSection({ number, title, children }) {
  if (!children) {
    return null;
  }

  return (
    <div
      className="
        grid
        grid-cols-1

        lg:grid-cols-[180px_1fr]

        gap-5
        lg:gap-10

        py-7

        border-b
        border-white/10
      "
    >
      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        <span
          className="
            text-zinc-700

            text-[8px]

            tracking-wider
          "
        >
          {number}
        </span>

        <p
          className="
            text-cyan-400

            text-[9px]

            tracking-[0.4em]
          "
        >
          {title}
        </p>
      </div>

      <p
        className="
          max-w-3xl

          text-zinc-400

          text-xs
          sm:text-sm

          leading-7
        "
      >
        {children}
      </p>
    </div>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================

function SectionHeading({
  number,
  title,
  subtitle,
}) {
  return (
    <div
      className="
        flex
        flex-col

        sm:flex-row
        sm:items-end
        sm:justify-between

        gap-4

        pb-4

        border-b
        border-white/10
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            text-zinc-700

            text-[8px]

            tracking-wider
          "
        >
          {number}
        </span>

        <h3
          className="
            text-cyan-400

            text-[10px]

            tracking-[0.4em]
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          text-zinc-700

          text-[7px]

          tracking-[0.3em]
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

// ============================================================
// DEVELOPMENT CARD
// ============================================================

function DevelopmentCard({ title, content }) {
  return (
    <div
      className="
        rounded-xl

        border
        border-white/10

        bg-white/[0.015]

        p-5
        sm:p-6
      "
    >
      <p
        className="
          text-cyan-400

          text-[8px]

          tracking-[0.35em]
        "
      >
        {title}
      </p>

      <p
        className="
          mt-4

          text-zinc-400

          text-xs
          sm:text-sm

          leading-7
        "
      >
        {content}
      </p>
    </div>
  );
}