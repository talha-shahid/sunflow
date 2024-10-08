
import { useState } from 'react';
import { Moon, Sun, Gauge, ListTodo, CircleAlert, Map, CalendarCheck, ListCheck, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState("Dashboard"); 


  const menuItems = [
    { name: "Dashboard", icon: <Gauge color={selected === "Dashboard" ? 'white' : '#FF5722'} /> },
    { name: "Projects", icon: <ListTodo color={selected === "Projects" ? 'white' : '#FF5722'} /> },
    { name: "Issues", icon: <CircleAlert color={selected === "Issues" ? 'white' : '#FF5722'} /> },
    { name: "Map", icon: <Map color={selected === "Map" ? 'white' : '#FF5722'} /> },
    { name: "Planning", icon: <CalendarCheck color={selected === "Planning" ? 'white' : '#FF5722'} /> },
    { name: "Checklists", icon: <ListCheck color={selected === "Checklists" ? 'white' : '#FF5722'} /> },
    { name: "Resources", icon: <Users color={selected === "Resources" ? 'white' : '#FF5722'} /> },
    { name: "Settings", icon: <Settings color={selected === "Settings" ? 'white' : '#FF5722'} /> },
    { name: "Offer", icon: <CalendarCheck color={selected === "Offer" ? 'white' : '#FF5722'} /> },
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`h-screen transition-all duration-300 ease-in-out ${
        hovered ? "w-64" : "w-20"
      } bg-white border-r relative`}
    >
      {/* Sidebar Menu Items */}
      <div className="flex flex-col py-4 space-y-2 text-black">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`flex items-center px-4 py-3 cursor-pointer ${
              selected === item.name
                ? "bg-[#FF5722] text-white"
                : ""
            } hover:bg-[#FBE3D8] transition-all duration-200`} // Added hover background color here
          >
            {/* Icon */}
            <span>{item.icon}</span>
            {/* Text */}
            <span
              className={`ml-4 transition-all font-medium ${
                hovered ? "block" : "hidden"
              }`}
            >
              {item.name}
            </span>

            
          </div>
        ))}
      </div>

      {/* Appearance Section */}
      <div className='hover:bg-[#FBE3D8] '>
             <div className=" mt-auto px-4 py-3 cursor-pointer flex  items-center  text-black">
           <Moon className="text-[#FF5722]" />
           <span
             className={`ml-4 transition-all ${hovered ? "block" : "hidden"}`}
           >
             Appearance
           </span>
       </div>

       <div className="ml-4 ">
           <label class="inline-flex items-center cursor-pointer">
             <input type="checkbox" value="" class="sr-only peer" />
             <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#FF5722]"></div>
           </label>
         </div>
         </div>


     </div>
    
  );
};

export default Sidebar;
