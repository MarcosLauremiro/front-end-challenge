import { useContext } from "react"
import { GlobalContext, GlobalProvider } from "../../providers/GlobalContext"

export const Product = () => {

    const {getProducts} = useContext(GlobalContext)

    getProducts()
    return(
        <>
        
        </>
    )
}