
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  LayoutDashboard, Package, Store, FileText, Settings, LifeBuoy, Menu, X, LogOut, User, BarChart2, Gift, Truck
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', path: '/dashboard' },
    { icon: Package, label: 'আমার পণ্য', path: '/dashboard/my-products' },
    { icon: Truck, label: 'অর্ডার ট্র্যাকিং', path: '/dashboard/order-tracking' },
    { icon: BarChart2, label: 'অ্যানালিটিক্স', path: '/dashboard/analytics' },
    { icon: Gift, label: 'রেফারেল প্রোগ্রাম', path: '/dashboard/referral-program' },
    { icon: Store, label: 'আমার স্টোর', path: '/dashboard/connect-store' },
    { icon: FileText, label: 'বিলিং এবং সাবস্ক্রিপশন', path: '/dashboard/billing' },
    { icon: Settings, label: 'অ্যাকাউন্ট সেটিংস', path: '/dashboard/settings' },
    { icon: LifeBuoy, label: 'সহায়তা কেন্দ্র', path: '/dashboard/support' },
  ];

  return (
    <>
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r transition-transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <NavLink to="/" className="text-2xl font-bold text-primary">LetsDropship</NavLink>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100vh-112px)]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 my-1 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t">
           <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-red-50" onClick={logout}>
             <LogOut className="w-5 h-5 mr-3 text-red-500"/>
             লগ আউট
           </Button>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

const DashboardHeader = ({ setIsOpen }) => {
    const { user, logout } = useAuth();
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white/80 backdrop-blur-sm border-b md:px-6">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
            </Button>
            <div className="md:ml-auto">
               <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                         <div className="flex items-center justify-center w-full h-full bg-primary/20 rounded-full text-primary font-bold">
                            {user?.name?.charAt(0).toUpperCase() || <User />}
                         </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{user?.name}</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>লগ আউট</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};


const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="md:pl-64">
                <DashboardHeader setIsOpen={setIsSidebarOpen} />
                <main className="p-4 md:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
