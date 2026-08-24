import { useEffect, useRef } from "react";


export default function ProjectCarousel() {


  const projects = [
    {
      src: "/images/photo2.jpg",
      title: "DEVELOPER"
    },
    {
      src: "/images/beta-test.jpg",
      title: "BANTAY HAYOP DAVAO"
    },
    {
      src: "/images/PAWLYTICS.jpg",
      title: "DONATION APP"
    },
    {
      src: "/images/sign-paw.jpg",
      title: "BETA-TESTING"
    },
    {
      src: "/images/buyzaar.jpg",
      title: ".NET CORE - ECOMMERCE"
    },
    {
      src: "/images/project6.jpg",
      title: "SYSTEM_002"
    }
  ];



  const ringRef = useRef(null);

  const rotation = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);



  const imageWidth = 260;
  const imageHeight = 320;

  const perspective = 1800;

  const angle = 360 / projects.length;


  const radius =
    (imageWidth * 1.8) /
    (2 * Math.tan(Math.PI / projects.length));



  useEffect(()=>{


    const animate = (time)=>{


      const delta =
        lastTime.current
        ? (time - lastTime.current) / 1000
        : 0;


      lastTime.current = time;


      rotation.current +=
        18 * delta;


      if(ringRef.current){

        ringRef.current.style.transform =
        `
        translateZ(-${radius}px)
        rotateY(${rotation.current}deg)
        `;

      }


      requestAnimationFrame(animate);


    };


    requestAnimationFrame(animate);


  },[radius]);






  return (

    <section

className="
relative
mt-16
w-full
h-[500px]
flex
items-center
justify-center
overflow-hidden
[perspective:1800px]
"

>



      <div

        className="
          relative
          w-[260px]
          h-[320px]
          [transform-style:preserve-3d]
        "

        ref={ringRef}

      >



        {
          projects.map((project,index)=>(


            <div

              key={project.title}

              className="
                absolute
                inset-0
                rounded-[35px]
                overflow-hidden
                border
                border-cyan-400/30
                shadow-[0_0_60px_rgba(0,255,255,0.15)]
                bg-black
              "

              style={{

                transform:
                `
                rotateY(${index * angle}deg)
                translateZ(${radius}px)
                `,

                transformStyle:"preserve-3d"

              }}

            >



              <img

                src={project.src}

                alt={project.title}

                className="
                  w-full
                  h-full
                  object-cover
                "

              />



              <div

                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-transparent
                "

              />




              <div

                className="
                  absolute
                  bottom-6
                  left-6
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
                    text-white
                    text-sm
                    tracking-widest
                  "

                >

                  {project.title}

                </p>


              </div>




            </div>


          ))
        }



      </div>



    </section>

  );

}