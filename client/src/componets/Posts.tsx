

type Props = {
    posts:{
        albumId: number
        id: number
        title: string
        url: string
        thumbnailUrl: string
    }[]
}

const Posts = ({ posts }: Props) => {
    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>{post.id}</p>
            ))}
        </div>
    )
}
export default Posts