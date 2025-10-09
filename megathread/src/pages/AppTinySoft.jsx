//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { Header } from '../main'
import { Dropdown } from '../components/cDropdown'
import useScript from '../scripts/useScript';

function App() {
  useScript("/src/script.js");
  return (
    <>
      <Header />

        <h1>cpu/gpu info</h1>

        <Dropdown title="cpu-z 2.16">
        * <a href="tinysoft/cpu-z_2.16-en.exe">installer</a><br />
        * <a href="tinysoft/cpu-z_2.16-en.exe">zip</a>
        </Dropdown>

          <h1>techpowerup</h1>

        <Dropdown title="realtemp 3.70">
        * <a href="tinysoft/RealTemp_370.zip">zip</a>
        </Dropdown>

        <Dropdown title="hwinfo 8.30 (portable)">
        * <a href="tinysoft/HWiNFO64.exe">x64</a><br/>
        * <a href="tinysoft/HWiNFO32.exe">x86</a>
        </Dropdown>
    </>
  )
}

export default App;
