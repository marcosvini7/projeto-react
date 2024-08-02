export function PostCard(props) {
  const { title, body, photoUrl } = props.post
  return (
    <div className="post">
      <img src={photoUrl} alt={title} />
      <div className="post-content">
        <h2> {title} </h2>
        <p> {body}</p>
      </div>
    </div>
  );
}
