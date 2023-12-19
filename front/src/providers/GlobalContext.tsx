import { createContext, useState } from "react";
import { IGlobalContext, IGlobalProviderProps, IProducts } from "./types";
// import { readFile } from 'fs/promises';


export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  const [listProduct, setListProduct] = useState<IProducts[]>([]);

  const getProducts = async () => {
    // try{
        // const res = await fetch('../../../products.json')
        // console.log(res.json())
        // const data = await res.json()
        // console.log(data)
    // }catch (error) {
    //     console.error('erro ao obter produtos:', error)
    // }
    // const json = JSON.parse(await readFile('../../../products.json', 'utf8'))
    // console.log(json)
    // const products = require('../../../products.json')
    // console.log(products)

    // await fetch('../../../products.json').then((res) => {
    //     res.json().then((product) => {
    //         console.log(product)
    //     })
    // })
    try {
        const res = await fetch('products.json')
        if(!res.ok){
            throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
        }

        const resData = await res.text()
        console.log('conteudo da resposta:', resData)

        const data = JSON.parse(resData)
        console.log('dados do json:', data)
    }catch (error) {
        console.log('erro ao obter produtos:', error)
    }

  };
  return (
    <GlobalContext.Provider value={{listProduct, setListProduct, getProducts}}>
        {children}
    </GlobalContext.Provider>
  )
};
