import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: 'you have reached blog router',
        route: '/blog',
        httpMethod: 'GET'
    })
});

export default router;