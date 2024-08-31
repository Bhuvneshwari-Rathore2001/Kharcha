import './App.css'
import AuthenticatonLayout from './components/layouts/AuthenticationLayout'
import DashboardLayout from './components/layouts/DashboardLayout'

function App() {
  const user= true
  
  return (
    <>
    {user ? <DashboardLayout/> : <AuthenticatonLayout/>}
    </>
  )
}

export default App
