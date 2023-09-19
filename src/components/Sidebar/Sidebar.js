import SidebarItem from "./Sidebar_items"
import items from "./Sidebar.json"
import "./Sidebar.css"


export default function Sidebar(){
    return (
      <div className= "Sidebar">
        {
          items.map((item,index) => <SidebarItem key={index} item={item}/>)
         
        }
      </div>
    );
}