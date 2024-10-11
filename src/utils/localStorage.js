import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  const isExist = blogs.find((blg) => blg.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  } else {
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarked Successfully!");
  }
};

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remainingBlogs = blogs.filter((blg) => blg.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remainingBlogs));
  toast.success("Blog Removed From Bookmark!");
};
