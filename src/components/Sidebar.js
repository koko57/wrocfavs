import React from 'react';
import './Sidebar.scss'

const Sidebar = (props) => {

  const select = (e) => {
    props.filterPlaces(e.target.value);
  }
  const search = (e) => {
    props.filterByName(e.target.value);
  }
  return (
    <div className="sidebar">
      <div className="search-filter-bar">
        <input type="text" id="search" placeholder="Search By Name" value={props.query} onChange={search}/>
        <select name="placeFilter" id="placeFilter" onChange={select}>
          <option value="" >All</option>
          <option value="coffee">Coffee spots</option>
          <option value="techno">Techno venues</option>
          <option value="art">Museums</option>
        </select>
      </div>
      <div className="places-list-container">
        <ul className="places-list" id="places-list">
          {props.places.map(place => 
          <li className="places-list--item" onClick={props.selectMarker} id={place.name} key={place.name}>
          {/* clicking the button opens the infoWindow of linked marker */}
            <button onClick={props.selectMarker} id={place.name}>{place.name}</button>
          </li>)}
        </ul>
      </div> 
    </div>
  )
}

export default Sidebar