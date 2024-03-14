export type ActivityFeature = "internal" | "external";
type ActivityCategory = "tech" | "non-tech" | "etc";
type ActivityInternalScope =
  | "숭x실대학교"
  | "교양 수업"
  | "전공 수업"
  | "동아리";

export type ActivityItem<T extends ActivityFeature> = {
  activityName: string;
  activityPeriod: string;
  activityCategory: ActivityCategory;
} & (T extends "internal"
  ? {
      activityScope: ActivityInternalScope;
    }
  : {
      activityScope?: undefined;
    });
