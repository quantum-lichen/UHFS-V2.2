import React from 'react';
import { FileNode } from '../types';
import { Folder, FileCode, ChevronRight, ChevronDown } from 'lucide-react';

interface FileTreeProps {
  node: FileNode;
  level?: number;
}

const FileTreeItem: React.FC<FileTreeProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(node.isOpen || false);
  const hasChildren = node.children && node.children.length > 0;

  const toggle = () => {
    if (hasChildren) setIsOpen(!isOpen);
  };

  return (
    <div className="select-none font-mono text-sm">
      <div 
        className={`flex items-center gap-2 py-1 px-2 hover:bg-white/10 cursor-pointer rounded transition-colors ${level === 0 ? 'text-neon-cyan font-bold' : 'text-gray-300'}`}
        style={{ paddingLeft: `${level * 1.2}rem` }}
        onClick={toggle}
      >
        <span className="opacity-50 text-xs w-4">
            {hasChildren && (isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
        </span>
        
        {node.type === 'folder' ? (
          <Folder size={16} className={hasChildren ? 'text-phi-gold' : 'text-gray-500'} />
        ) : (
          <FileCode size={16} className="text-neon-magenta" />
        )}
        
        <span>{node.name}</span>
        
        {node.description && (
          <span className="ml-auto text-xs text-gray-500 italic hidden sm:block">
            {node.description}
          </span>
        )}
      </div>

      {isOpen && hasChildren && (
        <div className="border-l border-white/10 ml-[0.6rem]">
          {node.children?.map((child, i) => (
            <FileTreeItem key={i} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileTreeItem;