import {BrowserRouter } from "react-router-dom"
import MyRoutes from "./routes/MyRoutes"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
function App() {

  const queryClient= new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <MyRoutes/>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
