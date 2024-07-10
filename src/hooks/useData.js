import React,{useState,useEffect} from "react";

function useData(loadData) {

    const [data, setData] = useState([]);
    const [isFething, setFething] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        loadData()
            .then(data => {
                setData(data)
            }).catch(error => {
                setError(error)
            }).finally(() => {
                setFething(false)
            })

    }, [])

    return { data, isFething, error }
}

export default useData;