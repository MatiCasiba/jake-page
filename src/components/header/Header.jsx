import './Header.scss'
import Navbar from "../navbar/Navbar"
import SearchBar from "../navbar/SearchBar"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbosx" id="menu" />
        
        <Navbar />
        <SearchBar />

      </header>
    </>
  )
}

export default Header