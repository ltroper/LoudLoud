import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";


const getFilteredSearch = (search, usersArr) => {
    if (!search) {
        return
    }
    const matchingArray = usersArr.filter(crypto => crypto.fullName.toUpperCase().includes(search.toUpperCase()))
    return matchingArray
}


const SearchBar = () => {

    const sessionUser = useSelector(state=>state.session.user)


    const userObj = useSelector(state => state.users)
    const userArr = Object.values(userObj)
    const filteredArr = userArr.filter(ele => ele?.id !== sessionUser?.id)

    const [search, setSearch] = useState('')

    const filteredSearch = getFilteredSearch(search, filteredArr)

    return (
        <div className='search-nav-bar-container'>
            <input
                className='searchbar'
                type='text'
                placeholder='Search Users'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className='dropdown-container'>
                {filteredSearch?.map(crypto => (
                    <NavLink
                    style={{ textDecoration: "none", color: "black"}}
                    to={`/users/${crypto.id}`}
                    onClick={e => setSearch("")}>
                        <div className='search-nav-bar-users' key={crypto.id}>{crypto.fullName}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    )

}

export default SearchBar
