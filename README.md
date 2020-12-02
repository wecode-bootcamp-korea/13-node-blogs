# 13-node-blogs

## 초기 세팅 및 진행방법
- 해당 repo를 clone 받아 주세요.
- main 브랜치를 기준으로 feature/본인이름 브랜치를 만들어 주세요. 
```shell
$ git branch feature/wecoder(본인이름)
```
- 새롭게 생성한 브랜치로 이동 해 주세요.
```shell
$ git checkout feature/wecoder(본인이름)
```
- 이 프로젝트의 최상위에서 자신의 이름으로 폴더를 만들어주세요
```shell
$ mkdir wecoder
```
- 자신의 이름으로 된 폴더안에서 작업을 합니다.
```shell
$ cd wecoder
```
- 작업 중간 중간 commit 을 잘 남깁니다.
> [참고) Commit Message Guidelines](https://www.notion.so/wecode/Commit-Message-Guidelines-eb3d8ebc0d014c26848ee628934ae430)
- 본인의 브랜치로 github 원격 레포지토리에 push 합니다.
```shell
$ git push origin feature/wecoder
```

## 폴더구조 예
> **다른 사람의 폴더는 건들지 않고, 본인의 폴더가 하나의 백엔드 프로젝트라고 생각하고 작업을 진행합니다.**
```
.
├── README.md
└── jun
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── server.js
```
- 위의 폴더구조에서 README.md 가 현재 읽고 있는 문서이며, 이 레포지토리 최상위에 있는 파일입니다.
- 여기서 본인의 이름으로 폴더를 만들고 그 안에 노드 모듈을 설치하고 소스코드를 작성하시면 됩니다.
- 각각의 이름으로 된 폴더가 각각의 다른 node project 라고 생각하셔야 합니다. (서로간에 노드모듈을 공유하지 않음)
