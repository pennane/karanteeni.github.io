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
        <article className="post">
            <h2 className="post-title">{postData.title}</h2>
            <div className="secondary-color">
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    )
}
