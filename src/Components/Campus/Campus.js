import React from 'react';

import './Campus.css'

const Campus = () => {
    return (
        <div className="container">
            <img className="img-fluid" src="https://caltech-prod.s3.amazonaws.com/main/images/convocation.2e16d0ba.fill-1600x900-c100.jpg" alt="" />

            <div>
                <h1 className="m-2 p-5">WE OFFER THE WORLD FIRST CLASS CAMPUS FACILITIES FOR OUR STUDENT</h1>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src="https://www.tsinghua.edu.cn/en/publish/1g3.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Student Activities</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://www.tsinghua.edu.cn/en/image/campus_partnewks.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Student Experience</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://www.tsinghua.edu.cn/en/image/870745D66A04DE65B62639141E6_8A565A73_11F62A.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Arts And Culture</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card img-fluid">
                    <img src="https://www.tsinghua.edu.cn/en/image/FF706A9DDCF626D6F6A409346D7_7AB0112C_12171B.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Student Activities</h5>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Campus;