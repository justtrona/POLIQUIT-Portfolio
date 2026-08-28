import {
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";


export default function About() {


  const stats = [
    {
      label: "STATUS",
      value: "STUDENT",
    },

    {
      label: "UNIVERSITY",
      value: "UMINDANAO",
    },

    {
      label: "FIELD",
      value: "COMPUTER SCIENCE",
    },

    {
      label: "MODE",
      value: "LEARNING",
    },
  ];



  const technologies = [
    "REACT",
    "JAVASCRIPT",
    "TAILWIND",
    "JAVA",
    "DATABASE",
    "MOBILE",
  ];



  return (

    <section

      id="about"

      className="
        scroll-mt-24

        relative
        min-h-screen
        w-full

        px-6
        sm:px-10
        lg:px-16

        py-24

        flex
        items-center
        justify-center

        overflow-hidden
      "

    >



      {/* ATMOSPHERE */}


      <div

        className="
          absolute
          inset-0

          pointer-events-none

          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_45%)]
        "

      />



      <div

        className="
          absolute

          left-0
          top-1/2

          -translate-y-1/2

          w-72
          h-72

          bg-cyan-400/5

          blur-[120px]

          pointer-events-none
        "

      />





      {/* CONTENT */}



      <div

        className="
          relative
          z-10

          max-w-6xl
          w-full
        "

      >




        {/* HEADER */}



        <div className="mb-12">


          <p

            className="
              text-cyan-400

              text-xs

              tracking-[0.5em]
            "

          >

            ABOUT // PROFILE

          </p>



          <div

            className="
              mt-4

              h-px

              w-24

              bg-cyan-400/40
            "

          />


        </div>






        {/* GRID */}



        <div

          className="
            grid

            grid-cols-1
            lg:grid-cols-2

            gap-14

            items-center
          "

        >





          {/* LEFT SIDE */}



          <div>



            <p

              className="
                text-zinc-500

                text-[10px]

                tracking-[0.5em]

                mb-5
              "

            >

              SYSTEM USER // 001

            </p>




            <h1

              className="
                text-white

                text-4xl

                sm:text-5xl

                lg:text-6xl

                font-bold

                tracking-widest
              "

            >

              RONA JANE

              <br />

              POLIQUIT


            </h1>





            <p

              className="
                mt-4

                text-cyan-400

                tracking-[0.3em]

                text-sm
              "

            >

              ASPIRING SOFTWARE DEVELOPER

            </p>







            {/* TERMINAL BOX */}



            <div

              className="
                mt-8

                border

                border-cyan-400/20

                bg-black/40

                rounded-xl

                p-5

                font-mono

                text-sm
              "

            >


              <p className="text-zinc-500">

                $ whoami

              </p>



              <p

                className="
                  text-green-400

                  mt-3
                "

              >

                rona@developer:~

              </p>




              <p

                className="
                  text-zinc-300

                  mt-3

                  leading-relaxed
                "

              >

                Computer Science student at the University
                of Mindanao passionate about creating
                digital solutions through web development,
                software engineering, and emerging technologies.

              </p>



            </div>







            {/* TECH STACK */}



            <div

              className="
                mt-8

                flex

                flex-wrap

                gap-3
              "

            >


              {technologies.map((tech)=>(


                <span

                  key={tech}

                  className="
                    px-4
                    py-2

                    rounded-full

                    border

                    border-cyan-400/20

                    bg-cyan-400/5

                    text-cyan-300

                    text-[10px]

                    tracking-[0.3em]
                  "

                >

                  {tech}


                </span>


              ))}


            </div>




          </div>









          {/* RIGHT SIDE */}




          <div

            className="
              relative

              border

              border-cyan-400/20

              rounded-3xl

              bg-black/50

              backdrop-blur-xl

              p-8

              shadow-[0_0_50px_rgba(0,255,255,0.08)]
            "

          >




            {/* HUD CORNERS */}



            <div

              className="
                absolute

                top-0
                right-0

                w-16
                h-16

                border-t
                border-r

                border-cyan-400/30

                rounded-tr-3xl
              "

            />



            <div

              className="
                absolute

                bottom-0
                left-0

                w-16
                h-16

                border-b
                border-l

                border-cyan-400/30

                rounded-bl-3xl
              "

            />








            {/* PROFILE ICON */}



            <div

              className="
                flex

                justify-center

                mb-8
              "

            >


              <div

                className="
                  w-36
                  h-36

                  rounded-full

                  border

                  border-cyan-400/40

                  bg-cyan-400/5

                  flex

                  items-center

                  justify-center

                  shadow-[0_0_40px_rgba(0,255,255,0.2)]
                "

              >


                <Code2

                  size={50}

                  className="text-cyan-400"

                />


              </div>



            </div>







            {/* DATA */}



            <div className="space-y-7">





              <div>


                <p className="text-zinc-600 text-[10px] tracking-[0.4em]">

                  EDUCATION

                </p>



                <div

                  className="
                    flex
                    items-center

                    gap-3

                    mt-2

                    text-white

                    text-sm

                    tracking-widest
                  "

                >

                  <GraduationCap

                    size={18}

                    className="text-cyan-400"

                  />

                  UNIVERSITY OF MINDANAO


                </div>


              </div>







              <div>


                <p className="text-zinc-600 text-[10px] tracking-[0.4em]">

                  LOCATION

                </p>



                <div

                  className="
                    flex
                    items-center

                    gap-3

                    mt-2

                    text-white

                    text-sm

                    tracking-widest
                  "

                >


                  <MapPin

                    size={18}

                    className="text-cyan-400"

                  />


                  DAVAO CITY, PH



                </div>


              </div>








              <div>


                <p

                  className="
                    text-zinc-600

                    text-[10px]

                    tracking-[0.4em]

                    mb-4
                  "

                >

                  SYSTEM METRICS


                </p>




                <div

                  className="
                    grid

                    grid-cols-2

                    gap-3
                  "

                >


                  {stats.map((item)=>(


                    <div

                      key={item.label}

                      className="
                        border

                        border-white/10

                        rounded-lg

                        p-3
                      "

                    >


                      <p className="text-zinc-600 text-[9px]">

                        {item.label}

                      </p>



                      <p

                        className="
                          text-cyan-400

                          text-xs

                          mt-2
                        "

                      >

                        {item.value}


                      </p>



                    </div>


                  ))}


                </div>


              </div>




            </div>







            <div

              className="
                mt-8

                border-t

                border-white/10

                pt-5

                text-[10px]

                tracking-[0.4em]

                text-green-400
              "

            >

              ● AVAILABLE FOR LEARNING + BUILDING


            </div>




          </div>





        </div>



      </div>




    </section>

  );

}