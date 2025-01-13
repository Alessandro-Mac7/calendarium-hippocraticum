<script setup>
import calendarium from '@/assets/data/calendarium.json'
import {computed} from "vue";
import {useRouter} from 'vue-router';
import BaseButton from "@/components/ui/BaseButton.vue";
import Parchment from "@/components/ui/Parchment.vue";
import ParchmentModal from "@/components/ui/ParchmentModal.vue";

const router = useRouter()

const months = computed(() => calendarium.map(c => c.month))

function pushRoute(route) {
  const selectedMonth = "selected-month/" + route;
  router.push(selectedMonth);
}

</script>

<template>
  <div>
    <!-- Container for vertical centering if needed -->
    <div class="flex flex-col items-center justify-center">
      <ParchmentModal>
        <!-- Custom centered trigger -->
        <template #trigger>
          <button class="px-6 py-3 bg-amber-800 text-white rounded-lg
                        hover:bg-amber-700 transition-colors shadow-lg
                        flex items-center gap-2 mx-auto">
            <span>Ippocrate: Il giuramento Graeco - Latinum</span>
          </button>
        </template>

        <!-- Modal content -->
        <div class="space-y-6">
          <h2 class="text-2xl md:text-3xl font-semibold">Ippocrate: Il giuramento Graeco - Latinum</h2>
          <p class="text-lg leading-relaxed">
            «Ὄμνυμι Ἀπόλλωνα ἰητρὸν, καὶ Ἀσκληπιόν, καὶ Ὑγείαν, καὶ Πανάκειαν, καὶ θεοὺς πάντας τε καὶ πάσας, ἵστορας ποιεύμενος, ἐπιτελέα ποιήσειν κατὰ δύναμιν καὶ κρίσιν ἐμὴν ὅρκον τόνδε καὶ ξυγγραφὴν τήνδε.

            Ἡγήσασθαι μὲν τὸν διδάξαντά με τὴν τέχνην ταύτην ἴσα γενέτῃσιν ἐμοῖσι, καὶ βίου κοινώσεσθαι, καὶ χρεῶν χρηίζοντι μετάδοσιν ποιήσεσθαι, καὶ γένος τὸ ἐξ ωὐτέου ἀδελφοῖς ἴσον ἐπικρινέειν ἄρρεσι, καὶ διδάξειν τὴν τέχνην ταύτην, ἢν χρηίζωσι μανθάνειν, ἄνευ μισθοῦ καὶ ξυγγραφῆς, παραγγελίης τε καὶ ἀκροήσιος καὶ τῆς λοιπῆς ἁπάσης μαθήσιος μετάδοσιν ποιήσασθαι υἱοῖσί τε ἐμοῖσι, καὶ τοῖσι τοῦ ἐμὲ διδάξαντος, καὶ μαθηταῖσι συγγεγραμμένοισί τε καὶ ὡρκισμένοις νόμῳ ἰητρικῷ, ἄλλῳ δὲ οὐδενί.

            Διαιτήμασί τε χρήσομαι ἐπ' ὠφελείῃ καμνόντων κατὰ δύναμιν καὶ κρίσιν ἐμὴν, ἐπὶ δηλήσει δὲ καὶ ἀδικίῃ εἴρξειν.

            Οὐ δώσω δὲ οὐδὲ φάρμακον οὐδενὶ αἰτηθεὶς θανάσιμον, οὐδὲ ὑφηγήσομαι ξυμβουλίην τοιήνδε. Ὁμοίως δὲ οὐδὲ γυναικὶ πεσσὸν φθόριον δώσω.

            Ἁγνῶς δὲ καὶ ὁσίως διατηρήσω βίον τὸν ἐμὸν καὶ τέχνην τὴν ἐμήν.

            Οὐ τεμέω δὲ οὐδὲ μὴν λιθιῶντας, ἐκχωρήσω δὲ ἐργάτῃσιν ἀνδράσι πρήξιος τῆσδε.

            Ἐς οἰκίας δὲ ὁκόσας ἂν ἐσίω, ἐσελεύσομαι ἐπ' ὠφελείῃ καμνόντων, ἐκτὸς ἐὼν πάσης ἀδικίης ἑκουσίης καὶ φθορίης, τῆς τε ἄλλης καὶ ἀφροδισίων ἔργων ἐπί τε γυναικείων σωμάτων καὶ ἀνδρῴων, ἐλευθέρων τε καὶ δούλων.

            Ἃ δ' ἂν ἐν θεραπείῃ ἢ ἴδω, ἢ ἀκούσω, ἢ καὶ ἄνευ θεραπηίης κατὰ βίον ἀνθρώπων, ἃ μὴ χρή ποτε ἐκλαλέεσθαι ἔξω, σιγήσομαι, ἄρρητα ἡγεύμενος εἶναι τὰ τοιαῦτα.

            Ὅρκον μὲν οὖν μοι τόνδε ἐπιτελέα ποιέοντι, καὶ μὴ ξυγχέοντι, εἴη ἐπαύρασθαι καὶ βίου καὶ τέχνης δοξαζομένῳ παρὰ πᾶσιν ἀνθρώποις ἐς τὸν αἰεὶ χρόνον. παραβαίνοντι δὲ καὶ ἐπιορκοῦντι, τἀναντία τούτων».

            Per Apollinem Medicum, et Aesculapium, Hygiamque et Panaceam iureiurando affirmo et Deos Deasque omnes testor, me quantum viribus et iudicio valuero, quod nunc iuro, et ex scripto spondeo plane observaturum. Praeceptorem quidem qui me hanc artem edocuit, parentum loco habiturum, eique cum ad victum, tum etiam ad usum necessaria, grato animo communicaturum et suppeditaturum. Eiusque posteros apud me eodem loco quo germanos fratres fore, eosque si hanc artem addiscere volent, absque mercede et syngrapha edocturum. Praeceptionum quoque et auditionum, totiusque reliquae disciplinae, cum meos et eius qui me edocuit liberos, tum discipulos qui Medico iureiurando nomen fidemque dederint, participes facturum, aliorum praeterea neminem. Victus quoque rationem, quantum facultate et iudicio consequi potero, aegris utilem me praescripturum, eosque ab omni noxia et iniuria vindicaturum. Neque cuiusquam precibus adductus, alicui medicamentum lethale propinabo, neque huius rei author ero. Neque simili ratione mulieri pessum subdititium ad foetum corrumpendum exhibebo, sed castam et ab omni scelere puram, tum vitam, tum artem meam perpetuo praestabo. Neque vero calculo laborantes secabo, sed magistris eius artis peritis id muneris concedam. In quancunque autem domum ingressus fuero, ad aegrotantium salutem ingrediar, omnem iniuriae inferendae et corruptelae suspicionem procul fugiens, tum vel maxime rerum venerearum cupiditatem, erga mulieres iuxta ac viros, tum ingenuos, tum servos. Quae vero inter curandum, aut etiam Medicinam minime faciens, in communi hominum vita, vel videro, vel audivero, quae minime in vulgus efferri oporteat, ea arcana esse ratus, silebo. Hoc igitur iusiurandum si religiose observaro, ac minime irritum fecero, mihi liceat cum summa apud omnes existimatione perpetuo vitam faelicem degere, et artis uberrimum fructum percipere. Quod si illud violavero et peieravero,contraria mihi contingant.
          </p>
        </div>
      </ParchmentModal>
    </div>
    <div class="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto mt-9">
      <base-button v-for="(m,index) in months" v-bind:key="index" :title=m @click="pushRoute(m)"/>
    </div>

  </div>
</template>

<style scoped>
.parchment-text h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

.parchment-text p {
  margin-bottom: 1rem;
}

.modal-trigger-container {
  display: flex;
  justify-content: center;
}
</style>
