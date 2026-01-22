// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1439413589223014442",
        serverId: "1338237780664254504",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 17, // ثواني
            maxRetries: 15,
        },
        presence: {
            status: "offline",
        },
        selfMute: true,
    },

];








































