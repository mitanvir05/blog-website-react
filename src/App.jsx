
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([])

 const handleAddToBookmarks=blog=>{
  console.log('Book Mark Added');
 }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
