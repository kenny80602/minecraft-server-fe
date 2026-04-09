const players = [
  { name: 'Neko_Chan_01', uuid: '0b4829a1-5d9e-4c21-b3f8-882d45a99a2f', joined: '2023-10-15', status: 'online', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz6aCDCPoZWmRdZOFFa_W4uj6YOlM8dy2LMSG5fkla6QBL9sLjnf-r2d6WKVKfmAq9qfsotx9BfhfoN1ITmtZiGOGoOLWNikM1UvNN7_C4ul_KJIARixEMRplw4Ro-xcc9JlaGXbworhPyB8R34eSSmU9u2QMm9bcbFMy8EGnqvKd7uirQKEzEi-zcCuWBbAvmvYBzbb8DzvcNwuNZeipujBl3pI0heNKhvu7tUHHSTkFiX0TNspDm1WJdADf3L90vKQiid6Jf7hk' },
  { name: 'Steve_Jobs', uuid: '8f21a5b2-1c3d-4e5f-9a0b-11c2d3e4f5g6', joined: '2023-11-02', status: 'offline', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuRrqxXvoqB7QTJaNzeZ3WlPMu2ez_mGokRFTebxX2y7QeAeomxHHb_5mKYy_ASN-NBsNZHRNwiu-XDfMzW-pqLakkQoUDO8_DTZBzTtIlYcOSVhf1al-nQY8myftYrIIaGmOZ5IrAEpdLRpPJ42DJu7AgXyS5wV5eL7n86GTnn0HrV9xpfyYz86I-oVcfSxZ5cOKKndMgzhpbUGPKFHSFfVK9ufQpDgOtm5ZaZXi1-2yxGHDvd86e94_v9jP2ZQaoEhip0F4GbUE' },
  { name: 'Alex_Craft', uuid: 'c73d9e1a-2b4f-4d5c-8e9a-11b2c3d4e5f6', joined: '2023-09-20', status: 'banned', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwty9ov7FGMy6G5nYSTIFiF362Mxg3YLuBvXKUYxBkqWxo8Cm--qW4M7GkIUxSTazglzEs0Uo_a2QaMz2OSB6HAv_CV5noiFZjboSPsHwDoeyYxRJ3hXLePbyfubI_LEaZErjkcJ4DMSPxBf0tFtDxOqWpZZY-FCo3M_V_Bx265shblOZgiJrHGhflYeHLIk1eoMsxka5114ilFXXBww1gnttXgD7wBMx4IX0BF23qXWEFjHKtQ34WyVpwYsVXnC3a7hNDBnopNW0' },
  { name: 'Builder_Bob', uuid: 'e42f1a3b-5c6d-7e8f-9a0b-1c2d3e4f5g6h', joined: '2023-12-01', status: 'online', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpBDdpcD6bY39sYYABcVdYj2MyTtmlUErfu2S2SolMKLdnCHiU2FUDu8LpElqKH_0qYBRyyUqCHVL2Mlm_ltsmHtXgbSmEoP41XJTlYsAK0ZVqtnp_xy3qBJ5G9f1kTGtto7F3VQDoMXcuWn7n5Xsrl42IN9hkHV9SO7bSBiVoEkoYbOhz2G1U3ktymRle2o8_eBT03eRw3A05H8GkukN_kn95wwGz-DGZGOthHqVHKOsS9aF7AmBq8wvLQDAeoOuDsYqnWWqJ-LE' },
  { name: 'Miner_Pro', uuid: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', joined: '2023-11-20', status: 'offline', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLlGKFKkKepyZ5qPCi_21PDMmo4eMnqvUYiVtQQjYPaWdDQp3-gXGLBok1HEdyGpkzOkXlMIupZSx6W1wnTgwj0hfMaPC-NiCHqIlM3qoxwmkyyIp1oyYFlMBq-XIP9jS_--9ZTotVAf-GKfLLLU2QaSyWbPCoewlOHrD449jKllsqe-McLZQ3oUzAIuYm1ynvzKdqPv9B3Mb6UCUNDlztf1BnWKCEe1ExOc3C6BJCPJcpyHD6yXP_3nm2ytv4JXcRWFkY8ugTE8' },
];

const statusConfig = {
  online:  { label: '在線', dot: 'bg-emerald-500', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  offline: { label: '離線', dot: 'bg-slate-400',    badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
  banned:  { label: '封禁', dot: 'bg-red-500',      badge: 'bg-red-500/10 text-red-400 border-red-500/20' },
};

export default function Players() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <h2 className="text-2xl font-bold text-white">玩家管理</h2>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-2 border border-primary/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Survival Server 01</span>
          </div>
        </div>
      </header>

      <div className="flex-1 p-8 overflow-y-auto bg-background-dark">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon="public" iconColor="text-emerald-500" title="在線玩家" value="12" sub="/ 50" bar={24} barColor="bg-emerald-500" />
            <StatCard icon="list_alt" iconColor="text-blue-500" title="白名單總數" value="128" tag="白名單功能: 開啟" tagColor="text-blue-500 bg-blue-500/10 border-blue-500/20" />
            <StatCard icon="block" iconColor="text-red-500" title="封禁玩家" value="5" note="最近封禁: 2 小時前" />
          </div>

          {/* Player table */}
          <div className="bg-[#21212b] rounded-xl border border-primary/10 shadow-lg flex flex-col overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative group w-full sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                  <input
                    className="w-full bg-background-dark border border-slate-700 text-slate-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-600"
                    placeholder="搜尋玩家名稱或 UUID..."
                    type="text"
                  />
                </div>
                <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg border border-slate-700 text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  新增玩家
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-dark/50 border-b border-primary/10">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-16">#</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">玩家名稱</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">UUID</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">初次加入</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">狀態</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10 text-sm">
                  {players.map((player) => (
                    <PlayerRow key={player.uuid} player={player} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-primary/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">顯示 1 到 5 筆，共 133 筆</span>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded hover:bg-white/5 disabled:opacity-50 text-slate-500" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-8 h-8 rounded bg-primary text-white text-xs font-medium flex items-center justify-center">1</button>
                {[2, 3].map((n) => (
                  <button key={n} className="w-8 h-8 rounded hover:bg-white/5 text-slate-400 text-xs font-medium flex items-center justify-center transition-colors">{n}</button>
                ))}
                <span className="text-slate-400 text-xs px-1">...</span>
                <button className="w-8 h-8 rounded hover:bg-white/5 text-slate-400 text-xs font-medium flex items-center justify-center transition-colors">27</button>
                <button className="p-1 rounded hover:bg-white/5 text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-12 px-6 border-t border-primary/10 bg-background-dark/80 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium text-slate-500 uppercase">1 伺服器在線</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-[11px] font-medium text-slate-500 uppercase">2 伺服器已停止</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500 uppercase">
            總資源使用: <span className="text-slate-300 font-bold ml-1">2.4 / 24.0 GB RAM</span>
          </span>
        </div>
      </footer>
    </>
  );
}

function StatCard({ icon, iconColor, title, value, sub, bar, barColor, tag, tagColor, note }) {
  return (
    <div className="bg-[#21212b] rounded-xl p-6 border border-primary/10 shadow-sm relative overflow-hidden group">
      <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className={`material-symbols-outlined text-8xl ${iconColor}`}>{icon}</span>
      </div>
      <div className="relative z-10">
        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{value}</span>
          {sub && <span className="text-slate-500 text-lg">{sub}</span>}
        </div>
        <div className="mt-4">
          {bar !== undefined && (
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full ${barColor} rounded-full`} style={{ width: `${bar}%` }} />
              </div>
              <span className={`text-xs font-medium ${iconColor}`}>{bar}%</span>
            </div>
          )}
          {tag && (
            <span className={`px-2 py-0.5 rounded text-xs font-medium border ${tagColor}`}>{tag}</span>
          )}
          {note && (
            <span className="text-xs text-slate-400">{note}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ player }) {
  const status = statusConfig[player.status];
  const shortUuid = `${player.uuid.slice(0, 4)}...${player.uuid.slice(-4)}`;

  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="px-6 py-4">
        <div className="w-8 h-8 rounded bg-slate-700 overflow-hidden" style={{ imageRendering: 'pixelated' }}>
          <img alt="avatar" className="w-full h-full object-cover" src={player.avatar} />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="font-semibold text-white">{player.name}</span>
          <span className="text-xs text-slate-400 md:hidden">{shortUuid}</span>
        </div>
      </td>
      <td className="px-6 py-4 hidden md:table-cell font-mono text-xs text-slate-400 select-all">{player.uuid}</td>
      <td className="px-6 py-4 hidden lg:table-cell text-slate-400">{player.joined}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {player.status === 'banned' ? (
            <button className="p-1.5 rounded hover:bg-slate-700 text-slate-400 transition-colors" title="解封">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </button>
          ) : (
            <>
              <button className="p-1.5 rounded hover:bg-slate-700 text-slate-400 transition-colors" title="編輯">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
              <button className="p-1.5 rounded hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors" title={player.status === 'online' ? '踢出' : '封禁'}>
                <span className="material-symbols-outlined text-[18px]">{player.status === 'online' ? 'person_remove' : 'block'}</span>
              </button>
            </>
          )}
          <button className="p-1.5 rounded hover:bg-slate-700 text-slate-400 transition-colors" title="更多">
            <span className="material-symbols-outlined text-[18px]">more_vert</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
