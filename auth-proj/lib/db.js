import { MongoClient } from 'mongodb';

export function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://auth7:MugoGCsH8GV6bWCw@cluster0.xjx58dn.mongodb.net/?retryWrites=true&w=majority');
    return client; 
}