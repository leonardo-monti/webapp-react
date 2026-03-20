import { createContext,useContext,useState } from "react"

const LoaderContext=createContext()

const LoaderContextProvider =({children})=>{
    const [loading,setLoading]=useState(false)
    const value= {loading,setLoading}
    return (<LoaderContext.Provider value={value}> {children}</LoaderContext.Provider>
)}

const useLoaderContext=()=>{
return useContext(LoaderContext)
}

export {LoaderContextProvider,useLoaderContext}