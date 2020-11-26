import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatepost } from '../JS/actions'

function Postcard(props) {
    const {_id,syptome,seriousilness,username}=props.posts
   
    

    const [toupdate, setToupdate] = useState(false)
    const [syptomeupdate, setSyptomeupdate] = useState()
    const [seriousilnessupdate, setSeriousilnessupdate] = useState()
    const dispatch = useDispatch()
    const triggerupdate=()=>{
        setToupdate(!toupdate)
    }

    const updatedpost=(e)=>
    {
        e.preventDefault();
        
        dispatch(updatepost({_id,"username":username,"syptome":syptomeupdate,"seriousilness":seriousilnessupdate}))
        triggerupdate()
    }
    return (
        <div style={{padding:"10px"}} key={_id}>
       <div style={{backgroundColor:"blue"}}>
            {console.log(username)}
       {toupdate?<><input  type="textarea"
        name="syptome"
        onChange={(e) => setSyptomeupdate(e.target.value)}
        placeholder={syptome}
        className="form-control"
        
        ></input>
        <input type="textarea"
        name="seriousilness"
        onChange={(e) => setSeriousilnessupdate(e.target.value)}
        placeholder={seriousilness}
        className="form-control"
        ></input>
        <button className="btn btn-primary" type="submit" onClick={updatedpost}>Submit</button></>
        : <> {syptome}<br/>
           {seriousilness}<br/><br/></>}
           <span onClick={triggerupdate} >Update</span>
       </div>
       </div>
    )
}

export default Postcard
