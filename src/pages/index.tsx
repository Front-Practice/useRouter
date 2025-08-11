import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './Dashboard';

// Top-level pages
const HomePage = lazy(() => import('./home'));
const DesktopPage = lazy(() => import('./Desktop'));
const DocumentsPage = lazy(() => import('./Documents'));
const DownloadsPage = lazy(() => import('./Downloads'));
const MusicPage = lazy(() => import('./Music'));
const PicturesPage = lazy(() => import('./Pictures'));
const VideosPage = lazy(() => import('./Videos'));
const UsersPage = lazy(() => import('./users'));

// Desktop nested pages
const FullstackPage = lazy(() => import('./Desktop/fullstack'));
const HomeworkPage = lazy(() => import('./Desktop/homework'));
const NtPage = lazy(() => import('./Desktop/nt'));
const FullstackLessonPage = lazy(() => import('./Desktop/fullstack/[lesson]'));

// Documents nested pages
const ImportantPage = lazy(() => import('./Documents/important'));
const MonthlyMoneyPage = lazy(() => import('./Documents/MonthlyMoney'));

// Downloads nested pages
const ImagesPage = lazy(() => import('./Downloads/images'));
const TelegramPage = lazy(() => import('./Downloads/telegram'));

// Music nested pages
const Music1990Page = lazy(() => import('./Music/1990'));
const Music2018Page = lazy(() => import('./Music/2018'));
const NewModaPage = lazy(() => import('./Music/newModa'));
const NewModa2022Page = lazy(() => import('./Music/newModa/2022'));
const NewModa2025Page = lazy(() => import('./Music/newModa/2025'));

// Pictures nested pages
const PicturesDownloadsPage = lazy(() => import('./Pictures/downloads'));
const ScreenshotsPage = lazy(() => import('./Pictures/screenshots'));
const WallpapersPage = lazy(() => import('./Pictures/Walpapers'));

// Videos nested pages
const FamilyPage = lazy(() => import('./Videos/Family'));
const Family2010Page = lazy(() => import('./Videos/Family/2010_tashkent'));
const ThailandPage = lazy(() => import('./Videos/thailand'));

function Pages() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'desktop',
          element: <DesktopPage />,
          children: [
            { path: 'fullstack', element: <FullstackPage /> },
            { path: 'fullstack/:lesson', element: <FullstackLessonPage /> },
            { path: 'homework', element: <HomeworkPage /> },
            { path: 'nt', element: <NtPage /> },
          ],
        },
        {
          path: 'documents',
          element: <DocumentsPage />,
          children: [
            { path: 'important', element: <ImportantPage /> },
            { path: 'monthly', element: <MonthlyMoneyPage /> },
            // Example deeper nesting placeholders
            { path: 'important/passport', element: <div className="p-4">Passport folder</div> },
            { path: 'important/license', element: <div className="p-4">License folder</div> },
            { path: 'important/insurance', element: <div className="p-4">Insurance folder</div> },
            { path: 'monthly/2024', element: <div className="p-4">Monthly 2024</div> },
            { path: 'monthly/2025', element: <div className="p-4">Monthly 2025</div> },
          ],
        },
        {
          path: 'downloads',
          element: <DownloadsPage />,
          children: [
            { path: 'images', element: <ImagesPage /> },
            { path: 'telegram', element: <TelegramPage /> },
            { path: 'images/wallpapers', element: <div className="p-4">Image Wallpapers</div> },
            { path: 'images/camera', element: <div className="p-4">Camera Roll</div> },
            { path: 'telegram/docs', element: <div className="p-4">Telegram Docs</div> },
            { path: 'telegram/images', element: <div className="p-4">Telegram Images</div> },
            { path: 'telegram/videos', element: <div className="p-4">Telegram Videos</div> },
          ],
        },
        {
          path: 'music',
          element: <MusicPage />,
          children: [
            { path: '1990', element: <Music1990Page /> },
            { path: '2018', element: <Music2018Page /> },
            {
              path: 'newModa',
              element: <NewModaPage />,
              children: [
                { path: '2022', element: <NewModa2022Page /> },
                { path: '2025', element: <NewModa2025Page /> },
                { path: '2022/playlist-a', element: <div className="p-4">Playlist A</div> },
                { path: '2025/playlist-b', element: <div className="p-4">Playlist B</div> },
              ],
            },
            { path: '1990/rock', element: <div className="p-4">Rock 1990</div> },
            { path: '1990/pop', element: <div className="p-4">Pop 1990</div> },
            { path: '2018/hiphop', element: <div className="p-4">Hip-hop 2018</div> },
            { path: '2018/lofi', element: <div className="p-4">Lofi 2018</div> },
          ],
        },
        {
          path: 'pictures',
          element: <PicturesPage />,
          children: [
            { path: 'downloads', element: <PicturesDownloadsPage /> },
            { path: 'screenshots', element: <ScreenshotsPage /> },
            { path: 'wallpapers', element: <WallpapersPage /> },
            { path: 'downloads/memes', element: <div className="p-4">Memes</div> },
            { path: 'downloads/stickers', element: <div className="p-4">Stickers</div> },
            { path: 'screenshots/apps', element: <div className="p-4">App Screenshots</div> },
            { path: 'screenshots/games', element: <div className="p-4">Game Screenshots</div> },
            { path: 'wallpapers/nature', element: <div className="p-4">Nature Wallpapers</div> },
            { path: 'wallpapers/abstract', element: <div className="p-4">Abstract Wallpapers</div> },
          ],
        },
        {
          path: 'videos',
          element: <VideosPage />,
          children: [
            {
              path: 'family',
              element: <FamilyPage />,
              children: [
                { path: '2010_tashkent', element: <Family2010Page /> },
                { path: '2010_tashkent/wedding', element: <div className="p-4">Wedding</div> },
                { path: '2010_tashkent/birthday', element: <div className="p-4">Birthday</div> },
              ],
            },
            { path: 'thailand', element: <ThailandPage /> },
            { path: 'thailand/day-1', element: <div className="p-4">Thailand Day 1</div> },
            { path: 'thailand/day-2', element: <div className="p-4">Thailand Day 2</div> },
          ],
        },
        { path: 'users', element: <UsersPage /> },
        { path: '*', element: <Navigate to="/" replace /> },
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
