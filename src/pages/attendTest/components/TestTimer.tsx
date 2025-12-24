import React, { useState, useEffect } from 'react';
import { Button } from '@/components';

interface TestTimerProps {
  timeRemaining: number; // in seconds
  totalTime: number; // in seconds
  onSubmit: () => void;
}

const TestTimer: React.FC<TestTimerProps> = ({ timeRemaining, totalTime, onSubmit }) => {
  const [localTime, setLocalTime] = useState(timeRemaining);

  // Sync local timer with server time
  useEffect(() => {
    setLocalTime(timeRemaining);
  }, [timeRemaining]);

  // Countdown timer
  useEffect(() => {
    if (localTime <= 0) {
      // Auto-submit when time runs out
      onSubmit();
      return;
    }

    const timer = setInterval(() => {
      setLocalTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [localTime, onSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatTotalTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins.toString().padStart(2, '0')}:00`;
  };

  const timeDisplay = `${formatTime(localTime)} / ${formatTotalTime(totalTime)}`;
  const isLowTime = localTime <= 300; // Less than 5 minutes
  const isCriticalTime = localTime <= 60; // Less than 1 minute

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
      {/* Submit Button */}
      <Button
        variant="primary"
        size="md"
        onClick={onSubmit}
        className="bg-[#4B9C91] hover:bg-[#3a7a70] text-white w-full sm:w-auto text-sm sm:text-base px-4 sm:px-7 py-2 sm:py-2.5"
      >
        Submit Test
      </Button>

      {/* Timer */}
      <div
        className={`flex items-center justify-center sm:justify-start gap-2 ${
          isCriticalTime ? 'animate-pulse' : ''
        }`}
      >
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            isCriticalTime
              ? 'text-red-500'
              : isLowTime
              ? 'text-orange-500'
              : 'text-[#4B9C91]'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span
          className={`font-semibold text-sm sm:text-base ${
            isCriticalTime
              ? 'text-red-500'
              : isLowTime
              ? 'text-orange-500'
              : 'text-[#4B9C91]'
          }`}
        >
          {timeDisplay}
        </span>
      </div>
    </div>
  );
};

export default TestTimer;
