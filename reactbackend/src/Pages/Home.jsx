import React from 'react'
import { Navbar, ProductsList } from '../components'
import { productos } from '../Data/productos'
import { useGlobalContext } from '../Context/GlobalContext'
const Home = () => {
    const valores = useGlobalContext()
    console.log(valores)
  return (
    <div>
        <Navbar/>
        <h1>Bienvienido</h1>
        <ProductsList products={productos}/>
    </div>
  )
}

export default Home