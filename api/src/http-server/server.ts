import "reflect-metadata";
import { AppDataSource } from "../typeorm";
import { server } from "./app";

AppDataSource.initialize().then(() => {
    const app = server.listen(5000, () => {
        console.log("Server listening on port 5000!🏆");
    });
});
