import React, { useState } from 'react';
import { CATEGORIES, LINKS } from '../constants';
import { Category } from '../types';
import { LogOut, ExternalLink, Search, Menu, X, ChevronRight } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = LINKS.filter(link => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          link.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === Category.DASHBOARD) {
      return matchesSearch;
    }
    return link.category === activeCategory && matchesSearch;
  });

  const getCategoryTitle = (catId: Category) => {
    return CATEGORIES.find(c => c.id === catId)?.label || 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-800/50 border-b border-slate-700 p-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-30">
        <span className="font-bold text-lg tracking-wider text-slate-100">NEXUS</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-blue-500 mb-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-80">System Online</span>
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">Varsendagger</h1>
          <p className="text-xs text-slate-500 mt-1">Central Command Node</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'} />
                {category.label}
                {isActive && <ChevronRight size={14} className="ml-auto opacity-50" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors"
          >
            <LogOut size={16} />
            Disconnect
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none"></div>

        {/* Top Bar */}
        <header className="px-8 py-6 z-10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{getCategoryTitle(activeCategory)}</h2>
            <p className="text-slate-400 text-sm mt-1">
              {activeCategory === Category.DASHBOARD 
                ? `Overviewing ${filteredLinks.length} connected resources` 
                : `${filteredLinks.length} resources available`}
            </p>
          </div>
          
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full leading-5 bg-slate-800/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-12 z-10 scroll-smooth">
          {filteredLinks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    className="group relative bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-slate-600 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 block"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg ${link.bgClass} ${link.colorClass} ring-1 ring-inset ring-white/5`}>
                        <Icon size={24} />
                      </div>
                      <ExternalLink size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-blue-200 transition-colors">{link.title}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{link.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {CATEGORIES.find(c => c.id === link.category)?.label.split(' ')[0]}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-slate-500">
              <div className="bg-slate-800/50 p-4 rounded-full mb-4">
                <Search size={32} className="opacity-50" />
              </div>
              <p>No resources found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};