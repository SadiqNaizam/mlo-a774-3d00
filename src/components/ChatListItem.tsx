import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ChatListItemProps {
  id: string;
  avatarUrl: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  id,
  avatarUrl,
  name,
  lastMessage,
  timestamp,
  unreadCount = 0,
}) => {
  console.log(`ChatListItem loaded for chat ID: ${id}`);

  // Fallback initial for the avatar
  const avatarFallback = name.charAt(0).toUpperCase();

  return (
    <Link
      to="/chat-view"
      className="flex items-center p-3 w-full hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex-shrink-0 mr-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold truncate">{name}</p>
          <p className="text-xs text-muted-foreground ml-2 flex-shrink-0">{timestamp}</p>
        </div>
        <div className="flex justify-between items-start mt-1">
          <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
          {unreadCount > 0 && (
            <Badge className="ml-2 bg-green-500 text-white hover:bg-green-600 rounded-full h-6 w-6 flex items-center justify-center p-0">
              {unreadCount}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChatListItem;