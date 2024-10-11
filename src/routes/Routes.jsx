import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Blogs from "../pages/Blogs.jsx";
import Bookmarks from "../pages/Bookmarks.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Blog from "../pages/Blog.jsx";
import Author from "../components/Author.jsx";
import Content from "../components/Content.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:blogId",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
