import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Heart, ShoppingCart, User, LogOut, LayoutDashboard } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from '@/context/SearchContext';
import { useAuth } from '@/context/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { openSearch } = useSearch();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClasses = "text-gray-600 hover:text-red-500 font-medium transition-colors";
  const activeLinkClasses = "text-red-500";

  const renderUserActions = () => {
    if (isAuthenticated) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
              <div className="flex items-center justify-center w-full h-full text-primary font-bold">
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
            <DropdownMenuItem asChild>
              <Link to="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>ড্যাশবোর্ড</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>লগ আউট</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link to="/login" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
        <User className="text-gray-600 w-5 h-5" />
      </Link>
    );
  };

  return (
    <>
      <header className="hidden md:block bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" onClick={scrollToTop} className="text-3xl font-extrabold tracking-tight">
                <span className="text-gray-900">Lets</span>
                <span className="text-red-500">Drop</span>
                <span className="text-gray-900">ship</span>
              </Link>
            </div>
            
            <nav className="flex space-x-6">
              <NavLink to="/" onClick={scrollToTop} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>হোম</NavLink>
              <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>আমাদের সম্পর্কে</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>যোগাযোগ</NavLink>
              <NavLink to="/membership" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>মেম্বারশিপ</NavLink>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button onClick={openSearch} className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                 <FontAwesomeIcon icon={faSearch} className="text-gray-600 w-5 h-5" />
              </button>
              <Link to="/wishlist" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Heart className="text-gray-600 w-5 h-5" />
              </Link>
              <button onClick={showToast} className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <ShoppingCart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </button>
              {renderUserActions()}
            </div>
          </div>
        </div>
      </header>

      <header className="md:hidden bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={scrollToTop} className="text-2xl font-extrabold tracking-tight">
              <span className="text-gray-900">Lets</span>
              <span className="text-red-500">Drop</span>
              <span className="text-gray-900">ship</span>
            </Link>
            <div className="flex items-center space-x-3">
              <button onClick={openSearch} className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                 <FontAwesomeIcon icon={faSearch} className="text-gray-600 w-5 h-5" />
              </button>
              <Link to="/wishlist" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Heart className="text-gray-600 w-5 h-5" />
              </Link>
              <button onClick={showToast} className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <ShoppingCart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;