import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile,getProfilePatient,registerProfilePatient,updateProfile } from '../JS/actions'

function Profile() {

    const currentuser = useSelector(state => state.userReducer.user)
    const user = useSelector(state => state.patientReducer.user)
    const [weight, setWeight] = useState(null)
    const [age, setAge] = useState(null)
    const [sexe, setSexe] = useState(null)
    const [showing, setShowing] = useState(!user)
    const show=()=>setShowing(!showing)

    const loading = useSelector(state => state.userReducer.loading)
  
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(getProfile()) 
        
          
},[])

            // TO VERIFY

useEffect(()=>{
    if(currentuser)
    dispatch(getProfilePatient({"username":
    currentuser.username
}))
        
    
},[currentuser])


const addProfilerOrUpdate = (e) => {
    e.preventDefault(); 
    setShowing(!showing);
        if(!user)
{            dispatch(registerProfilePatient({username:currentuser.username,age,weight,sexe})) 
dispatch(getProfilePatient({"username": currentuser.username}))

 }
else

          {  const aging= age?age:user.age
            const weighting= weight?weight:user.weight
            const sex=sexe?sexe:user.sexe
             dispatch(updateProfile({username:user.username,age:aging,weight:weighting,sexe:sex}))
}};


  const [redirecting, setRedirecting] = useState(false)
  const redirectingtoposts=()=>{
      setRedirecting(true)
    
    
  }
//   const starttimer=(e)=>{
//       console.log("test1")
//    setTimeout(() => {
//     console.log("TEST2")
  
//     dispatch(getProfilePatient({"username": e}))
// }, 1000);

 
  
    return ( 
                loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
                
        <div>
            <Redirect to="PatientProfile"/>
            <h1 >Welcome {currentuser.username}</h1>
        {user?<> <h2>welcome {user.username}</h2>
        
    <h2>Age : {user.age}</h2>
    <h2>Weight : {user.weight}</h2>
    <h2>Sexe : {user.sexe}</h2></>:
    null
    // starttimer(currentuser.username)
    }
    <h5 onClick={show}>{!user?<>Insert Profile Info</>:<>Update Profile</>}</h5>
    {showing?null:<>
             <input  type="text"
             name="weight"
             onChange={(e) => setWeight(e.target.value)}
             placeholder="Weight"
             className="form-control"
             ></input>
             <input type="text"
             name="age"
             onChange={(e) => setAge(e.target.value)}
             placeholder="age"
             className="form-control"
             ></input>
             <div onChange={(e) => setSexe(e.target.value)}>
                <input type="radio" value="Male" name="sexe" /> Male
                <input type="radio" value="Female" name="sexe" /> Female
              </div>
              {/* <button className="btn btn-primary" type="submit" onClick={addProfilerOrUpdate}>Submit</button> */}
              </>}

              <span onClick={redirectingtoposts}>Myposts</span>
              {redirecting?<Redirect to = '/myposts'/>:null}
        </div>
    )
}

export default Profile
