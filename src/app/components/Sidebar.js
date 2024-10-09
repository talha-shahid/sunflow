


import { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { Moon, Gauge, ListTodo, CircleAlert, Map, CalendarCheck, ListCheck, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Gauge color={selected === "Dashboard" ? 'white' : '#FF5722'} />, link: "/dashboard" },
    { name: "Projects", icon: <ListTodo color={selected === "Projects" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Issues", icon: <CircleAlert color={selected === "Issues" ? 'white' : '#FF5722'} />, link: "/issues" },
    { name: "Map", icon: <Map color={selected === "Map" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Planning", icon: <CalendarCheck color={selected === "Planning" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Checklists", icon: <ListCheck color={selected === "Checklists" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Resources", icon: <Users color={selected === "Resources" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Settings", icon: <Settings color={selected === "Settings" ? 'white' : '#FF5722'} />, link: "#" },
    { name: "Offer", icon: <CalendarCheck color={selected === "Offer" ? 'white' : '#FF5722'} />, link: "#" },
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
          <Link href={item.link} key={item.name}>
            <div
              onClick={() => setSelected(item.name)}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                selected === item.name
                  ? "bg-[#FF5722] text-white"
                  : ""
              } hover:bg-[#FBE3D8] transition-all duration-200`} // Hover background color
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
          </Link>
        ))}
      </div>

      {/* Appearance Section */}
      <div className='hover:bg-[#FBE3D8]'>
        <div className="mt-auto px-4 py-3 cursor-pointer flex items-center text-black">
          <Moon className="text-[#FF5722]" />
          <span className={`ml-4 transition-all ${hovered ? "block" : "hidden"}`}>
            Appearance
          </span>
        </div>

        <div className="ml-4">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF5722]"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
