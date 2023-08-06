import { HTMLAttributes, InputHTMLAttributes, useState, ChangeEvent } from 'react';
import classnames from 'classnames/bind';
import styles from './Todo.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
}

function Todo({ checked, ...rest }: Props) {
  const [checkState, setCheckState] = useState<boolean>(checked || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCheckState(e.target.checked);

  return (
    <div className={cx('todo-block')} {...rest}>
      <div className={cx('checkbox')} data-content-editable-void>
        <input type='checkbox' defaultChecked={checked} onChange={handleChange} />
        <div aria-hidden className={cx('checkbox-el')} />
      </div>
      <Text placeholder='할 일' style={{ marginTop: 0 }} strikeThrough={checkState} />
    </div>
  );
}

export default Todo;
