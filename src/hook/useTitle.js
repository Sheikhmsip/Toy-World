import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Toy Stars - ${title}`;
    } ,[title])
};

export default useTitle;