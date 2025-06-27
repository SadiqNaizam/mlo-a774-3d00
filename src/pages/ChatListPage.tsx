import React from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import ChatListItem from '@/components/ChatListItem';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for the chat list
const chatListData = [
  {
    id: '1',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane_cooper',
    name: 'Jane Cooper',
    lastMessage: 'Sounds good! See you then.',
    timestamp: '10:48 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    avatarUrl: 'https://i.pravatar.cc/150?u=cody_fisher',
    name: 'Cody Fisher',
    lastMessage: 'Photo',
    timestamp: '10:42 AM',
    unreadCount: 0,
  },
  {
    id: '3',
    avatarUrl: 'https://i.pravatar.cc/150?u=esther_howard',
    name: 'Esther Howard',
    lastMessage: 'Okay, I will check and let you know.',
    timestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '4',
    avatarUrl: 'https://i.pravatar.cc/150?u=dev_team',
    name: 'Dev Team Group',
    lastMessage: 'Cameron: Don\'t forget to push the latest changes.',
    timestamp: 'Yesterday',
    unreadCount: 5,
  },
  {
    id: '5',
    avatarUrl: 'https://i.pravatar.cc/150?u=jenny_wilson',
    name: 'Jenny Wilson',
    lastMessage: 'Thank you so much!',
    timestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '6',
    avatarUrl: 'https://i.pravatar.cc/150?u=robert_fox',
    name: 'Robert Fox',
    lastMessage: 'Can you call me back?',
    timestamp: 'Tuesday',
    unreadCount: 1,
  },
  {
    id: '7',
    avatarUrl: 'https://i.pravatar.cc/150?u=marketing_meeting',
    name: 'Marketing Meeting',
    lastMessage: 'You: Can we reschedule for 3 PM?',
    timestamp: 'Tuesday',
    unreadCount: 0,
  },
  {
    id: '8',
    avatarUrl: 'https://i.pravatar.cc/150?u=wade_warren',
    name: 'Wade Warren',
    lastMessage: 'Haha, that\'s hilarious!',
    timestamp: 'Monday',
    unreadCount: 0,
  }
];

const ChatListPage: React.FC = () => {
  console.log('ChatListPage loaded');

  return (
    <div className="flex flex-col h-screen bg-background">
      <AppHeader />
      
      <main className="flex-grow overflow-y-auto pb-16">
        <ScrollArea className="h-full">
          <div>
            {chatListData.map((chat) => (
              <ChatListItem
                key={chat.id}
                id={chat.id}
                avatarUrl={chat.avatarUrl}
                name={chat.name}
                lastMessage={chat.lastMessage}
                timestamp={chat.timestamp}
                unreadCount={chat.unreadCount}
              />
            ))}
          </div>
        </ScrollArea>
      </main>
      
      <AppFooter />
    </div>
  );
};

export default ChatListPage;