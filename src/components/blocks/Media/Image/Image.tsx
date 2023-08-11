import { HTMLAttributes, ImgHTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as PictureIcon } from 'src/assets/icons/picture.svg';
import styles from '../Media.module.css';
import Media from '../Media';
import LinkEmbedContent from '../MediaModal/LinkEmbedContent';
import UploadContent from '../MediaModal/UploadContent';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  width?: ImgHTMLAttributes<HTMLImageElement>['width'];
  height?: ImgHTMLAttributes<HTMLImageElement>['height'];
}

function Image({ width, height, src, ...rest }: Props) {
  return (
    <Media
      src={src}
      type='image'
      icon={<PictureIcon />}
      description='이미지 추가'
      hasBlockResizer
      embeddedClassName='image-embedded'
      modalItems={[
        {
          key: 0,
          label: `업로드`,
          children: (
            <UploadContent buttonText='파일 업로드' type='image' className={cx('white-button')} />
          ),
        },
        {
          key: 1,
          label: `링크 임베드`,
          children: (
            <LinkEmbedContent
              placeholder='이미지 링크 붙여넣기'
              buttonText='이미지 임베드'
              description='웹에 있는 모든 이미지와 호환됨'
            />
          ),
        },
      ]}
      {...rest}
    >
      <img loading='lazy' src={src} alt='uploaded by user' width={width} height={height} />
    </Media>
  );
}

export default Image;
