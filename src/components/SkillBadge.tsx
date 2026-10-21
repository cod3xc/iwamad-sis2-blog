import { Tag } from './ui/Tag';

export function SkillBadge({ skill }: { skill: string }) {
  return <Tag label={skill} />;
}
