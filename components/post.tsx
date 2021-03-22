import utilStyles from '../styles/utils.module.css'
import Date from './date'

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <article>
            <h2 className={utilStyles.headingXl}>{postData.title}</h2>
            <div className="secondary-color">
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    )
}
