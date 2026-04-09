import { useState } from 'react';

const initialFiles = [
  { name: '..', type: 'parent' },
  { name: 'Essentials', type: 'folder', size: '-', modified: '2 分鐘前', icon: 'folder', iconColor: 'text-yellow-500/80' },
  { name: 'WorldEdit', type: 'folder', size: '-', modified: '1 小時前', icon: 'folder', iconColor: 'text-yellow-500/80' },
  { name: 'EssentialsX-2.20.1.jar', type: 'file', size: '2.4 MB', modified: '2 天前', icon: 'extension', iconColor: 'text-indigo-400' },
  { name: 'config.yml', type: 'file', size: '12 KB', modified: '5 分鐘前', icon: 'description', iconColor: 'text-slate-400' },
  { name: 'latest.log', type: 'file', size: '45 KB', modified: '剛剛', icon: 'text_snippet', iconColor: 'text-slate-400' },
  { name: 'permissions.json', type: 'file', size: '8 KB', modified: '3 天前', icon: 'data_object', iconColor: 'text-yellow-600/70' },
];

export default function Files() {
  const [selected, setSelected] = useState(new Set());

  const selectableFiles = initialFiles.filter((f) => f.type !== 'parent');

  const toggleSelect = (name) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === selectableFiles.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(selectableFiles.map((f) => f.name)));
    }
  };

  const clearSelection = () => setSelected(new Set());

  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">檔案管理</h2>
          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
            <span className="cursor-pointer hover:text-primary transition-colors">root</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="cursor-pointer hover:text-primary transition-colors font-medium text-slate-300">plugins</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {selected.size > 0 && (
            <div className="flex items-center gap-3 mr-4 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1.5 animate-pulse">
              <span className="text-xs font-semibold text-red-400">已選取 {selected.size} 個項目</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-red-500 text-white rounded hover:bg-red-600 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[16px]">delete</span>
                刪除選取項目
              </button>
              <div className="h-4 w-px bg-red-500/20" />
              <button className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors px-2" onClick={clearSelection}>
                取消
              </button>
            </div>
          )}
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/20 text-white rounded-lg hover:bg-primary/30 transition-all border border-primary/10">
            <span className="material-symbols-outlined text-[18px]">upload</span>
            上傳
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">create_new_folder</span>
            新資料夾
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">note_add</span>
            新檔案
          </button>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-hidden bg-background-dark flex flex-col">
        <div className="bg-sidebar-dark rounded-xl border border-primary/20 shadow-xl flex-1 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-primary/10 bg-primary/5 text-xs font-semibold text-slate-500 uppercase tracking-wider items-center">
            <div className="col-span-6 pl-2 flex items-center gap-4">
              <input
                type="checkbox"
                className="rounded border-slate-600 bg-transparent text-[#4d4dff] focus:ring-[#4d4dff] focus:ring-offset-0 w-4 h-4 cursor-pointer"
                checked={selected.size === selectableFiles.length && selectableFiles.length > 0}
                onChange={toggleAll}
              />
              <span>名稱</span>
            </div>
            <div className="col-span-2">大小</div>
            <div className="col-span-3">最後修改</div>
            <div className="col-span-1 text-right pr-2">動作</div>
          </div>

          {/* File list */}
          <div className="flex-1 overflow-y-auto">
            {initialFiles.map((file) => {
              if (file.type === 'parent') {
                return (
                  <div key={file.name} className="grid grid-cols-12 gap-4 p-3 border-b border-primary/5 hover:bg-primary/5 transition-colors items-center cursor-pointer group">
                    <div className="col-span-6 flex items-center gap-4 pl-2">
                      <div className="w-4 h-4" />
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">folder_open</span>
                        <span className="text-sm font-medium text-slate-400">..</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-sm text-slate-500">-</div>
                    <div className="col-span-3 text-sm text-slate-500">-</div>
                    <div className="col-span-1" />
                  </div>
                );
              }

              const isSelected = selected.has(file.name);
              return (
                <div
                  key={file.name}
                  className={`grid grid-cols-12 gap-4 p-3 border-b border-primary/5 transition-colors items-center cursor-pointer group ${
                    isSelected ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-primary/5'
                  }`}
                >
                  <div className="col-span-6 flex items-center gap-4 pl-2">
                    <input
                      type="checkbox"
                      className="rounded border-slate-600 bg-transparent text-[#4d4dff] focus:ring-[#4d4dff] focus:ring-offset-0 w-4 h-4 cursor-pointer"
                      checked={isSelected}
                      onChange={() => toggleSelect(file.name)}
                    />
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${file.iconColor}`}>{file.icon}</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{file.name}</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm text-slate-500">{file.size}</div>
                  <div className="col-span-3 text-sm text-slate-500">{file.modified}</div>
                  <div className={`col-span-1 flex justify-end gap-2 pr-2 ${isSelected ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                    <button className="p-1 hover:bg-primary/10 hover:text-primary rounded transition-colors text-slate-400" title="下載">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                    <button className="p-1 hover:bg-red-500/10 hover:text-red-500 rounded transition-colors text-slate-400" title="刪除">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upload area */}
          <div className="p-6 border-t border-primary/10 bg-primary/5">
            <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all hover:border-primary/60 hover:bg-primary/5 cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">點擊或拖曳檔案至此上傳</h3>
              <p className="text-xs text-slate-400">最大單檔大小: 100 MB</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-12 px-6 border-t border-primary/10 bg-background-dark/80 flex items-center justify-between shrink-0">
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
