import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  status: Status;
}

export const defaultStatusMap = new Map([
  ['todo', { title: 'Not started', circleColor: 'gray' }],
  ['progress', { title: 'In Progress', circleColor: 'green' }],
  ['complete', { title: 'Done', circleColor: 'blue' }],
]);

function Status({ className, status, ...rest }: Props) {
  const { title, circleColor } = defaultStatusMap.get(status.tag) || {
    title: status.tag,
    circleColor: 'gray',
  };
  const statusColor = status.color || circleColor;

  return (
    <div className={cx('status-wrapper', className)} {...rest}>
      <div className={cx('status', statusColor)}>
        <div className={cx('status-circle', `${statusColor}-circle`)} />
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Status;
