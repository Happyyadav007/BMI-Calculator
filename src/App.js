import {useState} from 'react';
function App(){
  const[formData, setFormData] = useState({weight:'', height:''})
  const[bmiresult, setBmiresult] = useState(0);
  const changeHandler=(event)=>{
    setFormData((prev)=>(
      {...prev, [event.target.name]:Number(event.target.value),}
    ))
  }
  const clickHandler=()=>{
    const { weight, height } = formData;
    if (height > 0) {
      const heightInMeters = height / 100;
      const heightSquared = heightInMeters * heightInMeters;
      const bmiresult = weight / heightSquared;
      setBmiresult(bmiresult.toFixed(2)); 
    } else {
      setBmiresult('Invalid height');
    } }
  return (
    <div className='flex justify-center bg-blue-400 h-screen w-screen'>
      <div className='text-center h-1/2 w-1/5 border-2 mt-36 bg-white shadow '> 
      <h2 className='text-2xl font-bold p-4'>BMI Calculator</h2>

      <div className='p-4'>
      <p className='pb-1'>Weight(KG)</p>
      <input className='border-2 p-1' type='number' name='weight' onChange={changeHandler} placeholder='Enter weight' value={formData.weight}></input><br></br>
      <p className='pt-2 pb-1'>Height(CM)</p>
      <input className='border-2 p-1' type='number' name='height' onChange={changeHandler} placeholder='Enter height' value={formData.height}></input> <br></br>
      <button type='button' className='border-2 p-2 m-4 bg-blue-700 text-white' onClick={clickHandler}>Check</button>
      <h1>Your BMI is {bmiresult}</h1>
      </div>
      </div>
    </div>
  );
}
export default App;