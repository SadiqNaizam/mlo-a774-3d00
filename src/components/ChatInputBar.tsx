import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip, Mic, Send, Smile } from 'lucide-react';

/**
 * ChatInputBar is a component for message input in a chat interface.
 * It is designed to be placed at the bottom of a chat view.
 * The parent component is responsible for positioning this bar (e.g., using fixed positioning).
 */
const ChatInputBar: React.FC = () => {
  const [message, setMessage] = useState('');

  console.log('ChatInputBar loaded');

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real application, this would call a function passed via props
      // to send the message to the backend or state management layer.
      console.log('Sending message:', message.trim());
      setMessage('');
    }
  };

  const handleMicClick = () => {
    // This would trigger voice note recording functionality.
    console.log('Voice note recording initiated.');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send message on Enter key press, but allow new lines with Shift+Enter
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      handleSendMessage();
    }
  };

  const hasText = message.trim().length > 0;

  return (
    <div className="bg-muted p-2 flex items-end gap-2 w-full border-t">
      {/* Emoji Button */}
      <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
        <Smile className="h-6 w-6" />
        <span className="sr-only">Open emoji picker</span>
      </Button>
      
      {/* File Attachment Button */}
      <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
        <Paperclip className="h-6 w-6" />
        <span className="sr-only">Attach a file</span>
      </Button>

      {/* Message Input Textarea */}
      <div className="flex-grow">
        <Textarea
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="w-full resize-none rounded-lg border-input bg-card p-2 text-base shadow-sm focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
          style={{ minHeight: '40px', maxHeight: '120px' }} // Controls the expandable height
        />
      </div>

      {/* Conditional Send/Mic Button */}
      <div className="shrink-0">
        {hasText ? (
          <Button
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 flex-shrink-0"
            onClick={handleSendMessage}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 flex-shrink-0"
            onClick={handleMicClick}
            aria-label="Record a voice note"
          >
            <Mic className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatInputBar;