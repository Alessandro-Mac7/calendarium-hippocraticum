<script setup>
import calendarium from '@/assets/data/calendarium.json'
import {computed} from "vue";
import BaseCard from "@/components/ui/BaseCard.vue";

const props = defineProps({
  month: String
})

const currentMonth = computed( () => calendarium.find(c => c.month === props.month));

function getClass(align, fontWeight, fontStyle) {
  let cssClass = "";
  if(align) {
    cssClass += " text-" + align  + " pre-wrap";
  } else {
    cssClass += " text-" + align;
  }
  if (fontWeight) {
    cssClass += " font-" + fontWeight + " ";
  }
  if (fontStyle) {
    cssClass += " " + fontStyle;
  }

  console.log(cssClass)
  return cssClass;
}
function getImgUrl(pic){
  return new URL('../assets/images/'+pic, import.meta.url).href;
}

function unEscape(text) {
  text = text.replace(/&lt;/g , "<");
  text = text.replace(/&gt;/g , ">");
  text = text.replace(/&quot;/g , "\"");
  text = text.replace(/&#39;/g , "\'");
  text = text.replace(/&amp;/g , "&");
  return text;
}

</script>

<template>
  <base-card>
    <header class="text-center">
      <h3 class="title mt-4 mb-2 lighter">{{currentMonth.month}}</h3>
      <h3 class="sub-title mb-4 lighter">{{currentMonth.title}}</h3>
      <img :alt="currentMonth.title" class="mx-auto p-10 max-w-lg" :src="getImgUrl(currentMonth.img)">
    </header>
    <main class="text-justify mb-5">
      <div v-for="(t,index) in currentMonth.texts" v-bind:key="index" class="my-5">
        <p :class='getClass(t.align, t.fontWeight, t.fontStyle)'>{{ unEscape(t.text) }}</p>
      </div>
    </main>
  </base-card>
</template>

<style scoped>
.title {
  font-family: 'EFCOBrookshireRegular', sans-serif;
  font-size: 2rem;
}

.sub-title {
  font-family: 'Bosk', sans-serif;
  font-size: 1.4rem;
}

p {
  font-size: 1.1rem;
}
</style>
