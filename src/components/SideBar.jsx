import { useState } from "react";
import {
  Terminal,
  User,
  Cpu,
  Folder,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ setSidebarOpen, resetApp }) {
  const [open, setOpen] = useState(true);

  // =====================================================
  // TOGGLE SIDEBAR
  // =====================================================

  const toggleSidebar = () => {
    const newState = !open;

    setOpen(newState);
    setSidebarOpen(newState);
  };


  // =====================================================
  // NAVIGATION
  // =====================================================

const handleNavigation = (item) => {

  // HOME
 if (item.target === "home") {

  resetApp();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return;

}


  const section = document.getElementById(item.target);


  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });


    // close sidebar after scroll finishes
    setTimeout(() => {
      setOpen(false);
      setSidebarOpen(false);
    }, 500);

  } else {

    console.log("Section not found:", item.target);

  }

};

  // =====================================================
  // MENU ITEMS
  // =====================================================

  const menuItems = [

    {
      name: "Home",
      icon: Terminal,
      target: "home",
    },


    {
      name: "Skills",
      icon: Cpu,
      target: "skills",
    },

    {
      name: "Projects",
      icon: Folder,
      target: "projects",
    },

    {
      name: "Certifications",
      icon: Award,
      target: "certifications",
    },

    {
      name: "About",
      icon: User,
      target: "about",
    },

  ];


  // =====================================================
  // SIDEBAR
  // =====================================================

  return (

    <aside

      className={`

        fixed
        top-0
        left-0
        h-screen

        bg-[#050505]
        text-white

        border-r
        border-cyan-400/20

        shadow-[0_0_25px_rgba(0,255,255,0.08)]

        transition-all
        duration-500
        ease-in-out

        z-50

        ${open ? "w-64" : "w-20"}

      `}

    >


      {/* =================================================
          HEADER
      ================================================= */}


      <div

        className="

          flex
          items-center
          justify-between

          p-5

          border-b
          border-cyan-400/20

        "

      >


        {/* BRAND */}


        {open && (

          <div>

            <p

              className="

                text-[10px]

                text-cyan-400

                tracking-[0.5em]

              "

            >

              RONA JANE

            </p>


            <h1

              className="

                text-sm
                font-bold
                tracking-widest

              "

            >

              POLIQUIT

            </h1>


          </div>

        )}



        {/* TOGGLE BUTTON */}


        <button

          onClick={toggleSidebar}

          aria-label={
            open 
            ? "Close sidebar" 
            : "Open sidebar"
          }

          className="

            p-2

            rounded-lg

            text-cyan-400

            hover:text-white

            hover:bg-cyan-400/10

            transition

          "

        >

          {open 
            ? <X size={22}/> 
            : <Menu size={22}/>
          }


        </button>


      </div>




      {/* =================================================
          NAVIGATION
      ================================================= */}


      <nav className="mt-8 px-3">


        {menuItems.map((item)=>{


          const Icon = item.icon;


          return (

            <button

              key={item.name}

              onClick={() => handleNavigation(item)}

              aria-label={item.name}


              className="

                group

                flex

                items-center

                gap-4

                w-full

                px-3

                py-3

                rounded-md


                text-zinc-400


                hover:text-cyan-300


                hover:bg-cyan-400/5


                transition


                mb-2

              "

            >



              {/* ICON */}


              <Icon

                size={20}

                className="

                  flex-shrink-0


                  group-hover:scale-110


                  group-hover:text-cyan-400


                  group-hover:drop-shadow-[0_0_8px_cyan]


                  transition

                "

              />




              {/* LABEL */}



              {open && (

                <span

                  className="

                    text-xs

                    tracking-[0.3em]

                  "

                >

                  {item.name.toUpperCase()}

                </span>

              )}



            </button>

          );


        })}



      </nav>






      {/* =================================================
          SYSTEM STATUS
      ================================================= */}



      {open && (

        <div

          className="

            absolute

            bottom-6

            left-5


            text-[10px]


            tracking-widest


            text-zinc-500

          "

        >


          <p>

            USER: DEV_01

          </p>



          <p

            className="

              text-green-400

              mt-2

            "

          >

            ● ONLINE

          </p>



        </div>

      )}



    </aside>


  );

}