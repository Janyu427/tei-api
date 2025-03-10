
const express = require("express");
const router = express.Router();

const productDetails = {
    "result": [
        {
            "productId": "1",
            "title": "文藝",
            "intro": "有別於一般住家傳統格局，程翊團隊打造零動線設計，把走道納入坪效使用，將客廳、餐廳、廚房配置於全室中軸上，改寫出九宮格的居家格局，並在餐廳置入300公分的長桌，使其成為家的核心地帶，成為凝聚家族情感的居所。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間 / 衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "廚房空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "2",
            "title": "古色古香",
            "intro": "中式禪風，古董博物館。古色古香的文物是時光的碎片，隨時感受歲月芬芳，盡顯古物之美，同時也作為招待親友及未來的退休居所，滿足多元需求。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間 / 景觀陽台",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "3",
            "title": "南法鄉村風",
            "intro": "繽紛的南法鄉村風，透露出屋主活潑俏皮的個性。掌握鄉村風多項精隨，配上特殊格局配置，展現房屋獨一無二的面貌。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "4",
            "title": "工業風別墅",
            "intro": "首次挑戰工業風別墅，結合多功能敬拜聚會空間以及住宅空間，創造屬於屋主充滿愛與喜樂的殿堂。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "5",
            "title": "現代簡約",
            "intro": "有別於一般住家傳統格局，程翊團隊打造零動線設計，把走道納入坪效使用，將客廳、餐廳、廚房配置於全室中軸上，改寫出九宮格的居家格局，並在餐廳置入300公分的長桌，使其成為家的核心地帶，成為凝聚家族情感的居所。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間 / 衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "廚房空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "6",
            "title": "現代輕奢",
            "intro": "中式禪風，古董博物館。古色古香的文物是時光的碎片，隨時感受歲月芬芳，盡顯古物之美，同時也作為招待親友及未來的退休居所，滿足多元需求。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間 / 景觀陽台",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "7",
            "title": "暖陽",
            "intro": "繽紛的南法鄉村風，透露出屋主活潑俏皮的個性。掌握鄉村風多項精隨，配上特殊格局配置，展現房屋獨一無二的面貌。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "8",
            "title": "工業風套房",
            "intro": "首次挑戰工業風別墅，結合多功能敬拜聚會空間以及住宅空間，創造屬於屋主充滿愛與喜樂的殿堂。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "9",
            "title": "幸福",
            "intro": "溫馨人文現代風，全室鋪設木地板，打造無障礙退休宅。玄關及電視牆以花紋、木紋木地板交錯拼接的手法，掌握\"花\" 與 \"發\"的諧音，透漏吉祥氣息。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product5_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "10",
            "title": "白宮",
            "intro": "日式溫泉會館。從硬體到軟件，全室大量使用木質建材，木質貼皮、原木家具，結合榻榻米，空間中散發古色古香的韻味，彷彿置身日本溫泉會館。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product6_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "11",
            "title": "精品",
            "intro": "日系簡約風。早期客變將三戶換打通，以電視牆劃分客廳及餐廚空間，明亮的採光搭配柔和的軟件配色，使空間更加輕盈。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product7_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "12",
            "title": "誠意",
            "intro": "現代簡約退休宅。依山傍水的建案；一對相伴40年的夫妻找上程翊，希望YOCICO能妙筆生花，讓這坪數不大的空間，充滿愛與溫情，提早為10-20年後的銀髮生活做準備。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product8_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "13",
            "title": "科技",
            "intro": "有別於一般住家傳統格局，程翊團隊打造零動線設計，把走道納入坪效使用，將客廳、餐廳、廚房配置於全室中軸上，改寫出九宮格的居家格局，並在餐廳置入300公分的長桌，使其成為家的核心地帶，成為凝聚家族情感的居所。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間 / 衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "廚房空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "14",
            "title": "竹風",
            "intro": "中式禪風，古董博物館。古色古香的文物是時光的碎片，隨時感受歲月芬芳，盡顯古物之美，同時也作為招待親友及未來的退休居所，滿足多元需求。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間 / 景觀陽台",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "15",
            "title": "旭日",
            "intro": "繽紛的南法鄉村風，透露出屋主活潑俏皮的個性。掌握鄉村風多項精隨，配上特殊格局配置，展現房屋獨一無二的面貌。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "16",
            "title": "銀髮族",
            "intro": "首次挑戰工業風別墅，結合多功能敬拜聚會空間以及住宅空間，創造屬於屋主充滿愛與喜樂的殿堂。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "17",
            "title": "木地板",
            "intro": "有別於一般住家傳統格局，程翊團隊打造零動線設計，把走道納入坪效使用，將客廳、餐廳、廚房配置於全室中軸上，改寫出九宮格的居家格局，並在餐廳置入300公分的長桌，使其成為家的核心地帶，成為凝聚家族情感的居所。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間 / 衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "廚房空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product1_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "18",
            "title": "科技",
            "intro": "中式禪風，古董博物館。古色古香的文物是時光的碎片，隨時感受歲月芬芳，盡顯古物之美，同時也作為招待親友及未來的退休居所，滿足多元需求。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間 / 景觀陽台",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product2_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "19",
            "title": "大理石",
            "intro": "繽紛的南法鄉村風，透露出屋主活潑俏皮的個性。掌握鄉村風多項精隨，配上特殊格局配置，展現房屋獨一無二的面貌。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent1.jpg",
                            "text": "全室鋪設木地板，打造無障礙空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent2.jpg",
                            "text": "開闊的客廳空間，將陽光引入室內"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent3.jpg",
                            "text": "以木地板交錯拼接爬牆"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent4.jpg",
                            "text": "主臥衛浴"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent5.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product3_tabContent6.jpg",
                            "text": "書房空間，菱形窗格配合光影呈現"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "20",
            "title": "花雕岩",
            "intro": "首次挑戰工業風別墅，結合多功能敬拜聚會空間以及住宅空間，創造屬於屋主充滿愛與喜樂的殿堂。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "公區",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "衛浴空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product4_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "21",
            "title": "咖啡香",
            "intro": "溫馨人文現代風，全室鋪設木地板，打造無障礙退休宅。玄關及電視牆以花紋、木紋木地板交錯拼接的手法，掌握\"花\" 與 \"發\"的諧音，透漏吉祥氣息。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product5_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product5_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product5_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "22",
            "title": "鮮明",
            "intro": "日式溫泉會館。從硬體到軟件，全室大量使用木質建材，木質貼皮、原木家具，結合榻榻米，空間中散發古色古香的韻味，彷彿置身日本溫泉會館。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product6_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product6_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product6_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "23",
            "title": "燦爛",
            "intro": "日系簡約風。早期客變將三戶換打通，以電視牆劃分客廳及餐廚空間，明亮的採光搭配柔和的軟件配色，使空間更加輕盈。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product7_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product7_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product7_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        },
        {
            "productId": "24",
            "title": "未來先知",
            "intro": "現代簡約退休宅。依山傍水的建案；一對相伴40年的夫妻找上程翊，希望YOCICO能妙筆生花，讓這坪數不大的空間，充滿愛與溫情，提早為10-20年後的銀髮生活做準備。",
            "carouselImgs": [
                "https://janyu427.github.io/test/teiImages/product8_tabContent1.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent2.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent3.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent4.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent5.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent6.jpg",
                "https://janyu427.github.io/test/teiImages/product8_tabContent7.jpg"
            ],
            "detailContent":[
                {
                    "key": "content1",
                    "title": "玄關及客廳",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent1.jpg",
                            "text": "設計造型端景修飾電表箱"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent2.jpg",
                            "text": "滑門木格柵搭配榻榻米換鞋椅，營造日式復古氛圍"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent3.jpg",
                            "text": "天花板以實木拼接設計氣口，手工製作客廳吊燈"
                        }
                    ]
                },
                {
                    "key": "content2",
                    "title": "臥室空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent4.jpg",
                            "text": "臥室空間"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent5.jpg",
                            "text": "臥室空間充滿榻榻米香氣縈繞"
                        }
                    ]
                },
                {
                    "key": "content3",
                    "title": "公共休憩空間",
                    "list": [
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent6.jpg",
                            "text": "餐桌與客廳桌面為相同木材切割，多人聚會時可拼接使用"
                        },
                        {
                            "imgSrc": "https://janyu427.github.io/test/teiImages/product8_tabContent7.jpg",
                            "text": "餐廳空間"
                        }
                    ]
                }
            ]
        }
    ]
};

router.get("/", (req, res) => {
    res.json(productDetails.productDetails);
});

router.get("/:key", (req, res) => {
    const key = req.params.key;
    
    for (let i = 0; i < productDetails.productDetails.length; i ++) {
        if (productDetails.productDetails[i].productId == key) {
            return res.json(productDetails.productDetails[i]);
        }
    }
});

module.exports = router;