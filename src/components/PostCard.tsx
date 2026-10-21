import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { SkillBadge } from './SkillBadge';
import { LikeButton } from './LikeButton';
import type { PostItem } from '../data/posts';

export function PostCard({ post }: { post: PostItem }) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  return (
    <Card>
      <h2 className="post-card__title">{post.title}</h2>
      <p className="text-muted">{post.date}</p>
      <div className="post-card__tags">
        {post.tags.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
      <p>{post.summary}</p>
      <div className="actions-row">
        <Button variant="primary" onClick={() => navigate(`/posts/${post.id}`)}>
          Read more
        </Button>
        <LikeButton count={likes} onLike={() => setLikes(likes + 1)} />
      </div>
    </Card>
  );
}
