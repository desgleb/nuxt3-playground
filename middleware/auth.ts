export default defineNuxtRouteMiddleware((to, from) => {
    console.log('TO', to.path);
    if (to.params.id === '1') {
        return abortNavigation();
    }
    if (to.path !== '/') {
        return navigateTo('/');
    }
})
