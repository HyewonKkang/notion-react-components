import { HTMLAttributes } from 'react';
import BetaComponent from 'src/components/common/Beta';
import { ReactComponent as FileIcon } from 'src/assets/icons/file.svg';
import Media from '../Media';
import LinkEmbedContent from '../MediaModal/LinkEmbedContent';
import UploadContent from '../MediaModal/UploadContent';
import FileInfo from './FileInfo';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
}

function File({ src, ...rest }: Props) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {src ? (
        <BetaComponent />
      ) : (
        <Media
          src={src}
          type='file'
          icon={<FileIcon />}
          description='파일 업로드 또는 임베드'
          embeddedClassName='file-embedded'
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
                  placeholder='파일 링크를 붙여넣으세요'
                  buttonText='링크 임베드'
                  description='PDF, Google Drive, Google Maps, CodePen 등의 링크와 호환됩니다.'
                />
              ),
            },
          ]}
          {...rest}
        >
          <FileInfo />
        </Media>
      )}
    </>
  );
}

export default File;
