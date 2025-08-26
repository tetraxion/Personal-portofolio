'use client';

import { useEffect, useState } from 'react';
import TargetCursor from '@/components/ui/TargetCursor';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Cek apakah layar >= md (768px)
    const media = window.matchMedia('(min-width: 768px)');
    setShowCursor(media.matches);

    const handler = (e: MediaQueryListEvent) => setShowCursor(e.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <>
      {showCursor && (
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      )}
      {children}
    </>
  );
}
