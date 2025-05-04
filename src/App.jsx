
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/Productlist'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
     <ProductList/>
    </>
  )
}

export default App
