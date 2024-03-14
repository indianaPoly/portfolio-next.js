import { ActivityFeature, ActivityItem } from "@/types/activity.type";

export const ActivityListItem = ({
  value,
}: {
  value: ActivityItem<ActivityFeature>;
}) => {
  return (
    <li className="w-[500px] p-[20px] flex justify-start gap">
      <span>{value.activityCategory}</span>
      {value.activityScope !== undefined && <span>{value.activityScope}</span>}
      <span>{value.activityName}</span>
      <span>{value.activityPeriod}</span>
    </li>
  );
};
