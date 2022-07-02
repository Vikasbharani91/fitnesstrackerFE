import { useEffect, useState } from "react"
import { matchPath, Outlet, useLocation } from "react-router-dom";
import BlogService from "../../services/blogs.service";
import ArticleCard, { ArticleCardProps } from "../common/ArticleCard/ArticleCard";
import './Blogs.scss'

const getBlogs = async (setter: Function) => {
    const list = await BlogService.GetBlogList();
    setter(list);
}

export default function Blogs() {
    const [blogList, setBlogList] = useState<ArticleCardProps[]>([]);
    useEffect( () => {
        getBlogs(setBlogList)
    }, [setBlogList])
    return <><div className="blogs-list__container">
        {!matchPath('/blogs/:blogId', useLocation().pathname) && blogList.map((prop, index) => <ArticleCard {...prop} key={`${prop.blogId}-${index}`}></ArticleCard>)}
    </div><Outlet /></>
}