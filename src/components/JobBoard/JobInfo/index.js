import { JobInfo as mock } from "mocks/jobBoard";

import * as S from "./styles";

export default function JobInfo({ job = mock }) {
  const jobDate = new Date(job.time * 1000);
  const jobDateString = `${jobDate.getMonth()}/${jobDate.getDay()}/${jobDate.getFullYear()}, ${jobDate.getHours()}:${jobDate.getMinutes()}:${jobDate.getSeconds()}`;

  return (
    <S.Wrapper>
      <S.Anchor href={job.url} target="_blank">
        <S.Title>{job.title}</S.Title>

        <S.Info>
          <S.InfoText>By {job.by}</S.InfoText>
          &middot;
          <S.InfoText>{jobDateString}</S.InfoText>
        </S.Info>
      </S.Anchor>
    </S.Wrapper>
  );
}
