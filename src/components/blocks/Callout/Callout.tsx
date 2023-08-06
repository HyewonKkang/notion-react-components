import React, { HTMLAttributes, cloneElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Callout.module.css';
import Icon from '../../common/Icon';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  emoji?: string;
}

function Callout({ emoji, children, ...rest }: Props) {
  return (
    <div className={cx('callout-block')} {...rest}>
      <div>
        <Icon icon={emoji} />
      </div>
      <div className={cx('callout-contents')}>
        <div className={cx('inner-block')}>
          {React.isValidElement(children) && children.type === Text
            ? cloneElement(children, {
                ...children.props,
                placeholder: '내용을 입력하세요',
                style: { marginTop: '1px' },
              })
            : children}
        </div>
      </div>
    </div>
  );
}

export default Callout;
