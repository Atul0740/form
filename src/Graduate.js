import React, { useState } from 'react'
import Select from 'react-select'
const options4 = [
    {
      label: 'Other',
      value: '0th'
    },
    {
      label: '1yr',
      value: '1yr',
    },
    {
      label: '2yrs',
      value: '2yrs',
    },
    {
      label: '3yrs',
      value: '3yrs',
    },
    {
      label: '4yrs',
      value: '4yrs',
    },
    {
      label: '5yrs',
      value: '5yrs',
    }
  ];
  
  const options5 = [
    {
      label: 'Other',
      value: '0th'
    },
    {
      label: '1st year',
      value: '1st year',
    },
    {
      label: '2nd year',
      value: '2nd year',
    },
    {
      label: '3rd year',
      value: '3rd year',
    },
    {
      label: '4th year',
      value: '4th year',
    },
    {
      label: '5th year',
      value: '5th year',
    }
  ];
  
  const options6 = [
    {
      label: 'Other',
      value: '0th'
    },
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2022',
      value: '2022',
    },
    {
      label: '2023',
      value: '2023',
    },
    {
      label: '2024',
      value: '2024',
    },
    {
      label: '2025',
      value: '2025',
    },
    {
      label: '2026',
      value: '2026',
    }
  ];
  
  const options7 = [
    {
      label: 'Other',
      value: '0th'
    },
    {
      label: 'B.A.',
      value: 'BA',
    },
    {
      label: 'B.Com.',
      value: 'BCom',
    },
    {
      label: 'B.Sc.',
      value: 'BSc',
    },
    {
      label: 'B.Tech.',
      value: 'BTech',
    },
    {
      label: 'LLB',
      value: 'LLB',
    },
    {
      label: 'BBA',
      value: 'BBA',
    }
  ];
  
const Graduate = () => {
    const customStyles = {
        control: (base, state) => ({
          ...base,
          color: "#fff",
          background: "#eee",
          borderRadius: "10px"
        }),
        menu: base => ({
          ...base,
          borderRadius: "10px",
          marginTop: 0,
        }),
        menuList: base => ({
          ...base,
          padding: 0,
          borderRadius: "10px",
        })
      };

      const [course, setcourse] = useState('')
      const [comp, setcomp] = useState('')
      const [current, setcurrent] = useState('')
      const [duration, setduration] = useState('')
      const [courseErr, setcourseErr] = useState('.')
      const [compErr, setcompErr] = useState('.')
      const [currErr, setcurrErr] = useState('.')
      const [durErr, setdurErr] = useState('.')

      const handleUnderCourse = (e) => {
        setcourse(e.value)
        setcourseErr('.')
        document.getElementById('courseErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input4').style.display='block'
        else
        document.getElementById('input4').style.display='none'
      }
      const handleUnderCompletion = (e) => {
        setcomp(e.value)
        setcompErr('.')
        document.getElementById('compErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input7').style.display='block'
        else
        document.getElementById('input7').style.display='none'
      }
      const handleUnderCurrent = (e) => {
        setcurrent(e.value)
        setcurrErr('.')
        document.getElementById('currErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input6').style.display='block'
        else
        document.getElementById('input6').style.display='none'
      }
      const handleUnderDuration = (e) => {
        setduration(e.value)
        setdurErr('.')
        document.getElementById('durErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input5').style.display='block'
        else
        document.getElementById('input5').style.display='none'
      }

      const valid = () => {
        if(course==='' || comp==='' || duration==='' || current===''){
          if(course===''){
            setcourseErr('You have not selected your Course');
            document.getElementById('courseErr').style.display='block'
          }
          if(comp===''){
            setcompErr('You have not selected your Completion Year');
            document.getElementById('compErr').style.display='block'
          }
          if(duration===''){
            setdurErr('You have not selected your Course Duration')
            document.getElementById('durErr').style.display='block'
          }
          if(current===''){
            setcurrErr('You have not selected your Current Year')
            document.getElementById('currErr').style.display='block'
          }
          return false
        }
        
        return true;
      }

      const handleSubmit=(e)=>{
        
        if(valid()){
        }
        else{
          e.preventDefault();
        }
      }

    return (
        <div className="undergraduate-menu menu" id='ug-menu' data-aos='zoom-in'>
          <div>
            <p>Please Select Your Course</p>
            <Select options={options7} className='select' styles={customStyles} onChange={handleUnderCourse} />
            <input type="text" placeholder='Please type your Course...' className='input' id='input4'/>
            <div className='error' id='courseErr'>{courseErr}</div>
          </div>
          <div>
            <p>Please Select Your Course Duration</p>
            <Select options={options4} className='select' styles={customStyles} onChange={handleUnderDuration} />
            <input type="text" placeholder='Please type your Course Duration...' className='input' id='input5'/>
            <div className='error' id='durErr'>{durErr}</div>
          </div>
          <div>
            <p>Please Select Your Current Year</p>
            <Select options={options5} className='select' styles={customStyles} onChange={handleUnderCurrent} />
            <input type="text" placeholder='Please type your Current Year...' className='input' id='input6'/>
            <div className='error' id='currErr'>{currErr}</div>
          </div>
          <div>
            <p>Please Select Your Course Completion Year</p>
            <Select options={options6} className='select' styles={customStyles} onChange={handleUnderCompletion} />
            <input type="text" placeholder='Please type your Completion Year...' className='input' id='input7'/>
            <div className='error' id='compErr'>{compErr}</div>
          </div>
          <button className='btn' onClick={handleSubmit}>Continue</button>
        </div>
    )
}

export default Graduate
