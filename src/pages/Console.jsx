export default function Console() {
  return (
    <>
      <header className="h-auto min-h-[5rem] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 gap-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">即時控制台</h2>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Running
            <span className="mx-1 opacity-50">|</span>
            <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-xs">192.168.1.25:25565</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">CPU Usage</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '12.4%' }} />
              </div>
              <span className="font-mono text-sm font-bold text-slate-200">12.4%</span>
            </div>
          </div>
          <div className="flex flex-col items-end border-l border-slate-700 pl-6">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">RAM Usage</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '30%' }} />
              </div>
              <span className="font-mono text-sm font-bold text-slate-200">2.4 GB / 8.0 GB</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-hidden bg-background-dark flex flex-col min-h-0">
        <div className="flex-1 w-full bg-terminal-dark rounded-xl border border-primary/20 shadow-2xl flex flex-col overflow-hidden min-h-0">
          {/* Terminal title bar */}
          <div className="bg-sidebar-dark/80 px-4 py-3 border-b border-primary/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
              </div>
              <span className="text-[12px] font-mono text-slate-400 font-medium">
                user@neneneko-server:~/console
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-slate-400 hover:text-white transition-colors" title="Clear Console">
                <span className="material-symbols-outlined text-[18px]">block</span>
              </button>
              <button className="text-slate-400 hover:text-white transition-colors" title="Download Log">
                <span className="material-symbols-outlined text-[18px]">download</span>
              </button>
            </div>
          </div>

          {/* Log area */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed log-scroll bg-terminal-dark text-slate-300">
            <div className="space-y-0.5">
              <LogLine time="12:00:01" level="INFO" text="[Server] Starting version 1.20.1 (Paper-MC)" />
              <LogLine time="12:00:02" level="INFO" text="[Server] Loading java version 17.0.8" />
              <LogLine time="12:00:05" level="INFO" text="[Server] Default game type: SURVIVAL" />
              <LogLine time="12:00:10" level="WARN" text="[Plugins] Update available for EssentialsX (v2.20.1 → v2.21.0)" />
              <LogLine time="12:00:15" level="INFO" text="[Server] Preparing level &quot;world&quot; (Seed: 48392019485)" />
              <LogLine time="12:00:22" level="INFO" text="[WorldEdit] WorldEdit v7.2.15 enabled." />
              <LogLine time="12:00:45" level="ERROR" text="[Auth] Failed to connect to remote database (MySQL: Connection Timeout)" />
              <LogLine time="12:01:00" level="INFO" text='[Server] Done (55.2s)! For help, type "help"' />
              <LogLine time="12:05:22" level="INFO" text="[Player] user123 joined the game from 192.168.1.1" />
              <LogLine time="12:10:05" level="INFO" text="[Server] Saving chunks for level 'world_the_end'" />
              <LogLine time="12:10:06" level="INFO" text="[Server] Saving chunks for level 'world_nether'" />
              <LogLine time="12:15:00" level="DEBUG" text="Garbage Collector executed: freed 450MB RAM" />
              <LogLine time="12:18:44" level="WARN" text="[Server] Can't keep up! Is the server overloaded? Running 500ms behind." />
              <LogLine time="12:20:12" level="INFO" text="[Player] Neko_San joined the game" />
              <LogLine time="12:20:15" level="CHAT" text="<Neko_San> Hello everyone!" />
              <LogLine time="12:25:30" level="SUCCESS" text="Checking for updates... All plugins are up to date." />
              <div className="flex gap-3 px-2 pt-2 animate-pulse">
                <span className="text-slate-600 shrink-0 select-none w-16" />
                <span className="text-slate-500 shrink-0">_</span>
              </div>
            </div>
          </div>

          {/* Command input */}
          <div className="shrink-0 p-3 bg-sidebar-dark border-t border-primary/20">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-slate-500 select-none pointer-events-none">&gt;</span>
              <input
                className="w-full bg-black/30 border border-primary/20 rounded-lg py-2.5 pl-8 pr-20 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-slate-600 font-mono transition-all"
                placeholder="Type a command..."
                type="text"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary/20 hover:bg-primary/40 text-primary-200 hover:text-white px-3 text-xs font-bold rounded uppercase tracking-wider transition-colors border border-primary/20">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const levelStyles = {
  INFO:    { badge: 'text-emerald-500', text: 'text-slate-300' },
  WARN:    { badge: 'text-amber-500',   text: 'text-amber-200' },
  ERROR:   { badge: 'text-red-500',     text: 'text-red-400' },
  DEBUG:   { badge: 'text-blue-400',    text: 'text-slate-400', row: 'italic opacity-60' },
  CHAT:    { badge: 'text-emerald-500', text: 'text-white font-medium' },
  SUCCESS: { badge: 'text-emerald-500', text: 'text-emerald-200', row: 'border-l-2 border-emerald-500 bg-emerald-500/10' },
};

function LogLine({ time, level, text }) {
  const style = levelStyles[level] || levelStyles.INFO;
  const displayLevel = level === 'CHAT' || level === 'SUCCESS' ? 'INFO' : level;

  return (
    <div className={`flex gap-3 hover:bg-white/5 rounded px-2 transition-colors ${style.row || ''}`}>
      <span className="text-slate-600 shrink-0 select-none w-16">{time}</span>
      <span className={`${style.badge} font-bold shrink-0`}>[{displayLevel}]</span>
      <span className={style.text}>{text}</span>
    </div>
  );
}
