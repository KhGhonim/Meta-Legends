declare module 'react-scroll-snap' {
  import { ComponentType } from 'react';

  interface SnapProps {
    children: React.ReactNode;
    snapType?: 'x' | 'y';
    direction?: 'x' | 'y';
    threshold?: number;
  }

  export const ScrollSnap: ComponentType<SnapProps>;
  export function useSnapScroll(): { scrollToNext: () => void; scrollToPrev: () => void; };
}
