import {
  HTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  Children,
} from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';
import { ReactComponent as ToggleIcon } from '../../../assets/icons/toggle.svg';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  contents?: ReactElement;
}

function ToggleList({ contents, ...rest }: Props) {
  const toggleBodyRef = useRef<HTMLDivElement>(null);
  const toggleContentRef = useRef<HTMLDivElement>(null);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(!!contents);

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

  useEffect(() => {
    if (!toggleContentRef.current) return;
    if (toggleContentRef.current.children.length === 0) setFilled(false);
    else setFilled(true);
  }, [toggleContentRef]);

  return (
    <div className={cx('list-block', 'toggle-header')} {...rest}>
      <div className={cx('toggle-icon-wrapper')}>
        <button
          className={cx('toggle-icon', { filled, opened: isCollapsed })}
          aria-label='열기'
          onClick={handleButtonClick}
        >
          <ToggleIcon />
        </button>
      </div>
      <div className={cx('toggle-body-wrapper')}>
        <Text placeholder='토글' style={{ marginTop: 0 }} />
        <div className={cx('toggle-body')} ref={toggleBodyRef}>
          <div className={cx('contents')} ref={toggleContentRef}>
            {contents}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleList;
