import { useQuery } from "@tanstack/react-query";

import JobInfo from "components/JobBoard/JobInfo";

import { getIdList } from "services/jobBoard";

import * as S from "./styles";

export default function JobsContainer() {
  const { data: jobIdList, isFetching: isFetchingIdList } = useQuery({
    queryFn: getIdList,
    queryKey: ["job-id-list"],
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  console.log(jobIdList, isFetchingIdList);

  return (
    <S.Container>
      <S.Title>Hacker News Job Board</S.Title>

      <S.List>
        <S.ListItem>
          <JobInfo />
        </S.ListItem>
      </S.List>
    </S.Container>
  );
}
