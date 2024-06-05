import React from 'react'
import search from "../../../assests/Component 32.svg"
import filter from "../../../assests/Component 39 (2).svg"
import "./topBar.css"

const TopBar = () => {


  return (
    <div className='topbar'>
      <div className='logoBox'>
        <p className='logo'>LOGO</p>
      </div>
      <div className='searchBox'>
        <div className='search'>
          <img alt='' className='searchIcon' src={search} />
          <input className='searchBar' placeholder='Search here...' />
        </div>
        <div className='filter'>
          <img className='filterIcon' alt='' src={filter} />
          <p className=''>Filter</p>
        </div>
      </div>

      <div className='seller'>
        <button className='sellerButton'>Become a seller</button>
      </div>
    </div>
  )
}

export default TopBar
