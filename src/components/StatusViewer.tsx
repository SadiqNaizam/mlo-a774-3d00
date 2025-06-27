import React, { useState, useEffect, useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from 'lucide-react';

// Define the shape of a single status item
interface StatusItem {
  id: number;
  type: 'image' | 'video'; // For now, only supporting images
  src: string;
  duration?: number; // Duration in milliseconds
}

// Define the props for the StatusViewer component
interface StatusViewerProps {
  user: {
    name: string;
    avatarUrl: string;
  };
  statuses: StatusItem[];
  onClose: () => void;
}

const DEFAULT_STATUS_DURATION = 5000; // 5 seconds

const StatusViewer: React.FC<StatusViewerProps> = ({ user, statuses, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  console.log('StatusViewer loaded');

  // Callback to advance to the next status or close the viewer
  const handleNextStatus = useCallback(() => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= statuses.length - 1) {
        onClose(); // Close viewer after the last status
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }, [statuses.length, onClose]);

  // Function to go to the previous status
  const handlePrevStatus = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = Math.max(0, prevIndex - 1);
      // If we are on the first one and click back, restart its timer
      if (prevIndex === newIndex) {
          setProgress(0);
      }
      return newIndex;
    });
  };

  // Effect to manage timers for auto-advancing and progress bar updates
  useEffect(() => {
    setProgress(0); // Reset progress when the status item changes

    const currentStatus = statuses[currentIndex];
    if (!currentStatus) return;
    
    const duration = currentStatus.duration || DEFAULT_STATUS_DURATION;

    // Timer for auto-advancing to the next status
    const autoAdvanceTimer = setTimeout(() => {
      handleNextStatus();
    }, duration);

    // Timer for updating the progress bar visuals
    let startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / duration) * 100;
      
      if (newProgress <= 100) {
        setProgress(newProgress);
      } else {
        setProgress(100);
      }
    }, 50); // Update progress frequently for a smooth animation

    // Cleanup function to clear timers on component unmount or when index changes
    return () => {
      clearTimeout(autoAdvanceTimer);
      clearInterval(progressInterval);
    };
  }, [currentIndex, statuses, handleNextStatus]);

  // A safety check: if statuses are empty, close immediately.
  useEffect(() => {
    if (!statuses || statuses.length === 0) {
      onClose();
    }
  }, [statuses, onClose]);
  
  if (!statuses || statuses.length === 0) {
    return null;
  }
  
  const currentStatus = statuses[currentIndex];

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center p-2 sm:p-4 text-white font-sans select-none">
      {/* Top Section: Progress Bars and User Info */}
      <div className="w-full pt-2 px-2 absolute top-0 left-0">
        {/* Progress bars container */}
        <div className="flex items-center gap-1 w-full">
          {statuses.map((_, index) => (
             <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white transition-all duration-50 ease-linear"
                    style={{ width: `${index < currentIndex ? 100 : index === currentIndex ? progress : 0}%` }}
                />
            </div>
          ))}
        </div>

        {/* User info and close button */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white/80">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-base">{user.name}</span>
          </div>
          <button onClick={onClose} aria-label="Close status viewer" className="p-2 rounded-full hover:bg-white/20 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Middle Section: Status Image and Navigation */}
      <div className="relative w-full h-full flex items-center justify-center pt-16 pb-16">
        {currentStatus && (
             <img
                key={currentStatus.id}
                src={currentStatus.src}
                alt={`Status from ${user.name}`}
                className="max-h-full max-w-full object-contain rounded-lg"
            />
        )}

        {/* Navigation Overlays */}
        <div className="absolute inset-0 flex">
          <div
            className="w-1/3 h-full cursor-pointer"
            onClick={handlePrevStatus}
            aria-label="Previous status"
          />
          <div
            className="w-2/3 h-full cursor-pointer"
            onClick={handleNextStatus}
            aria-label="Next status"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusViewer;