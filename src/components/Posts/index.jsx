import { PostCard } from "../PostCard"

export function Posts(props) {
  const posts = props.posts
  return (
    <div className="posts">
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />
      })}
    </div>
  )
}
