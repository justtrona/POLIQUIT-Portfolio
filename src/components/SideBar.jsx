import { useState } from "react";
import {
  Terminal,
  User,
  Cpu,
  Folder,
  Mail,
  Menu,
  X
} from "lucide-react";


export default function Sidebar({ setSidebarOpen }) {


  const [open, setOpen] = useState(true);



  const toggleSidebar = () => {

    const newState = !open;

    setOpen(newState);
    setSidebarOpen(newState);

  };





  const handleNavigation = (item) => {

  if(item.target === "home"){

    window.location.reload();

    return;

  }


  const section = document.getElementById(item.target);

  if(section){

    section.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  }

};





  const menuItems = [

    {
      name:"Home",
      icon:Terminal,
      target:"home"
    },

    {
      name:"About",
      icon:User,
      target:"about"
    },

    {
      name:"Skills",
      icon:Cpu,
      target:"skills"
    },

    {
      name:"Projects",
      icon:Folder,
      target:"projects"
    },

    {
      name:"Contact",
      icon:Mail,
      target:"contact"
    }

  ];





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




      {/* HEADER */}


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


        {
          open && (

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

          )
        }





        <button

          onClick={toggleSidebar}

          className="
            p-2
            rounded-lg
            text-cyan-400
            hover:text-white
            hover:bg-cyan-400/10
            transition
          "

        >


          {
            open
            ?
            <X size={22}/>
            :
            <Menu size={22}/>
          }


        </button>



      </div>








      {/* NAVIGATION */}


      <nav className="mt-8 px-3">


      {

        menuItems.map((item)=>{


          const Icon = item.icon;


          return (

            <button

              key={item.name}

              onClick={()=>handleNavigation(item)}

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



              <Icon

                size={20}

                className="
                  group-hover:scale-110
                  group-hover:text-cyan-400
                  group-hover:drop-shadow-[0_0_8px_cyan]
                  transition
                "

              />






              {
                open && (

                  <span

                    className="
                      text-xs
                      tracking-[0.3em]
                    "

                  >

                    {item.name.toUpperCase()}

                  </span>

                )
              }



            </button>


          );


        })

      }


      </nav>








      {/* SYSTEM STATUS */}


      {
        open && (

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

        )
      }





    </aside>

  );

}