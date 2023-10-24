import { useEffect, useState } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import {Link,Route,Routes, useNavigate} from 'react-router-dom'
import Edit from "./Components/Edit";
import { DataProvider } from "./Context/DataContext";

function App() {



  return (
    <div className="App">
      <DataProvider>
      <Header title="MegaMedia" />
      <Nav />
      <Routes>
        <Route path="/" element={
     <Home 
     />}/>

     <Route path="post">
     <Route index
      element=
     {<NewPost />}/>

     <Route path=":id" element={<PostPage />}/>
     </Route>
     <Route
     path="/edit/:id" element={<Edit
     
     />}

     />
     <Route path="about" element={<About/>}/>
     <Route path="*" element={<Missing/>}/>    
      </Routes>
     <Footer/> 
     </DataProvider>
  </div>
  );
}

export default App;

{/* <nav>
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>

    <li><Link to='/postpage'>Postpage</Link></li>
  </ul>
</nav>

<Routes>
  <Route path="/" element={<Home/>}/>

  <Route path="/about" element={<About/>}/>
  <Route path="/postpage" element={<PostLayout/>}>
  <Route index element={<PostPage/>}/>
  <Route path=":id" element={<Post/>}/>
  <Route path="newpost" element={<NewPost/>}/>
  </Route>
<Route path="*" element={<Missing/>}/>
</Routes> */}
