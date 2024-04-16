import React, { useEffect } from "react";
import {
  subscribeToRealtimeUpdates,
  appwriteCollectionId,
} from "./appwriteReactRealtime";

function RealtimeSubscriber() {
  useEffect(() => {
    const unsubscribe = subscribeToRealtimeUpdates((data) => {
      console.log("Got data in realtime! -->", data);
    }, appwriteCollectionId);
    console.log("Unsubscribe is -->", unsubscribe);
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ color: "limegreen", fontWeight: "bold", fontSize: "50px" }}>
      Subscribed to realtime updates!
    </div>
  );
}

export default RealtimeSubscriber;
