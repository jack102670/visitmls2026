<template>
    <!-- component -->
    <div class="background-image  h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center bg-black shadow-lg bg-opacity-50 rounded-xl p-5">
            <img class="h-[60px] w-[70px] mb-5" src="@/assets/images/pkt-blue-logo.jpg" alt="">
            <h1 class="text-slate-200 shadow-text-2xl text-xl font-bold text-center pb-10">Sign in to your account</h1>
            <div class=" p-10 flex flex-col gap-4 text-sm">
                <div>
                    <label class="text-white font-bold inline-block pb-2" for="email">Email</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="email" name="email" placeholder="mehedi@jaman.com">
                </div>
                <div>
                    <label class="text-white font-bold inline-block pb-2" for="password">Password</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="password" name="password" placeholder="******">
                </div>
                <div class="flex">
                    <div class="w-1/2">
                        <input type="checkbox" name="remeberMe">
                        <label class="text-white" for="remeberMe">Remeber me</label>
                    </div>
                    <div class="w-1/2">
                        <a class="font-bold text-blue-600" href="">Forgot password ?</a>
                    </div>
                </div>
                <div>
                    <input class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
                        type="submit" value="Login">
                </div>
                <div>
                    <p class="text-center">Or continue with</p>
                </div>
                <div class="flex gap-4">
                    <img class="w-5 h-5 justify-center mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"
                        alt="">
                    <button
                        class="bg-[#8087EE] w-full py-1 rounded-md text-white font-bold cursor-pointer hover:bg-blue-900">Microsoft
                        Teams</button>
                </div>
            </div>
            <p class="text-sm text-slate-200 mt-10">If you vendor? <router-link to="/Vendorlogin"
                    class="text-slate-100 font-bold">Login Here
                </router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginstaffView'
}

</script>
<style scoped>
.background-image {
    position: relative;
    overflow: hidden;
}

.background-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://pktgroup.com/wp-content/uploads/2021/04/OAH-Thumbnail-4.jpg');
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
}

/* Additional styling or overrides for content if needed */
.h-max {
    /* Add your styles for the content container */
}</style>