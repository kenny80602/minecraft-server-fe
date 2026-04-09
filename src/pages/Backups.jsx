const backupRecords = [
  { name: 'backup-2023-10-27-0400.tar.gz', size: '4.2 GB', date: '2023/10/27 04:00' },
  { name: 'backup-pre-update-1.20.tar.gz', size: '4.1 GB', date: '2023/10/26 15:30' },
  { name: 'backup-2023-10-26-0400.tar.gz', size: '0 KB', date: '2023/10/26 04:00' },
  { name: 'backup-2023-10-25-0400.tar.gz', size: '4.1 GB', date: '2023/10/25 04:00' },
];

export default function Backups() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <h2 className="text-2xl font-bold text-white">備份管理</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/20">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            建立備份
          </button>
        </div>
      </header>

      <div className="flex-1 p-8 overflow-y-auto bg-background-dark">
        <div className="flex flex-col gap-6">
          {/* Top cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Storage usage */}
            <div className="bg-sidebar-dark rounded-xl border border-primary/10 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <span className="material-symbols-outlined">cloud</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100">備份空間使用量</h3>
                      <p className="text-xs text-slate-500">總配額: 100 GB</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/5 text-slate-300 rounded-lg border border-transparent hover:border-primary/30 transition-all">
                    <span className="material-symbols-outlined text-[16px]">hard_drive</span>
                    <span>本地儲存</span>
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-3xl font-bold text-white">45.2 GB</span>
                  <span className="text-xs font-medium text-slate-500">45.2% used</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full relative" style={{ width: '45.2%' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Auto backup */}
            <div className="bg-sidebar-dark rounded-xl border border-primary/10 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100">自動備份排程</h3>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer group">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500" />
                    <span className="ml-3 text-sm font-medium text-slate-300 group-hover:text-emerald-500 transition-colors">已啟用</span>
                  </label>
                </div>
              </div>
              <div className="mt-auto border-t border-primary/5 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                  <span>系統將自動在雲端建立副本</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backup records table */}
          <div className="bg-sidebar-dark rounded-xl border border-primary/10 shadow-sm overflow-hidden flex-1">
            <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between">
              <h3 className="font-semibold text-slate-100">備份紀錄</h3>
              <div className="flex gap-2">
                <input
                  className="px-3 py-1.5 text-sm bg-background-dark border border-transparent focus:border-primary/50 rounded-md text-slate-200 outline-none w-48 placeholder:text-slate-600"
                  placeholder="搜尋備份..."
                  type="text"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-xs uppercase text-slate-400 border-b border-primary/10">
                    <th className="px-6 py-3 font-medium">備份名稱</th>
                    <th className="px-6 py-3 font-medium">大小</th>
                    <th className="px-6 py-3 font-medium">日期</th>
                    <th className="px-6 py-3 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10 text-sm">
                  {backupRecords.map((backup) => (
                    <tr key={backup.name} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-200 flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                        {backup.name}
                      </td>
                      <td className="px-6 py-4 text-slate-400">{backup.size}</td>
                      <td className="px-6 py-4 text-slate-400">{backup.date}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="flex items-center justify-center w-8 h-8 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-500 rounded-lg transition-colors" title="還原">
                            <span className="material-symbols-outlined text-[20px]">settings_backup_restore</span>
                          </button>
                          <button className="flex items-center justify-center w-8 h-8 hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-lg transition-colors" title="刪除">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
