import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);

  const getImageUrl = (postId) => {
    switch (postId) {
      case '1':
        return "https://wallpaperaccess.com/full/1616141.jpg";
      case '2':
        return "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZHVhdGV8ZW58MHx8MHx8fDA%3D";
      default:
        return "https://via.placeholder.com/300";
    }
  }
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <img src={getImageUrl(post.id)} className="card-img-top" alt = {post.title} />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key = {tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post has {post.reactions} reactions.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
