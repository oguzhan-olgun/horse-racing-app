import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

// prime vue
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';
import Divider from 'primevue/divider';
import {definePreset} from '@primevue/themes';

import App from './App.vue'
import router from './router'

import i18n from './i18n';

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(i18n);

const AppPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: AppPreset
    }
});

app.component("PrimeButton", Button);
app.component("DataTable", DataTable);
app.component("TableColumn", Column);
app.component("ProgressBar", ProgressBar);
app.component("PrimeDivider", Divider);

app.mount('#app')
