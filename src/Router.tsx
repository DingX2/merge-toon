import type { FC } from 'react';
import { Outlet, RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { App } from '@/pages';

const rootRoute = createRootRoute({
    component() {
        return (
            <>
                <Outlet />
                <TanStackRouterDevtools />
            </>
        );
    },
});

const routeTree = rootRoute.addChildren([
    createRoute({
        getParentRoute: () => rootRoute,
        path: '/',
        component() {
            return <App />;
        },
    }),
    createRoute({
        getParentRoute: () => rootRoute,
        path: '/about',
        component() {
            return <div>about</div>;
        },
    }),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export const Router: FC = () => {
    return <RouterProvider router={router} />;
};
