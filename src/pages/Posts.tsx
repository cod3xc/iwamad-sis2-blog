import { PostCard } from '../components/PostCard';
import { posts } from '../data/posts';

export default function Posts() {
  return (
    <section>
      <h1>Posts</h1>
      <div className="post-grid">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
