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

type DatabasePropertiesTypes = 'Text' | 'Select' | 'Multi-select' | 'Status' | 'Date' | 'URL';

interface DatabaseProperties {
  text?: boolean;
  select?: boolean;
  multiSelect?: boolean;
  status?: boolean;
  date?: boolean;
  url?: boolean;
}

type StatusProperty = 'todo' | 'progress' | 'complete' | string;

type TagColor = NotionColor | 'lightGray';

interface SelectTagType {
  tag: string;
  color?: TagColor;
}

interface Status {
  tag: StatusProperty;
  color?: TagColor;
}

interface ItemProperties {
  text?: string;
  select?: SelectTagType;
  multiSelect?: Array<SelectTagType>;
  status?: Status;
  date?: Date;
  url?: string;
}

interface GalleryItemInfo extends PageInfo, ItemProperties {
  thumbnail?: string;
}
