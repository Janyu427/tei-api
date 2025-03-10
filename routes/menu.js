
const express = require("express");
const router = express.Router();

const menu = {
    "result": [
        {
            "key": "about",
            "title": "公司簡介",
            "titleTag": "公司簡介",
            "link": "/about"
        },
        {
            "key": "product",
            "title": "作品展示",
            "titleTag": "作品展示",
            "link": "/product"
        },
        {
            "key": "video",
            "title": "影音專區",
            "titleTag": "影音專區",
            "link": "/video"
        },
        {
            "key": "contact",
            "title": "聯絡我們",
            "titleTag": "聯絡我們",
            "link": "/contact"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(menu);
});

module.exports = router;