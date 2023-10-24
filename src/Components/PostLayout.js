import React from 'react'

import {Link,Outlet} from 'react-router-dom'

function PostLayout() {
  return (
    <>
      <Link to="/postpage/1">post 1</Link>
    <br></br>
    <Link to="/postpage/2">post 2</Link>
    <br></br>
    <Link to="/postpage/3">post 3</Link>
    <br></br>
    <Link to="/postpage/newpost">New Post</Link>
    <Outlet />
    </>
  )
}

export default PostLayout
