
const express = require("express");
const router = express.Router();

const contactInfo = {
    "result": [
        {
            "key": "address",
            "title": "A：",
            "titleTag": "台北市內湖區金湖路363巷67弄59號",
            "text": "台北市內湖區金湖路363巷67弄59號",
            "link": "https://goo.gl/maps/FxqyQEtJtm8tkNZq9"
        },
        {
            "key": "mail",
            "title": "E：",
            "titleTag": "interi@tei-i.com.tw",
            "text": "interi@tei-i.com.tw",
            "link": "mailto:interi@tei-i.com.tw"
        },
        {
            "key": "tel",
            "title": "T：",
            "titleTag": "02-2630-7168",
            "text": "02-2630-7168",
            "link": "tel:02-2630-7168"
        },
        {
            "key": "fax",
            "title": "F：",
            "titleTag": "02-2630-7128",
            "text": "02-2630-7128",
            "link": "tel:02-2630-7128"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(contactInfo);
});

module.exports = router;