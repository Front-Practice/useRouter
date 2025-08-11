import React from 'react';
import { FileItem } from '../../components/fileItem';
import { useOutlet } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs'

const DesktopPage = () => {
  const outlet = useOutlet();
  if (outlet) return <>{outlet}</>;

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Desktop</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="fullstack" 
          type="folder" 
          path="/desktop/fullstack" 
        />
        <FileItem 
          name="homework" 
          type="folder" 
          path="/desktop/homework" 
        />
        <FileItem 
          name="nt" 
          type="folder" 
          path="/desktop/nt" 
        />
      </div>
    </div>
  );
};

export default React.memo(DesktopPage);