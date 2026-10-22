import { ProfileCard } from '../components/ProfileCard';
import { SkillBadge } from '../components/SkillBadge';
import { Card } from '../components/ui/Card';
import avatar from '../assets/me.jpg';

const user = {
  name: 'Arslan Alisher',
  role: 'IT Management Student at KBTU',
  bio: 'Frontend student building a dev blog with React and TypeScript.',
  avatar,
};

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <ProfileCard user={user} />
      <Card>
        <p>
          Email: <a href="mailto:a_alisher@kbtu.kz">a_alisher@kbtu.kz</a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/cod3xc" target="_blank" rel="noreferrer">
            github.com/cod3xc
          </a>
        </p>
        <div className="post-card__tags">
          {['React', 'TypeScript', 'CSS', 'Git'].map((s) => (
            <SkillBadge key={s} skill={s} />
          ))}
        </div>
      </Card>
    </section>
  );
}
