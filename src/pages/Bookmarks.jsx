import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils/localStorage";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
   const handleDelete = (id) => {
     deleteBlog(id);
     const storedBlogs = getBlogs();
     setBlogs(storedBlogs);
   };
   if(blogs.length < 1) {
    return <EmptyState message={"No Bookmarks Found!"} address={"/blogs"} label={"Browse Blogs"}></EmptyState>;
   }
  return (
    <section className=" px-6 sm:px-8 lg:px-12 py-8">
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              handleDelete={handleDelete}
              key={blog.id}
              deletable={true}
              blog={blog}
            ></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
