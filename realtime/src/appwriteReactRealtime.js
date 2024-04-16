import { Client } from "./sdk/sdk.js";

const APPWRITE_ENDPOINT = "https://appwrite.cloud.io/v1/realtime";
const APPWRITE_PROJECT = "myproject";
const APPWRITE_DB = "mydb";
const APPWRITE_COLLECTION = "mycollection";

const appwriteEndpoint = APPWRITE_ENDPOINT;
const appwriteProjectId = APPWRITE_PROJECT;
const appwriteDbId = APPWRITE_DB;
export const appwriteCollectionId = APPWRITE_COLLECTION;
const appwriteClient = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

export const subscribeToRealtimeUpdates = (
  handleSubscription,
  COLLECTION_ID
) => {
  const unsubscribe = appwriteClient.subscribe(
    `databases.${appwriteDbId}.collections.${COLLECTION_ID}.documents`,
    handleSubscription
  );
  return unsubscribe;
};
