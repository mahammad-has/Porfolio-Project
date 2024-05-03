import { AchievementItem } from '@/components/achievement';
import { achievements } from '@/content/content';

export default function Achievements() {
  return (
    <section className="py-5 md:py-20 px-10 md:px-52 min-h-full">
      <h2 className="text-4xl md:text-6xl text-center mb-12 uppercase text-primary-cta">
        Achievements
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
}
