<!-- Parchment.vue -->
<template>
  <div class="parchment-container">
    <div
        class="parchment"
        :class="{ 'unrolled': isUnrolled }"
        @click="toggleParchment"
    >
      <div class="parchment-content" :class="{ 'visible': isUnrolled }">
        <slot>{{ text }}</slot>
      </div>
      <div class="parchment-roller top"></div>
      <div class="parchment-roller bottom"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Default parchment text'
  }
});

const isUnrolled = ref(false);

const toggleParchment = () => {
  isUnrolled.value = !isUnrolled.value;
};
</script>

<style scoped>
.parchment-container {
  position: relative;
  width: min(90%, 800px);
  margin: 1rem auto;
}

.parchment {
  position: relative;
  color: #29140b;
  background-color: #a9946c;  border-radius: max(0.5vw, 5px);
  padding: clamp(0.5rem, 2vw, 1.5rem);
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  height: clamp(2.5rem, 8vh, 4rem);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  width: 100%;
}

.parchment::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #29140b;
  background-color: #a9946c;
  background-size: 100% clamp(1rem, 4vh, 1.5rem);
  opacity: 0.3;
}

.parchment.unrolled {
  height: clamp(12rem, 60vh, 30rem);
  transform-origin: top center;
}

.parchment-content {

  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.4s;
  padding: clamp(0.5rem, 2vw, 1.5rem);
  font-family: 'Times New Roman', serif;
  color: #29140b;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  overflow-y: auto;
  max-height: calc(100% - 2rem);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.parchment-content.visible {
  opacity: 1;
}

.parchment-roller {
  position: absolute;
  height: clamp(0.75rem, 2vh, 1.25rem);
  left: 0;
  right: 0;
  background: linear-gradient(to right, #99501b, #7f4022, #99501b);
  border-radius: max(0.5vw, 5px);
  z-index: 2;
}

.parchment-roller.top {
  top: 0;
  transform-origin: top center;
  transition: transform 0.8s ease-in-out;
}

.parchment-roller.bottom {
  bottom: 0;
  transform-origin: bottom center;
  transition: transform 0.8s ease-in-out;
}

.parchment.unrolled .parchment-roller.top {
  transform: scaleY(0.5);
}

.parchment.unrolled .parchment-roller.bottom {
  transform: scaleY(0.5);
}

/* Mobile-specific adjustments */
@media (max-width: 480px) {
  .parchment-container {
    width: 95%;
  }

  .parchment {
    padding: 0.5rem;
  }

  .parchment.unrolled {
    height: clamp(10rem, 70vh, 25rem);
  }

  .parchment-content {
    padding: 0.75rem;
    font-size: 1rem;
  }
}

/* Tablet adjustments */
@media (min-width: 481px) and (max-width: 768px) {
  .parchment-container {
    width: 92%;
  }

  .parchment.unrolled {
    height: clamp(12rem, 65vh, 28rem);
  }
}

/* Ensure scrolling works on touch devices */
@media (hover: none) {
  .parchment-content {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }
}

/* Custom scrollbar styling */
.parchment-content::-webkit-scrollbar {
  width: 8px;
}

.parchment-content::-webkit-scrollbar-track {
  background: rgba(245, 234, 207, 0.5);
  border-radius: 4px;
}

.parchment-content::-webkit-scrollbar-thumb {
  background: #be692c;
  border-radius: 4px;
}
</style>