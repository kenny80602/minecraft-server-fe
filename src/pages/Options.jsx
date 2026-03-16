export default function Options() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">伺服器選項</h2>
          <p className="text-sm text-slate-500 mt-1">配置您的 Minecraft 伺服器核心設定</p>
        </div>
      </header>

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Game settings */}
          <div className="bg-card-dark rounded-xl border border-primary/10 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 material-symbols-outlined">sports_esports</span>
              <h3 className="text-lg font-semibold text-white">遊戲設定</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">遊戲模式</label>
                <div className="relative">
                  <select className="w-full bg-input-dark border border-primary/20 rounded-lg py-2.5 px-3 text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none">
                    <option value="survival">生存模式 (Survival)</option>
                    <option value="creative">創造模式 (Creative)</option>
                    <option value="adventure">冒險模式 (Adventure)</option>
                    <option value="spectator">旁觀模式 (Spectator)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">難度</label>
                <div className="relative">
                  <select className="w-full bg-input-dark border border-primary/20 rounded-lg py-2.5 px-3 text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none">
                    <option value="peaceful">和平 (Peaceful)</option>
                    <option value="easy">簡單 (Easy)</option>
                    <option value="normal">普通 (Normal)</option>
                    <option value="hard">困難 (Hard)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>
              <ToggleItem id="pvp" label="玩家對戰 (PvP)" desc="允許玩家互相攻擊" defaultChecked />
              <ToggleItem id="cb" label="指令方塊" desc="啟用遊戲內的指令方塊功能" />
            </div>
          </div>

          {/* Access & Security */}
          <div className="bg-card-dark rounded-xl border border-primary/10 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 material-symbols-outlined">security</span>
              <h3 className="text-lg font-semibold text-white">存取與安全</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">最大玩家數</label>
                <input
                  className="w-full bg-input-dark border border-primary/20 rounded-lg py-2.5 px-3 text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-slate-600"
                  type="number"
                  defaultValue={20}
                />
              </div>
              <ToggleItem id="whitelist" label="白名單" desc="僅允許列表中的玩家加入" />
              <ToggleItem id="onlinemode" label="正版驗證 (Online Mode)" desc="驗證玩家是否擁有正版 Minecraft" defaultChecked />
            </div>
          </div>

          {/* World properties */}
          <div className="bg-card-dark rounded-xl border border-primary/10 shadow-lg p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 material-symbols-outlined">public</span>
              <h3 className="text-lg font-semibold text-white">世界屬性</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">伺服器描述 (MOTD)</label>
                <div className="relative">
                  <textarea
                    className="w-full bg-input-dark border border-primary/20 rounded-lg py-3 px-3 text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none font-mono text-sm placeholder-slate-600"
                    rows={3}
                    defaultValue="A Minecraft Server"
                  />
                  <div className="absolute bottom-3 right-3 text-[10px] text-slate-500 bg-black/20 px-1 rounded">Color Codes Supported</div>
                </div>
                <p className="text-xs text-slate-500 mt-2">顯示在多人遊戲伺服器列表中的訊息。</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-slate-400">視距 (View Distance)</label>
                  <span className="text-sm font-bold text-primary-hover bg-primary/20 px-2 py-0.5 rounded">10 Chunks</span>
                </div>
                <div className="relative pt-1">
                  <input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" min={3} max={32} type="range" defaultValue={10} />
                  <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
                    <span>3 (低)</span>
                    <span>10 (標準)</span>
                    <span>32 (極高)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-6">較高的數值會增加伺服器負載。建議設定在 6-10 之間。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-12 px-6 border-t border-primary/10 bg-sidebar-dark flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-slate-400 uppercase">狀態: 在線</span>
          </div>
          <div className="h-3 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500">版本: 1.20.1</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500 uppercase">
            記憶體: <span className="text-slate-300 font-bold ml-1">2.4 / 24.0 GB</span>
          </span>
        </div>
      </footer>
    </>
  );
}

function ToggleItem({ id, label, desc, defaultChecked = false }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="text-sm font-medium text-slate-200">{label}</div>
        <div className="text-xs text-slate-500">{desc}</div>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          defaultChecked={defaultChecked}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-600 left-0 checked:left-6 transition-all duration-300"
          id={id}
          name={id}
          type="checkbox"
        />
        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer" htmlFor={id} />
      </div>
    </div>
  );
}
