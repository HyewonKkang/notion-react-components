import { AnchorHTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import Emoji from 'src/components/common/Emoji';
import styles from './ChildPage.module.css';
import { ReactComponent as PageIcon } from '../../../assets/icons/page.svg';

const cx = classnames.bind(styles);

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string;
  href: string;
  icon?: string;
}

function ChildPage({ title = '제목 없음', href, icon, className, ...rest }: Props) {
  return (
    <div className={cx('page-block', className)}>
      <a href={href} {...rest}>
        <div className={cx('page-link')}>
          <div className={cx('page-link-inner')}>
            <div className={cx('page-icon')}>
              {icon ? <Emoji icon={icon} height={24} /> : <PageIcon />}
            </div>
            <div className={cx('page-title')}>{title}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ChildPage;
