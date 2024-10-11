import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import placeholderImage from "../assets/404.jpg";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, tags, body_html, url } = blog;
  return (
    <div className="mx-auto group hover:no-underline focus:no-underline transition border border-primary rounded-md p-2 overflow-hidden shadow-md">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 ">
        {tags.map((tag, index) => (
          <a key={index} className="px-3 py-1 rounded-sm hover:underline">
            #{tag}
          </a>
        ))}
      </div>
      <div className="p-2">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>
        <Markdown className={"text-wrap"} rehypePlugins={rehypeRaw}>
          {body_html}
        </Markdown>
      </div>
    </div>
  );
};

export default Content;
