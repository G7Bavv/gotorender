// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1445854358356103360",
        serverId: "1440746839438655531",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 17, // ثواني
            maxRetries: 15,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },

];











