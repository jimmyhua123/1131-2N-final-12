import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  HomeLayout_xx,
  HomePage_xx,
  BlogStaticPage_xx,
  BlogNodePage_xx,
  BlogSupaPage_xx,
  BlogSupaPage2_xx,
} from './pages'

import { P1Page_xx, P2Page_xx, P3Page_xx, P4Page_xx } from './pages/mid_xx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_xx />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: 'static_xx',
        element: <BlogStaticPage_xx />,
      },
      {
        path: 'node_xx',
        element: <BlogNodePage_xx />,
      },
      {
        path: 'supa_xx',
        element: <BlogSupaPage_xx />,
      },
      {
        path: 'supa2_xx',
        element: <BlogSupaPage2_xx />,
      },
    ],
  },
  {
    path: '/mid_xx',
    element: <HomeLayout_xx />,
    children: [
      {
        path: 'p1_xx',
        element: <P1Page_xx />,
      },
      {
        path: 'p2_xx',
        element: <P2Page_xx />,
      },
      {
        path: 'p3_xx',
        element: <P3Page_xx />,
      },
      {
        path: 'p4_xx',
        element: <P4Page_xx />,
      },
    ],
  },
])

const App_xx = () => {
  return <RouterProvider router={router} />
}

export default App_xx
