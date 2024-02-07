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
            description:'Collecting data for cognitive games involves systematically gathering and analyzing information generated during the use of games designed to stimulate cognitive functions. These games, often employed for brain training or therapeutic purposes, generate valuable data on users cognitive performance, response times, and decision-making patterns.'

        },
        {
            imgPath:'/pot.jpg',
            heading:'Deciphering Data with AI',
            description:'Ehave has groundbreaking integration of AI in healthcare promises to drive innovation and improve health outcomes on a global scale.'

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