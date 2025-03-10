
const express = require("express");
const router = express.Router();

const contact = {
    "result": {
        "sectionTitle": "聯絡表單",
        "sectionText": "請填寫下方表單，專員會盡快與您聯繫",
        "sectionBg": "https://janyu427.github.io/test/teiImages/contactFormBg.jpg",
        "formContent": [
            {
                "title": "姓名",
                "must": true,
                "fieldType": "inputText"
            },
            {
                "title": "E-mail",
                "must": true,
                "fieldType": "inputText"
            },
            {
                "title": "地址",
                "must": false,
                "fieldType": "inputText"
            },
            {
                "title": "聯絡電話",
                "must": true,
                "fieldType": "inputText"
            },
            {
                "title": "聯絡事項",
                "must": true,
                "fieldType": "textarea"
            }
        ]
    }
};

router.get("/", (req, res) => {
    res.json(contact);
});

module.exports = router;