import '@/assets/main.css'

import { createApp } from 'vue'
import router from '@/router';
import App from '@/App.vue';

// Base component
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const app = createApp(App)
app.use(router);



app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
