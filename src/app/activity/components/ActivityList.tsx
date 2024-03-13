"use client";
import { ActivityFeature, ActivityItem } from "@/types/activity.type";
import { ActivityListItem } from "./ActivityListItem";
import { useEffect, useState } from "react";

// 해당 컴포넌트를 제네릭 컴포넌트로 바꾸는 과정에 대한 고민
export const ActivityList = ({
  activityItems,
  activityFeature,
}: {
  activityItems: ActivityItem;
  activityFeature: ActivityFeature;
}) => {
  const [isState, setIsState] = useState<ActivityFeature | "loading">(
    "loading"
  );

  useEffect(() => {
    if (activityFeature === "external") {
      setIsState("external");
    } else {
      setIsState("internal");
    }
  }, [activityItems]);

  return (
    <ul>
      {isState === "external" &&
        activityItems.external.map((item) => {
          return (
            <li key={item.activityName}>
              <ActivityListItem activity={item} />
            </li>
          );
        })}
      {isState === "internal" &&
        activityItems.internal.map((item) => {
          return (
            <li key={item.activityName}>
              <ActivityListItem activity={item} />
            </li>
          );
        })}
      {isState === "loading" && <span>로딩 중입니다.</span>}
    </ul>
  );
};
