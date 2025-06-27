import React, { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import StatusViewer from '@/components/StatusViewer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Plus } from 'lucide-react';

// Define types for our mock data
interface StatusItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  duration?: number;
}

interface UserWithStatus {
  user: {
    name: string;
    avatarUrl: string;
  };
  statuses: StatusItem[];
  timestamp: string;
}

// Mock data for recent status updates
const recentUpdates: UserWithStatus[] = [
  {
    user: { name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?u=alice' },
    statuses: [
      { id: 1, type: 'image', src: 'https://picsum.photos/id/1015/1080/1920' },
      { id: 2, type: 'image', src: 'https://picsum.photos/id/1016/1080/1920' },
    ],
    timestamp: '15 minutes ago',
  },
  {
    user: { name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
    statuses: [
      { id: 1, type: 'image', src: 'https://picsum.photos/id/1018/1080/1920' },
    ],
    timestamp: '2 hours ago',
  },
  {
    user: { name: 'Charlie', avatarUrl: 'https://i.pravatar.cc/150?u=charlie' },
    statuses: [
      { id: 1, type: 'image', src: 'https://picsum.photos/id/1025/1080/1920' },
      { id: 2, type: 'image', src: 'https://picsum.photos/id/1026/1080/1920' },
      { id: 3, type: 'image', src: 'https://picsum.photos/id/1027/1080/1920' },
    ],
    timestamp: 'Yesterday, 9:30 PM',
  },
];

const StatusPage = () => {
  const [viewingStatus, setViewingStatus] = useState<UserWithStatus | null>(null);

  console.log('StatusPage loaded');

  const handleOpenStatus = (statusData: UserWithStatus) => {
    setViewingStatus(statusData);
  };

  const handleCloseStatus = () => {
    setViewingStatus(null);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <AppHeader />

      <main className="flex-1 overflow-y-auto pb-20"> {/* Padding bottom to avoid footer overlap */}
        
        {/* My Status Section */}
        <Card className="m-4 p-3 rounded-lg shadow-sm bg-card">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://i.pravatar.cc/150?u=myuser" alt="My Avatar" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-card">
                <Plus className="h-3 w-3 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">My status</h3>
              <p className="text-sm text-muted-foreground">Tap to add status update</p>
            </div>
          </div>
        </Card>

        {/* Recent Updates Section */}
        <div className="px-4 mt-4">
          <h4 className="text-sm font-semibold text-primary mb-2">RECENT UPDATES</h4>
          <div className="bg-card rounded-lg shadow-sm">
            {recentUpdates.map((update, index) => (
              <React.Fragment key={update.user.name}>
                <div 
                  className="flex items-center gap-4 p-3 cursor-pointer hover:bg-muted"
                  onClick={() => handleOpenStatus(update)}
                >
                  <Avatar className="h-14 w-14 ring-2 ring-offset-2 ring-primary dark:ring-offset-card">
                    <AvatarImage src={update.user.avatarUrl} alt={update.user.name} />
                    <AvatarFallback>{update.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{update.user.name}</h3>
                    <p className="text-sm text-muted-foreground">{update.timestamp}</p>
                  </div>
                </div>
                {index < recentUpdates.length - 1 && <hr className="ml-20 border-border" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>

      <AppFooter />

      {/* Conditionally render the Status Viewer */}
      {viewingStatus && (
        <StatusViewer
          user={viewingStatus.user}
          statuses={viewingStatus.statuses}
          onClose={handleCloseStatus}
        />
      )}
    </div>
  );
};

export default StatusPage;