import './App.css'
import ProductCard from './components/productCard'

function App() {

  return (
    <>
      <ProductCard name= "laptop" image="https://picsum.photos/id/1/200/300" price="100,000"/>
      <ProductCard name= "watch" image="https://picsum.photos/id/3/200/300" price="20,000"/>
      <ProductCard name= "Phone" image="https://picsum.photos/id/4/200/300" price="50,000"/>

    </>
  )
}

export default App
