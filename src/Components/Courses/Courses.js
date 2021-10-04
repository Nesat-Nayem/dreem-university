import './Courses.css'
import searceImg from '../../img/search-bg.jpg'
import { useEffect, useState } from 'react';


const Courses = () => {
   
   const[progrum,setProgum]=useState([])
    
   useEffect(()=>{
        fetch('programs.json')
        .then(res => res.json())
        .then(data => setProgum(data.results))
   },[])
    return (
        <div className="container all-teams">
            <img src={searceImg} alt="" />
            <h3>Choose your Course</h3>

            {/* here */}

            <div className="teams">
        <div className="row">
          {progrum?.map((progrums) => (
            <div key={progrum.id} className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="img-fluid" src={progrums.picture} alt="" />
                </div>
                <div className="text-area">
                  <h4>{progrums.name}</h4>
                  <p>{progrums.Masters}</p>
                  <p>League: {progrums.Unit}</p>
                  <p>country: {progrums.TuitionFees}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* here */}
            
        </div>
    );
};

export default Courses;