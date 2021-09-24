export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: 'NotFound',
            component: () => import('./views/components/NotFound')
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/components/Home/Home'),
        },
        {
            path: '/clubs/:sport',
            name: 'Clubs',
            component: () => import('./views/components/Clubs/Clubs')
        },
        {
            path: '/club/:clubId',
            name: 'Club',
            component: () => import('./views/components/Clubs/Club/Club')
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('./views/components/Dashboard/Dashboard'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                const loggedIn = localStorage.getItem('user')

                if (to.matched.some(record => record.meta.auth) && !loggedIn) {
                    next('/login')
                    return
                }
                next()
            }
        },
        {
            path: '/newbooking/:venueId',
            name: 'NewBooking',
            component: () => import('./views/components/Booking/NewBooking'),
        },
        {
            path: '/newbooking/success',
            name: 'SuccessBooking',
            component: () => import('./views/components/Booking/SuccessBooking'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/components/Auth/Login'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('./views/components/Auth/Register'),
        },
    ]
}
