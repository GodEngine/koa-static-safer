we can get some sensitive informations by add some
malicious address in url when using the koa-static. for example, using https://domain/file%3a///etc/passwd can get the passwdfile file of our server。

add this middleware in koa2 for avoid such problem。
