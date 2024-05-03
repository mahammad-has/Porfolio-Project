import { Button } from './ui/button';
import { Achievement } from '@/types/content-items';

export const AchievementItem = (achievement: Achievement) => {
  return (
    <div className="bg-card-custom p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 ease-in-out items-center flex flex-col justify-between gap-2">
      <div>
        <h3 className="text-xl font-semibold text-center">
          {achievement.title}
        </h3>
        <p className="text-primary-cta text-center">{achievement.type}</p>
        <p className="mt-4">{achievement.description}</p>
      </div>
      <div>
        <Button
          className="mt-2 md:mt-4 text-lg md:text-xl px-8 md:px-16 uppercase"
          asChild
        >
          <a href={achievement.link}>View</a>
        </Button>
      </div>
    </div>
  );
};
