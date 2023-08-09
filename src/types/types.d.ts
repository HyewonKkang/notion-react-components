interface PageInfo {
  title: string;
  icon?: string;
  href?: string;
}

interface PageGroupInfo {
  tag: string;
  pages: PageInfo[];
}

type NotionColor =
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';
