import { motion } from "framer-motion";


export default function ProfileVisual() {


  return (

    <motion.div

      initial={{
        opacity: 0,
        x: 80
      }}

      animate={{
        opacity: 1,
        x: 0
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}

      className="
  absolute
  right-16
  top-33
  w-72
  h-[360px]
  rounded-3xl
  overflow-hidden
  border
  border-cyan-400/30
  bg-black
  shadow-[0_0_60px_rgba(0,255,255,0.15)]
"

    >


      {/* PROFILE IMAGE */}

      <img

        src="/images/profile.jpg"

        alt="Profile"

        className="
          w-full
          h-full
          object-cover
          opacity-90
          scale-105
          transition
          duration-700
        "

      />




      {/* DARK CINEMATIC OVERLAY */}

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





      {/* SCAN EFFECT */}

      <motion.div

        animate={{
          y: [
            "-120%",
            "120%"
          ]
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2
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






      {/* TOP STATUS */}

      <div

        className="
          absolute
          top-4
          left-4
          right-4
          flex
          justify-between
          items-center
        "

      >


        <p

          className="
            text-cyan-400
            text-[10px]
            tracking-[0.5em]
          "

        >
          IDENTITY
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






      {/* CORNER HUD DETAILS */}

      <div

        className="
          absolute
          bottom-4
          left-4
          text-[9px]
          tracking-[0.4em]
          text-cyan-400/70
        "

      >

        

      </div>





    </motion.div>

  );

}