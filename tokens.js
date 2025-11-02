// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1434559662245806104",
        serverId: "1434559660932731012",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 10, // ثواني
            maxRetries: 8,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];