// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1442895243505827952",
        serverId: "1434224108241027215",
        token: process.env.token1,
        selfDeaf: false,
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





