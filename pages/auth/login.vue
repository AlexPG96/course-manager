<template>
    <div class="h-full overflow-hidden">
        <div class="flex justify-end p-4">
            <ColorSwitch />
        </div>
            <h1 class="text-center text-3xl font-bold">Course Manager</h1>
        <div class="login-body mt-12 pt-56 h-full flex flex-col items-center bg-light dark:bg-blue-main-800">
            <SocialLoginButton />
        </div>
    </div>
</template>

<script>
import ColorSwitch from '../../components/ui/ColorSwitch.vue'
import SocialLoginButton from '../../components/auth/SocialLoginButton.vue'
export default {
    name: 'Login',
    layout: 'auth',
    components: {
        ColorSwitch,
        SocialLoginButton,
    }


}
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>