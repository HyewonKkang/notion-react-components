import { useRef, useEffect } from 'react';

export interface useMutationObserverProps {
  target: HTMLElement | null;
  callback: MutationCallback;
  options?: MutationObserverInit;
}

function useMutationObserver({
  target,
  callback,
  options = { childList: true, characterData: true, subtree: true },
}: useMutationObserverProps) {
  const observer = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (target) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(target, options);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [target, callback, options]);

  return observer.current;
}

export default useMutationObserver;
