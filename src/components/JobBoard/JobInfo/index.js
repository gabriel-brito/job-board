import { JobInfo as mock } from "mocks/jobBoard";

import * as S from "./styles";

// {
//   by: "jamilbk",
//   id: 35908337,
//   score: 1,
//   time: 1683838872,
//   title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
//   type: "job",
//   url: "https://www.ycombinator.com/companies/firezone/jobs",
// }

export default function JobInfo({ job = mock }) {
  const jobDate = new Date(job.time * 1000);
  const jobDateString = `${jobDate.getMonth()}/${jobDate.getDay()}/${jobDate.getFullYear()}, ${jobDate.getHours()}:${jobDate.getMinutes()}:${jobDate.getSeconds()}`;

  return (
    <S.Wrapper>
      <S.Anchor href="#">
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
