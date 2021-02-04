# 목업서버

## 컴파일

```bash
$ ./build.sh
```



## 실행

```bash
$ node src
```





## 엔드포인트





### Owner





```http
GET /api/owner HTTP/1.1
Host: localhost:3000
Content-Type: application/json; charset=utf-8
```



```json
{
  "status": "ok",
  "extended": true,
  "data": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}
```





```http
POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}
```



### Dog





# Using Koa with TS

```bash
$ npm i -D @types/koa @types/koa-router @types/koa-json @types/koa-logger @types/koa-bodyparser
```





# Index

[웨에엑](https://backend-intro.vlpt.us/1/02.html)