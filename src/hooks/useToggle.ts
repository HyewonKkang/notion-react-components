import {
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactElement,
  MouseEvent,
  ReactNode,
} from 'react';

function useToggle(initialContent?: ReactElement | ReactNode) {
  const toggleBodyRef = useRef<HTMLDivElement | null>(null);
  const toggleContentRef = useRef<HTMLDivElement | null>(null);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(!!initialContent);

  const isTextNode = (node: Node): boolean => node.nodeType === Node.TEXT_NODE;

  const isTextComponent = (node: Node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;
    const element = node as HTMLElement;
    return element.className.includes('text');
  };

  useEffect(() => {
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
    };

    checkFilled();

    const observer = new MutationObserver(checkFilled);
    observer.observe(toggleContentRef.current as Node, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (toggleBodyRef.current === null || toggleContentRef.current === null) return;
      if (toggleBodyRef.current.clientHeight > 0) {
        toggleBodyRef.current.style.height = '0';
      } else {
        toggleBodyRef.current.style.height = `${toggleContentRef.current.clientHeight}px`;
      }
      setIsCollapsed(!isCollapsed);
    },
    [isCollapsed],
  );

  return { filled, isCollapsed, handleButtonClick, toggleBodyRef, toggleContentRef };
}

export default useToggle;
