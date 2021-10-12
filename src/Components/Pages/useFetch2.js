import { useEffect, useState } from 'react';


 const UseFetch2 = (url) => {
    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); 

    setTimeout(() => {

        fetch (url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) {  //Error coming back from server 
             
                throw Error (`404: Is this car what you´re looking for?`);
               
            }
            return res.json();
        })
        .then(data =>  {
            setIsPending(false);
            setData(data);
            setError(null)
        })
        .catch(err =>  {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else { 
                //auto catches network / connection error 
                setIsPending(false);
                setError(err.message);  
            }
        })
    }, 1000)

    
//abort the fetch

return () => abortCont.abort();
  }, [url])


  return { data, isPending, error };



}

export default UseFetch2;