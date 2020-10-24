import React from 'react';



const Home = () => {
    return (
        // Home for main div in flex container
        <div className="flex-container">

            {/* part a from home div 1*/}

            <div className="wrapper " >
                <img className="background-image" src="bg2.jpeg" width="100%" height="500"></img>
                <h1 className="text">Get Perfect Fit with </h1>
                <h1 className="text-1">Tailor App</h1>
            </div>

            {/* part b works for home div 2 */}

            <div className="home-part-b">
                <h3 className="text-center">How Tailor App Works</h3>
                <div className="works">
                    <div>
                        <img src="appointment.png"></img>
                        <h5> Make your online appointment</h5>
                        <p>Book an appointment with our stylist to check out the entire premium range </p>

                    
                  </div>

                    <div>
                        <img src="measured.png"></img>
                        <h5> Get measured by professionals </h5>
                        <p> Our expert outfitters will take measurement from your, subject to a pre arranged appointment, ensuring your outfit is perfect for your big day</p>
                     
                  </div>

                    <div>
                    <img src="customize-prodct.png"></img>
                    <h5> Customized your product </h5> 
                    <p>From pockets to lapels and buttons to lining, this stage covers every detail that makes a piece of clothing stirctly personal. </p>

                  </div>

                    <div>
                    <img src="get-prodct.png"></img>
                        <h5>    Get product on your doorstep</h5>
                        <p>Order the exact dress you want in minutes- saving time. Skip the mall and have more fun. </p>
                
                    </div>

                </div>

            </div>

            {/* part c for home dive 3 */}

            <div className="home-part-c">
                <h3 className="text-center">Why choose Tailor App</h3>
                <div className="choose">
                    <div>
                        <p>At Stitch, we turn our expertise in bespoke tailoring into the highest quality product making that everyone can afford. We pride ourselves on traditional skills, craft, quality and care that go into everything we make and do.</p>
                    </div>
                    <div>
                        <p>We believe that shopping for a casual or dress shirt shouldn't be confusing, rather convenient and fun. Our friendly personal stylists are highly trained to measure you for a precise and consistent custom fit. Perfect fit guaranteed!1

</p>
                    </div>
                    <div>
                        <p>We have lots of range with different prices as per your requirement</p>
                    </div>


                </div>

            </div>

            {/* our team */}

            <div className="our-team">
                <h3 className="text-center">Our Team</h3>
                <div className="team">
                    <div>
                        <img src="arman.PNG" ></img>   
                    </div>
                    <div>
                        <img src="arman.PNG" ></img>
                        <h3>Arman</h3>
                    </div>
                    <div>
                        <img src="arman.PNG" ></img>
                        
                    </div>


                </div>

            </div>

            {/* product  */}


            <div className="our-products">
                <h3 className="text-center">Latest Products</h3>
                <div className="products">
                    <div>
                        <img src="p1.jpg" ></img>
                    </div>
                    <div>
                        <img src="p2.webp" ></img>
                    </div>
                    <div>
                        <img src="p3.jpg" ></img>
                    </div>

                    <div>
                        <img src="p4.png" ></img>
                    </div>

                

                    



                </div>

            </div>

            {/* our test */}

            




            <br />
     



        </div>
    )
}

export default Home;