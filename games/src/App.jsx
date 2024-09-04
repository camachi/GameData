export function App ()
{
    const URL = `https://api.rawg.io/api/games`;
    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(URL)
            console.log(result);
        }
        fetchData();
    },[]);
}