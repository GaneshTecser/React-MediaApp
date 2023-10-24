import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DataContext from '../Context/DataContext';

const Edit =()=>{
  const{
    posts,handleEdit,editBody,editTitle,setEditTitle,setEditBody,
    }=useContext(DataContext)
const {id}=useParams();
const post = posts.find(post=>(post.id).toString()===id)
useEffect(()=>{
  if(post)
  {
    setEditBody(post.body)
    setEditTitle(post.title)
  }
},[post,setEditBody,setEditTitle])
return(
  <main className='NewPost'>
{editTitle &&
<>
<h2>Edit Post</h2>
<form className='newPostForm' onSubmit={e=>e.preventDefault()}>
  <label
    htmlfor="postTitle">Title:
  </label>
  <input
  id="postTitle"
  type='text'
  required
  value={editTitle}
  onChange={(e)=>setEditTitle(e.target.value)}
  />
    <label
    htmlfor="postBody">Post:
  </label>
  <textarea
  id="postBody"

  required
  value={editBody}
  onChange={(e)=>setEditBody(e.target.value)}
/>
<button type='submit' onClick={()=>handleEdit(post.id)}>
Submit
</button>
</form>

</>

}
{!editTitle &&
<>
<h2>Post Not Found</h2>
<p>Well Go Back...</p>
<p>
  <Link to="/"> 
  Visit back to Home
  </Link>
</p>
</>
}

  </main>
)
}



export default Edit
