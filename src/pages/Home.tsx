import { Link } from 'react-router-dom';
import { ProfileCard } from '../components/ProfileCard';
import { PostCard } from '../components/PostCard';
import { SkillBadge } from '../components/SkillBadge';
import avatar from '../assets/me.jpg';
import { posts } from '../data/posts';

const author = {
  name: 'Arslan Alisher',
  role: 'IT Management Student at KBTU',
  bio: "I'm a third-year undergraduate at KBTU who loves games and web development. Here I write short notes on building interfaces with React, TypeScript and CSS.",
  avatar,
};

const skills = ['React', 'TypeScript', 'React Router', 'CSS Tokens', 'Vitest'];

export default function Home() {
  return (
    <>
      <section className="contact">
        <h1>Welcome to My Blog</h1>
        <ProfileCard user={author} />
        <div className="post-card__tags">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <section>
        <h2>Recent Posts</h2>
        <div className="post-grid" style={{ marginTop: 'var(--space-3)' }}>
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <Link to="/posts">View all posts</Link>
        </p>
      </section>
    </>
  );
}
