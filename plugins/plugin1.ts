export default defineNuxtPlugin(() => {
    return {
        provide: {
            plugin1: (msg: string) => `Hello ${msg}!`
        }
    }
})