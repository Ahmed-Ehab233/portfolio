
import { User } from 'lucide-react';
import { personal } from '@/data/personal';

const profileImageUrl = `${import.meta.env.BASE_URL}profile.jpg`;

export default function ProfileImage() {
  return (
    <div className="relative flex-shrink-0">
      {/* Soft background glow */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl" />

      {/* Main portrait frame */}
      <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-accent/80 via-accent/30 to-teal-400/60 shadow-xl">
        <div className="relative h-56 w-44 sm:h-64 sm:w-52 lg:h-80 lg:w-64 overflow-hidden rounded-[calc(2rem-2px)] bg-surface-alt">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={personal.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-content-subtle">
              <User size={64} strokeWidth={1.2} />
              <span className="text-xs">Add your photo</span>
            </div>
          )}

          {/* Subtle bottom overlay */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>

      {/* Minimal geometric accents */}
      <div className="absolute -right-3 top-8 flex h-8 w-8 items-center justify-center rounded-xl border border-accent/30 bg-surface shadow-sm">
        <div className="flex items-end gap-0.5">
          <span className="h-2 w-1 rounded-sm bg-accent/60" />
          <span className="h-4 w-1 rounded-sm bg-accent" />
          <span className="h-3 w-1 rounded-sm bg-teal-400" />
        </div>
      </div>

      <div className="absolute -bottom-2 -left-3 h-4 w-4 rounded-full border-[3px] border-surface bg-accent" />
    </div>
  );
}
