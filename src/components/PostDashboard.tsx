import React, { useEffect, useState, type ReactNode } from "react";
import {
  Home,
  CheckSquare,
  Briefcase,
  Users,
  UserCircle,
  Grid,
  LogOut,
  Search,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 12l4 0" />
    <path d="M12 12l0 4" />
    <path d="M12 12l-2.5 2.5" />
    <path d="M12 12l-2.5 -2.5" />
  </svg>
);

const PostDashboard = () => {
  // Mock Data Structure
  const clients = [
    "Radiology Vibes",
    "Rang Rasiya",
    "Rasoee Masale",
    "Recipe Restaurant",
    "Rishav Automobiles",
    "Riva",
  ];

  const platforms = [
    { id: "fb", icon: <Facebook size={14} /> },
    { id: "ig", icon: <Instagram size={14} /> },
    { id: "li", icon: <Linkedin size={14} /> },
    { id: "go", icon: <GoogleIcon /> },
    { id: "yt", icon: <Youtube size={14} /> },
  ];

  const dates = Array.from(
    { length: 15 },
    (_, i) => `February ${String(i + 1).padStart(2, "0")}`,
  );

  // Local State for Checkmarks: { "Date-Client-Platform": true/false }
  const [gridState, setGridState] = useState<Record<string, boolean>>({
    "February 02-Rang Rasiya-fb": true,
    "February 02-Rang Rasiya-li": true,
    "February 02-Rasoee Masale-ig": true,
    "February 02-Riva-fb": true,
    "February 03-Riva-fb": true,
    "February 03-Riva-ig": true,
    "February 06-Rang Rasiya-fb": true,
    "February 06-Rang Rasiya-ig": true,
    "February 08-Rasoee Masale-ig": true,
  });

  // Smooth Toggle Function
  const toggleCell = (date: string, client: string, platform: string) => {
    const key = `${date}-${client}-${platform}`;
    setGridState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    console.log(gridState);
  }, [gridState]);

  return (
    <div className="flex h-screen bg-[#4A6D7C] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-20 flex flex-col items-center py-6 border-r border-white/10 bg-[#4A6D7C] z-10">
        <div className="mb-10 text-2xl">🌈</div>
        <nav className="flex flex-col gap-8 flex-1">
          <NavItem icon={<Home size={20} />} label="HOME" />
          <NavItem icon={<CheckSquare size={20} />} label="TASKS" />
          <NavItem icon={<Briefcase size={20} />} label="PORTFOLIO" />
          <NavItem icon={<Users size={20} />} label="MEMBERS" />
          <NavItem icon={<UserCircle size={20} />} label="CLIENTS" active />
          <NavItem icon={<Grid size={20} />} label="MISC" />
        </nav>
        <div className="mt-auto flex flex-col items-center gap-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Garvit"
            className="w-10 h-10 rounded-full border-2 border-white/20"
            alt="User"
          />
          <span className="text-[10px] font-bold">GARVIT DEVEDI</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/10">
          <div className="flex items-center gap-8 text-xs font-semibold tracking-wider">
            <button className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
              <LogOut size={18} />
              <span className="mt-1">LOGOUT</span>
            </button>
            <button className="hover:text-cyan-300 transition-colors">
              CLIENTS DATA
            </button>
            <button className="text-cyan-300 border-b-2 border-cyan-300 pb-1">
              SOCIAL MEDIA
            </button>
            <button className="hover:text-cyan-300 transition-colors">
              CLIENT CATEGORY
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  className="w-8 h-8 rounded-full border-2 border-[#4A6D7C]"
                  alt="Member"
                />
              ))}
            </div>
            <span className="text-xs font-bold uppercase">15 Members</span>
          </div>
        </header>

        {/* Dashboard Area */}
        <div className="p-6 overflow-hidden flex-1">
          <div className="bg-white rounded-3xl h-full flex flex-col shadow-2xl overflow-hidden">
            {/* Filter Bar */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-4 text-gray-500 text-xs font-medium">
                <Search size={16} />
                <div className="flex gap-2">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
                    <span
                      key={l}
                      className="cursor-pointer hover:text-cyan-600 transition-colors"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm font-semibold">
                February 2026
              </div>
            </div>

            {/* Table Container */}
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full border-collapse table-fixed min-w-[1200px]">
                <thead className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                  <tr>
                    <th
                      rowSpan={2}
                      className="w-32 border border-gray-200 p-4 text-gray-800 text-sm font-bold bg-gray-50"
                    >
                      Date
                    </th>
                    {clients.map((client) => (
                      <th
                        key={client}
                        colSpan={5}
                        className="border border-gray-200 p-2 text-gray-700 text-xs font-bold uppercase tracking-wide"
                      >
                        {client}
                      </th>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    {clients.map((client) => (
                      <React.Fragment key={`${client}-platforms`}>
                        {platforms.map((p) => (
                          <th
                            key={`${client}-${p.id}`}
                            className="border border-gray-200 p-2 text-gray-400"
                          >
                            <div className="flex justify-center">{p.icon}</div>
                          </th>
                        ))}
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dates.map((date, rowIndex) => (
                    <tr
                      key={date}
                      className={
                        rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }
                    >
                      <td className="border border-gray-200 p-3 text-gray-600 text-xs font-medium text-center sticky left-0 bg-inherit z-10">
                        {date}
                      </td>
                      {clients.map((client) => (
                        <React.Fragment key={`${date}-${client}`}>
                          {platforms.map((p) => {
                            const isChecked =
                              gridState[`${date}-${client}-${p.id}`] ?? false;
                            return (
                              <td
                                key={`${date}-${client}-${p.id}`}
                                onClick={() => toggleCell(date, client, p.id)}
                                className={`border border-gray-200 p-0 text-center cursor-pointer transition-all duration-150 hover:bg-cyan-50 group`}
                              >
                                <div className="h-10 flex items-center justify-center">
                                  {isChecked ? (
                                    <span className="text-emerald-500 font-bold animate-in zoom-in duration-200">
                                      ✓
                                    </span>
                                  ) : (
                                    <span className="text-gray-200 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                      —
                                    </span>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `,
        }}
      />
    </div>
  );
};

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}
const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <div
    className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${active ? "text-white" : "text-white/50 hover:text-white"}`}
  >
    <div className={`p-2 rounded-xl ${active ? "bg-white/10 shadow-lg" : ""}`}>
      {icon}
    </div>
    <span className="text-[8px] font-bold">{label}</span>
  </div>
);

export default PostDashboard;
