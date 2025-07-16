# CORS

- cross origin resource sharing
- before cors standardized browser did not allow websites to access other origins
- for example if we are using https:kk.in
- from kk's site we cannot access other api's like google/api/data or kk.api/image or http:kk/user like these
- after standardization we use all other them from wherever from whatever into our large scale app ex: micro services they behave like diff apps
- this is what cross origin resource sharing is

# How it works

## example

- origin one and origin two
- origin1 trying to access origin2 browsers use CORS mechanism in API to secure transfer
- before requesting direct api, browsers do preflight the request to origin2
- the origin2 will send options, upon approval then origin1 send post/other request
- the both requests have some headers
- server responds like in headers Access-Control-Allow-Origin: \*
- check mdn for more
