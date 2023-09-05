import { HTMLAttributes, Children, isValidElement, cloneElement, ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Columns.module.css';
import Segment from './ColumnsSegment';

const cx = classnames.bind(styles);

export type ColumnsSize = 2 | 3 | 4 | 5;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  divisionCount?: number;
}

function Columns({ divisionCount = 2, className, children, ...rest }: Props) {
  const validChildren = Children.toArray(children)
    .filter((child) => isValidElement(child) && child.type === Columns.Segment)
    .slice(0, divisionCount);

  const childrenWithSizeProp = validChildren.map((child, index) =>
    // eslint-disable-next-line react/no-array-index-key
    cloneElement(child as ReactElement, { size: divisionCount, key: index }),
  );

  return (
    <div className={cx(`columns`, className)} {...rest}>
      {childrenWithSizeProp}
    </div>
  );
}

export default Columns;

Columns.Segment = Segment;
