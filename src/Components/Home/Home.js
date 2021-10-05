import React, {} from 'react';
import './Home.css'


import first from '../../img/inner1_bn2.jpg'
import second from '../../img/inner1_bn.jpg'
import { useEffect, useState } from 'react';


const Home = () => {
    const[homeData, setHomeData] = useState([])
    const[techData, setTechData]= useState([])

    useEffect(()=>{
        fetch('home.json')
        .then(res => res.json())
        .then(data=> {
            setHomeData(data.home);
            setTechData(data.techers);
        })

    },[])
    return (
        
        <div className="container">
            <div>
            <h1 className="mainText">Dreem Universite</h1>
            </div>

        {/* slider start */}

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

        {/* slider end */}

            <h1 className="text-center tx-color m-p p-5">Our Trending Programs or Courses</h1>

        {/* Courses area start */}

            <div>
                <div className="row">
                {homeData?.map((homeDatas) => (
                    <div key={homeDatas.id} className="col-md-6">
                    <div className="cart">
                        <div className="cart-details">
                        <img className="img-fluid" src={homeDatas.picture} alt="" />
                        </div>
                        <div className="text-area text-start ms-4 mt-4">
                        <h4 className="text-danger fw-bold">{homeDatas.name}</h4>
                        <p> <span className="fw-bold">Level</span> : {homeDatas.Masters}</p>
                        <p> <span className="fw-bold">Instructor</span> : {homeDatas.Unit}</p>
                        <p> <span className="fw-bold">Credit</span>  : {homeDatas.Credit}</p>
                        <p> <span className="fw-bold">Tuition Fees</span>: {homeDatas.TuitionFees} $</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

        {/* courses area end */}

           
            <div className="text-center m-5 p-5 color">
                <h1>Our Great Faculties</h1>
                <h4>Well experienced staffs</h4>
            </div>


        {/* special person area start */}

            <div>
                <div className="row">
                    {techData?.map((techDatas) => (
                        <div key={techDatas.id}             className="col-md-3">
                            <div className="col">
                                <div className="card">
                                    <img className="img-fluid card-img-top c_hight" src={techDatas.img} alt="" />
                                </div>
                                <div className="card-body ms-4 ">
                                    <h5 className=" text fw-bold">{techDatas.techerName}</h5>
                                    <h6 className="fw-bold">{techDatas.Position}</h6>
                                
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        {/* special person area end */}                

        </div>
        
    );
};

export default Home;