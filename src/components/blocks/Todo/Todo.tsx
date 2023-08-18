import { HTMLAttributes, InputHTMLAttributes, useState, ChangeEvent } from 'react';
import classnames from 'classnames/bind';
import { ContentEditableChangeEvent } from 'src/hooks/useContentEditable';
import styles from './Todo.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onTextChange?: ContentEditableChangeEvent;
}

function Todo({ checked, className, children, onTextChange, ...rest }: Props) {
  const [checkState, setCheckState] = useState<boolean>(checked || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCheckState(e.target.checked);

  return (
    <div className={cx('todo-block', className)} {...rest}>
      <div className={cx('checkbox')} data-content-editable-void>
        <input type='checkbox' defaultChecked={checked} onChange={handleChange} />
        <div aria-hidden className={cx('checkbox-el')} />
      </div>
      <Text
        placeholder='할 일'
        style={{ marginTop: 0 }}
        strikeThrough={checkState}
        onTextChange={onTextChange}
      >
        {children as string}
      </Text>
    </div>
  );
}

export default Todo;
