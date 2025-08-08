import React from 'react';
import { Link } from 'react-router-dom';
import { FaFolder, FaFile } from 'react-icons/fa';

interface ItemProps {
  name: string;
  type: 'folder' | 'file';
  path: string;
}

export const FileItem: React.FC<ItemProps> = ({ name, type, path }) => {
  return (
    <Link
      to={path}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
    >
      {type === 'folder' 
        ? <FaFolder className="text-6xl text-blue-500 mb-2" /> 
        : <FaFile className="text-6xl text-gray-400 mb-2" />
      }
      <span className="text-center text-sm truncate w-full">{name}</span>
    </Link>
  );
};