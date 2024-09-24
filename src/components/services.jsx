function Services(){
    const ServicesData = [

        {
            name:"Tooth Extraction",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        {
            name:"Tooth Fillings",
          para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        {
            name:"Braces Install",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        
    ]
    const ServicesData2 = [

        {
            name:"Children Clinic",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        {
            name:"Tooth Cleaning",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        {
            name:"Patient Records",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quo quae"
        },
        
        
    ]
    const teamCards = [
        {
            name:"Bob Carry",
            src:"img/doc1.jpg",
            para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!"
        },

        {
            name:"Jean Smith",
            src:"img/doc2.jpg",
            para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia veritatis, nam quam obcaecati fuga."
        },

        {
            name:"Ricky Fisher",
            src:"img/deoc3.jpg",
            para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quidem, laudantium, illum minus numquam voluptas?"
     },

    ]
    return (
        <>
        <div className="services-section">
            <p className="sec-1">All Kind Of Services </p>
        <h1 className="sec-2">Dental Services </h1>
            


            <div className="service-card-sec">


{

    ServicesData.map((details,index)=>(
     <div className="services-card"> 
     <h1>{details.name}</h1>
     <p>{details.para}

</p>


     </div>


    ))
}
            </div>


            <div className="service-card-sec">
{ ServicesData2.map((details,index)=>(
     <div className="services-card"> 
     <h1>{details.name}</h1>
     <p>{details.para}</p>
     </div>


    ))
}
            </div>
</div>
            <div className="team-section"> 
                <p className="png"> Expert Doctors </p>
                <h1 className="text"> Meet Our Team </h1>
                <div className="team-card-sec">
                {
                    teamCards.map((details,index)=>(

                        <div class="team-card">
                        <img src={details.src} alt="Profile Picture" class="team-pic"/>
                        <h2>{details.name}</h2>
                        <p>{details.para}</p>
                        
                    </div>
                    ))
                }
                   </div>
             


            </div>
            
<div className="content-section">
    <div className="img-div">
        <img src="img/bg-2.webp" alt="" />
    </div>
    <div className="content">
        <p>, we believe that dental care should be compassionate, skilled, and personalized to each patient’s needs. Our clinic is equipped with the latest technology, and our dentists have years of experience to provide top-notch care.
        Our mission is to enhance your quality of life by giving you a healthy, beautiful smile. We strive to build long-term relationships with our patients based on trust, honesty, and exceptional care.
        </p>
        <button>Read more</button>
    </div>
</div>

        
        </>
    
    )
}
export default Services