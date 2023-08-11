/* eslint-disable jsx-a11y/media-has-caption */
import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as AudioIcon } from 'src/assets/icons/audio.svg';
import styles from '../Media.module.css';
import Media from '../Media';
import LinkEmbedContent from '../MediaModal/LinkEmbedContent';
import UploadContent from '../MediaModal/UploadContent';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
}

function Audio({ src, ...rest }: Props) {
  return (
    <Media
      src={src}
      type='audio'
      icon={<AudioIcon />}
      description='오디오 파일 추가'
      embeddedClassName='audio-embedded'
      modalItems={[
        {
          key: 0,
          label: `업로드`,
          children: <UploadContent buttonText='파일을 선택하세요' />,
        },
        {
          key: 1,
          label: `링크 임베드`,
          children: (
            <LinkEmbedContent
              placeholder='https://...'
              buttonText='오디오 임베드'
              description='MP3, .WAV, OGG와 호환됨'
            />
          ),
        },
      ]}
      {...rest}
    >
      <audio controls src={src} />
    </Media>
  );
}

export default Audio;
