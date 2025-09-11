import { cn } from '@/lib/utils';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function ContentSection({ title, children, image, imageAlt, className }: ContentSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-start gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-media-gray-900 mb-4">{title}</h2>
            {children}
          </div>
        </div>
        {image && (
          <div className="flex-shrink-0 w-80">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-media-red rounded-full mt-2 flex-shrink-0" />
          <span className="text-media-gray-700 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface ContentTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentText({ children, className }: ContentTextProps) {
  return (
    <p className={cn("text-media-gray-700 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface SubSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SubSection({ title, children, className }: SubSectionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-lg font-semibold text-media-gray-900">{title}</h3>
      {children}
    </div>
  );
}