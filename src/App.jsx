import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {

  return (
    <div className='w-[600px] h-[600px] bg-gray-300 border'>
      <div className='w-[500px] h-[500px] bg-yellow-300 flex flex-col items-center justify-center'>
        <div className='w-[100px] h-[100px] bg-blue-400'>

        </div>
        <div className='w-[100px] h-[100px] bg-red-400'>

        </div>
        <div className='w-[100px] h-[100px] bg-green-400'>

        </div>
        <div className='w-[100px] h-[100px] bg-purple-400'>

        </div>
      </div>
    </div>
  )
}

export default App
