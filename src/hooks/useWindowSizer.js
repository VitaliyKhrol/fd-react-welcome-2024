import React,{useState,useEffect} from "react";


function useWindowSizer (){
const [coordinates, setCoordinates] = useState({ x: window.innerWidth, y: window.innerHeight })

useEffect(() => {
    window.addEventListener('resize', resizeHadler);
    return () => {
        window.removeEventListener('resize', resizeHadler)
    }
}, [])

const resizeHadler = () => {
    setCoordinates({
        x: window.innerWidth,
        y: window.innerHeight
    })
}

return {coordinates}

}

export default useWindowSizer

