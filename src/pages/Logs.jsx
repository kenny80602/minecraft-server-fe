export default function Logs() {
  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <h2 className="text-2xl font-bold text-white">伺服器紀錄</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/20 text-white rounded-lg hover:bg-primary/30 transition-all border border-primary/10">
            <span className="material-symbols-outlined text-[18px]">share</span>
            分享
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">download</span>
            下載
          </button>
          <div className="w-[1px] h-6 bg-slate-700 mx-1" />
          <button className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="清空紀錄">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-hidden bg-background-dark">
        <div className="h-full w-full bg-terminal-dark rounded-xl border border-primary/20 shadow-2xl flex flex-col overflow-hidden">
          {/* Terminal title bar */}
          <div className="bg-sidebar-dark/80 px-4 py-2 border-b border-primary/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 ml-3 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                server_log_latest.txt
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-emerald-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE UPDATING
              </span>
            </div>
          </div>

          {/* Log area */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed log-scroll">
            <div className="space-y-0.5">
              <LogLine time="12:00:01" level="INFO" text="[Server] Starting version 1.20.1 (Paper-MC)" />
              <LogLine time="12:00:02" level="INFO" text="[Server] Loading java version 17.0.8" />
              <LogLine time="12:00:05" level="INFO" text="[Server] Default game type: SURVIVAL" />
              <LogLine time="12:00:10" level="WARN" text="[Plugins] Update available for EssentialsX (v2.20.1 → v2.21.0)" />
              <LogLine time="12:00:15" level="INFO" text='[Server] Preparing level "world" (Seed: 48392019485)' />
              <LogLine time="12:00:22" level="INFO" text="[WorldEdit] WorldEdit v7.2.15 enabled." />
              <LogLine time="12:00:45" level="ERROR" text="[Auth] Failed to connect to remote database (MySQL: Connection Timeout)" />
              <LogLine time="12:01:00" level="INFO" text='[Server] Done (55.2s)! For help, type "help"' />
              <LogLine time="12:05:22" level="INFO" text="[Player] user123 joined the game from 192.168.1.1" />
              <LogLine time="12:10:05" level="INFO" text="[Server] Saving chunks for level 'world_the_end'" />
              <LogLine time="12:10:06" level="INFO" text="[Server] Saving chunks for level 'world_nether'" />
              <LogLine time="12:15:00" level="DEBUG" text="Garbage Collector executed: freed 450MB RAM" />
              <LogLine time="12:18:44" level="WARN" text="[Server] Can't keep up! Is the server overloaded? Running 500ms behind." />
              <LogLine time="12:20:12" level="INFO" text="[Player] Neko_San joined the game" />
              <LogLine time="12:20:15" level="INFO" text="[Neko_San] Hello everyone!" />
              <LogLine time="12:25:30" level="SUCCESS" text="Checking for updates... All plugins are up to date." />
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

const levelStyles = {
  INFO:    { badge: 'text-emerald-500', text: 'text-slate-300' },
  WARN:    { badge: 'text-amber-500', text: 'text-slate-300' },
  ERROR:   { badge: 'text-red-500', text: 'text-red-400/90' },
  DEBUG:   { badge: 'text-slate-400', text: 'text-slate-400', row: 'italic opacity-60' },
  SUCCESS: { badge: 'text-emerald-500', text: 'text-slate-300', row: 'border-l-2 border-emerald-500 bg-emerald-500/5' },
};

function LogLine({ time, level, text }) {
  const style = levelStyles[level] || levelStyles.INFO;
  const displayLevel = level === 'SUCCESS' ? 'INFO' : level;

  return (
    <div className={`flex gap-4 group hover:bg-primary/5 rounded px-2 transition-colors ${style.row || ''}`}>
      <span className="text-slate-600 shrink-0 select-none">{time}</span>
      <span className={`${style.badge} font-bold shrink-0`}>[{displayLevel}]</span>
      <span className={style.text}>{text}</span>
    </div>
  );
}
