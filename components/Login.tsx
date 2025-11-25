import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldAlert, Fingerprint } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify specific access key
    if (password === 'Blender2.8') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 transform transition-all">
          <div className="flex flex-col items-center mb-8">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${isFocus ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-400'}`}>
              <Fingerprint size={32} className={isFocus ? 'animate-pulse' : ''} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Varsendagger Nexus</h1>
            <p className="text-slate-400 text-sm mt-2 flex items-center gap-1">
              <ShieldAlert size={14} />
              Secure Environment Access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                className={`block w-full pl-10 pr-3 py-3 border ${error ? 'border-red-500/50 bg-red-500/5' : 'border-slate-600 bg-slate-900/50'} rounded-lg leading-5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-200 sm:text-sm`}
                placeholder="Enter Access Key"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs text-center animate-shake">
                Access Denied. Please verify credentials.
              </p>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              Authenticate
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-between text-xs text-slate-500">
            <span>ID: VD-NODE-01</span>
            <span>STATUS: SECURE</span>
          </div>
        </div>
        
        <p className="text-center text-slate-600 text-xs mt-6">
          Authorized personnel only. All activities are monitored.
        </p>
      </div>
    </div>
  );
};