import { ActivityFeature, ActivityItem } from "@/types/activity.type";
import { ActivityListItem } from "./ActivityListItem";

interface ActivityListProps<T extends ActivityFeature> {
  data: ActivityItem<T>[];
}

export const ActivityList = <T extends ActivityFeature>({
  data,
}: ActivityListProps<T>) => {
  return (
    <ul>
      {data.map((item) => (
        <ActivityListItem key={item.activityName} value={item} />
      ))}
    </ul>
  );
};
