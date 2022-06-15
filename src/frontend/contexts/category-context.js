import { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const categoryContext = createContext(null);

const useCategory = ()=>useContext(categoryContext);


const CategoryProvider = ({children})=>{
    const [categories, setCategories] = useState([]);

    const getCategory = async()=>{
        const res = await axios.get("/api/categories");
        setCategories(res.data.categories);
        
      }
    
      useEffect(()=>{
        getCategory()
      },[])

        


    return( <categoryContext.Provider value={{categories}}>
        {children}
        </categoryContext.Provider>)
}


export{useCategory, CategoryProvider};