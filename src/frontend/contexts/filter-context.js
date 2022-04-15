import { createContext, useContext,  useReducer} from "react";

const filterContext = createContext(null);

const useFilter = ()=>useContext(filterContext);

const FilterProvider =({children}) =>{

    const reducerFunc=(state,action)=>{
       
        switch(action.type){
            case "SORT_BY_PRICE":
                return {...state, sortPrice: action.payload}
            case "FILTER_BY_PRICE_RANGE":
                return {...state, priceRange: action.payload}
            case "FILTER_BY_BRAND":
                return {...state, brands:state.brands.includes(action.payload) ? state.brands.filter((i) => i !== action.payload) : [...state.brands, action.payload] }


            case "FILTER_BY_RATING":
                return {...state, ratings:action.payload}
            default:
                return {
                    sortPrice:null,
                    priceRange:"",
                    brands:[],
                    ratings:null
                }
            }

    }

    const initialValues ={
        sortPrice:null,
        priceRange:"",
        brands:[],
        ratings:null
    }

    const [state, dispatch] = useReducer(reducerFunc,initialValues)

    return  <filterContext.Provider value={{state,dispatch}}>
        {children}
    </filterContext.Provider>

}

export {useFilter, FilterProvider};
