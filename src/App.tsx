import { Route,Routes, Navigate } from 'react-router-dom'
import { Layout } from './components/layout'
import { Schendule } from './components/schendule'
import { Secureconfirmation } from './components/secureconfrmation'
import { Record } from './components/record'
import { E404 } from './components/e404'

import './App.css'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Navigate to="/schendule" replace/> } ></Route>
          <Route path='/schendule' element={<Schendule></Schendule>}></Route>
          <Route path={'/confirmation'} element={<Secureconfirmation></Secureconfirmation>}></Route>
          <Route path={'/record'} element={<Record></Record>}></Route>
        </Route>
        
        <Route path='*' element={<E404></E404>}></Route>
      </Routes>
    </>
  )
}

export default App
