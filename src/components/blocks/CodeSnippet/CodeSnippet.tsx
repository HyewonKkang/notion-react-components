/* eslint-disable import/no-extraneous-dependencies */
import { HTMLAttributes, useState, ChangeEvent, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import styles from './CodeSnippet.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  language?: string;
  code?: string;
}

function CodeSnippet({ code = '', language = 'text', className, ...rest }: Props) {
  const [codeString, setCodeString] = useState<string | undefined>(code);

  const handleInput = () => {};

  const handleBlur = () => {
    hljs.highlightAll();
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className={cx('code-wrapper', className)} {...rest}>
      <pre>
        <code
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onBlur={handleBlur}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeSnippet;
