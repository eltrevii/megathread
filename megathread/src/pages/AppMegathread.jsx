//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { Header } from "../main"
import { Dropdown } from "../components/cDropdown"

function App() {
  return (
    <>
      <Header />

      <h1>counter-strike 2</h1>
      <Dropdown title="mods/configs">
        <a href="https://github.com/xPaw/CS2">CS2 PRACTICE CONFIG</a>
      </Dropdown>
      
      <Dropdown title="mods/configs">
        <a href="https://github.com/xPaw/CS2">CS2 PRACTICE CONFIG</a>
      </Dropdown>
    </>
  )
}

export default App
