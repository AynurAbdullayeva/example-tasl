
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ROUTER } from "./routes/router";

const routes = createBrowserRouter(ROUTER)


function App() {
  return (
   <>
    <RouterProvider router={routes}/>
   
   </>
  );
}

export default App;
