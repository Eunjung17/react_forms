import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authenticate from  './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <>
      <section>
        <div>
          <SignUpForm token={token} setToken={setToken} />
        </div>
        <div>
          <Authenticate token={token} setToken={setToken} />
        </div>
      </section>
    </>
  )
}

export default App
