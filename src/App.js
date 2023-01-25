import React from 'react'
import Nav from './components/Nav'
import Target from './components/Target'
import targetData from './data'

export default function App() {

const targets = targetData.map(item => {
  return (
    <Target
      key = {item.title}
      {...item}
      />
   )
})

  return (
    <div className="App">
      <Nav />
      {targets}
    </div>
  );
}
