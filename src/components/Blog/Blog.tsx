import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BlogService from "../../services/blogs.service";
import { ArticleCardProps } from "../common/ArticleCard/ArticleCard";
import './Blog.scss';



export default function Blog () {
    const [blog, setBlog] = useState<ArticleCardProps | null>(null);

    const blogId = useParams<string>().toString();

    useEffect(() => {
        async function getBlogDetails() {
            setBlog(await BlogService.GetBlogDetails(blogId))
        }

        getBlogDetails();
    }, [setBlog, blogId]);

    return <article className="blog__container">
        <img className="blog__featured-image" src={blog?.imageSrc} alt={`featured for ${blog?.title}`}></img>
        <h2 className="blog__title">{blog?.title}</h2>
        <div className="blog__content" dangerouslySetInnerHTML={{__html: blog?.content ?? ''}}></div>
        <div className="blog__dates_section">
            <p className="blog__date-type">Published on: <span className="blog__date-value">{blog?.datePublished.toDateString()}</span></p>
            <p className="blog__date-type">Modified on: <span className="blog__date-value">{blog?.dateModified.toDateString()}</span></p>
        </div>
    </article>
}