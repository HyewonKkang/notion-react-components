import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ContentEditableChangeEvent } from 'src/hooks/useContentEditable';
import styles from './Quote.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  onTextChange?: ContentEditableChangeEvent;
}

function Quote({ children, className, onTextChange, ...rest }: Props) {
  return (
    <div className={cx('quote-block', className)} {...rest}>
      <blockquote>
        <div className={cx('quote')}>
          {children || (
            <Text
              placeholder='비어 있는 인용'
              style={{ margin: 0, padding: 0 }}
              onTextChange={onTextChange}
            />
          )}
        </div>
      </blockquote>
    </div>
  );
}

export default Quote;
