import React from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Key, Bell, Lock, ChevronRight, HelpCircle } from 'lucide-react';

const SettingsPage: React.FC = () => {
  console.log('SettingsPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      <main className="flex-1 overflow-y-auto p-4 pb-24 space-y-4">
        {/* User Profile Card */}
        <Card className="cursor-pointer hover:bg-muted transition-colors">
          <CardContent className="p-4 flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold text-lg text-foreground">John Doe</p>
              <p className="text-sm text-muted-foreground">Hey there! I am using WhatsApp.</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>

        {/* Main Settings List */}
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              <li className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted transition-colors">
                <Key className="h-6 w-6 text-primary" />
                <span className="flex-1 font-medium text-foreground">Account</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted transition-colors">
                <Lock className="h-6 w-6 text-primary" />
                <span className="flex-1 font-medium text-foreground">Privacy</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted transition-colors">
                <Bell className="h-6 w-6 text-primary" />
                <span className="flex-1 font-medium text-foreground">Notifications</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Privacy Toggles Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Privacy Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="read-receipts" className="font-medium text-foreground">Read Receipts</Label>
              <Switch id="read-receipts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="last-seen" className="font-medium text-foreground">Last Seen Status</Label>
              <Switch id="last-seen" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card>
          <CardContent className="p-0">
            <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted transition-colors">
              <HelpCircle className="h-6 w-6 text-primary" />
              <span className="flex-1 font-medium text-foreground">Help</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </main>

      <AppFooter />
    </div>
  );
};

export default SettingsPage;