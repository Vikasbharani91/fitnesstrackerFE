import { Link } from "react-router-dom";
import './ArticleCard.scss';

export type ArticleCardProps = {
    blogId: string,
    title: string,
    imageSrc: string,
    content: string,
    datePublished: Date,
    dateModified: Date,
    author?: string
}

function ArticleCardContent(props: ArticleCardProps) {
    return (<div className="article-card__link-container">
        <div className="article-card__link-image-wrapper">
            <img className="article-card__link-image" src={props.imageSrc} alt={props.title.substring(0,70) + ' image'} />
        </div>
        <div className="article-card__text">
            <h3 className="article-card__title">{props.title.substring(0,70)}</h3>
            <div className="article-card__content" dangerouslySetInnerHTML={{__html: props.content.substring(0,300)}}></div>
            <div className="article-card__date-panel">
                <p className="article-card__date-publish">Published on: {props.datePublished.toDateString()}</p>
                <p className="article-card__date-modified">Modified on: {props.dateModified.toDateString()}</p>
            </div>
        </div>
    </div>)
}

export default function ArticleCard (props: ArticleCardProps) {
    return <Link className="article-card__link" to={`/blogs/${props.blogId}`}><ArticleCardContent {...props}/></Link>
}