import { motion } from "framer-motion";

export default function ProfileVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        relative
        w-72
        sm:w-80
        lg:w-[340px]
        xl:w-[360px]
        2xl:w-[380px]

        h-[360px]
        sm:h-[400px]
        lg:h-[430px]
        xl:h-[460px]
        2xl:h-[480px]

        rounded-3xl
        overflow-hidden
        border
        border-cyan-400/30
        bg-black
        shadow-[0_0_60px_rgba(0,255,255,0.15)]
        flex-shrink-0
      "
    >

      {/* =========================================
          PROFILE IMAGE
          ========================================= */}

      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-90
          scale-105
          transition
          duration-700
        "
      />


      {/* =========================================
          DARK CINEMATIC OVERLAY
          ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          pointer-events-none
        "
      />


      {/* =========================================
          SCAN EFFECT
          ========================================= */}

      <motion.div
        animate={{
          y: [
            "-120%",
            "120%",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          right-0
          h-16
          bg-gradient-to-b
          from-transparent
          via-cyan-400/30
          to-transparent
          pointer-events-none
        "
      />


      {/* =========================================
          TOP STATUS
          ========================================= */}

      <div
        className="
          absolute
          top-5
          left-5
          right-5
          flex
          justify-between
          items-center
          z-10
        "
      >

        {/* IDENTITY */}

        <p
          className="
            text-cyan-400
            text-[10px]
            tracking-[0.5em]
          "
        >
          IDENTITY
        </p>


        {/* ONLINE */}

        <div
          className="
            flex
            items-center
            gap-2
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
              text-[10px]
              tracking-widest
            "
          >
            ONLINE
          </p>

        </div>

      </div>


      {/* =========================================
          CORNER HUD DETAILS
          ========================================= */}

      <div
        className="
          absolute
          bottom-5
          left-5
          text-[9px]
          tracking-[0.4em]
          text-cyan-400/70
          z-10
        "
      >
        PROFILE // 001
      </div>

    </motion.div>
  );
}