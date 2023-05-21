
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/category'


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  
  return (

    <>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Hero />
      <HeadlineCards />
      <Food searchQuery={searchQuery} />
      <Category />

    </>

  )
}

export default App
