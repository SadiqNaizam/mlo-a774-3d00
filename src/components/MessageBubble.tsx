import React from 'react';
import clsx from 'clsx';

// Assuming ReadReceiptIcon component exists at this path based on the project structure.
// This component is responsible for displaying the single, double, or blue ticks.
import ReadReceiptIcon from '@/components/ReadReceiptIcon';

// The status of a message, used to determine which read receipt icon to show.
export type ReadStatus = 'sent' | 'delivered' | 'read';

interface MessageBubbleProps {
  /** The text content of the message. */
  message: string;
  /** The time the message was sent, e.g., "10:45 AM". */
  timestamp: string;
  /** Determines the alignment and color of the bubble. True if sent by the current user. */
  isSent: boolean;
  /** The delivery status of the message, for sent messages only. */
  status: ReadStatus;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, timestamp, isSent, status }) => {
  console.log('MessageBubble loaded');

  const bubbleAlignmentClasses = isSent ? 'justify-end' : 'justify-start';

  // WhatsApp-like colors: a light green for sent, white/gray for received.
  const bubbleColorClasses = isSent
    ? 'bg-emerald-100 dark:bg-emerald-800'
    : 'bg-white dark:bg-slate-700';

  // Specific corner rounding to better match modern chat UIs.
  const bubbleRadiusClasses = isSent
    ? 'rounded-l-lg rounded-br-lg'
    : 'rounded-r-lg rounded-bl-lg';

  return (
    <div className={clsx('w-full flex mb-2', bubbleAlignmentClasses)}>
      <div className={clsx('px-3 py-2 shadow-sm max-w-[80%] md:max-w-[65%]', bubbleColorClasses, bubbleRadiusClasses)}>
        <p className="text-sm text-gray-800 dark:text-gray-200 break-words">
          {message}
        </p>
        <div className="flex items-center justify-end gap-1.5 mt-1 float-right clear-both">
          <span className="text-xs text-gray-500 dark:text-gray-400 select-none">
            {timestamp}
          </span>
          {/* The read receipt is only shown for messages sent by the user */}
          {isSent && (
            <ReadReceiptIcon status={status} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;