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
    <div className='flex justify-center bg-blue-400 items-center min-h-screen'>
      <div className='bg-white border-2 rounded-lg shadow-lg w-full max-w-md p-6'> 
      <h2 className='text-2xl font-bold p-4 flex justify-center'>BMI Calculator</h2>

      <div className='p-4'>
      <p className='pb-1'>Weight(KG)</p>
      <input className='border-2 p-1  w-full rounded' type='number' name='weight' onChange={changeHandler} placeholder='Enter weight' value={formData.weight}></input><br></br>
      <p className='pt-2 pb-1'>Height(CM)</p>
      <input className='border-2 p-1  w-full rounded' type='number' name='height' onChange={changeHandler} placeholder='Enter height' value={formData.height}></input> <br></br>
      
      <div className='flex justify-center'><button type='button' className='border-2 p-2 m-4 bg-blue-700 text-white' onClick={clickHandler}>Check</button></div>
      <h1 className='text-center'>Your BMI is {bmiresult}</h1>
      </div>
      </div>
    </div>
  );
}
export default App;