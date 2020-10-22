# 1. webpack 설치
```sh
npm install webpack webpack-cli --save
```

<br>

# 2. webpack 실행
```sh
npx webpack
```

<br>

# 3. main.js생성
* (기본설정) webpack은 결과를 dist/main.js에 저장

<br>

# 4. webpack.config.js
* webpack설정 파일
* npx커맨드와 --config인자로 설정파일 실행
```sh
npx webpack --config webpack.config.js
```

<br>

# 5. npm run build 설정
* npm run명령어 실행시 webpack빌드 설정
* script필드에 build필드 추가
```json
{
  "name": "Webpack_Getting_Start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
...
```