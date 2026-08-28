import { useEffect, useRef } from "react";

export default function ProjectCarousel() {
  const projects = [
    {
      src: "/images/photo2.jpg",
      title: "DEVELOPER",
    },
    {
      src: "/images/beta-test.jpg",
      title: "BANTAY HAYOP DAVAO",
    },
    {
      src: "/images/PAWLYTICS.jpg",
      title: "DONATION APP",
    },
    {
      src: "/images/sign-paw.jpg",
      title: "BETA-TESTING",
    },
    {
      src: "/images/buyzaar.jpg",
      title: ".NET CORE - ECOMMERCE",
    },
    {
      src: "/images/project6.jpg",
      title: "SYSTEM_002",
    },
  ];

  const ringRef = useRef(null);

  const rotation = useRef(0);
  const lastTime = useRef(0);

  /*
   * ==========================================
   * CAROUSEL SIZE
   * ==========================================
   *
   * Desktop:
   * 320 x 400
   *
   * Smaller screens:
   * 240 x 300
   */

  const imageWidth = 320;
  const imageHeight = 400;

  const perspective = 2200;

  const angle = 360 / projects.length;

  const radius =
    (imageWidth * 1.8) /
    (2 * Math.tan(Math.PI / projects.length));


  /*
   * ==========================================
   * ROTATION
   * ==========================================
   */

  useEffect(() => {
    let animationFrame;

    const animate = (time) => {
      const delta = lastTime.current
        ? (time - lastTime.current) / 1000
        : 0;

      lastTime.current = time;

      rotation.current += 18 * delta;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translateZ(-${radius}px)
          rotateY(${rotation.current}deg)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [radius]);


  return (
    <section
      className="
        relative
        mt-5
        w-full
        h-[560px]
        sm:h-[620px]
        lg:h-[680px]

        flex
        items-center
        justify-center

        overflow-hidden

        [perspective:2200px]
      "
    >

      {/* ==========================================
          CAROUSEL RING
          ========================================== */}

      <div
        ref={ringRef}
        className="
          relative

          w-[240px]
          h-[300px]

          sm:w-[280px]
          sm:h-[350px]

          lg:w-[320px]
          lg:h-[400px]

          [transform-style:preserve-3d]
        "
      >

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="
              absolute
              inset-0

              rounded-[35px]

              overflow-hidden

              border
              border-cyan-400/30

              shadow-[0_0_70px_rgba(0,255,255,0.18)]

              bg-black
            "
            style={{
              transform: `
                rotateY(${index * angle}deg)
                translateZ(${radius}px)
              `,
              transformStyle: "preserve-3d",
            }}
          >

            {/* ==========================================
                PROJECT IMAGE
                ========================================== */}

            <img
              src={project.src}
              alt={project.title}
              className="
                w-full
                h-full
                object-cover
              "
            />


            {/* ==========================================
                CINEMATIC OVERLAY
                ========================================== */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/80
                via-transparent
                to-transparent

                pointer-events-none
              "
            />


            {/* ==========================================
                PROJECT INFORMATION
                ========================================== */}

            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
              "
            >

              <p
                className="
                  text-cyan-400
                  text-[10px]
                  tracking-[0.5em]
                "
              >
                PROJECT
              </p>


              <p
                className="
                  mt-1
                  text-white
                  text-sm
                  sm:text-base
                  tracking-widest
                "
              >
                {project.title}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}