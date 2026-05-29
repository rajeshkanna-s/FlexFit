import { useEffect, useState } from 'react';

export const useScrollspy = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0] || '');

  useEffect(() => {
    const onScroll = () => {
      const current = ids
        .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity }))
        .filter((item) => item.top <= 140)
        .pop();
      if (current) setActiveId(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return activeId;
};
