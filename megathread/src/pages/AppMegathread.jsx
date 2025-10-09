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
      
      <Dropdown title="practica">
        * <a href="https://yprac.com">YPRAC</a> --{">"} MAPAS WORKSHOP | CLIENTE <br />
        * <a href="https://cslabez.com/alternative-cs2-aim-botz-map">CSLAB AIM BOTZ (cs2_aim)</a> (!) <br />
        * <a href="https://refrag.gg">REFRAG</a> <br />
        * <a href="https://faceit.com">FACEIT</a> <br />
        * ESL CS | <a href="https://youtu.be/BtbNz-k9GX4">MEJORES MAPAS</a>
      </Dropdown>
    </>
  )
}

export default App;
