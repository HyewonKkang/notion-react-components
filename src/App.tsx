import './App.css';
import { useRef, useState } from 'react';
import Callout from './components/blocks/Callout';
import TitleBar from './components/layouts/TitleBar';
import { ReactComponent as GithubIcon } from './assets/icons/github.svg';
import { ReactComponent as ShareIcon } from './assets/icons/share.svg';
import Heading from './components/blocks/Heading';
import Text from './components/blocks/Text';
import Todo from './components/blocks/Todo';
import { BulletedList, NumberedList, ToggleList } from './components/blocks/List';
import Quote from './components/blocks/Quote';
import Divider from './components/blocks/Divider/Divider';
import { Image, Video, Bookmark, File, Audio } from './components/blocks/Media';
import ChildPage from './components/blocks/ChildPage/ChildPage';
import Code from './components/blocks/Code';
import CodeSnippet from './components/blocks/CodeSnippet';
import Layout from './components/layouts/Layout';

function App() {
  const GITHUB_URL = 'https://github.com/HyewonKkang/notion-react-components/';
  const navigateToGitHub = () => window.open(GITHUB_URL, '_blank');

  const siderGroups = [
    {
      tag: '개인 페이지',
      pages: [
        {
          title: 'Hyewon Kang',
          icon: '🤷',
          href: '/',
        },
        {
          title: 'React',
          icon: '💚',
          href: '/',
        },
      ],
    },
    {
      tag: '공유된 페이지',
      pages: [
        {
          title: 'James Kang',
          icon: '🧡',
          href: '/',
        },
        {
          title: 'React',
          icon: '👣',
          href: '/',
        },
      ],
    },
  ];

  return (
    <Layout hasSider>
      <Layout.Sider
        defaultCollapsed
        notionTitle='Hyewon Kang의 private notion'
        groups={siderGroups}
        footer={
          <div className='aside-bottom-addon'>
            Developed by <b>Hyewon Kang</b>
          </div>
        }
      />
      <Layout.Header
        breadcrumbs={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Application Center',
            href: '/',
            icon: '☠️',
          },
        ]}
        rightAddon={
          <div className='action-buttons'>
            <button aria-label='share-button'>
              <ShareIcon />
            </button>
            <button aria-label='github-button' onClick={navigateToGitHub}>
              <GithubIcon />
            </button>
          </div>
        }
      />
      <Layout.Body
        pageInfo={{
          title: '제목입니다',
          emoji: '❤️',
          cover: 'https://www.notion.so/images/page-cover/nasa_tim_peake_spacewalk.jpg',
        }}
      >
        <Layout.Content>
          <CodeSnippet language='javascript' code={'console.log("hello");'} />
          <ChildPage href='' icon='😅' />
          <Callout onTextChange={(text) => console.log(text)} />
          <Text onTextChange={(text) => console.log(text)} />
          <Text>
            <code>Ionic</code> 앱으로 돌아오는 이벤트를 잡는 것은 <code>iOS</code>와{' '}
            <code>android</code>가 달랐는데, <code>iOS</code>는{' '}
            <a href='/hello'>@capacitor/browser</a> 를 안드로이드는{' '}
            <a href='/hello'>@capacitor/app</a> 을 사용합니다.
          </Text>
          <Code>Hello World!</Code>
          <Code>Hello World!</Code>
        </Layout.Content>
      </Layout.Body>
    </Layout>
  );
}

export default App;
