import { useEffect,useState } from "react";

const useWindowSize=()=>{
    const[windowSize,SetWindowSize]=useState({
        width:undefined,
        hieght:undefined
    })
    useEffect(()=>{
        const handleResize=()=>{
            SetWindowSize({
                width:window.innerWidth,
                hieght:window.innerHeight
            })
        }
  
    handleResize()
    window.addEventListener("resize",handleResize)
    return()=>window.removeEventListener("resize",handleResize)
},[])
return windowSize;
}
export default useWindowSize