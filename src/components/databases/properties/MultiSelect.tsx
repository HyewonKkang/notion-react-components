import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';
import Select from './Select';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  selects?: ItemProperties['multiSelect'];
}

function MultiSelect({ className, selects, ...rest }: Props) {
  return (
    <div className={cx('multi-select-wrapper', className)} {...rest}>
      {selects?.map((item) => (
        <Select key={item.tag} color={item.color}>
          {item.tag}
        </Select>
      ))}
    </div>
  );
}

export default MultiSelect;
