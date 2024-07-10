<template>
  <div class="mt-10 flex justify-center item-center">
    <div
      class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
    >
      <div>
        <h3 class="text-xl leading-6 font-medium text-gray-900">
          Email Verification Required
        </h3>
        <p class="mt-2 mb-4 text-md text-gray-500">
          Please verify your email address to complete the activation process
          and gain access to all features of the system.
        </p>
      </div>
      <button class="mt-4 text-blue-500 underline mt-2 cursor-pointer">
        Click here to verify your email
      </button>
      <div class="mt-2">
        <button class="text-blue-500 underline cursor-pointer">
          Click here to update your email
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

