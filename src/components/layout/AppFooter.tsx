import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, CircleDashed, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center gap-1 w-full pt-2 pb-1 transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
    }`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t z-10">
      <nav className="container mx-auto px-4 flex items-center justify-around h-16">
        <NavLink to="/" className={navLinkClasses} end>
          {({ isActive }) => (
            <>
              <div className="relative">
                <MessageCircle className={`h-6 w-6 ${isActive ? 'fill-primary/20' : ''}`} />
                {/* Example badge */}
                <Badge variant="destructive" className="absolute -top-1 -right-2 px-1.5 py-0.5 text-xs h-auto">
                  3
                </Badge>
              </div>
              <span className="text-xs font-medium">Chats</span>
            </>
          )}
        </NavLink>

        <NavLink to="/status" className={navLinkClasses}>
          {({ isActive }) => (
            <>
              <CircleDashed className={`h-6 w-6 ${isActive ? 'text-primary' : ''}`} />
              <span className="text-xs font-medium">Status</span>
            </>
          )}
        </NavLink>

        <NavLink to="/contacts" className={navLinkClasses}>
           {({ isActive }) => (
            <>
              <Users className={`h-6 w-6 ${isActive ? 'fill-primary/20' : ''}`} />
              <span className="text-xs font-medium">Contacts</span>
            </>
          )}
        </NavLink>
      </nav>
    </footer>
  );
};

export default AppFooter;