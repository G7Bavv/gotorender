// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1460538824810823702",
        serverId: "1438670787832713236",
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







































