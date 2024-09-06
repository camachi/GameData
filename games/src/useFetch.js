    import { useState, useEffect } from "react";
    export function useFetch(endpoint) {
        const URL = `https://api.rawg.io/api/`;
        const key = "aqui va el key";
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        useEffect(()=> {
            setLoading(true);
            fetch(URL + endpoint+'?key=' + key +"&page_size=200&page=1")
            .then((response) => response.json())
            .then((data)=> setData(data))
            .finally(()=> setLoading(false));
        }, []);
    
        return { data, loading };
    }
    
    