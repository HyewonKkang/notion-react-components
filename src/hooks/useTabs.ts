import { useState, useCallback } from 'react';

interface useTabsProps {
  items: Array<TabItem>;
  defaultActiveKey?: TabItem['key'];
}

function useTabs({ defaultActiveKey }: useTabsProps) {
  const [activeTabKey, setActiveTabKey] = useState<number>(defaultActiveKey || 0);

  const setActiveTab = useCallback((key: TabItem['key']) => setActiveTabKey(key), []);

  return { activeTabKey, setActiveTab };
}

export default useTabs;
