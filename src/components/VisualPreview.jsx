import { motion } from "framer-motion";


export default function VisualPreview(){


const images = [

{
src:"/images/profile.jpg",
label:"PROFILE"
},

{
src:"/images/workspace.jpg",
label:"WORKSPACE"
},

{
src:"/images/project.jpg",
label:"PROJECT"
}

];



return (

<div
className="
mt-10
w-[560px]
"
>


{/* HEADER */}

<div
className="
flex
justify-between
items-center
mb-5
"
>

<p
className="
text-zinc-500
text-xs
tracking-[0.5em]
"
>
VISUAL LOG
</p>


<p
className="
text-cyan-400
text-[10px]
tracking-widest
"
>
MEDIA // 003
</p>


</div>





<div
className="
grid
grid-cols-3
gap-4
"
>


{
images.map((image,index)=>(


<motion.div

key={image.label}

initial={{
opacity:0,
y:40,
scale:0.9
}}

animate={{
opacity:1,
y:0,
scale:1
}}

transition={{
duration:0.7,
delay:index*0.2
}}


whileHover={{
y:-8
}}


className="
group
relative
h-40
rounded-xl
overflow-hidden
border
border-cyan-400/20
bg-black
cursor-pointer
"

>


<img

src={image.src}

alt={image.label}

className="
w-full
h-full
object-cover
grayscale
opacity-60
group-hover:opacity-100
group-hover:grayscale-0
group-hover:scale-110
transition
duration-700
"

/>





{/* SCAN LINE */}

<motion.div

animate={{
y:["-120%","120%"]
}}

transition={{
duration:2.5,
repeat:Infinity,
repeatDelay:3
}}

className="
absolute
left-0
right-0
h-8
bg-cyan-400/20
"
/>





{/* LABEL */}

<div
className="
absolute
bottom-3
left-3
"
>

<p
className="
text-cyan-400
text-[10px]
tracking-[0.4em]
"
>
{image.label}
</p>


</div>





</motion.div>


))
}



</div>



<p
className="
mt-5
text-zinc-600
text-[10px]
tracking-[0.5em]
"
>
ARCHIVE SYNC COMPLETE
</p>



</div>

)

}