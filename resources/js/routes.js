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

        //Dashboard
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

        //New Booking
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

        //Auth-Login
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/components/Auth/Login'),
        },

        //Auth-Registration
        {
            path: '/register',
            name: 'Register',
            component: () => import('./views/components/Auth/Register'),
        },
        {
            path: '/register/success',
            name: 'RegisterSuccess',
            component: () => import('./views/components/Auth/RegisterSuccess'),
        },
        {
            path: '/email/verify/success',
            name: 'EmailVerify',
            component: () => import('./views/components/Auth/EmailVerify'),
        },

        //Auth-Forgot Password
        {
            path: '/newpassword/request',
            name: 'PwdResetRequest',
            component: () => import('./views/components/Auth/PwdReset/PwdResetRequest'),
        },
        {
            path: '/newpassword/request/sent',
            name: 'PwdRequestSent',
            component: () => import('./views/components/Auth/PwdReset/PwdRequestSent'),
        },
        {
            path: '/newpassword/success',
            name: 'PwdResetSuccess',
            component: () => import('./views/components/Auth/PwdReset/PwdResetSuccess'),
        },
        {
            path: '/newpassword/form/:token',
            name: 'PwdResetForm',
            component: () => import('./views/components/Auth/PwdReset/PwdResetForm'),
        },
    ]
}
