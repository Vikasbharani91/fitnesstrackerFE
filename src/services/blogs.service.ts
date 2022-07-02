import { ArticleCardProps } from "../components/common/ArticleCard/ArticleCard";
import dateReader from "../utils/dateReader";


type BlogType = {
    title: string,
    content: string,
    blogId: string,
    datePublished: string,
    dateModified: string,
    imageSrc: string,
}

class BlogService {
    static serviceUrl = 'https://wefitnesstracker.herokuapp.com/';

    static GetBlogList = async () => {
        const data = await fetch(`${BlogService.serviceUrl}blog`).then(res => res.json() as Promise<BlogType[]>);

        return data.map(item => ({
            ...item,
            dateModified: dateReader(item.dateModified),
            datePublished: dateReader(item.datePublished)
        })) as ArticleCardProps[];
    }

    static GetBlogDetails = async (blogId: string) => {

        const blog = await fetch(`${BlogService.serviceUrl}blogById/${blogId}`).then(res => res.json() as Promise<BlogType>);

        return {
            ...blog,
            dateModified: dateReader(blog.dateModified),
            datePublished: dateReader(blog.datePublished)
        }
    }
}

export default BlogService;