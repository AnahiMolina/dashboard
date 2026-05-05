import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App.jsx'
import './assets/css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(  
  <BrowserRouter basename='/dashboard/'>
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
  </BrowserRouter>,
)
