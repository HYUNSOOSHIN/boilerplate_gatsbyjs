개츠비JS 보일러플레이트

1. 실행방법

```
1. 터미널에서 yarn 명령어로 설치
2. 터미널에 yarn develop 명령어로 실행
```

2. 폴더 구조

```
src
ㄴ actions
  ㄴ index.js
  ㄴ ...
ㄴ apis
ㄴ components
  ㄴ component
  ㄴ page
  ㄴ layout.css
  ㄴ privateRoute.js
  ㄴ seo.js
ㄴ config
ㄴ containers
ㄴ fonts
ㄴ images
ㄴ pages
ㄴ popups
ㄴ reducers
  ㄴ index.js
  ㄴ ...
ㄴ store
ㄴ utils
```

3. ESLint 관련

- vscode extensionS에서 eslint 설치

- setting.js 에 아래 코드 추가

```
 "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.packageManager": "yarn",
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "prettier.disableLanguages": ["js", "jsx", "ts", "tsx"],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
  ],
```

- /root 에 .eslintrc 파일 추가

```
{
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jasmine": true,
    "jest": true
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "plugins": [
    "react",
    "react-hooks",
    "prettier"
  ],
  "rules": {
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "no-undef": 0,
    "no-console": 1,
    "no-unused-vars": 1,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "tabWidth": 2,
        "printWidth": 150,
        "endOfLine": "auto"
      }
    ]
  }
}
```