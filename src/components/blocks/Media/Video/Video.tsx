import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as VideoIcon } from 'src/assets/icons/video.svg';
import styles from '../Media.module.css';
import Media from '../Media';
import LinkEmbedContent from '../MediaModal/LinkEmbedContent';
import UploadContent from '../MediaModal/UploadContent';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
}

function Video({ src, ...rest }: Props) {
  const isUrl = typeof src === 'string' && src.startsWith('http');

  return (
    <Media
      src={src}
      type='video'
      icon={<VideoIcon />}
      description='동영상 임베드 또는 업로드'
      hasBlockResizer
      embeddedClassName='video-embedded'
      modalItems={[
        {
          key: 0,
          label: `링크 임베드`,
          children: (
            <LinkEmbedContent
              placeholder='동영상 링크 붙여넣기'
              buttonText='동영상 임베드'
              description='Youtube, Vimeo 등과 호환됨'
            />
          ),
        },
        {
          key: 1,
          label: `업로드`,
          children: <UploadContent buttonText='동영상을 선택하세요' type='video' />,
        },
      ]}
      {...rest}
    >
      {isUrl ? (
        <iframe src={src} allowFullScreen title='uploaded by user' />
      ) : (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video src={src} controls />
      )}
    </Media>
  );
}

export default Video;
