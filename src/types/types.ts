export interface Tab {
  id: string;
  title: string;
  content: string;
}

export interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}