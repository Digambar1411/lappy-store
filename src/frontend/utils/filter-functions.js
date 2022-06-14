const sortBypriceFunc =(data,state)=>{

    switch(state){
        case "LOW_TO_HIGH":
            return [...data].sort((a,b)=>Number(a.price)- Number(b.price))
        case "HIGH_TO_LOW":
            return [...data].sort((a,b)=>Number(b.price)-Number(a.price))
        default : 
            return data;
    }
}

const filterByPriceRangeFunc=(data,state)=> state>0 ? data.filter(item=>Number(item.price)<=Number(state)) : data

const filterByBrandFunc =(data,state)=> state.length===0 ? data : data.filter(item=>state.includes(item.brand))

const filterByRatingFunc =(data,state)=> state ? data.filter(item=>Number(item.rating) >= Number(state)): data

const filterByCategoryFunc = (data, state) => state.length===0 ? data : data.filter(item=>state.includes(item.category))

export { filterByBrandFunc, filterByPriceRangeFunc, filterByRatingFunc, sortBypriceFunc, filterByCategoryFunc}

