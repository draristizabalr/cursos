import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // const newLog = await prisma.logMode.create({
  //   data: {
  //     level: 'HIGH',
  //     message: 'Test message',
  //     origin: 'App.ts',
  //   }
  // })

  // console.log({newLog});

  // const logs = await prisma.logMode.findMany({
  //   where: {
  //     level: 'HIGH'
  //   }
  // })

  // console.log(logs);

  // Crear una colección = tabla, documento = registro
  // const newLog = await LogModel.create({
  //   message: 'Test message from Mongo',
  //   origin: 'app.ts',
  //   level: 'low'
  // });

  // await newLog.save();
  // console.log(newLog);

  Server.start();
}
