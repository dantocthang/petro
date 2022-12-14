import adminRouter from './admin.js'
const router = (app) => {
    app.use('/admin', adminRouter)
}

export default router