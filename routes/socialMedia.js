
const express = require("express");
const router = express.Router();

const socialMedia = {
    "result": [
        {
            "key": "fb",
            "titleTag": "Facebook",
            "link": "https://www.facebook.com/tei168/"
        },
        {
            "key": "youtube",
            "titleTag": "Youtube",
            "link": "https://www.youtube.com/channel/UCcLLMp92Nek_ChHzFnAE2wg"
        },
        {
            "key": "ig",
            "titleTag": "Instagram",
            "link": "https://www.instagram.com/tei_idesign/"
        },
        {
            "key": "line",
            "titleTag": "Line",
            "link": "http://line.me/ti/p/~tei1688"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(socialMedia);
});

module.exports = router;