import axios from "axios";
import { useState } from "react";
import Profile from "./componemnts/Profile";
import ErrorMsg from "./componemnts/ErrorMsg";
const App = ()=>{
  const [ProfleData , setProfileData] = useState([])
  const [InputValue , setInputValue] = useState('')
  const [dataLoaded , setDataLoaded] = useState(null)
  const [Error , setError] = useState('')
  const HandlFetchProfileData = async ()=>{
      try {
        const response = await axios.get(`https://api.github.com/users/${InputValue}`)
        setProfileData(response.data)
        setDataLoaded(true)
      }
      catch(error){
        setError(error)
        setDataLoaded(false)
      }
  }
  if (dataLoaded){
    return <Profile data={ProfleData} />
  }
  else {
    return (
      <div className="w-[400px] max-w-[90%] bg-black py-2 px-3 rounded-lg overflow-hidden">
          <h1 className="text-2xl">Search your favorite github Profile</h1>
          <div className="flex items-center gap-1 justify-between flex-wrap">
            <input className = 'flex-grow bg-stone-800 py-2 my-1 px-4 rounded-md outline-none border border-2 border-stone-500' type="text" placeholder="Search for a github profile..." onChange={(e)=>{
              setInputValue(e.target.value)
            }}>
            </input>
            <button className ={`py-2 px-3 bg-stone-800 rounded rounded-2 ${InputValue != ''? 'cursor-pointer' : 'cursor-not-allowed '}`} disabled={InputValue == ''} onClick={HandlFetchProfileData}>search</button>
          </div>
          {dataLoaded == false ? <ErrorMsg errorMsg={Error} /> : null}
      </div>
    )
  }
}

export default App