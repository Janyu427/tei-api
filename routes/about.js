
const express = require("express");
const router = express.Router();

const about = {
    "result": [
        {
            "key": "firstSection",
            "title": "公司歷程",
            "text": [
                "YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
                "1995.12前身是在田建築設計工作室，由兩位對建築及室內設計有濃厚興趣的合夥人所創立。1998.05配合政府實施＂建築物室內裝修管理辦法＂首批取得室內裝修專業技術人員登記。（內營室技字第40EC004327號）",
                "1998.11成立＂程翊室內裝修工程有限公司＂至今。"
            ],
            "imgUrl": "https://janyu427.github.io/test/teiImages/about1.jpg"
        },
        {
            "key": "secondSection",
            "title": "設計團隊",
            "list": [
                {
                    "name": "傅有權( James Fu )",
                    "position": "FYC Architect ＆ Planners",
                    "imgUrl": "https://janyu427.github.io/test/teiImages/about2_1.jpg",
                    "content": [
                        {
                            "title": "資歷",
                            "list": [
                                "淡江大學建築系75級",
                                "陸軍333師建築工兵77年7月榮退",
                                "78年曹康建築師事務所",
                                "79年齊信建築設計事務所",
                                "82年聶子文建築師事務所",
                                "83年專門職業及技術人員高等考試建築師及格"
                            ]
                        },
                        {
                            "title": "參與作品",
                            "list": [
                                "高雄漢來新世界建築設計",
                                "台北市青少年育樂中心競圖首選",
                                "內湖IBM總經理新建工程設計",
                                "苗栗市彭公館新建工程設計",
                                "公館農舍住宅新建案設計",
                                "汐止迎旭山莊陳公館增建工程設計"
                            ]
                        },
                        {
                            "title": "座右銘",
                            "list": [
                                "如果我們沒有勇氣嘗試，人生會變成什麼樣子？"
                            ]
                        }
                    ]
                },
                {
                    "name": "詹芳玫( YOCICO CHAN )",
                    "position": "程翊室內設計藝術總監",
                    "imgUrl": "https://janyu427.github.io/test/teiImages/about2_2.jpg",
                    "content": [
                        {
                            "title": "資歷",
                            "list": [
                                "日本東京設計者學院畢業"
                            ]
                        },
                        {
                            "title": "主修",
                            "list": [
                                "室內空間設計"
                            ]
                        },
                        {
                            "title": "副修",
                            "list": [
                                "商業空間設計"
                            ]
                        },
                        {
                            "title": "學位",
                            "list": [
                                "政治大學經營管理碩士學程(EMBA)畢業"
                            ]
                        },
                        {
                            "title": "人物介紹",
                            "list": [
                                "經濟部登記有案",
                                "內政部室內裝修專業技術人員考試及格",
                                "知名室內設計類雜誌最愛設計師票選前三名",
                                "作品收編國民中學二年級下學期自然與生活教科書中",
                                "居家環境與設備篇，作品散見各報"
                            ]
                        },
                        {
                            "title": "個人著作",
                            "list": [
                                "101年個人著作＂時尚教主客製化美學達人YOCICO＂精裝書"
                            ]
                        },
                        {
                            "title": "獲獎紀錄",
                            "list": [
                                "榮獲2012第二屆兩岸四地獎【古典美學組-創意設計獎】",
                                "(得獎作品請見作品集)"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "key": "thirdSection",
            "title": "設計流程",
            "enTitle": "Design Process",
            "content": [
                {
                    "title": "Step 1",
                    "list": [
                        "電話線上簡易諮詢"                    
                    ]
                },
                {
                    "title": "Step 2",
                    "list": [
                        "公司面談房屋需求及規畫(免費諮詢)，簽訂設計合約"                    
                    ]
                },
                {
                    "title": "Step 3",
                    "list": [
                        "安排現場丈量"                    
                    ]
                },
                {
                    "title": "Step 4",
                    "list": [
                        "規劃平面配置圖(約14個工作天)"                    
                    ]
                },
                {
                    "title": "Step 5",
                    "list": [
                        "公司會議確認平面配置圖"                    
                    ]
                },
                {
                    "title": "Step 6",
                    "list": [
                        "發展立面圖、水電圖、天花板燈具圖、3D圖，各類材質決定(約1個月時間)"                    
                    ]
                },
                {
                    "title": "Step 7",
                    "list": [
                        "公司會議確認立面圖、水電圖、天花燈具圖、3D圖、各建材及估價解說"                    
                    ]
                },
                {
                    "title": "Step 8",
                    "list": [
                        "簽訂工程合約"                    
                    ]
                }
            ]
        },
        {
            "key": "fourthSection",
            "title": "設計流程",
            "text": "講求設計及施工品質，由程翊團隊精心設計，打造獨一無二的客製化設計。以下為程翊收費標準，實際費用依風格複雜度及指定設計師而有調整。",
            "imgUrl": "https://janyu427.github.io/test/teiImages/about4.jpg",
            "content": [
                {
                    "title": "項目",
                    "list": [
                        "概算每坪設計單價(實作實算)"
                    ]
                },
                {
                    "title": "設計費",
                    "list": [
                        "$8000起 / 坪"
                    ]
                },
                {
                    "title": "監工管理費目",
                    "list": [
                        "工程10%計算，外縣市將酌收車馬補助費"
                    ]
                }
            ] 
        }
        
    ]
};

router.get("/", (req, res) => {
    res.json(about);
});

module.exports = router;