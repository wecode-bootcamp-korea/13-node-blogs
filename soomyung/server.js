const http = require("http");
const app = require("./app");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const server = http.createServer(app); // express app 으로 서버를 만듭니다.

const start = async () => {
  // 서버를 시작하는 함수 입니다.
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();
