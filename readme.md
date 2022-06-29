# Amazon URL Bookmarklet

Simplifies the amazon url like (this is not an affiliate!):

```url
https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/ref=sr_1_1?crid=C5PF5IP1CKGH&keywords=javascript&qid=1656492967&sprefix=javascript%2Caps%2C350&sr=8-1
↓
https://www.amazon.com/dp/1491952024
```

# Usage

Add following link to your bookmark with whatever name you like:
!
```
javascript:((i)%3D%3E%7Bvar%20c%3Bc%3Di.href.split(%22%2F%22)%2Ci.href%3Dc.slice(0%2C3).concat(c.slice(c.indexOf(%22dp%22)).slice(0%2C2)).join(%22%2F%22)%7D)(location)
```

# License

MIT