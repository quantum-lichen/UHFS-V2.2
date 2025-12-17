export interface Badge {
  label: string;
  value: string;
  color: string;
  link: string;
}

export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  description?: string;
  isOpen?: boolean;
}

export interface RoadmapItem {
  quarter: string;
  title: string;
  desc: string;
  completed: boolean;
}

export interface ArchitectureLayer {
  name: string;
  desc: string;
  color: string;
  icon: string;
}