
import React from 'react';

import './About.css'


const About = () => {
    return (
        <div className="container">
            <img src="https://www.tsinghua.edu.cn/en/image/inner1_bn.jpg" alt="" />

            <h1 className="text-center m-5 p-5">Dreem Universite Is One Of The Heist Ranking Universite In The World Our Teching Quality Is Defrent Other All...</h1>

            <div>


                

                {/* bootstrap card */}

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <img src="https://www.tsinghua.edu.cn/en/image/xinjiatihuanjjide02.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                            General Information</h5>
                            <p className="card-text">The campus of Dreem University is situated in northwest area on the site of the former imperial gardens of the Qing Dynasty, and surrounded by a number of historical sites.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.tsinghua.edu.cn/en/image/about_img2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Anniversary Message</h5>
                            <p className="card-text">we arrange so many event on our area and it's really a enjoyable party we enjoy it.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.tsinghua.edu.cn/en/image/about_img5.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Current Administrators</h5>
                            <p className="card-text">we are so help full on our defreant country and we have give most prayerety on there we trit there as our familly member</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.tsinghua.edu.cn/en/image/about_img4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Facts and Figures</h5>
                            <p className="card-text">it's a long of we all so we are so much friendly our student and they love and hounor very we like so much and we hove we give butter some thing</p>
                        </div>
                        </div>
                    </div>
 
    </div>

                {/* card end */}

            </div>

        </div>
    );
};

export default About;