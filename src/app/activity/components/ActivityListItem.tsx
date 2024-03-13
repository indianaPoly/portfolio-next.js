"use client";
import { ActivityFeature, ActivityItemValue } from "@/types/activity.type";
import { useEffect, useState } from "react";

export const ActivityListItem = ({
  activity,
}: {
  activity: ActivityItemValue<ActivityFeature>;
}) => {
  const [categoryColor, setCategoryColor] = useState("");

  useEffect(() => {
    if (activity.activityCategory === "tech") {
      setCategoryColor("ececec");
    }
    if (activity.activityCategory === "non-tech") {
      setCategoryColor("e9ecf6");
    }
    if (activity.activityCategory === "etc") {
      setCategoryColor("333333");
    }
  }, [activity]);

  console.log(categoryColor);

  return (
    <div className="w-[500px] p-[20px] flex justify-start gap">
      <div className={`bg-[#${categoryColor}]`}>
        <span>{activity.activityCategory}</span>
      </div>
      {activity.activityScope !== undefined && (
        <span>{activity.activityScope}</span>
      )}
      <span>{activity.activityName}</span>
      <span>{activity.activityPeriod}</span>
    </div>
  );
};
