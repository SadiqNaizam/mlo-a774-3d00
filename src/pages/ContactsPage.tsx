import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Icons
import { Search, UserPlus } from 'lucide-react';

// Placeholder data for contacts
const contacts = [
  { id: '1', name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', status: 'Available' },
  { id: '2', name: 'Bob Williams', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', status: 'At the movies' },
  { id: '3', name: 'Charlie Brown', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', status: 'Hey there! I am using WhatsApp.' },
  { id: '4', name: 'Diana Miller', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', status: 'Busy' },
  { id: '5', name: 'Ethan Davis', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d', status: 'Sleeping' },
  { id: '6', name: 'Fiona Garcia', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d', status: 'Can\'t talk, WhatsApp only' },
  { id: '7', name: 'George Rodriguez', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026710d', status: 'At work' },
  { id: '8', name: 'Hannah Wilson', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026711d', status: '...' },
];

const ContactsPage = () => {
  console.log('ContactsPage loaded');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return names[0][0];
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <AppHeader />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Search and Header Section */}
        <div className="p-4 bg-white border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search contacts"
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Contacts List */}
        <ScrollArea className="flex-1 pb-16">
          <div className="p-2 space-y-1">
            {/* Quick Actions */}
            <div className="p-2">
                 <Button variant="ghost" className="w-full justify-start gap-4 p-4 h-auto">
                    <Avatar className="h-12 w-12 bg-emerald-600">
                        <UserPlus className="h-6 w-6 text-white"/>
                    </Avatar>
                    <div className="text-left">
                        <p className="font-semibold text-base">New contact</p>
                    </div>
                </Button>
            </div>
           
            {filteredContacts.map((contact) => (
              <Link to="/chat-view" key={contact.id} className="block">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{getInitials(contact.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-500 truncate">{contact.status}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </main>
      <AppFooter />
    </div>
  );
};

export default ContactsPage;