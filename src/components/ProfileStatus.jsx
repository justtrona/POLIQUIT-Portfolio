import { useState } from "react";

export default function ProfileStatus() {
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          FLOATING PROFILE STATUS
          ===================================================== */}

      {/* =================================================
          STATUS BUTTON
          ================================================= */}

      {!statusOpen && (
        <button
          onClick={() => setStatusOpen(true)}
          className="
            fixed
            right-4
            bottom-4
            sm:right-6
            sm:bottom-6
            lg:right-10
            lg:bottom-10
            w-auto
            min-w-40
            sm:w-44
            px-4
            sm:px-5
            py-3
            sm:py-4
            rounded-full
            border
            border-cyan-400/40
            bg-black/80
            backdrop-blur-xl
            hover:bg-cyan-400/10
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
            transition
            z-50
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-400
                animate-pulse
                shadow-[0_0_10px_rgba(34,197,94,0.8)]
              "
            />

            <p
              className="
                text-cyan-400
                text-[10px]
                sm:text-xs
                tracking-[0.2em]
                sm:tracking-[0.3em]
              "
            >
              PROFILE STATUS
            </p>
          </div>
        </button>
      )}

      {/* =================================================
          STATUS PANEL
          ================================================= */}

      {statusOpen && (
        <div
          className="
            fixed
            right-4
            bottom-4
            sm:right-6
            sm:bottom-6
            lg:right-10
            lg:bottom-10
            w-[calc(100%-2rem)]
            max-w-72
            rounded-3xl
            border
            border-cyan-400/30
            bg-black/90
            backdrop-blur-xl
            p-5
            sm:p-6
            shadow-[0_0_50px_rgba(0,255,255,0.15)]
            z-50
          "
        >
          {/* =================================================
              HEADER
              ================================================= */}

          <div
            className="
              flex
              justify-between
              items-start
            "
          >
            <p
              className="
                text-zinc-500
                text-xs
                tracking-[0.4em]
                sm:tracking-[0.5em]
              "
            >
              PROFILE
              <br />
              STATUS
            </p>

            <button
              onClick={() => setStatusOpen(false)}
              className="
                text-zinc-400
                text-[10px]
                sm:text-xs
                tracking-widest
                hover:text-cyan-400
                transition
              "
            >
              ✕
              <br />
              CLOSE
            </button>
          </div>

          {/* =================================================
              ONLINE STATUS
              ================================================= */}

          <div className="mt-6 sm:mt-8">
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]
                "
              />

              <p
                className="
                  text-green-400
                  text-base
                  sm:text-lg
                  tracking-widest
                "
              >
                AVAILABLE
              </p>
            </div>

            <p
              className="
                mt-2
                text-zinc-500
                text-[9px]
                sm:text-[10px]
                tracking-[0.3em]
                sm:tracking-[0.4em]
              "
            >
              OPEN FOR PROJECTS
            </p>
          </div>

          {/* =================================================
              INFO
              ================================================= */}

          <div
            className="
              mt-6
              sm:mt-8
              space-y-5
              sm:space-y-6
            "
          >
            {/* ENGAGEMENT */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                ENGAGEMENT
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                FREELANCE / REMOTE
              </p>
            </div>

            {/* SPECIALTY */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                SPECIALTY
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                WEB • MOBILE • SOFTWARE
              </p>
            </div>

            {/* LOCATION */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                LOCATION
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                DAVAO CITY, PH
              </p>
            </div>
          </div>

          {/* =================================================
              FOOTER
              ================================================= */}

          <div
            className="
              mt-6
              pt-4
              border-t
              border-white/10
            "
          >
            <p
              className="
                text-zinc-600
                text-[9px]
                sm:text-[10px]
                tracking-[0.3em]
                sm:tracking-[0.4em]
              "
            >
              SYS_READY // 7232
            </p>
          </div>
        </div>
      )}
    </>
  );
}