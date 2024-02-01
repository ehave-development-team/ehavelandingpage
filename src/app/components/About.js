import Image from "next/image";

export default function About(){

    return(

       <div className="flex justify-center items-center w-full"> 
        <div  className="px-3 w-97 md:w-194 mt-10 mb-12 md:flex md:flex-row">
            <Image className="mb-10 md:mr-16 " src={'/girlinofficesmall.jpg'} width={400} height={200} alt={'woman on laptop'} />
           <div > <p className="text-cyan-500 font-bold mb-5">ABOUT</p>
            <p className="text-3xl font-bold tracking-wide mb-5">Discover Our Story</p>
            <p className="font-light">Invest in the transformative potential of data and the mathematical model of humanity, poised to revolutionize our lives. This cutting-edge endeavor promises not only improved well-being but also the key to unlocking a happier future. By harnessing the power of data, investors have the opportunity to be part of a groundbreaking journey towards a healthier and more fulfilling existence.</p></div>
        </div>
        </div>
    )
}