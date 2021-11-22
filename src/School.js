import React, {  useState } from 'react'
import Select from 'react-select'
const options1 = [
    {
      label: 'Others',
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
      function customTheme(theme){
        return {
          ...theme,
          colors:{
            ...theme.colors,
          },
        };
      }
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
      const [stream, setstream] = useState('')
      const [comp, setcomp] = useState('')
      const [classErr, setclassErr] = useState('.')
      const [compError, setcompError] = useState('.')

      const handleClass = (e) => {
        setClasses(e.value);
        setclassErr('.')
        document.getElementById('classErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input1').style.display='block'
        else
        document.getElementById('input1').style.display='none'
        if (e.value === '11th' || e.value === '12th') {
          document.getElementById('stream-menu').style.display = 'block'
        }
        else {
          document.getElementById('stream-menu').style.display = 'none'
        }
      }   
      const handleCompletion = (e) => {
        setcomp(e.value)
        setcompError('.')
        document.getElementById('compErr').style.display='none'
        if(e.value==='0th')
        document.getElementById('input2').style.display='block'
        else
        document.getElementById('input2').style.display='none'
      }
      const handleStream = (e) => {
        setstream(e.value)
        console.log(stream)
        if(e.value==='0th')
        document.getElementById('input3').style.display='block'
        else
        document.getElementById('input3').style.display='none'
      }
      const valid = () => {
        if(classes==='' || comp===''){
          if(classes===''){
            setclassErr('You have not selected your Class');
            document.getElementById('classErr').style.display='block'
          }
          if(comp===''){
            setcompError('You have not selected your Completion Year');
            document.getElementById('compErr').style.display='block'
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
        <div className="school-menu menu" id='school-menu' data-aos='zoom-in'>

          <div>
            <p>Please Select Your Class</p>
            <Select options={options1} className='select' onChange={handleClass} theme={customTheme} styles={customStyles} />
            <input type="text" placeholder='Please type your Class...' style={{marginTop:"0px",width:"100%",marginBottom:"10px",border:"none",height:"35px",borderRadius:"7px",padding:"0px 10px",display:"none",background:"#eee"}} id='input1'/>
            <div style={{color:"red",fontWeight:"bolder",fontSize:"15px",display:'none'}} id='classErr'>{classErr}</div>
          </div>

          <div id='stream-menu'>
            <p>Please Select Your Stream</p>
            <Select options={options3} className='select' onChange={handleStream} theme={customTheme} styles={customStyles}/>
            <input type="text" placeholder='Please type your Stream...' style={{marginTop:"0px",width:"100%",marginBottom:"10px",border:"none",height:"35px",borderRadius:"7px",padding:"0px 10px",display:"none",background:"#eee"}} id='input3'/>
          </div>

          <div >
            <p>Please Select School Completion Year</p>
            <Select options={options2} className='select' onChange={handleCompletion} theme={customTheme} styles={customStyles} />
            <input type="text" placeholder='Please type your Completion Year...' style={{marginTop:"0px",width:"100%",marginBottom:"10px",border:"none",height:"35px",borderRadius:"7px",padding:"0px 10px",display:"none",background:"#eee"}} id='input2'/>
            <div style={{color:"red",fontWeight:"bolder",fontSize:"15px",display:'none'}} id='compErr'>{compError}</div>
          </div>
          
          <button className='btn' data-aos='flip-right' data-aos-delay='200' onClick={handleSubmit}>Continue</button>
        </div>
    )
}

export default School
