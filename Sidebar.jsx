import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"


function App() {


  return (
    <>
      <div className="flex">
        <Sidebar>
           <SidebarItem icon={<Home size={20} />} text="Home" active />
           <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"/>
           <SidebarItem icon={<StickyNote size={20} />} text="Projects"/>
           <SidebarItem icon={<Calendar size={20} />} text="Calender" />
           <SidebarItem icon={<Layers size={20} />} text="Tasks" />
           <SidebarItem icon={<Flag size={20} />} text="Reporting" />
           <hr className="my-3" />
           <SidebarItem icon={<Settings size ={20} />} text="Settings" />
           <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  )
}

export default App

