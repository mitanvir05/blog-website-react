
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([])

 const handleAddToBookmarks=blog=>{
  const newBookMarks=[...bookmarks,blog]
  setBookmarks(newBookMarks)
 }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
