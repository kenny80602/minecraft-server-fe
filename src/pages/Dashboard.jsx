import { useState, useEffect } from 'react';
import { getServerStatus, startServer, stopServer } from '../api/serve';

export default function Dashboard() {
  const [serverRunning, setServerRunning] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServerStatus()
      .then((res) => setServerRunning(res.data?.running ?? false))
      .catch(() => setServerRunning(false));
  }, []);

  const handleToggleServer = async () => {
    setLoading(true);
    try {
      if (serverRunning) {
        await stopServer();
        setServerRunning(false);
      } else {
        await startServer({ versionId: '1.20.1' });
        setServerRunning(true);
      }
    } catch (err) {
      console.error('Failed to toggle server:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between border-b border-primary/10 bg-background-dark/50 backdrop-blur-md z-10 shrink-0">
        <h2 className="text-2xl font-bold text-white">伺服器</h2>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase ${
            serverRunning
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500'
              : 'bg-slate-500/10 border border-slate-500/20 text-slate-400'
          }`}>
            <span className={`w-2 h-2 rounded-full ${serverRunning ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
            {serverRunning ? 'Running' : 'Stopped'}
          </div>
        </div>
      </header>

      <div className="flex-1 p-8 overflow-y-auto bg-background-dark">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Server info card */}
          <div className="bg-sidebar-dark rounded-xl border border-primary/20 p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10" />
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-slate-800 flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-white text-5xl">stadia_controller</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Survival Adventure #1</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-4">
                      <span className="material-symbols-outlined text-[16px]">link</span>
                      survival.neneneko.tw:25565
                      <button className="hover:text-primary transition-colors" title="Copy IP">
                        <span className="material-symbols-outlined text-[14px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  <div className="bg-background-dark/50 rounded-lg p-3 border border-primary/10">
                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Software</span>
                    <span className="text-sm font-medium text-slate-200">Paper</span>
                  </div>
                  <div className="bg-background-dark/50 rounded-lg p-3 border border-primary/10">
                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Version</span>
                    <span className="text-sm font-medium text-slate-200">1.20.1</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
                <button
                  onClick={handleToggleServer}
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-6 py-2.5 text-white text-sm font-bold rounded-lg transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    serverRunning
                      ? 'bg-red-500 hover:bg-red-600 hover:shadow-red-500/20'
                      : 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/20'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {serverRunning ? 'stop_circle' : 'play_circle'}
                  </span>
                  {loading ? (serverRunning ? 'Stopping...' : 'Starting...') : (serverRunning ? 'Stop' : 'Start')}
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-bold rounded-lg transition-all shadow-lg active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  Start Console
                </button>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CPU */}
            <div className="bg-sidebar-dark rounded-xl border border-primary/20 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">memory</span>
                  <h4 className="text-lg font-bold text-white">CPU Usage</h4>
                </div>
                <span className="text-2xl font-mono font-bold text-white">12%</span>
              </div>
              <div className="h-32 w-full bg-background-dark/50 rounded-lg relative overflow-hidden flex items-end justify-between px-1 gap-1">
                {[20, 35, 45, 30, 25, 40, 55, 45, 35, 25, 15, 12].map((h, i) => (
                  <div key={i} className="w-full bg-primary/20 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* RAM */}
            <div className="bg-sidebar-dark rounded-xl border border-primary/20 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500">memory_alt</span>
                  <h4 className="text-lg font-bold text-white">RAM Usage</h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-mono font-bold text-emerald-500">2.4 GB</span>
                  <span className="text-xs text-slate-500 block">of 8.0 GB</span>
                </div>
              </div>
              <div className="h-32 w-full bg-background-dark/50 rounded-lg relative overflow-hidden flex items-end justify-between px-1 gap-1">
                {[28, 29, 30, 30, 31, 30, 32, 31, 30, 30, 29, 30].map((h, i) => (
                  <div key={i} className="w-full bg-emerald-500/20 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
