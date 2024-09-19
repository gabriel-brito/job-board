import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import JobsContainer from "components/JobBoard/JobsContainer";

import GlobalStyles from "styles/global";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />

      <JobsContainer />

      <ReactQueryDevtools id="devtools" />
    </QueryClientProvider>
  );
}
