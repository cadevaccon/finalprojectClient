import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile, patientgetposts,patientinsertpost } from '../JS/actions'
import Postcard from './Postcard'

function Post() {
    const currentuser = useSelector(state => state.userReducer.user)
    const post = useSelector(state => state.postpatientReducer.post)
    const loading = useSelector(state => state.userReducer.loading)
    const [syptome, setSyptome] = useState()
    const [seriousilness, setSeriousilness] = useState()
    const [newPost, setNewPost] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile()) 
    
          
},[])
useEffect(() => {
    const timer = setTimeout(() => {
        dispatch(patientgetposts({"username":currentuser.username
        // currentuser.username
    }))
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const newPoster=()=>{
      setNewPost(!newPost)
  }
  const insertnewpost=(e)=>{
   
        e.preventDefault(); 
           
              dispatch(patientinsertpost({username:currentuser.username,syptome,seriousilness})) 
              dispatch(patientgetposts({"username":currentuser.username}))
  }
    return (
        <>
        {loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
       
        <div>
            
             <h2>{currentuser.username}</h2>
             {post? <>{post.map(e=><Postcard posts={e}/>)}
             </>:null}
             <span onClick={newPoster}>NewPost</span>
             {newPost?<>
            <input  type="textarea"
             name="syptome"
             onChange={(e) => setSyptome(e.target.value)}
             placeholder="syptome"
             className="form-control"
             ></input>
             <input type="textarea"
             name="seriousilness"
             onChange={(e) => setSeriousilness(e.target.value)}
             placeholder="seriousilness"
             className="form-control"
             ></input>
             <button className="btn btn-primary" type="submit" onClick={insertnewpost}>Submit</button>
             </>:null}
        </div>}
        </>
    )
}

export default Post
