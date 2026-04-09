const softwareList = [
  {
    name: 'Vanilla',
    desc: 'Minecraft 官方原版伺服器軟體。最穩定但不支援任何插件或模組。',
    icon: <span className="text-xl font-bold text-slate-300">V</span>,
    iconBg: 'bg-slate-700',
    tags: [{ label: '官方' }],
  },
  {
    name: 'Paper',
    desc: '高效能的 Spigot 分支，提供極佳的性能優化並支援大部分 Bukkit/Spigot 插件。',
    icon: <span className="material-symbols-outlined text-indigo-500 text-2xl">description</span>,
    iconBg: 'bg-indigo-500/20',
    installed: true,
    tags: [{ label: '推薦', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' }, { label: '插件' }],
  },
  {
    name: 'Spigot',
    desc: '基於 CraftBukkit 修改的伺服器核心，極大優化了伺服器性能。',
    icon: <span className="material-symbols-outlined text-orange-500 text-2xl">water_drop</span>,
    iconBg: 'bg-orange-500/20',
    tags: [{ label: '插件' }],
  },
  {
    name: 'Forge',
    desc: '最流行的模組加載器，允許安裝大量改變遊戲內容的模組 (Mods)。',
    icon: <span className="text-xl font-bold text-amber-500">F</span>,
    iconBg: 'bg-amber-700/20',
    tags: [{ label: '模組' }],
  },
  {
    name: 'Fabric',
    desc: '輕量級的模組加載器，更新速度快，適合需要高效能模組服的玩家。',
    icon: <span className="text-xl font-bold text-slate-300">Fb</span>,
    iconBg: 'bg-slate-700',
    tags: [{ label: '模組' }, { label: '輕量' }],
  },
  {
    name: 'BungeeCord',
    desc: '用於連接多個 Minecraft 伺服器的代理端，不可單獨作為遊戲伺服器使用。',
    icon: <span className="text-xl font-bold text-blue-500">B</span>,
    iconBg: 'bg-blue-500/20',
    tags: [{ label: '代理' }],
  },
];

const versions = [
  { version: '1.20.1-build-196', date: '發布於 2 天前', note: '推薦版本', current: true },
  { version: '1.20.1-build-195', date: '發布於 5 天前' },
  { version: '1.20.1-build-194', date: '發布於 1 週前' },
  { version: '1.19.4-build-350', date: '發布於 2 個月前' },
];

export default function Software() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/80 backdrop-blur-md z-10 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">軟體安裝</h2>
          <p className="text-sm text-slate-400 mt-1">選擇並安裝您的伺服器核心版本</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 px-3 py-1.5 rounded-full flex items-center gap-2 border border-primary/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-indigo-200">Paper 1.20.1 運行中</span>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Warning */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-4">
            <span className="material-symbols-outlined text-amber-500 mt-0.5">warning</span>
            <div>
              <h3 className="text-amber-500 font-bold text-sm mb-1">注意：更換核心可能導致資料遺失</h3>
              <p className="text-amber-500/80 text-xs leading-relaxed">
                更換伺服器軟體（例如從 Vanilla 轉為 Forge）可能會導致您的世界存檔、插件或模組不相容。
                在執行任何變更之前，強烈建議您先至「備份檔案」頁面建立完整的伺服器備份。
              </p>
            </div>
          </div>

          {/* Software cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareList.map((sw) => (
              <SoftwareCard key={sw.name} sw={sw} />
            ))}
          </div>

          {/* Version list */}
          <div className="bg-[#20202b] rounded-xl border border-primary/10 overflow-hidden">
            <div className="p-5 border-b border-primary/10 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/10 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-indigo-500 text-lg">description</span>
                </div>
                <h3 className="font-bold text-lg">Paper 版本列表</h3>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="bg-background-dark border border-primary/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary/50 text-slate-300 placeholder-slate-400"
                  placeholder="搜尋版本..."
                  type="text"
                />
                <button className="p-1.5 hover:bg-primary/10 rounded-lg transition-colors text-slate-400">
                  <span className="material-symbols-outlined text-xl">filter_list</span>
                </button>
              </div>
            </div>

            <div className="divide-y divide-primary/5">
              {versions.map((v) => (
                <div key={v.version} className="p-4 flex items-center justify-between hover:bg-primary/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${v.current ? 'bg-emerald-500' : 'bg-slate-600'}`} />
                    <div>
                      <div className="font-mono font-bold text-sm">{v.version}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {v.date}{v.note && ` • ${v.note}`}
                      </div>
                    </div>
                  </div>
                  {v.current ? (
                    <button className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 rounded text-xs font-medium border border-emerald-500/20 cursor-default" disabled>
                      目前安裝
                    </button>
                  ) : (
                    <button className="px-4 py-1.5 bg-primary/20 hover:bg-primary text-white hover:text-white rounded text-xs font-medium border border-primary/10 transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                      安裝
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-primary/10 bg-primary/5 text-center">
              <button className="text-xs text-slate-500 hover:text-primary transition-colors font-medium">載入更多版本...</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SoftwareCard({ sw }) {
  if (sw.installed) {
    return (
      <div className="bg-[#20202b] rounded-xl p-5 border-2 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
          已安裝
        </div>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${sw.iconBg} rounded-lg flex items-center justify-center`}>{sw.icon}</div>
          <span className="material-symbols-outlined text-emerald-500">check_circle</span>
        </div>
        <h3 className="font-bold text-lg mb-1 text-emerald-500">{sw.name}</h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-2">{sw.desc}</p>
        <div className="flex gap-2">
          {sw.tags.map((tag) => (
            <span key={tag.label} className={`px-2 py-1 text-[10px] rounded border ${tag.color || 'bg-slate-800 text-slate-500 border-slate-700'}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#20202b] rounded-xl p-5 border border-primary/10 hover:border-primary/40 transition-all cursor-pointer group relative overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${sw.iconBg} rounded-lg flex items-center justify-center`}>{sw.icon}</div>
        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
      </div>
      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{sw.name}</h3>
      <p className="text-xs text-slate-400 mb-4 line-clamp-2">{sw.desc}</p>
      <div className="flex gap-2">
        {sw.tags.map((tag) => (
          <span key={tag.label} className={`px-2 py-1 text-[10px] rounded border ${tag.color || 'bg-slate-800 text-slate-500 border-slate-700'}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
