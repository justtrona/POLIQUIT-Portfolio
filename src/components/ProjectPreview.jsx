export default function ProjectPreview({ project, onExplore }) {
  if (!project) return null;

  return (
    <div
      className="
        w-full
        max-w-5xl
        mx-auto
        -mt-6
        sm:-mt-10
        pb-10
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-400/20
          bg-black/60
          backdrop-blur-xl
          p-6
          sm:p-8
          lg:p-10
          shadow-[0_0_60px_rgba(0,255,255,0.08)]
        "
      >
        {/* subtle glow */}

        <div
          className="
            absolute
            -top-32
            -right-32
            w-64
            h-64
            rounded-full
            bg-cyan-400/5
            blur-3xl
            pointer-events-none
          "
        />

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
            pb-6
            border-b
            border-white/10
          "
        >
          <p
            className="
              text-zinc-600
              text-[10px]
              tracking-[0.4em]
            "
          >
            PROJECT / {project.number}
          </p>

          <p
            className="
              text-zinc-600
              text-[10px]
              tracking-[0.3em]
            "
          >
            {project.year}
          </p>
        </div>

        {/* CONTENT */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_280px]
            gap-8
            lg:gap-12
            pt-7
          "
        >
          <div>
            <p
              className="
                text-cyan-400
                text-[10px]
                tracking-[0.35em]
              "
            >
              {project.category}
            </p>

            <h3
              className="
                mt-3
                text-2xl
                sm:text-3xl
                font-semibold
                tracking-[0.12em]
                text-white
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-2
                text-zinc-500
                text-xs
                sm:text-sm
                tracking-wider
              "
            >
              {project.subtitle}
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-zinc-400
                text-sm
                leading-7
              "
            >
              {project.description}
            </p>
          </div>

          {/* RIGHT INFO */}

          <div className="space-y-6">
            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  tracking-[0.35em]
                "
              >
                ROLE
              </p>

              <p
                className="
                  mt-2
                  text-zinc-300
                  text-xs
                  tracking-widest
                "
              >
                {project.role}
              </p>
            </div>

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  tracking-[0.35em]
                "
              >
                BUILT WITH
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-400
                      text-[9px]
                      tracking-wider
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE */}

        <div
          className="
            mt-8
            pt-6
            border-t
            border-white/10
            flex
            justify-end
          "
        >
          <button
            type="button"
            onClick={onExplore}
            className="
              group
              flex
              items-center
              gap-4
              text-cyan-400
              text-[10px]
              sm:text-xs
              tracking-[0.35em]
            "
          >
            EXPLORE PROJECT

            <span
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-400/5
                text-lg
                group-hover:bg-cyan-400/10
                group-hover:border-cyan-400
                group-hover:translate-x-1
                transition-all
                duration-300
              "
            >
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}