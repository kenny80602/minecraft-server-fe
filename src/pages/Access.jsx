import { useState } from 'react';

const permissionGroups = [
  {
    title: '伺服器控制',
    icon: 'settings_power',
    items: [
      { id: 'start', label: '啟動', desc: '允許開啟伺服器', default: true },
      { id: 'restart', label: '重啟 / 關閉', desc: '完全控制電源', default: true },
      { id: 'reinstall', label: '重新安裝', desc: '重置伺服器核心', default: false, warning: true },
      { id: 'console', label: '控制台', desc: '查看伺服器輸出', default: true },
      { id: 'logs', label: '紀錄', desc: '查看歷史紀錄', default: true },
    ],
  },
  {
    title: '設定管理',
    icon: 'tune',
    items: [
      { id: 'options', label: '選項', desc: '修改 properties', default: true },
      { id: 'domain', label: '網域名稱', desc: '更改連線 IP', default: false },
      { id: 'software', label: '軟體', desc: '版本管理', default: false },
      { id: 'players', label: '玩家管理', desc: '白名單 / OP', default: true },
      { id: 'share', label: '分享存取權', desc: '新增其他管理員', default: false },
    ],
  },
  {
    title: '資料與檔案',
    icon: 'folder_open',
    items: [
      { id: 'files', label: '檔案', desc: 'FTP / 檔案瀏覽器', default: true },
      { id: 'plugins', label: '插件 / 模組', desc: '安裝或移除', default: true },
      { id: 'backups', label: '備份檔案', desc: '建立與還原', default: true },
      { id: 'worlds', label: '世界', desc: '上傳或下載', default: true },
      { id: 'duplicate', label: '複製伺服器', desc: '完整拷貝', default: false },
    ],
  },
];

const defaultPerms = {};
permissionGroups.forEach((g) => g.items.forEach((item) => { defaultPerms[item.id] = item.default; }));

export default function Access() {
  const [perms, setPerms] = useState(defaultPerms);

  const toggle = (id) => setPerms((prev) => ({ ...prev, [id]: !prev[id] }));
  const selectAll = () => {
    const all = {};
    permissionGroups.forEach((g) => g.items.forEach((item) => { all[item.id] = true; }));
    setPerms(all);
  };
  const deselectAll = () => {
    const none = {};
    permissionGroups.forEach((g) => g.items.forEach((item) => { none[item.id] = false; }));
    setPerms(none);
  };

  return (
    <>
      <header className="h-16 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">shield_person</span>
            存取權限
          </h2>
          <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-400 border border-slate-700 font-medium">Access Control</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Add user */}
          <div className="bg-sidebar-dark rounded-xl border border-primary/10 p-6 mb-8 shadow-sm">
            <h3 className="text-sm font-bold text-white mb-4">新增使用者存取權</h3>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">person_add</span>
                </div>
                <input
                  className="w-full bg-slate-800 text-white placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-lg border border-slate-600 focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all outline-none"
                  placeholder="輸入使用者名稱"
                  type="text"
                />
              </div>
              <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px]">add</span>
                新增
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">新增後，您可以詳細設定該使用者的各項權限。</p>
          </div>

          {/* Permission editor */}
          <div className="bg-sidebar-dark rounded-xl border border-primary/10 overflow-hidden shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between bg-slate-800/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/30">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">skyMoonHe</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <p className="text-xs text-slate-400">正在編輯權限</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-medium transition-all">
                  取消
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white text-xs font-medium shadow-sm transition-all">
                  儲存變更
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-end mb-6 gap-2">
                <button onClick={deselectAll} className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">check_box_outline_blank</span>
                  全部取消
                </button>
                <button onClick={selectAll} className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1 px-2 py-1 rounded hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">check_box</span>
                  全部選取
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                {permissionGroups.map((group) => (
                  <div key={group.title} className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-700/50 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">{group.icon}</span>
                      {group.title}
                    </h4>
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between group py-1">
                          <div>
                            <div className={`text-sm font-medium transition-colors ${
                              item.warning
                                ? 'text-amber-500 group-hover:text-amber-400'
                                : 'text-slate-200 group-hover:text-white'
                            }`}>
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-500">{item.desc}</div>
                          </div>
                          <button
                            onClick={() => toggle(item.id)}
                            className={`relative w-11 h-6 rounded-full transition-colors ${
                              perms[item.id]
                                ? item.warning ? 'bg-amber-500' : 'bg-emerald-500'
                                : 'bg-slate-700'
                            }`}
                          >
                            <div className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow transition-transform ${
                              perms[item.id] ? 'translate-x-5' : ''
                            }`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other users */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 pl-1">其他使用者</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-sidebar-dark rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                  <div>
                    <div className="font-medium text-base text-white">Hachiyouittou</div>
                    <div className="text-xs text-slate-500">上次活動: 3天前</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="編輯">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="刪除">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </>
  );
}
