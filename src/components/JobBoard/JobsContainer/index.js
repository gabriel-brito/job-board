import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import CTAButton from "components/Shared/CTAButton";
import JobInfo from "components/JobBoard/JobInfo";

import { getIdList, getJob } from "services/jobBoard";

import { JOB_BOARD_PAGE_SIZE } from "utils/constants";

import * as S from "./styles";

export default function JobsContainer() {
  const [jobs, setJobs] = useState([]);
  const [noMoreJobs, setNoMoreJobs] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleIds = useCallback(async (page) => {
    const ids = await getIdList().then((data) => data);
    const start = page * JOB_BOARD_PAGE_SIZE;
    const end = start + JOB_BOARD_PAGE_SIZE;

    return ids.slice(start, end);
  }, []);

  const handleJobListing = async () => {
    try {
      const currentIds = await handleIds(currentPage);

      if (currentIds.length < 6) {
        setNoMoreJobs(true);
      }

      const jobList = await Promise.all(
        currentIds.map((jobId) => getJob(jobId).then((data) => data))
      )
        .then((values) => values)
        .catch((error) => console.error(error));

      const newJobList = [...jobs, ...jobList];

      setJobs(newJobList);

      return newJobList;
    } catch (error) {
      console.error(error);
    }
  };

  const { isFetching } = useQuery({
    queryKey: [`job-listing-${currentPage}`],
    queryFn: handleJobListing,
    refetchOnWindowFocus: false,
  });

  const buttonText = isFetching ? "Loading..." : "Load more jobs";

  return (
    <S.Container>
      <S.Title>Hacker News Job Board</S.Title>

      <S.List>
        {jobs.map((job) => (
          <S.ListItem key={job.id}>
            <JobInfo job={job} />
          </S.ListItem>
        ))}
      </S.List>

      <CTAButton
        disabled={isFetching || noMoreJobs}
        name="Load jobs"
        aria-label={
          noMoreJobs
            ? "No more jobs to load"
            : "Load more jobs from Hacker News"
        }
        onClick={() => {
          if (noMoreJobs) return;

          setCurrentPage(currentPage + 1);
        }}
      >
        {noMoreJobs ? "No more jobs" : buttonText}
      </CTAButton>
    </S.Container>
  );
}
