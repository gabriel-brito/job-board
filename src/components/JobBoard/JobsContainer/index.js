import JobInfo from "components/JobBoard/JobInfo";

import * as S from "./styles";

export default function JobsContainer() {
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
