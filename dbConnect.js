import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:<admin1234>@cluster0.keyxl.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectaNaDatabase;