import React from 'react';

import './Campus.css'

const Campus = () => {
    return (
        <div className="container">
            <img src="https://www.tsinghua.edu.cn/__local/5/E6/A5/019436B67552DF5F9737C6D6BD1_E5F89531_15630B.jpg" alt="" />

            <div>
                <h1 className="m-2 p-5">WE OFFER THE WORLD FIRST CLASS CAMPUS FOR OUR STUDENT</h1>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src="https://www.tsinghua.edu.cn/en/image/campus_part1_img2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Athletics and Recreation</h5>
                        
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
                    <img src="https://www.tsinghua.edu.cn/en/pdf/campus_psssart1_img3.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Arts And Culture</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://www.tsinghua.edu.cn/en/publish/1g3.jpg" className="card-img-top" alt="..."/>
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