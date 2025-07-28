'use client'
import { useState, ReactNode, useEffect } from 'react';
import { 
  FaProjectDiagram, 
  FaEnvelope, 
  FaHome, 
  FaBars,
  FaTimes,
  FaBell,
  FaSearch,
  FaUser,
  FaCog,
  FaChevronDown,
  FaExpand,
  FaCompress,
  FaMoon,
  FaSun,
  FaFilter,
  FaSort,
  FaChartLine,
  FaUsers,
  FaDownload
} from 'react-icons/fa';
import MyLogoutButton from '../components/LogoutBtn';


// Mock Link component since we don't have Next.js
const Link = ({ href, children, className, onClick }: { href: string, children: ReactNode, className?: string, onClick?: () => void }) => (
  <a href={href} className={className} onClick={onClick}>{children}</a>
);

const navItems = [
  { href: '/admin/dashboard', icon: FaHome, label: 'Dashboard', badge: null },
  { href: '/admin/dashboard/projects', icon: FaProjectDiagram, label: 'Projects', badge: '12' },
  { href: '/admin/dashboard/messages', icon: FaEnvelope, label: 'Messages', badge: '5' },
  { href: '/admin/dashboard/notifications', icon: FaChartLine, label: 'Notifications', badge: null },
];

const quickActions = [
  { label: 'New Project', icon: FaProjectDiagram, color: 'blue' },
  { label: 'Invite User', icon: FaUsers, color: 'green' },
  { label: 'Export Data', icon: FaDownload, color: 'purple' },
  { label: 'View Analytics', icon: FaChartLine, color: 'orange' },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/admin/dashboard');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'New project created', time: '5 min ago', type: 'success' },
    { id: 2, title: 'User invitation sent', time: '10 min ago', type: 'info' },
    { id: 3, title: 'System backup completed', time: '1 hour ago', type: 'success' },
  ]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.user-menu')) setShowUserMenu(false);
      if (!target.closest('.quick-actions')) setShowQuickActions(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
            onClick={closeMobileMenu}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed top-0 left-0 h-full w-80 bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl 
          border-r border-slate-200/60 dark:border-slate-700/50 z-50 transition-all duration-500 ease-out
          shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20 overflow-y-scroll scroll-smooth
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Sidebar header */}
          <div className="h-20 flex items-center justify-between px-8 border-b border-slate-200/60 dark:border-slate-700/50 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 ring-2 ring-blue-100 dark:ring-blue-400/20">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">Admin Panel</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Control Center</p>
              </div>
            </div>
            
            <button
              onClick={closeMobileMenu}
              className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 lg:hidden transition-all duration-200 hover:scale-105"
            >
              <FaTimes className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="px-6 py-4 border-b border-slate-200/40 dark:border-slate-700/40">
            <div className="relative quick-actions">
              <button
                onClick={() => setShowQuickActions(!showQuickActions)}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Quick Actions</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${showQuickActions ? 'rotate-180' : ''}`} />
              </button>
              
              {showQuickActions && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-700/50 overflow-hidden z-10">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50 dark:hover:from-slate-700/50 dark:hover:to-blue-900/20 transition-all duration-200 text-left group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-${action.color}-500 to-${action.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.href);
                    closeMobileMenu();
                  }}
                  className={`
                    flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-purple-500/10 text-blue-700 dark:text-blue-400 shadow-lg shadow-blue-500/10 border border-blue-200/50 dark:border-blue-500/30 scale-[1.02]' 
                      : 'hover:bg-gradient-to-r hover:from-slate-100/80 hover:via-slate-50/60 hover:to-blue-50/40 dark:hover:from-slate-800/60 dark:hover:via-slate-700/40 dark:hover:to-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-[1.01] hover:shadow-md'
                    }
                  `}
                >
                  {isActive && (
                    <>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl" />
                    </>
                  )}
                  
                  <div className={`relative  ${isActive ? 'text-blue-600 dark:text-blue-400' : 'group-hover:scale-110'} transition-all duration-200`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 flex items-center justify-between relative">
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.badge && (
                      <span className={`
                        px-2 py-1 text-xs font-bold rounded-full min-w-[20px] text-center transition-all duration-200
                        ${isActive 
                          ? 'bg-blue-500 text-white shadow-md' 
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-400'
                        }
                      `}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-6 border-t border-slate-200/60 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/50 to-blue-50/30 dark:from-slate-800/30 dark:to-slate-700/20">
            <div className="mb-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center ring-3 ring-white/50 dark:ring-slate-700/50 shadow-lg">
                  <FaUser className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Admin User</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@company.com</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Online</span>
                  </div>
                </div>
              </div>
            </div>
            <MyLogoutButton />
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:ml-80">
          {/* Top bar */}
          <header className="h-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-700/50 sticky top-0 z-30 shadow-sm">
            <div className="h-full flex items-center justify-between px-6 lg:px-10">
              {/* Left section */}
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 lg:hidden transition-all duration-200 hover:scale-105"
                >
                  <FaBars className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>

                {/* Breadcrumb */}
                <div className="hidden sm:flex items-center gap-2 text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Admin</span>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">Dashboard</span>
                </div>
              </div>

              {/* Search bar - hidden on mobile */}
              <div className="hidden md:flex items-center gap-4 flex-1 max-w-lg mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search projects, users, messages..."
                    className="w-full px-5 py-3 pl-12 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-300 dark:focus:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:bg-slate-50/80 dark:hover:bg-slate-700/80"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <button className="p-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      <FaFilter className="w-3 h-3" />
                    </button>
                    <button className="p-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      <FaSort className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-2">
                {/* Mobile search button */}
                <button className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 md:hidden transition-all duration-200 hover:scale-105">
                  <FaSearch className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </button>

                {/* Dark mode toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 hover:scale-105"
                >
                  {isDarkMode ? 
                    <FaSun className="w-4 h-4 text-yellow-500" /> : 
                    <FaMoon className="w-4 h-4 text-slate-600" />
                  }
                </button>

                {/* Fullscreen toggle */}
                <button
                  onClick={toggleFullscreen}
                  className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 hover:scale-105"
                >
                  {isFullscreen ? 
                    <FaCompress className="w-4 h-4 text-slate-600 dark:text-slate-400" /> : 
                    <FaExpand className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  }
                </button>

                {/* Notifications */}
                <div className="relative">
                  <button className="relative p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 hover:scale-105 group">
                    <FaBell className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{notifications.length}</span>
                    </span>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 rounded-full animate-ping opacity-20"></div>
                  </button>
                </div>

                {/* Settings */}
                <button className="p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-200 hover:scale-105 hover:rotate-90">
                  <FaCog className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </button>

                {/* User menu */}
                <div className="relative user-menu">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 ml-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-105"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center ring-2 ring-blue-100 dark:ring-blue-400/20">
                      <FaUser className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden lg:block">Admin</span>
                    <FaChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {showUserMenu && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-700/50 overflow-hidden">
                      <div className="p-4 border-b border-slate-200/60 dark:border-slate-700/50 bg-gradient-to-r from-blue-50/50 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <FaUser className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">Admin User</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Super Administrator</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 backdrop-blur-sm">
                        {['Profile Settings', 'Account Security', 'Preferences', 'Help & Support'].map((item, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-700/80 text-sm text-slate-700 dark:text-slate-200 transition-all duration-200"
                          >
                            {item}
                          </button>
                        ))}
                        <div className='mt-2 px-1'>
                          <MyLogoutButton/>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Content area */}
          <main className="p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}