import { HTMLAttributes, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as BookmarkIcon } from 'src/assets/icons/bookmark.svg';
import styles from '../Media.module.css';
import Media from '../Media';
import LinkEmbedContent from '../MediaModal/LinkEmbedContent';
import BookmarkInfo from './BookmarkInfo';

const cx = classnames.bind(styles);

export interface OGInfo {
  url: string;
  title?: string;
  desc?: string;
  image?: string;
  icon?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
}

function Bookmark({ src, ...rest }: Props) {
  return (
    <Media
      src={src}
      type='bookmark'
      icon={<BookmarkIcon />}
      description='북마크 추가'
      embeddedClassName='bookmark-embedded'
      modalItems={[
        {
          key: 0,
          label: `링크 임베드`,
          children: (
            <LinkEmbedContent
              placeholder='URL을 붙여넣으세요(https://...)'
              buttonText='북마크 생성'
              description='링크로 시각적 북마크 생성'
            />
          ),
        },
      ]}
      {...rest}
    >
      <BookmarkInfo />
    </Media>
  );
}

export default Bookmark;
