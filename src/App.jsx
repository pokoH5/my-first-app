import './App.css'
import Header from './component/Header.jsx'
import  Contents from './component/Contents.jsx'
import Footer from './component/Footer.jsx'

export default function App() {
  return (
    <div className='bg-red'>
      <div>App</div>
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}
