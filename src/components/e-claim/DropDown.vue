<template>
  <div class="flex flex-col relative">
    <label :for="inputId" class="font-semibold text-gray-600"
      >{{ label }}<span v-if="mandatory" class="text-red-500">*</span></label
    >
    <div class="relative">
      <input
        :id="inputId"
        v-model="inputValue"
        @focus="showDropdown = true"
        @blur="handleBlur"
        @input="filterOptions"
        @keydown.down.prevent="navigateOptions('down')"
        @keydown.up.prevent="navigateOptions('up')"
        @keydown.enter.prevent="selectOption(filteredOptions[highlightedIndex])"
        @change="emitInput"
        class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        type="text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute top-3 right-3 h-4 w-4"
        @click="showDropdown = !showDropdown"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
    <ul
      v-if="showDropdown"
      class="absolute top-full mt-1 w-full border border-gray-300 bg-white dark:bg-gray-800 z-50 h-52 overflow-y-scroll"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="option"
        :class="{
          'bg-blue-500 text-white': highlightedIndex === index,
        }"
        @mousedown.prevent="selectOption(option)"
        @mouseover="highlightedIndex = index"
        @mouseleave="highlightedIndex = -1"
        class="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    mandatory: {
      type: Boolean,
    },
  },
  data() {
    return {
      inputValue: '',
      showDropdown: false,
      filteredOptions: [],
      highlightedIndex: -1,
    };
  },

  methods: {
    emitInput() {
      this.$emit('input', this.inputValue); // Emit input event with selectedOption
    },
    filterOptions() {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(this.inputValue.toLowerCase())
      );
      this.highlightedIndex = 0;
    },
    selectOption(option) {
      this.inputValue = option;
      this.showDropdown = false;
    },
    handleBlur() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    navigateOptions(direction) {
      if (direction === 'down') {
        if (this.highlightedIndex < this.filteredOptions.length - 1) {
          this.highlightedIndex++;
          this.ensureOptionVisible();
        }
      } else if (direction === 'up') {
        if (this.highlightedIndex > 0) {
          this.highlightedIndex--;
          this.ensureOptionVisible();
        }
      }
    },
    ensureOptionVisible() {
      const ul = this.$el.querySelector('ul');
      const li = ul.children[this.highlightedIndex];
      const ulRect = ul.getBoundingClientRect();
      const liRect = li.getBoundingClientRect();

      if (liRect.bottom > ulRect.bottom) {
        ul.scrollTop = li.offsetTop + li.offsetHeight - ul.clientHeight;
      } else if (liRect.top < ulRect.top) {
        ul.scrollTop = li.offsetTop;
      }
    },
  },
  watch: {
    inputValue() {
      if (!this.inputValue) {
        this.filteredOptions = this.options;
      }
    },
  },
  mounted() {
    this.filteredOptions = this.options;
  },
};
</script>

<style scoped>
/* You can add additional styling here if necessary */
</style>
