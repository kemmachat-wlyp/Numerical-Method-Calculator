const config = {
    "swagger": "2.0",
    "info": {
        "description" : "API Document By Swagger.   ",
        "title": "Swagger Numerical Method"
    },
    "host": "localhost:3001",
    
    "paths":{
        "/Bisection":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ตัวอย่างโจทย์เรื่อง Bisection",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/False_position":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ตัวอย่างโจทย์เรื่อง False_postion",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/Newton_raphson":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ตัวอย่างโจทย์เรื่อง Newton_raphson",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/Onepoint":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ตัวอย่างโจทย์เรื่อง Bisection",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/Secant":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ตัวอย่างโจทย์เรื่อง Secant",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        }
    }
}

export { config }