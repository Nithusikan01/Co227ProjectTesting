import SidebarItem from "./Sidebar_items"
import items from "./Sidebar.json"
import "./Sidebar.css"
import SearchBar from '../Searchbar/Searchbar';
import SearchData from '../Searchbar/Searchbar.json';


export default function Sidebar(){

    return (
      <div className= "Sidebar">
        <SearchBar placeholder="Search..." data={SearchData}/>
        {
          items.map((item,index) => <SidebarItem key={index} item={item}/>)
         
        }
      </div>
    );
}