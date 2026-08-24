import { useState } from "react";
import Sidebar from "./components/SideBar";
import TypingText from "./components/TypingText";
import RevealText from "./components/RevealText";
import ProjectCarousel from "./components/ProjectCarousel";
import ProfileVisual from "./components/ProfileVisual";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showName, setShowName] = useState(false);
const [statusOpen, setStatusOpen] = useState(false);


  const techModules = [
    {
      title: "WEB",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "PHP"
      
      ]
    },

    {
      title: "MOBILE",
      items: [
        "Flutter",
        "Dart"
      ]
    },

    {
      title: "BACKEND",
      items: [
        "Node.js",
        ".NET C#",
        "Java" ,
        "Python"
      ]
    },

    {
      title: "DATABASE",
      items: [
        "Supabase",
        "PostgreSQL",
        "SQL"
      ]
    },

    {
      title: "CLOUD",
      items: [
        "Azure"
      ]
    },

    {
      title: "DEPLOYMENT",
      items: [
        "Google Play Store",
        "GitHub"
      ]
    },

    {
      title: "API",
      items: [
        "REST API",
        "Integration",
        "Paymongo"
      ]
    }
  ];


  return (
    <>


      <Sidebar
        setSidebarOpen={setSidebarOpen}
      />



      <main
        className={`
          relative
          min-h-screen
          bg-[#050505]
          text-white
          overflow-hidden
          transition-all
          duration-500
          ${sidebarOpen ? "ml-64" : "ml-20"}
        `}
      >



        {/* ATMOSPHERE */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-[radial-gradient(circle_at_40%_40%,rgba(0,255,255,0.08),transparent_35%)]
          "
        />




        <section
          className="
            relative
            min-h-screen
            p-16
            flex
            items-center
          "
        >

           {
                      showName && (
                        <ProfileVisual />
                      )
                    }

        



          {/* EXPORT CV */}
                    {
                      showName && (
          <a
            href="/Rona-Jane-Poliquit-CV.pdf"
            download
            className="
              absolute
              top-10
              right-12
              px-6
              py-3
              rounded-full
              border
              border-cyan-400/40
              text-cyan-400
              text-xs
              tracking-[0.3em]
              hover:bg-cyan-400/10
              hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]
              transition
            "
          >
            ↓ DOWNLOAD CV
          </a>
                      ) 
                    }

                


          {/* HERO CONTENT */}


          <div>


            <p
              className="
                text-cyan-400
                text-xs
                tracking-[0.5em]
              "
            >

              <TypingText
                text="INITIALIZING PORTFOLIO..."
                onComplete={() => setShowName(true)}
              />

            </p>





            {
              showName && (

                <div
                  className="
                    mt-8
                    animate-in
                    fade-in
                    duration-1000
                  "
                >



                  <h1
                    className="
                      text-5xl
                      font-bold
                      tracking-widest
                    "
                  >

                    <RevealText text="RONA JANE POLIQUIT"/>

                  </h1>




                  <p
                    className="
                      mt-4
                      text-zinc-400
                      text-sm
                      tracking-[0.3em]
                    "
                  >
                    SOFTWARE ENGINEER
                  </p>






                  {/* ROLE MODULES */}


                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {
                      [
                        "FULL STACK",
                        "MOBILE DEVELOPMENT",
                        "UI/UX DESIGN"
                      ].map(role => (

                        <span
                          key={role}
                          className="
                            px-5
                            py-2
                            rounded-full
                            border
                            border-cyan-400/30
                            text-cyan-400
                            text-xs
                            tracking-widest
                            bg-cyan-400/5
                            hover:bg-cyan-400/10
                            transition
                          "
                        >
                          {role}
                        </span>

                      ))
                    }


                  </div>






                  {/* DESCRIPTION */}


                  <p
                    className="
                      mt-8
                      max-w-xl
                      text-zinc-500
                      leading-relaxed
                    "
                  >
                    Building digital experiences across web,
                    mobile applications, and software systems
                    through engineering, design, and technology.
                  </p>

                  {/* PROJECT ACCESS BUTTON */}

                      <div
                        className="
                          mt-8
                          flex
                          gap-4
                        "
                      >

                        <a
                          href="#projects"
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            px-6
                            py-3
                            rounded-full
                            border
                            border-cyan-400/40
                            text-cyan-400
                            text-xs
                            tracking-[0.3em]
                            bg-cyan-400/5
                            hover:bg-cyan-400/10
                            hover:border-cyan-400
                            hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                            transition
                          "
                        >

                          <span>
                            VIEW PROJECTS
                          </span>

                          <span
                            className="
                              group-hover:translate-x-1
                              transition
                            "
                          >
                            →
                          </span>

                        </a>



                        <a
                          href="#contact"
                          className="
                            px-6
                            py-3
                            rounded-full
                            border
                            border-white/10
                            text-zinc-400
                            text-xs
                            tracking-[0.3em]
                            hover:text-white
                            hover:border-white/30
                            transition
                          "
                        >
                          CONTACT
                        </a>


                      </div>


{/* PROJECT ARCHIVE */}


<div
id="projects"
className="
mt-10D
w-252
flex
justify-center
"
>

<ProjectCarousel />

</div>
                     


                  {/* TECH MATRIX */}

<div
className="
  mt-10
  ml-23
  w-[850px]
  min-h-[420px]
  border
  border-cyan-400/20
  rounded-3xl
  p-8
  bg-black/50
  backdrop-blur-xl
  shadow-[0_0_50px_rgba(0,255,255,0.08)]
"
>


                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mb-6
                      "
                    >

                      <p
                        className="
                          text-zinc-500
                          text-xs
                          tracking-[0.5em]
                        "
                      >
                        TECH MATRIX
                      </p>


                      <p
                        className="
                          text-cyan-400
                          text-[10px]
                          tracking-widest
                        "
                      >
                        CURRENT
                      </p>


                    </div>



                   <div
  className="
    grid
    grid-cols-4
    gap-4
  "
>


                      {
                        techModules.map((module)=>(

                          <div
                            key={module.title}
                            className="
                              group
                              border
                              border-white/10
                              rounded-xl
                              p-4
                              hover:border-cyan-400/40
                              hover:bg-cyan-400/5
                              transition
                            "
                          >


                            <div
                              className="
                                flex
                                items-center
                                gap-2
                                mb-3
                              "
                            >

                              <span
                                className="
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  bg-cyan-400
                                  shadow-[0_0_10px_rgba(0,255,255,0.8)]
                                "
                              />


                              <p
                                className="
                                  text-cyan-400
                                  text-xs
                                  tracking-widest
                                "
                              >
                                {module.title}
                              </p>


                            </div>

                                                        {
                              module.items.map(item => (

                                <p
                                  key={item}
                                  className="
                                    text-zinc-300
                                    text-sm
                                    leading-relaxed
                                  "
                                >
                                  {item}
                                </p>

                              ))
                            }


                          </div>

                        ))
                      }


                    </div>


                  </div>





                </div>

              )
            }


                    </div>


     





{/* FLOATING PROFILE STATUS */}

{
showName && (

<>

{/* BUTTON */}

{
!statusOpen && (

<button

onClick={() => setStatusOpen(true)}

className="
fixed
right-10
bottom-10
w-44
px-5
py-4
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
text-xs
tracking-[0.3em]
"
>
PROFILE STATUS
</p>


</div>


</button>

)

}






{/* PANEL */}

{
statusOpen && (

<div

className="
fixed
right-10
bottom-10
w-72
rounded-3xl
border
border-cyan-400/30
bg-black/90
backdrop-blur-xl
p-6
shadow-[0_0_50px_rgba(0,255,255,0.15)]
z-50
"

>


{/* HEADER */}

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
tracking-[0.5em]
"
>
PROFILE
<br/>
STATUS
</p>



<button

onClick={() => setStatusOpen(false)}

className="
text-zinc-400
text-xs
tracking-widest
hover:text-cyan-400
transition
"

>
✕
<br/>
CLOSE
</button>


</div>







{/* ONLINE */}

<div
className="
mt-8
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
text-lg
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
text-[10px]
tracking-[0.4em]
"
>
OPEN FOR PROJECTS
</p>


</div>






{/* INFO */}

<div
className="
mt-8
space-y-6
"
>


<div>

<p
className="
text-zinc-600
text-[10px]
tracking-[0.4em]
"
>
ENGAGEMENT
</p>


<p
className="
text-white
text-sm
tracking-widest
"
>
FREELANCE / REMOTE
</p>


</div>





<div>

<p
className="
text-zinc-600
text-[10px]
tracking-[0.4em]
"
>
SPECIALTY
</p>


<p
className="
text-white
text-sm
tracking-widest
"
>
WEB • MOBILE • SOFTWARE
</p>


</div>





<div>

<p
className="
text-zinc-600
text-[10px]
tracking-[0.4em]
"
>
LOCATION
</p>


<p
className="
text-white
text-sm
tracking-widest
"
>
DAVAO CITY, PH
</p>


</div>


</div>






{/* FOOTER */}

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
text-[10px]
tracking-[0.4em]
"
>
SYS_READY // 7232
</p>


</div>



</div>

)

}



</>

)

}


        </section>


      </main>


    </>
  );
}



export default App;