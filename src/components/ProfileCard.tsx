import { Card } from './ui/Card';

type UserProfile = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export function ProfileCard({ user }: { user: UserProfile }) {
  return (
    <Card>
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p className="text-muted">{user.role}</p>
      <p>{user.bio}</p>
    </Card>
  );
}
