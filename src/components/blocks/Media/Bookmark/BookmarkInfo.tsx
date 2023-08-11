import { AnchorHTMLAttributes, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import BetaComponent from 'src/components/common/Beta';
import styles from '../Media.module.css';

const cx = classnames.bind(styles);

export interface OGInfo {
  url: string;
  title?: string;
  desc?: string;
  image?: string;
  icon?: string;
}

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src?: string;
}

function BookmarkInfo({ src, ...rest }: Props) {
  const [ogInfo, setOGInfo] = useState<OGInfo | null>(null);

  const extractContent = (str: string, key: string = 'content') => {
    const regex = new RegExp(`${key}="(.*?)"`);
    const matches = str.match(regex);
    return matches && matches[1];
  };

  const onClickOpenGraph = async () => {
    try {
      if (!src) return;
      const response = await fetch(src);
      const data = await response.text();

      const ogTitles = data.split('<meta').filter((el) => el.includes('og:title'))[0];
      const ogDescription = data.split('<meta').filter((el) => el.includes('og:description'))[0];
      const ogImage = data.split('<meta').filter((el) => el.includes('og:image'))[0];
      const favicon = data
        .split('<link')
        .filter((el) => el.includes('rel="icon"') || el.includes('rel="shortcut icon"'))[0];

      setOGInfo({
        url: src,
        title: extractContent(ogTitles) || undefined,
        desc: extractContent(ogDescription) || undefined,
        image: extractContent(ogImage) || undefined,
        icon: extractContent(favicon, 'href') || undefined,
      });
    } catch (error) {
      setOGInfo(null);
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    onClickOpenGraph();
  }, [src]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {ogInfo ? (
        <a className={cx('bookmark')} href={src} target='_blank' rel='noreferrer' {...rest}>
          <div className={cx('content')}>
            <div>{ogInfo?.title}</div>
            <div>{ogInfo?.desc}</div>
            <div>
              <img src={ogInfo?.icon} alt='og-icon' />
              <div>https://www.notion.so/ko-kr/help/language-and-region-settings</div>
            </div>
          </div>
          <div className={cx('image')}>
            <div>
              <img src={ogInfo?.image} alt='og-img' />
            </div>
          </div>
        </a>
      ) : (
        <BetaComponent />
      )}
    </>
  );
}

export default BookmarkInfo;
