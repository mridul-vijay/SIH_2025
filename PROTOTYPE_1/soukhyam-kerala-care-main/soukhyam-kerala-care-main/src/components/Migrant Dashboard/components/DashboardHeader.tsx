import React from 'react';
import { Bell, Settings, User, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export const DashboardHeader = React.memo(function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
      {/* Left Section - Mobile Menu + Logo */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-gov-blue hover:bg-gov-blue-bg p-2"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Government Ashoka Chakra Logo */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gov-blue flex items-center justify-center shadow-sm">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1739460677746-7aec1b70a3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnb3Zlcm5tZW50JTIwYXNob2thJTIwY2hha3JhJTIwbG9nb3xlbnwxfHx8fDE3NTg4MTcwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Government of India"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg sm:text-xl font-semibold text-gov-blue">National Portal</h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Government of India</p>
          </div>
          <div className="sm:hidden">
            <h1 className="text-base font-semibold text-gov-blue">National Portal</h1>
          </div>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="hidden md:flex flex-1 max-w-lg mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search services, documents..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-md focus:ring-2 focus:ring-gov-blue-light focus:border-gov-blue-light bg-gray-50 text-gov-blue placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right Section - User Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Mobile search button */}
        <Button variant="ghost" size="sm" className="md:hidden text-gov-blue hover:bg-gov-blue-bg p-2">
          <Search className="w-4 h-4" />
        </Button>
        
        <Button variant="ghost" size="sm" className="relative text-gov-blue hover:bg-gov-blue-bg p-2">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-gov-red text-white text-xs flex items-center justify-center rounded-full">
            3
          </Badge>
        </Button>
        
        <Button variant="ghost" size="sm" className="hidden sm:flex text-gov-blue hover:bg-gov-blue-bg p-2">
          <Settings className="w-5 h-5" />
        </Button>
        
        {/* User Profile Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 border-l border-border pl-3 sm:pl-4">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gov-blue rounded-full flex items-center justify-center text-white font-semibold text-sm">
            RK
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gov-blue">Ravi Kumar</p>
            <p className="text-xs text-muted-foreground">Citizen</p>
          </div>
        </div>
      </div>
    </header>
  );
});