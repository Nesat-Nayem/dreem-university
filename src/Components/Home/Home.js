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

            <h1>our programs or cources</h1>


            <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2019/06/slider-1-1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://a6e8z9v6.stackpathcdn.com/kingster/highschool/wp-content/uploads/2019/06/slider-2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://html.webinane.com/koula/assets/images/gallery4.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://html.webinane.com/koula/assets/images/gallery5.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                

                
                </div>
            </div>

            



        </div>
        
    );
};

export default Home;