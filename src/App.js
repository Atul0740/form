import './App.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'

const options1 = [
  {
    label: 'Other',
    value: '0th'
  },
  {
    label: '1st',
    value: '1st',
  },
  {
    label: '2nd',
    value: '2nd',
  },
  {
    label: '3rd',
    value: '3rd',
  },
  {
    label: '4th',
    value: '4th',
  },
  {
    label: '5th',
    value: '5th',
  },
  {
    label: '6th',
    value: '6th',
  },
  {
    label: '7th',
    value: '7th',
  },
  {
    label: '8th',
    value: '8th',
  },
  {
    label: '9th',
    value: '9th',
  },
  {
    label: '10th',
    value: '10th',
  },
  {
    label: '11th',
    value: '11th',
  },
  {
    label: '12th',
    value: '12th',
  }
];

const options2 = [
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
  },
  {
    label: '2027',
    value: '2027',
  },
  {
    label: '2028',
    value: '2028',
  },
  {
    label: '2029',
    value: '2029',
  },
  {
    label: '2030',
    value: '2030',
  },
  {
    label: '2031',
    value: '2031',
  },
  {
    label: '2032',
    value: '2032',
  },
  {
    label: '2033',
    value: '2033',
  }
];

const options3 = [
  {
    label: 'Other',
    value: '0th'
  },
  {
    label: 'Science',
    value: 'Science',
  },
  {
    label: 'Arts',
    value: 'Arts',
  },
  {
    label: 'Commerce',
    value: 'Commerce',
  }
];

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
    value: 'B.A.',
  },
  {
    label: 'B.Com.',
    value: 'B.Com.',
  },
  {
    label: 'B.Sc.',
    value: 'B.Sc.',
  },
  {
    label: 'B.Tech.',
    value: 'B.Tech',
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

const options8 = [
  {
    label: 'Other',
    value: '0th'
  },
  {
    label: 'M.A.',
    value: 'M.A.',
  },
  {
    label: 'M.Com.',
    value: 'M.Com.',
  },
  {
    label: 'M.Sc.',
    value: 'M.Sc.',
  },
  {
    label: 'M.Tech.',
    value: 'M.Tech',
  },
  {
    label: 'MBA',
    value: 'MBA',
  }
];

function App() {

  const [acad, setAcad] = useState('');

  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: "#fff",
      background: "#eee",
      // boxShadow: "1px 2px 4px #999, -1px -2px 5px #fff",
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

  const handleAcademic = (e) => {
    setAcad(e.target.value)
  }

  useEffect(() => {
    if (acad === 'school') {
      document.getElementById('school-menu').style.display = 'flex';
      document.getElementById('ug-menu').style.display = 'none';
      document.getElementById('grad-menu').style.display = 'none';
    }
    if (acad === 'graduate') {
      document.getElementById('school-menu').style.display = 'none';
      document.getElementById('ug-menu').style.display = 'none';
      document.getElementById('grad-menu').style.display = 'flex';
    }
    if (acad === 'undergraduate') {
      document.getElementById('school-menu').style.display = 'none';
      document.getElementById('ug-menu').style.display = 'flex';
      document.getElementById('grad-menu').style.display = 'none';
    }
  }, [acad])

  const [classes, setClasses] = useState('')

  const handleClass = (e) => {
    setClasses(e.value);
    console.log(e.value)
    console.log(classes)
  }

  useEffect(() => {
    if (classes === '11th' || classes === '12th') {
      document.getElementById('stream-menu').style.display = 'block'
    }
    else {
      document.getElementById('stream-menu').style.display = 'none'
    }
  }, [classes])

  return (
    <div className="App">
      <form className='form' data-aos='zoom-in'>

        <p className='title'>Please select your academics</p>

        <div className="radio-toolbar" data-aos='fade-right' data-aos-delay='500'>

          <input type="radio" id="school" name="academics" value="school" onChange={handleAcademic} />
          <label htmlFor="school">School</label>


          <input type="radio" id="undergraduate" name="academics" value="undergraduate" onChange={handleAcademic} />
          <label htmlFor="undergraduate">Graduate</label>


          <input type="radio" id="graduate" name="academics" value="graduate" onChange={handleAcademic} />
          <label htmlFor="graduate">Post-graduate</label>

        </div>

        <div className="school-menu menu" id='school-menu'>

          <div>
            <p>Please Select Your Class</p>
            <Select options={options1} className='select' onChange={handleClass} styles={customStyles} />
          </div>

          <div id='stream-menu'>
            <p>Please Select Your Stream</p>
            <Select options={options3} className='select' styles={customStyles} />
          </div>
          <div >
            <p>Please Select School Completion Year</p>
            <Select options={options2} className='select' styles={customStyles} />
          </div>
        </div>

        <div className="undergraduate-menu menu" id='ug-menu'>
          <div>
            <p>Please Select Your Course</p>
            <Select options={options7} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Course Duration</p>
            <Select options={options4} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Current Year</p>
            <Select options={options5} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Course Completion Year</p>
            <Select options={options6} className='select' styles={customStyles} />
          </div>
        </div>

        <div className="graduate-menu menu" id='grad-menu'>
          <div>
            <p>Please Select Your Course</p>
            <Select options={options8} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Course Duration</p>
            <Select options={options4} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Current Year</p>
            <Select options={options5} className='select' styles={customStyles} />
          </div>
          <div>
            <p>Please Select Your Course Completion Year</p>
            <Select options={options6} className='select' styles={customStyles} />
          </div>
        </div>
        <button className='btn'>Continue</button>
      </form>
    </div>
  );
}

export default App;
