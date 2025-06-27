import React from 'react';
import { Check, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type ReadStatus = 'sent' | 'delivered' | 'read';

interface ReadReceiptIconProps {
  status: ReadStatus;
  className?: string;
}

const ReadReceiptIcon: React.FC<ReadReceiptIconProps> = ({ status, className }) => {
  console.log(`ReadReceiptIcon loaded with status: ${status}`);

  const iconSize = 'h-4 w-4';

  switch (status) {
    case 'sent':
      return (
        <Check
          className={cn(iconSize, 'text-muted-foreground', className)}
          aria-label="Sent"
        />
      );
    case 'delivered':
      return (
        <CheckCheck
          className={cn(iconSize, 'text-muted-foreground', className)}
          aria-label="Delivered"
        />
      );
    case 'read':
      return (
        <CheckCheck
          className={cn(iconSize, 'text-accent', className)}
          aria-label="Read"
        />
      );
    default:
      // In case of an invalid status, render nothing.
      return null;
  }
};

export default ReadReceiptIcon;