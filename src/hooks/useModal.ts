import { useRef, useState, useEffect, MouseEvent } from 'react';
import useOnClickOutside from './useOnClickOutside';

interface TriggerPosition {
  top: number;
  left: number;
  transform?: string;
}

interface useModalProps {
  initialMode?: boolean;
  horizontal?: 'center' | 'left';
}

function useModal({ initialMode = false, horizontal = 'center' }: useModalProps) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(initialMode);
  const [buttonPosition, setButtonPosition] = useState<TriggerPosition>({
    top: 0,
    left: 0,
    transform: '',
  });

  const handleClickOutside = () => setIsOpen(false);

  const handleClickInside = () => setIsOpen(true);

  useOnClickOutside(ref, handleClickOutside);

  const openModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);

    const buttonRect = (e.target as HTMLElement).getBoundingClientRect();
    const buttonCenterX = (buttonRect.left + buttonRect.right) / 2;

    setButtonPosition({
      top: buttonRect.bottom,
      left: buttonCenterX,
      transform: horizontal === 'center' ? `translateX(-50%)` : '',
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return {
    ref,
    isOpen,
    setIsOpen,
    handleClickOutside,
    handleClickInside,
    buttonPosition,
    setButtonPosition,
    openModal,
  };
}

export default useModal;
