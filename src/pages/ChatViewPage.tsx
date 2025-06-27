import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';

// Import Custom Components
import MessageBubble from '@/components/MessageBubble';
import ChatInputBar from '@/components/ChatInputBar';
import { ReadStatus } from '@/components/MessageBubble'; // Import type for clarity

// Import shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

// Placeholder data for the conversation
const messages = [
  { id: 1, message: "Hey, how's it going?", timestamp: "10:30 AM", isSent: false, status: 'read' as ReadStatus },
  { id: 2, message: "Pretty good! Just working on the new project. You?", timestamp: "10:31 AM", isSent: true, status: 'read' as ReadStatus },
  { id: 3, message: "Same here. It's coming along nicely. Did you see the latest mockups?", timestamp: "10:31 AM", isSent: false, status: 'read' as ReadStatus },
  { id: 4, message: "Oh yeah, they look great! The design team really nailed it.", timestamp: "10:32 AM", isSent: true, status: 'read' as ReadStatus },
  { id: 5, message: "I agree. Let's catch up later to discuss the next steps.", timestamp: "10:33 AM", isSent: false, status: 'read' as ReadStatus },
  { id: 6, message: "Sounds good. Talk to you then!", timestamp: "10:34 AM", isSent: true, status: 'delivered' as ReadStatus },
  { id: 7, message: "Perfect!", timestamp: "10:35 AM", isSent: false, status: 'read' as ReadStatus },
  { id: 8, message: "This is a longer message to test how the text wrapping works within the message bubble component. It should wrap naturally without breaking the layout of the chat interface.", timestamp: "10:36 AM", isSent: true, status: 'sent' as ReadStatus },
];

const ChatViewPage = () => {
  console.log('ChatViewPage loaded');

  const contactName = "Jane Doe";
  const contactStatus = "online";
  const contactAvatarUrl = "https://i.pravatar.cc/150?u=jane_doe";

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Custom Chat Header */}
      <header className="bg-primary text-primary-foreground shadow-md flex items-center p-2 z-10 gap-3">
        <Link to="/"> {/* Navigate back to ChatListPage */}
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <Avatar>
          <AvatarImage src={contactAvatarUrl} alt={contactName} />
          <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <p className="font-semibold">{contactName}</p>
          <p className="text-xs text-primary-foreground/80">{contactStatus}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content Area with Chat History */}
      <main 
        className="flex-grow overflow-y-auto"
      >
        <ScrollArea className="h-full">
          <div className="p-4 space-y-2">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg.message}
                timestamp={msg.timestamp}
                isSent={msg.isSent}
                status={msg.status}
              />
            ))}
          </div>
        </ScrollArea>
      </main>

      {/* Footer with Message Input Bar */}
      <footer className="shrink-0">
        <ChatInputBar />
      </footer>
    </div>
  );
};

export default ChatViewPage;