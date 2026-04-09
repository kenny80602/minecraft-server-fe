const savedWorlds = [
  {
    name: 'world_nether',
    size: '450 MB',
    lastPlayed: 'Last played: 2 days ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtefFwRSDFOkU2s-3qjfzVK1-_roEAyhy3HwCz7ebzn-XxlW48B6y4xP39t0VgKz8k1ZHcYihTxyqgQrq0NXGsP6mMNyAP3PSFqvHqfCuDSsQd6MyThBpmnjgt-wKK4GYixPqm6gC--4vcLHuk25BEK7j8woCsKsQI0-MFCAcsWA4h4BA7a-av1Ez_ZL3VNP-F7o_TNPZkd0U1-0Eu3TOAEjrp9Vjqu2SgO3huTZVXKh947xBajn3z5i6W-wYXdRAadLAPKS17xk0',
    action: 'Load',
  },
  {
    name: 'world_the_end',
    size: '120 MB',
    lastPlayed: 'Last played: 1 week ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtbuSIxGgHXxb5zNMd88M3wUf4dkZWg7BxZKpx9idd8jJ2MDjCSw05JmsY3xaMdN6Puy93DYF9AAb65w6_K-epcRjlm4zcbhLcBZU-mxEPEPv2wbD0GqW-wcGJ3epy-2BnkbHbrYWqUQkyLtHMzyH1QMARZVXR7oqmBXv1xVKSYlp80tCaaW738WayBN0l7FK2Zc7y8I2sF9bqD96cBbX3wGhVwoEVf1fBn04iijwetXsI1X028IP4jGYhwkvIhrbKLZYdgW2LxwA',
    action: 'Load',
  },
  {
    name: 'Creative_Flat',
    size: '850 MB',
    lastPlayed: 'Last played: 1 month ago',
    icon: 'sports_esports',
    action: 'Load',
  },
  {
    name: 'Backup_2023_10_01',
    size: '2.1 GB',
    lastPlayed: 'Auto-backup archive',
    icon: 'history',
    action: 'Restore',
  },
];

export default function Worlds() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">世界管理</h2>
          <p className="text-xs text-slate-400 mt-1">管理伺服器地圖與存檔</p>
        </div>
        <div className="flex items-center gap-3">
          <HeaderStat label="儲存空間" value="12.5 GB / 50 GB" icon="hard_drive" iconColor="text-primary/50" />
          <HeaderStat label="活躍玩家" value="12 Online" icon="group" iconColor="text-emerald-500/50" />
          <HeaderStat label="世界總數" value="8 Worlds" icon="public" iconColor="text-amber-500/50" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 relative">
        {/* FAB */}
        <button className="fixed bottom-10 right-10 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group">
          <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">add</span>
        </button>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Active world */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                當前運作世界
              </h3>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded border border-emerald-500/20 font-medium">Running</span>
            </div>
            <div className="bg-[#1f1f29] rounded-xl border border-primary/10 overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="w-full md:w-1/3 h-48 md:h-auto bg-slate-800 relative group overflow-hidden">
                <img
                  alt="Active World"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB10xvlT9GfR_9ZApoJD9SbJD-vu3WAv3CJptjMS1rvnPka8T6o06y1tEK0DAThKec4ac8z6Hln2vulL495zTflG8m6nm7UKLaXMMIprY-OIDB8UI04GObHved1E7wU0qlNu3dyJ6i7pMHDagjOoCi5DYnqwNk1WIR6dpJEDyy_UiIbrExhVny5Q9L_wESp2VtnuvrMTG9ArFWbGHL9k7ONVqCGbdIeNWKfzzBg6JUbjJHB8kAkHLiWFA2X0Ty82g7wW3GQCLDtdGE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-lg drop-shadow-md">Survival_Season_5</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-100">Survival_Season_5</h4>
                      <p className="text-slate-500 text-sm mt-1">Created on Oct 24, 2023 &bull; 3.2 GB</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-600 hover:text-white cursor-pointer p-1 hover:bg-white/10 rounded">edit</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <InfoCell label="Seed" value="849204918239012" mono />
                    <InfoCell label="Generator" value="Default (1.20.2)" />
                    <InfoCell label="Difficulty" value="Hard" />
                    <InfoCell label="Last Backup" value="2 hours ago" />
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="flex flex-wrap gap-3">
                    <button className="flex-1 bg-primary text-white py-2 px-3 rounded-lg font-medium hover:bg-primary/80 transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                      <span className="material-symbols-outlined text-base">download</span>
                      下載世界檔
                    </button>
                    <ActionBtn icon="folder" label="檔案" />
                    <ActionBtn icon="backup" label="立即備份" />
                    <ActionBtn icon="settings" label="選項" />
                    <button className="w-10 flex-none py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg border border-red-500/10 transition-colors flex items-center justify-center" title="Reset World">
                      <span className="material-symbols-outlined text-lg">restart_alt</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Saved worlds */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">folder_open</span>
                已儲存的世界與備份
              </h3>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">view_module</span>
                </button>
                <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">view_list</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {savedWorlds.map((world) => (
                <WorldCard key={world.name} world={world} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function HeaderStat({ label, value, icon, iconColor }) {
  return (
    <div className="bg-[#1f1f29] px-4 py-2 rounded-lg flex items-center gap-3 border border-primary/10">
      <div className="flex flex-col">
        <span className="text-[10px] text-slate-500 uppercase font-semibold">{label}</span>
        <span className="text-sm font-bold text-slate-200">{value}</span>
      </div>
      <span className={`material-symbols-outlined ${iconColor} text-2xl`}>{icon}</span>
    </div>
  );
}

function InfoCell({ label, value, mono }) {
  return (
    <div className="bg-background-dark/50 p-3 rounded-lg border border-white/5">
      <span className="text-xs text-slate-500 block mb-1">{label}</span>
      {mono ? (
        <code className="text-sm font-mono text-emerald-400">{value}</code>
      ) : (
        <span className="text-sm text-slate-300">{value}</span>
      )}
    </div>
  );
}

function ActionBtn({ icon, label }) {
  return (
    <button className="flex-1 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-white/5 text-sm whitespace-nowrap">
      <span className="material-symbols-outlined text-base">{icon}</span>
      {label}
    </button>
  );
}

function WorldCard({ world }) {
  const isRestore = world.action === 'Restore';

  return (
    <div className="bg-[#1f1f29] rounded-xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all group">
      <div className="h-32 bg-slate-800 relative overflow-hidden">
        {world.image ? (
          <img alt={world.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity" src={world.image} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-slate-600">{world.icon}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-0.5 rounded text-xs text-white backdrop-blur-sm">{world.size}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-slate-200 text-sm truncate">{world.name}</h4>
          <span className="material-symbols-outlined text-slate-500 text-lg cursor-pointer">more_vert</span>
        </div>
        <p className="text-xs text-slate-500 mb-4">{world.lastPlayed}</p>
        <div className="flex gap-1.5 items-center">
          <button className={`flex-1 py-1.5 text-xs rounded transition-colors ${
            isRestore
              ? 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20'
              : 'bg-primary/10 text-indigo-300 hover:bg-primary/20'
          }`}>
            {world.action}
          </button>
          {['folder', 'settings', 'download'].map((icon) => (
            <button key={icon} className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors" title={icon}>
              <span className="material-symbols-outlined text-base">{icon}</span>
            </button>
          ))}
          <button className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors" title="Delete">
            <span className="material-symbols-outlined text-base">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
