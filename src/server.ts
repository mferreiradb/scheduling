import { connect } from "mongoose";
import express from 'express';

const app = express();

run().catch(err => console.log(err));

async function run() {
    await connect('mongodb://127.0.0.1:27017/agenda');
}

app.use(express.json())