import { Login,SignUp } from "./views";
import {Routes,Route} from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>  
  )
}

export default App
