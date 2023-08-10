import {
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactElement,
  MouseEvent,
  ReactNode,
} from 'react';

function useToggle(initialContent?: ReactElement | ReactNode, open?: boolean) {
  const toggleBodyRef = useRef<HTMLDivElement | null>(null);
  const toggleContentRef = useRef<HTMLDivElement | null>(null);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [filled, setFilled] = useState<boolean>(!!initialContent);

  const isTextNode = (node: Node): boolean => node.nodeType === Node.TEXT_NODE;

  const isTextComponent = (node: Node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;
    const element = node as HTMLElement;
    return element.className.includes('text');
  };

  const calculateContentHeight = () => {
    if (!toggleContentRef.current) return 0;
    return toggleContentRef.current.offsetHeight;
  };

  const updateHeight = () => {
    if (!toggleBodyRef.current) return;

    const contentHeight = calculateContentHeight();
    const newHeight = isCollapsed ? `${contentHeight}px` : '0';
    toggleBodyRef.current.style.height = newHeight;
  };

  useEffect(() => {
    if (!open) setIsCollapsed(false);

    const checkFilled = () => {
      if (toggleContentRef.current === null) return;

      const { childNodes } = toggleContentRef.current;
      if (childNodes.length === 0) setFilled(false);
      else if (
        childNodes.length === 1 &&
        (isTextNode(childNodes[0]) || isTextComponent(childNodes[0]))
      ) {
        const textContent = childNodes[0].textContent?.trim();
        setFilled(textContent !== '');
      } else setFilled(true);

      updateHeight();
    };

    checkFilled();

    const observer = new MutationObserver(() => {
      checkFilled();
    });

    if (toggleContentRef.current) {
      observer.observe(toggleContentRef.current, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsCollapsed(!isCollapsed);
    },
    [isCollapsed],
  );

  useEffect(() => {
    updateHeight();
  }, [isCollapsed]);

  return { filled, isCollapsed, handleButtonClick, toggleBodyRef, toggleContentRef };
}

export default useToggle;
