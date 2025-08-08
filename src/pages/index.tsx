import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './Dashboard'


const DesktopPage = lazy(() => import('./Desktop'));
const DocumentsPage = lazy(() => import('./Documents'));
const DownloadsPage = lazy(() => import('./Downloads'));
const MusicPage = lazy(() => import('./Music'));
const PicturesPage = lazy(() => import('./Pictures'));
const VideosPage = lazy(() => import('./Videos'));
const FullstackPage = lazy(() => import('../pages/Desktop/fullstack'))

function Pages() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Navigate to="/" replace /> },
        {
           path: 'desktop', element: <DesktopPage />,
           children: [
            {path: 'fullstack', element: <FullstackPage />}
           ]
           },
        { path: 'documents', element: <DocumentsPage /> },
        { path: 'downloads', element: <DownloadsPage /> },
        { path: 'music', element: <MusicPage /> },
        { path: 'pictures', element: <PicturesPage /> },
        { path: 'videos', element: <VideosPage /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div className="p-4 text-gray-500">Loading...</div>}>
      {routes}
    </Suspense>
  );
}

export default React.memo(Pages);
