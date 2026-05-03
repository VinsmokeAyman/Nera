import './App.css'
import PFP from './Img/No-PFP-13.jpg'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1 style={{ color: '#052A68' }}>NERA</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>Documentation</li>
            <li>Reclamation</li>
            <li>Parascolaire</li>
            <li>Profile</li>
          </ul>
        </nav>
        <div className="profile">
          <img style={{width:'50px',height:'50px'}} src={PFP} alt="Profile" />
        </div>
      </header>
      <main className="main">
        <h2 style={{color:'#333'}}>Coming soon...</h2>
      </main>
    </div>
  )
}

export default App
