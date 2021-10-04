import React, {} from 'react';
import './Home.css'


import first from '../../img/inner1_bn2.jpg'
import second from '../../img/inner1_bn.jpg'

const Home = () => {

    return (
        
        <div className="container">
            <div>
            <h1>Dreem Universite</h1>
            </div>

            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={first} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={second} className="d-block w-100" alt="..."/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>

            <h1 className="text-center m-p p-5">Our Latest Programs or Courses</h1>


            <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2019/06/slider-1-1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Courses Explore The Practice Of Teaching</h3>
                        <h5 className="card-text">Level : Undergraduate</h5>
                        <h5>Instructor : Carol Dawson (PhD)</h5>
                       
                        <h5>Yearly Tusion fees : 5000 $</h5>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2019/06/slider-2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">Art Of Teaching, Planning Management In Schools</h3>
                        <h5 className="card-text">Level : Graduate</h5>
                        <h5>Instructor : John Hagensy (PhD)</h5>
                       
                        <h5>Yearly Tusion fees : 7000 $</h5>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://html.webinane.com/koula/assets/images/gallery4.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">University, Including In Education</h3>
                        <h5 className="card-text">Level : Postgraduate</h5>
                        <h5>Instructor : Coil Lina</h5>
                        
                        <h5>Yearly Tusion fees : 9000 $</h5>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://html.webinane.com/koula/assets/images/gallery5.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">A Broad Range Of Topics Educational Policy</h3>
                        <h5 className="card-text">Level : Undergraduate</h5>
                        <h5>Instructor : Miss Awara</h5>
                       
                        <h5>Yearly Tusion fees : 8500 $</h5>
                    </div>
                    </div>
                </div>

                </div>
            </div>

            <div className="text-center m-5 p-5">
                <h1>Our Great Faculties</h1>
                <h4>Well experienced staffs</h4>
            </div>


        {/* here */}
            <div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card">
                <img src="https://premiumlayers.com/wpthemes/educampus/wp-content/uploads/2015/06/our_faculties_16.jpg" class="card-img-top c_hight" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">JOHN VETTORI</h5>
                    <h6>Founder & Principle</h6>
                   
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://premiumlayers.com/wpthemes/educampus/wp-content/uploads/2015/06/our_faculties_24.jpg" class="card-img-top c_hight" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">LUCY MARTIN</h5>
                    <h6>Vice Principle</h6>
                    
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://premiumlayers.com/wpthemes/educampus/wp-content/uploads/2015/06/our_faculties_34.jpg" class="card-img-top c_hight" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">CHRIS EVANS</h5>
                    <h6>Mathematics Professor</h6>
                  
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://premiumlayers.com/wpthemes/educampus/wp-content/uploads/2015/06/our_faculties_44.jpg" class="card-img-top c_hight" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">LUCY MARTIN</h5>
                    <h6>Biology Professor</h6>
                   
                </div>
                </div>
            </div>
            </div>
            </div>
            {/* here */}
        </div>
        
    );
};

export default Home;