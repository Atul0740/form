import React from 'react'
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
    return (
        <div className="graduate-menu menu" id='grad-menu' data-aos='zoom-in'>
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
          <button className='btn'>Continue</button>
        </div>
    )
}

export default PostGraduate
