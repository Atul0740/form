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
const options8 = [
  {
    label: 'Other',
    value: '0th'
  },
  {
    label: 'M.A.',
    value: 'MA',
  },
  {
    label: 'M.Com.',
    value: 'MCom',
  },
  {
    label: 'M.Sc.',
    value: 'MSc',
  },
  {
    label: 'M.Tech.',
    value: 'MTech',
  },
  {
    label: 'MBA',
    value: 'MBA',
  }
];

const PostGraduate = () => {
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
  const [input4Open, setinput4Open] = useState(false)
  const [input5Open, setinput5Open] = useState(false)
  const [input6Open, setinput6Open] = useState(false)
  const [typedCourse, settypedCourse] = useState('')
  const [typedDuration, settypedDuration] = useState('')
  const [typedYear, settypedYear] = useState('')

  const handlePostCourse = (e) => {
    setcourse(e.value)
    setcourseErr('.')
    document.getElementById('courseErr').style.display = 'none'
    if (e.value === '0th') {
      setinput4Open(true)
      document.getElementById('input8').style.display = 'block'
    }
    else{
      setinput4Open(false)
      document.getElementById('input8').style.display = 'none'
    }
  }
  const handlePostCompletion = (e) => {
    setcomp(e.value)
    setcompErr('.')
    document.getElementById('compErr').style.display = 'none'
  }
  const handlePostCurrent = (e) => {
    setcurrent(e.value)
    setcurrErr('.')
    document.getElementById('currErr').style.display = 'none'
    if (e.value === '0th'){
      setinput6Open(true)
      document.getElementById('input10').style.display = 'block'
    }
    else{
      setinput6Open(false)
      document.getElementById('input10').style.display = 'none'
    }
  }
  const handlePostDuration = (e) => {
    setduration(e.value)
    setdurErr('.')
    document.getElementById('durErr').style.display = 'none'
    if (e.value === '0th'){
      setinput5Open(true)
      document.getElementById('input9').style.display = 'block'
    }
    else{
      setinput5Open(false)
      document.getElementById('input9').style.display = 'none'
    }
  }
  const handleTypedCourse = (e) =>{
    settypedCourse(e.value)
    setcourseErr('.')
    document.getElementById('courseErr').style.display = 'none'
  }

  const handleTypedDuration = (e) => {
    settypedDuration(e.value)
    setdurErr('.')
    document.getElementById('durErr').style.display = 'none'
  }

  const handleTypedYear = (e) => {
    settypedYear(e.value)
    setcurrErr('.')
    document.getElementById('currErr').style.display = 'none'
  }

  const valid = () => {
    if (course === '' || comp === '' || duration === '' || current === '') {
      if (course === '') {
        setcourseErr('You have not selected your Course');
        document.getElementById('courseErr').style.display = 'block'
      }
      if (comp === '') {
        setcompErr('You have not selected your Completion Year');
        document.getElementById('compErr').style.display = 'block'
      }
      if (duration === '') {
        setdurErr('You have not selected your Course Duration')
        document.getElementById('durErr').style.display = 'block'
      }
      if (current === '') {
        setcurrErr('You have not selected your Current Year')
        document.getElementById('currErr').style.display = 'block'
      }
      return false
    }
    if(input4Open===true || input5Open===true || input6Open===true){
      let f=0;
      if(input4Open===true)
      {
        if(typedCourse===''){
          setcourseErr('You have not entered your Course');
          document.getElementById('courseErr').style.display = 'block'
          f=1
        }
      }
      if(input5Open===true)
      {
        if(typedDuration===''){
          setdurErr('You have not entered your Course Duration')
          document.getElementById('durErr').style.display = 'block'
          f=1
        }
      }
      if(input6Open===true)
      {
        if(typedYear===''){
          setcurrErr('You have not entered your Current Year')
          document.getElementById('currErr').style.display = 'block'
          f=1
        }
      }
      if(f===1)
      return false
    }
    
    return true;
  }

  const handleSubmit = (e) => {
    if (valid());
    else e.preventDefault();
  }

  return (
    <div className="graduate-menu menu" id='grad-menu' data-aos='zoom-in'>
      <div>
        <p>Please Select Your Course</p>
        <Select options={options8} className='select' styles={customStyles} onChange={handlePostCourse} />
        <input type="text" placeholder='Please type your Course...' className='input' id='input8' onChange={handleTypedCourse}/>
        <div className='error' id='courseErr'>{courseErr}</div>
      </div>
      <div>
        <p>Please Select Your Course Duration</p>
        <Select options={options4} className='select' styles={customStyles} onChange={handlePostDuration} />
        <input type="text" placeholder='Please type your Course Duration...' className='input' id='input9' onChange={handleTypedDuration}/>
        <div className='error' id='durErr'>{durErr}</div>
      </div>
      <div>
        <p>Please Select Your Current Year</p>
        <Select options={options5} className='select' styles={customStyles} onChange={handlePostCurrent} />
        <input type="text" placeholder='Please type your Current Year...' className='input' id='input10' onChange={handleTypedYear} />
        <div className='error' id='currErr'>{currErr}</div>
      </div>
      <div>
        <p>Please Select Your Course Completion Year</p>
        <Select options={options6} className='select' styles={customStyles} onChange={handlePostCompletion} />
        <div className='error' id='compErr'>{compErr}</div>
      </div>
      <button className='btn' onClick={handleSubmit}>Continue</button>
    </div>
  )
}

export default PostGraduate
