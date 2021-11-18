import './App.css';
import React, { useState } from 'react';
import School from './School';
import Graduate from './Graduate';
import PostGraduate from './PostGraduate';




function App() {
  const [school, setSchool] = useState(false)
  const handleSchool=()=>{
    setSchool(true)
    setUnderGraduate(false)
    setPostGraduate(false)
  }
  const [underGraduate, setUnderGraduate] = useState(false)
  const handleUnderGraduate=()=>{
    setSchool(false)
    setUnderGraduate(true)
    setPostGraduate(false)
  }
  const [postGraduate, setPostGraduate] = useState(false)
  const handlePostGraduate=()=>{
    setSchool(false)
    setUnderGraduate(false)
    setPostGraduate(true)
  }

  return (
    <div className="App">
      <form className='form' data-aos='zoom-in'>

        <p className='title'>Please select your academics</p>

        <div className="radio-toolbar" data-aos='fade-right' data-aos-delay='500'>

          <input type="radio" id="school" name="academics" value="school" onChange={handleSchool} />
          <label htmlFor="school">School</label>


          <input type="radio" id="undergraduate" name="academics" value="undergraduate" onChange={handleUnderGraduate} />
          <label htmlFor="undergraduate">Graduate</label>


          <input type="radio" id="graduate" name="academics" value="graduate" onChange={handlePostGraduate} />
          <label htmlFor="graduate">Post-graduate</label>

        </div>
        <div>
        {school && <School/>}
        {underGraduate && <Graduate/>}
        {postGraduate && <PostGraduate/>}
        </div>

        
        <button className='btn' data-aos='flip-right' data-aos-delay='700'>Continue</button>
      </form>
    </div>
  );
}

export default App;
