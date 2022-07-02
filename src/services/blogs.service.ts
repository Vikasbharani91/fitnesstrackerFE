import { ArticleCardProps } from "../components/common/ArticleCard/ArticleCard";


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
            dateModified: new Date(item.dateModified),
            datePublished: new Date(item.datePublished)
        })) as ArticleCardProps[];
    }

    static GetBlogDetails = async (blogId: string) => {

        const blog = await fetch(`${BlogService.serviceUrl}blogById/${blogId}`).then(res => res.json() as Promise<BlogType>);

        return {
            ...blog,
            dateModified: new Date(blog.dateModified),
            datePublished: new Date(blog.datePublished)
        }
    }
}

export default BlogService;