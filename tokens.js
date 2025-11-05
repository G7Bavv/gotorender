// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1368359602286231552",
        serverId: "1338237780664254504",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 6, // ثواني
            maxRetries: 15,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },

];

