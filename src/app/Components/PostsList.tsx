import PostCard from './PostCard';
import { Posts } from '../types/posts';

const PostsList = ({ posts }: { posts: Posts[] | null }) => {
  return (
    <>
        {
            posts?.map(post => {
            const { id, users, content } = post;
            const { username: userName, name: userFullName, avatar_url: avatarUrl } = users;

            return <PostCard key={id} userFullName={userFullName} userName={userName} avatarUrl={avatarUrl} content={content} />
            })
        }
    </>
  )
}

export default PostsList