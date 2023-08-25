
import { Client, Account, Databases } from 'appwrite';

export const PROJECT_ID = '64e76392079be61cb6ab'
export const DATABASE_ID = '64e76517039b5642a142'
export const COLLECTION_ID_MESSAGES = '64e7653311f2b4c26c08'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;
