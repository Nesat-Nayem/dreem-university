import './Courses.css'

import { useEffect, useState } from 'react';


const Courses = () => {
   
   const[progrum,setProgum]=useState([])
    
   useEffect(()=>{
        fetch('programs.json')
        .then(res => res.json())
        .then(data => setProgum(data.results))
   },[])
    return (
        <div className="container common">
            <img src='https://a6e8z9v6.stackpathcdn.com/kingster/wp-content/uploads/2018/08/search-bg.jpg' alt="" />
            <h3 className="text-center p-5 m-5">Choose your Course</h3>

            {/* courses card */}

            <div className="teams">
        <div className="row">
          {progrum?.map((progrums) => (
            <div key={progrum.id} className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="img-fluid" src={progrums.picture} alt="" />
                </div>
                <div className="text-area">
                  <h4>Department : {progrums.name}</h4>
                  <p>Level : {progrums.Masters}</p>
                  <p>Instructor : {progrums.Unit}</p>
                  <p>Yearly Tuition Fees: {progrums.TuitionFees}$</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* courses card end */}
            
        </div>
    );
};

export default Courses;