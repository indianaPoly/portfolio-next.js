export type ActivityFeature = "internal" | "external";
type ActivityCategory = "tech" | "non-tech" | "etc";
type ActivityInternalScope =
  | "숭실대학교"
  | "교양 수업"
  | "전공 수업"
  | "동아리";

export type ActivityItemValue<T extends ActivityFeature> = {
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

/**
 * ActivityKind {
 *  ActivityIiemValue
 * }
 */
export type ActivityItem = Record<
  ActivityFeature,
  ActivityItemValue<"internal">[] | ActivityItemValue<"external">[]
>;
