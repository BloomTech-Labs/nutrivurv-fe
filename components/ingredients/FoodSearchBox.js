import {useState} from 'react';
import { foodDbSearch } from '../../lib/edamam.js';

export default function FoodSearchBox({ setSearchResults, setActiveControl }) {
    const [item, setItem] = useState("")

    
    const handleChange = (e) => {
        setItem(e.target.value)
    }
    
    const query = item.replace(' ', '%20');             //format the entered food item for the API call

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const list = await foodDbSearch(query);                  //hit the foodDB API
        setSearchResults(list.hints)                             //set the searchResult so they can be read by the food list component
        setActiveControl && setActiveControl("searchResults")    //switch the dash component to search results if the control is passed in props
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="w-full border border-purple-400 rounded focus:border-purple-200 px-4 py-2"
                type="text"
                placeholder="Search Food Item"
                name="food"
                onChange={handleChange} />
        </form>
    )
}