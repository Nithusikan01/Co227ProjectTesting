import {useState} from "react";
import "./Sidebar.css";

export default function SidebarItem({item}){
    const [open,setOpen] = useState(false)
    
    if(item.children){
        return(
            <div className = {open ? "Sidebaritems open": "Sidebaritems"} >
                <div className = "Sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}
                    </span>
                    <i class="bi bi-chevron-down toggle-btn" onClick ={() => setOpen(!open)} ></i>
                </div>
                <div className = "Sidebar-content">
                    { item.children.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return(
            <a href = {item.path ||"#"} className = "Sidebaritems">
                <span>
                    {item.icon && < i className = {item.icon}></i>}
                    {item.title}
                </span>
                
            </a>
        )
    }
}