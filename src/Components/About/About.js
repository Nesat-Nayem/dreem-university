
import React from 'react';

import './About.css'


const About = () => {
    return (
        <div className="container">
            <img className="img-fluid" src="https://www.indiaeducation.net/imagesvr_ce/4502/4%20College%20de%20Valleyfield.jpg" alt="" />

            <h3 className="text-center text_color m-5 p-5">Dreem is one of the most prestigious universities in the runing time. Through teaching, research and innovation, Dreem is committed to the advancement and well-being of the nation and the world.</h3>

            <div>


                

                {/* bootstrap card */}

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <img src="https://i.insider.com/598b43e6efe3df32008b498b?width=1000format=jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                            General Information</h5>
                            <p className="card-text">The campus of Dreem University is situated in northwest area on the site of the former imperial gardens of the Qing Dynasty, and surrounded by a number of historical sites.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.insider.com/598b3fe2b9cd6c4c008b49ac?width=1000format=jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Anniversary Message</h5>
                            <p className="card-text">we arrange so many event on our area and it's really a enjoyable party we enjoy it.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.insider.com/598b44e5efe3df20008b4993?width=1000format=jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                
                                Former Presidents</h5>
                            <p className="card-text">we are so help full on our defreant country and we have give most prayerety on there we trit there as our familly member</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.insider.com/598b42c4efe3df47008b4972?width=1000format=jpeg" className="card-img-top" alt="..."/>
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