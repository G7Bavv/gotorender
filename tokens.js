// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1468013805048037447",
        serverId: "1348322789282676746",
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











































