import React, { useEffect, useState } from 'react'
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
  
const School = () => {
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
        <div className="school-menu menu" id='school-menu' data-aos='zoom-in'>

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
          <button className='btn' data-aos='flip-right' data-aos-delay='100'>Continue</button>
        </div>
    )
}

export default School
