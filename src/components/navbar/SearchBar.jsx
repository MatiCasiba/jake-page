
const SearchBar = () => {
  return (
    <>
      <div className="search-bar">

        <div className="search-bar__logo-container">
          <img src="" alt="" className="search-bar__logo-img" />
        </div> {/* logo-container */}

        <form action="#" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            <img className="search-bar__logo-search" src="" alt="logo del bucador" />
          </label>
          <input type="search" id="busqueda" className="search-bar__form-search" />
          <button type="submit" className="search-bar__form-submit">Buscar</button>
        </form>

        <div className="menu-toogle">
          <label htmlFor="" className="menu-toogle__label">
            <span className="menu-toogle__top"></span>
            <span className="menu-toogle__mid"></span>
            <span className="menu-toogle__bottom"></span>
          </label>
        </div> {/* menu-toogle */}

      </div>
    </>
  )
}

export default SearchBar