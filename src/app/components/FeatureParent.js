import Feature from "./Feature"


export default function FeatureParent(){
    const featureData = [
        {
            imgPath:'/group.jpg',
            heading:'Collecting Data',
            description:'Through the systematic collection of health data, preventive measures can be improved, and early detection of diseases becomes more effective. Moreover, data gathering supports evidence-based decision-making, leading to more efficient healthcare delivery.'

        },
        {
            imgPath:'/tablet.jpg',
            heading:'Seamless Online Booking',
            description:'Enjoy hassle-free scheduling with our user-friendly online booking platform. With just a few clicks.'

        },
        {
            imgPath:'/pot.jpg',
            heading:'Timely Appointment Reminders',
            description:'Never miss an important appointment again! Benefit from our timely appointment reminders that keep you informed and prepared.'

        }
    ]
    return(

        <div className="w-full flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-around">
            <Feature imgPath={featureData[0].imgPath}
                     heading={featureData[0].heading}
                     description={featureData[0].description}/>
            <Feature imgPath={featureData[1].imgPath}
                     heading={featureData[1].heading}
                     description={featureData[1].description}/>
            <Feature imgPath={featureData[2].imgPath}
                     heading={featureData[2].heading}
                     description={featureData[2].description}/>
        </div>
    )
}