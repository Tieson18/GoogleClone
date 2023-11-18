import './App.css'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
// import SearchBar from './pages/SearchBar'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
      {/* 
      Home (the one with the search on)

      SearchPage (theresults page)
     */}
    </>
  )
}

export default App 