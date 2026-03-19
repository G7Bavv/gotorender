// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1483844929510969455",
        serverId: "1437717487750742018",
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
        selfMute: false,
    },

];












































