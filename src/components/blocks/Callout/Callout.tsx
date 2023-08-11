import { HTMLAttributes, cloneElement, useEffect, Children, isValidElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Callout.module.css';
import Icon from '../../common/Icon';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  emoji?: string;
  fontColor?: NotionColor;
  backgroundColor?: NotionColor;
}

function Callout({
  emoji,
  fontColor,
  backgroundColor = 'gray',
  className,
  children = <Text placeholder='내용을 입력하세요' style={{ marginTop: '1px' }} />,
  ...rest
}: Props) {
  const textDefaultProps = {
    placeholder: '내용을 입력하세요',
    style: { marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
  };

  return (
    <div
      className={cx(
        'callout-block',
        {
          [`${backgroundColor}-background`]: backgroundColor,
          [`${fontColor}-font`]: fontColor,
          'white-background': fontColor,
        },
        className,
      )}
      {...rest}
    >
      <div>
        <Icon icon={emoji} height={24} />
      </div>
      <div className={cx('callout-contents')}>
        <div className={cx('inner-block')}>
          {Children.map(children, (child) => {
            if (isValidElement(child) && child.type === Text) {
              return cloneElement(child, { ...child.props, ...textDefaultProps });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
}

export default Callout;
