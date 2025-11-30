// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1444045116330213456",
        serverId: "1440746839438655531",
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







