interface TabItem {
  key: number;
  label: string;
  children: React.ReactNode;
}

type MediaType = 'image' | 'video' | 'file' | 'bookmark' | 'audio';
