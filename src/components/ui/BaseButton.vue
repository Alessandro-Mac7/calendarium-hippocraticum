<template>
  <button class="action-button rounded-xl my-5 lighter "> {{ title }}</button>
</template>

<script>
export default {
  props: ['title']
}
</script>


<style scoped>
.action-button {
  margin-left: auto;
  margin-right: auto;
  font-family: 'RosarivoRegular', sans-serif;
  padding: 1.5rem;
  width: 12vw; /* Utilizza unità relative per la reattività */
  height: 12vw; /* Imposta l'altezza uguale alla larghezza */
  border-color: transparent;
  background-color: #a9946c;
  transition: all .1s;
}

.action-button:hover {
  filter: brightness(130%);
  transform: scale(0.97);
}

.action-button:focus {
  filter: brightness(140%);
  transform: scale(0.93);
  border-color: transparent;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 640px) {
  .action-button {
    width: 10vw;
    height: 10vw;
    font-size: 1.4rem;
  }
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) {
  .action-button {
    width: 10vw;
    height: 10vw;
    font-size: 1.4rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .action-button {
    width: 12vw;
    height: 12vw;
    font-size: 1.8rem;
  }
}
</style>
