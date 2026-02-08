import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("[ request ] GET /blog/");
});

export default router;