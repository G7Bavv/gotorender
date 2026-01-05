// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1452739779966931142",
        serverId: "1452739778905636906",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 17, // ثواني
            maxRetries: 15,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },

];


































