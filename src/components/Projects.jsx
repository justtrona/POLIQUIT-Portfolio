import { useState } from "react";

import projects from "./ProjectsData";
import githubProjects from "./GithubProjectsData";

import ProjectModal from "./ProjectModal";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="
          relative
          z-20
          w-full
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          lg:px-0
          py-20
          sm:py-24
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center mb-12">
          <p
            className="
              text-cyan-400
              text-lg
              sm:text-xl
              lg:text-2xl
              tracking-[0.35em]
              sm:tracking-[0.45em]
              lg:tracking-[0.5em]
            "
          >
            PROJECTS
          </p>

          <p
            className="
              mt-4
              text-zinc-600
              text-xs
              tracking-[0.25em]
            "
          >
            A GLIMPSE BEHIND THE BUILDS
          </p>
        </div>

        {/* =====================================================
            PROJECT CAROUSEL
        ===================================================== */}

        <div className="relative w-full mb-20">
          <ProjectCarousel />
        </div>

        {/* =====================================================
            FEATURED PROJECTS HEADER
        ===================================================== */}

        <div className="flex items-center gap-5 mb-8">
          <span
            className="
              text-zinc-700
              text-[9px]
              tracking-[0.3em]
            "
          >
            02
          </span>

          <p
            className="
              text-cyan-400
              text-xs
              tracking-[0.45em]
              whitespace-nowrap
            "
          >
            FEATURED PROJECTS
          </p>

          <div className="flex-1 h-px bg-white/10" />

          <p
            className="
              hidden
              sm:block
              text-zinc-700
              text-[8px]
              tracking-[0.3em]
            "
          >
            {String(projects.length).padStart(2, "0")} PROJECT
            {projects.length !== 1 ? "S" : ""}
          </p>
        </div>

        {/* =====================================================
            FEATURED PROJECT CARDS
            PAWLYTICS + BUYZAAR
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                min-h-[420px]
                rounded-3xl
                border
                border-white/10
                bg-white/[0.015]
                text-left
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.02]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.05)]
                transition
                duration-500
              "
            >
              {/* =================================================
                  IMAGE AREA
              ================================================= */}

              <div
                className="
                  relative
                  h-[280px]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  border-b
                  border-white/10
                "
              >
                {/* BACKGROUND GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]
                    opacity-60
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                />

                {/* PROJECT IMAGE */}

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      relative
                      z-10
                      max-w-[220px]
                      max-h-[210px]
                      object-contain
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.03]
                        flex
                        items-center
                        justify-center
                        text-cyan-400
                        text-xl
                      "
                    >
                      {"</>"}
                    </div>

                    <p
                      className="
                        text-zinc-700
                        text-[9px]
                        tracking-[0.35em]
                      "
                    >
                      PROJECT PREVIEW
                    </p>
                  </div>
                )}

                {/* PROJECT NUMBER */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    z-20
                    text-zinc-700
                    text-[9px]
                    tracking-[0.3em]
                  "
                >
                  PROJECT / {project.number}
                </div>

                {/* VIEW PROJECT */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-20
                    flex
                    items-center
                    gap-2
                    text-zinc-600
                    text-[9px]
                    tracking-[0.25em]
                    group-hover:text-cyan-400
                    transition
                  "
                >
                  VIEW PROJECT

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </div>

              {/* =================================================
                  PROJECT INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  flex-1
                  p-6
                  sm:p-7
                "
              >
                {/* CATEGORY */}

                <p
                  className="
                    text-cyan-400
                    text-[9px]
                    tracking-[0.35em]
                  "
                >
                  {project.category}
                </p>

                {/* TITLE */}

                <h3
                  className="
                    mt-3
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    tracking-[0.1em]
                    text-white
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-zinc-500
                    text-sm
                    leading-6
                  "
                >
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies
                    ?.slice(0, 4)
                    .map((technology) => (
                      <span
                        key={technology}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          border
                          border-white/10
                          text-zinc-500
                          text-[8px]
                          tracking-wider
                          group-hover:border-cyan-400/20
                          transition
                        "
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                {/* YEAR / ROLE */}

                <div className="mt-auto pt-7">
                  <div
                    className="
                      pt-5
                      border-t
                      border-white/10
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <p
                      className="
                        text-zinc-700
                        text-[9px]
                        tracking-[0.25em]
                      "
                    >
                      {project.year}
                    </p>

                    {project.role && (
                      <p
                        className="
                          text-zinc-700
                          text-[9px]
                          tracking-[0.25em]
                        "
                      >
                        {project.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* =====================================================
            GITHUB PROJECT ARCHIVE
        ===================================================== */}

        {githubProjects.length > 0 && (
          <div className="mt-24 sm:mt-28">
            {/* =================================================
                ARCHIVE HEADER
            ================================================= */}

            <div className="flex items-center gap-5 mb-8">
              <span
                className="
                  text-zinc-700
                  text-[9px]
                  tracking-[0.3em]
                "
              >
                03
              </span>

              <p
                className="
                  text-cyan-400
                  text-xs
                  tracking-[0.45em]
                  whitespace-nowrap
                "
              >
                GITHUB ARCHIVE
              </p>

              <div className="flex-1 h-px bg-white/10" />

              <p
                className="
                  hidden
                  sm:block
                  text-zinc-700
                  text-[8px]
                  tracking-[0.3em]
                "
              >
                {String(githubProjects.length).padStart(2, "0")} REPOSITORIES
              </p>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                max-w-2xl
                mb-8
                text-zinc-600
                text-xs
                leading-6
                tracking-[0.08em]
              "
            >
              Additional development projects and repositories.
              Explore the source code, technologies, and implementation
              directly through GitHub.
            </p>

            {/* =================================================
                HORIZONTAL GITHUB PROJECTS
            ================================================= */}

            <div className="border-t border-white/10">
              {githubProjects.map((repository, index) => (
                <a
                  key={repository.id}
                  href={repository.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    grid
                    grid-cols-[45px_1fr_auto]
                    md:grid-cols-[60px_1fr_1fr_auto]
                    items-center
                    gap-4
                    md:gap-8
                    min-h-[120px]
                    py-6
                    px-3
                    sm:px-5
                    border-b
                    border-white/10
                    hover:bg-cyan-400/[0.02]
                    transition
                    duration-300
                  "
                >
                  {/* NUMBER */}

                  <div
                    className="
                      text-zinc-700
                      text-[9px]
                      tracking-[0.25em]
                      group-hover:text-cyan-400
                      transition
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* PROJECT INFO */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-white
                        text-sm
                        sm:text-base
                        font-medium
                        tracking-[0.15em]
                        group-hover:text-cyan-400
                        transition
                      "
                    >
                      {repository.title}
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-xl
                        text-zinc-600
                        text-xs
                        leading-5
                        line-clamp-2
                      "
                    >
                      {repository.description}
                    </p>

                    {/* TECHNOLOGIES ON MOBILE */}

                    <div
                      className="
                        mt-4
                        flex
                        md:hidden
                        flex-wrap
                        gap-2
                      "
                    >
                      {repository.technologies
                        ?.slice(0, 3)
                        .map((technology) => (
                          <span
                            key={technology}
                            className="
                              px-2.5
                              py-1
                              rounded-full
                              border
                              border-white/10
                              text-zinc-600
                              text-[7px]
                              tracking-wider
                            "
                          >
                            {technology}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* TECHNOLOGIES DESKTOP */}

                  <div
                    className="
                      hidden
                      md:flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {repository.technologies
                      ?.slice(0, 4)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="
                            px-3
                            py-1.5
                            rounded-full
                            border
                            border-white/10
                            text-zinc-600
                            text-[8px]
                            tracking-wider
                            group-hover:border-cyan-400/20
                            group-hover:text-zinc-400
                            transition
                          "
                        >
                          {technology}
                        </span>
                      ))}
                  </div>

                  {/* GITHUB BUTTON */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      whitespace-nowrap
                      text-zinc-600
                      text-[9px]
                      tracking-[0.25em]
                      group-hover:text-cyan-400
                      transition
                    "
                  >
                    <span className="hidden sm:block">
                      VIEW REPO
                    </span>

                    <span
                      className="
                        text-base
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* HOVER LEFT LINE */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-px
                      bg-cyan-400
                      opacity-0
                      shadow-[0_0_15px_rgba(0,255,255,0.8)]
                      group-hover:opacity-100
                      transition
                      duration-300
                    "
                  />
                </a>
              ))}
            </div>

            {/* =================================================
                ARCHIVE FOOTER
            ================================================= */}

            <div className="mt-5 flex items-center gap-3">
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
                  text-[8px]
                  tracking-[0.35em]
                "
              >
                SOURCE ARCHIVE // GITHUB
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ============================================================
          PROJECT MODAL

          ONLY PAWLYTICS / BUYZAAR OPEN THIS.
          GITHUB REPOSITORIES GO DIRECTLY TO GITHUB.
      ============================================================ */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}