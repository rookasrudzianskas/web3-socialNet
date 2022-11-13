import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1506051",
    key: "3cfabf3f0f00a0d701fb",
    secret: "07e26743dd9c2dba0295",
    cluster: "ap2",
    useTLS: true,
});

export const clientPusher = new ClientPusher("3cfabf3f0f00a0d701fb", {
    cluster: 'ap2',
    forceTLS: true
});
