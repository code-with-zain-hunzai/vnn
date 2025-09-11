import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface NavItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface MediaSidebarProps {
  items: NavItem[];
  activeItem: string;
  onItemChange: (itemId: string) => void;
  className?: string;
}

export function MediaSidebar({ items, activeItem, onItemChange, className }: MediaSidebarProps) {
  return (
    <div className={cn(
      "w-60 bg-background border-r border-media-gray-200 h-full overflow-y-auto pr-5",
      className
    )}>
      <nav className="p-0">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemChange(item.id)}
            className={cn(
              "w-full text-left px-20 py-2 text-xl leading-10 font-railway font-medium transition-all duration-200 border-media-gray-100 space-y-4 text-nowrap",
              activeItem === item.id
                ? "bg-custom-red text-white hover:bg-custom-red rounded-r-full"
                : "text-media-gray-700 hover:text-media-red"
            )}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}