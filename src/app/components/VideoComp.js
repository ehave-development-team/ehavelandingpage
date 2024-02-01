export default function VideoComp(){
    return(

        <div className="mt-8">
        <div className="px-7 py-16  lg:mt-60 text-center bg-cyan-100 flex flex-col justify-center items-center" style={{height:'500px'}}>
            <h1 className="text-4xl font-bold mb-7 text-center">See What Awaits: A Journey Into Your Data & AI!</h1>
            <p className="text-lg tracking-wider">Get a glimpse of the power of AI! Watch this engaging video to see how easy it is to start using AI today.
            </p>
        </div>
        <div><video className="w-4/5 h-auto m-auto -mt-12" controls>
            <source src="/pexels_videos_2675511 (1080p).mp4" type="video/mp4"></source>
            </video></div></div>

    )
}