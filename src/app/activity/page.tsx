import { ActivityItem } from "@/types/activity.type";
import { ActivityList } from "./components/ActivityList";
import { Suspense } from "react";
import { Loading } from "@/components/fetchComponent/Loading";
import { ErrorBoundary } from "@/components/fetchComponent/Error";

const Activity = () => {
  const externalActivityData: ActivityItem<"external">[] = [
    {
      activityName: "대학생 도움 웹사이트 개발",
      activityPeriod: "2023.01 ~ 2024.02",
      activityCategory: "tech",
    },
    {
      activityName: "실시간 야구 데이터 입력 및 조회 웹",
      activityPeriod: "2023.03 ~ 2023.07",
      activityCategory: "tech",
    },
    {
      activityName: "kusf 마케팅 캠프",
      activityPeriod: "2023.07 ~ 2023.07",
      activityCategory: "non-tech",
    },
  ];

  const internalActivityData: ActivityItem<"internal">[] = [
    {
      activityName: "만장일치",
      activityPeriod: "2019.09 ~ 2019.12",
      activityCategory: "non-tech",
      activityScope: "동아리",
    },
    {
      activityName: "기업가정신과행동",
      activityPeriod: "2022.03 ~ 2022.06",
      activityCategory: "non-tech",
      activityScope: "교양 수업",
    },
    {
      activityName: "오픈소스를 이용한 실전창업",
      activityPeriod: "2022.03 ~ 2022.06",
      activityCategory: "non-tech",
      activityScope: "교양 수업",
    },
    {
      activityName: "동아리 인큐베이팅",
      activityPeriod: "2022.03 ~ 2022.06",
      activityCategory: "tech",
      activityScope: "동아리",
    },
    {
      activityName: "yourssu Page",
      activityPeriod: "2023.01 ~ 2024.02",
      activityCategory: "tech",
      activityScope: "동아리",
    },
    {
      activityName: "RealWorld ParePrograming",
      activityPeriod: "2023.03 ~ 2023.06",
      activityCategory: "tech",
      activityScope: "동아리",
    },
    {
      activityName: "운영체제 구현 과제",
      activityPeriod: "2023.09 ~ 2023.12",
      activityCategory: "tech",
      activityScope: "전공 수업",
    },
    {
      activityName: "Soomsil V2 검색",
      activityPeriod: "2024.02 ~ 2023.03",
      activityCategory: "tech",
      activityScope: "동아리",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <span>활용 내역</span>
        <div>
          <ErrorBoundary fallback={<div>에러났습니다.</div>}>
            <Suspense fallback={<Loading />}>
              <span>내부 활동</span>
              <ActivityList<"internal"> data={internalActivityData} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div>
          <ErrorBoundary fallback={<div>에러났습니다.</div>}>
            <Suspense fallback={<Loading />}>
              <span>외부 활동</span>
              <ActivityList<"external"> data={externalActivityData} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </main>
  );
};

export default Activity;
