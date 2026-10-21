import { ContactPlatform } from '@/data/contact';
import BrandIcon from '@/components/BrandIcon';

interface ContactCardProps {
  platform: ContactPlatform;
}

export default function ContactCard({ platform }: ContactCardProps) {
  const isMail = platform.url.startsWith('mailto:');

  return (
    <a
      href={platform.url}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className="group relative flex items-center justify-between p-3 rounded-lg bg-card/40 border border-border/50 hover:border-accent/50 hover:bg-card/70 transition-all shadow-sm"
      style={
        {
          '--brand-color': platform.brandColor,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center gap-2.5">
        {/* أيقونة المنصة بحجم صغير ومربع ملون أنيق */}
        <div 
          className="w-8 h-8 rounded-md flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-105"
          style={{ backgroundColor: platform.brandColor }}
        >
          <BrandIcon name={platform.icon} className="w-4 h-4 text-white" />
        </div>
        
        {/* عنوان المنصة والوصف باختصار */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
            {platform.label}
          </span>
          <span className="text-[10px] text-content-subtle leading-tight mt-0.5">
            {platform.name}
          </span>
        </div>
      </div>

      {/* سهم التوجيه الصغير */}
      <div className="text-content-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-all text-xs font-mono pr-1">
        {isMail ? 'Compose' : '→'}
      </div>
    </a>
  );
}