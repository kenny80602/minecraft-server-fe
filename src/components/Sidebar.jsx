import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: 'dns', label: '伺服器', path: '/dashboard' },
  { icon: 'settings', label: '選項', path: '/options' },
  { icon: 'terminal', label: '控制台', path: '#' },
  { icon: 'description', label: '紀錄', path: '#' },
  { icon: 'group', label: '玩家', path: '#' },
  { icon: 'category', label: '軟體', path: '#' },
  { icon: 'folder', label: '檔案', path: '#' },
  { icon: 'public', label: '世界', path: '#' },
  { icon: 'history', label: '備份檔案', path: '#' },
  { icon: 'lock_person', label: '存取權', path: '#' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar-dark border-r border-primary/20 flex flex-col h-screen shrink-0">
      <div className="p-6 border-b border-primary/10">
        <div className="flex items-center gap-3 bg-primary/20 p-2 rounded-lg">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">grid_view</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-white leading-tight">Neneneko</h1>
            <p className="text-[10px] text-slate-400 font-medium">伺服器管理平台</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary/30 text-white'
                  : 'text-slate-400 hover:bg-primary/10'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-primary/10 mt-auto">
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#fcd4b4] flex-shrink-0"></div>
            <span className="text-sm font-medium text-white">Admin User</span>
          </div>
          <span className="material-symbols-outlined text-slate-500 text-lg cursor-pointer hover:text-white transition-colors">
            logout
          </span>
        </div>
      </div>
    </aside>
  );
}
