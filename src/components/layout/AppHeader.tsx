import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-xl font-semibold tracking-wide">
          WhatsApp
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <MoreVertical className="h-5 w-5" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>New group</DropdownMenuItem>
              <DropdownMenuItem>New broadcast</DropdownMenuItem>
              <DropdownMenuItem>Linked devices</DropdownMenuItem>
              <DropdownMenuItem>Starred messages</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/settings">
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;