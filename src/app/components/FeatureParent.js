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
            heading:'Cognitive Video Games',
            description:'Collecting data for cognitive games involves systematically gathering and analyzing information generated during the use of games designed to stimulate cognitive functions. These games, often employed for brain training or therapeutic purposes, generate valuable data on users' cognitive performance, response times, and decision-making patterns. By collecting and analyzing this data, developers and researchers can gain insights into cognitive strengths and weaknesses, adapt game difficulty levels, and refine the design to optimize cognitive benefits. This data-driven approach allows for personalized and effective cognitive training, contributing to the ongoing improvement and customization of cognitive games for enhanced mental acuity and overall cognitive well-being.'

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