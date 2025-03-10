
const express = require("express");
const router = express.Router();

const banner = {
    "result": [
        {
            "title": "設計．人與空間的對話",
            "text": "回到一個擁有情感、回憶的地方",
            "bgSrc": "https://janyu427.github.io/test/teiImages/banner1.jpg"
        },
        {
            "title": "愜意．人與空間的一幅畫",
            "text": "用情感、回憶繪製的地方",
            "bgSrc": "https://janyu427.github.io/test/teiImages/banner2.jpg"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(banner);
});

module.exports = router;