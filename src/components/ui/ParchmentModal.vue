<!-- ParchmentModal.vue -->
<template>
  <!-- Centered Trigger Container -->
  <div class="w-full flex justify-center items-center" @click="openModal">
    <slot name="trigger">
      <button class="px-4 py-2 bg-amber-800 text-white rounded-lg
                     hover:bg-amber-700 transition-colors duration-300
                     shadow-lg flex items-center gap-2">
        <span>Open Scroll</span>
        <!-- Optional Icon -->
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </slot>
  </div>


  <!-- Modal -->
  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen"
           class="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
           @click="closeModal">

        <div class="w-full max-w-3xl relative" @click.stop>
          <!-- Parchment -->
          <div
            class="relative w-full bg-amber-100
                   rounded-lg shadow-2xl overflow-hidden transition-all duration-800 ease-in-out"
            :class="[isUnrolled ? 'h-[80vh]' : 'h-16']"
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-2 right-2 text-amber-900 hover:text-amber-700
                     transition-colors z-30 text-2xl p-2"
            >
              ×
            </button>

            <!-- Parchment Content -->
            <div
              class="relative z-20 p-6 transition-opacity duration-300 delay-400
                     overflow-y-auto h-full"
              :class="[isUnrolled ? 'opacity-100' : 'opacity-0']"
            >
              <div class="font-serif text-justify text-amber-900 space-y-4">
                <slot>{{ text }}</slot>
              </div>
            </div>

            <!-- Rollers -->
            <div
              class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r
                     from-amber-900 via-amber-800 to-amber-900 rounded-t-lg
                     transition-transform duration-800 origin-top z-30"
              :class="[isUnrolled ? 'scale-y-50' : '']"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r
                     from-amber-900 via-amber-800 to-amber-900 rounded-b-lg
                     transition-transform duration-800 origin-bottom z-30"
              :class="[isUnrolled ? 'scale-y-50' : '']"
            ></div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Default parchment text'
  }
});

const isOpen = ref(false);
const isUnrolled = ref(false);

const openModal = () => {
  isOpen.value = true;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    isUnrolled.value = true;
  }, 100);
};

const closeModal = () => {
  isUnrolled.value = false;
  setTimeout(() => {
    isOpen.value = false;
    document.body.style.overflow = '';
  }, 800);
};

const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Custom scrollbar - only needed styles that Tailwind doesn't provide */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  @apply bg-amber-100/50 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-amber-100/50 rounded;
}
</style>