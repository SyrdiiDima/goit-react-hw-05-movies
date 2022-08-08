import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "./Navigation/Navigation";
import Loading from "./Loading";

const SharedLayout = () => {

    return (
        <>
        <Navigation />
            <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
        
        </>
    )
}

export default SharedLayout;