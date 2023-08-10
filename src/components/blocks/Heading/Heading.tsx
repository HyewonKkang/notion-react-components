import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Heading.module.css';

const cx = classnames.bind(styles);

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  tag: HeadingTag;
  children?: string;
}

const PlaceholderByTag: Record<HeadingTag, string> = {
  h1: '제목 없음',
  h2: '제목1',
  h3: '제목2',
  h4: '제목3',
};

function Heading({ tag, children, className, ...rest }: Props) {
  const Tag = tag;

  return (
    <div className={cx(`${tag}-wrapper`, className)}>
      <Tag
        className={cx(`${children === '' ? 'placeholder' : ''}`)}
        contentEditable
        spellCheck
        suppressContentEditableWarning
        placeholder={PlaceholderByTag[tag]}
        {...rest}
      >
        {children}
      </Tag>
    </div>
  );
}

export default Heading;
