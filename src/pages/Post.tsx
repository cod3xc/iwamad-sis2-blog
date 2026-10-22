import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LikeButton } from '../components/LikeButton';
import { SkillBadge } from '../components/SkillBadge';
import { posts } from '../data/posts';

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);

  if (!post) {
    return (
      <section className="contact">
        <Card>
          <h1>Post not found</h1>
          <p className="text-muted">No post with ID {id} exists.</p>
          <p>
            <Link to="/posts">← Back to posts</Link>
          </p>
        </Card>
      </section>
    );
  }

  return (
    <Card>
      <h1>{post.title}</h1>
      <p className="text-muted">{post.date}</p>
      <div className="post-card__tags">
        {post.tags.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
      <p>{post.body}</p>
      <div className="actions-row">
        <LikeButton count={likes} onLike={() => setLikes(likes + 1)} />
        <Button variant="secondary" onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide comments' : `Show comments (${post.comments.length})`}
        </Button>
      </div>
      {showComments && (
        <ul className="comments-list">
          {post.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
      <Link to="/posts">← Back to posts</Link>
    </Card>
  );
}
