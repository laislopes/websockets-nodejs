import { MongoClient } from "mongodb";

const client = new MongoClient(
    "mongodb+srv://admin:Password123@node-express.nrlzuyg.mongodb.net/?retryWrites=true&w=majority"
);

let documentsColletion;

try {
    await client.connect();

    const db = client.db("websockets-nodejs");
    documentsColletion = db.collection("documents");

    console.log("Connected with Database successfully!");

} catch (error) {
    console.log(error);
}

export { documentsColletion };