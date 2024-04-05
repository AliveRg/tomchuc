<script setup>
import hyd from '../components/hyd.vue'
import acter from '../components/acter.vue'
import arheolog from '../components/arheolog.vue'
import astronom from '../components/astronom.vue'
import disagner from '../components/disagner.vue'
import fitsport from '../components/fitsport.vue'
import forogr from '../components/forogr.vue'
import music from '../components/music.vue'
import pisatel from '../components/pisatel.vue'
import putesh from '../components/putesh.vue'
import putevod from '../components/putevod.vue'
import povar from '../components/povar.vue'
import sadov from '../components/sadov.vue'
import slepolog from '../components/slepolog.vue'
import sport from '../components/sport.vue'
import tancor from '../components/tancor.vue'
</script>
<template>
  <div class="bg-gray-100 text-gray-900">
    <div class="container mx-auto p-6">
      <div v-if="profession">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            :src="profession.image"
            :alt="profession.profession"
            class="w-full h-96 object-cover object-center"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-4">{{ profession.profession }}</h2>
            <component :is="selectedProfessionInfo" />
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-red-500">Профессия не найдена</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visib: true,

      professions: [
        {
          profession: 'Художник',
          hobbies: ['Рисование', 'Графика', 'Фотография', 'Театр'],
          image: 'https://i.pinimg.com/564x/81/d2/da/81d2da3cf88bf9fcc337e89f582cc600.jpg',
          info: 'hyd'
        },
        {
          profession: 'Повар',
          hobbies: ['Кулинария', 'Садоводство', 'Виноделие'],
          image: 'https://i.pinimg.com/564x/19/8e/73/198e73da756eed4535a7b5d2515b2622.jpg',
          info: 'povar'
        },
        {
          profession: 'Музыкант',
          hobbies: ['Музыка', 'Танцы', 'Пение'],
          image: 'https://i.pinimg.com/564x/25/11/89/2511891171a83c90bf9629d5ff01654c.jpg',
          info: 'music'
        },
        {
          profession: 'Спортсмен',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Фризби'],
          image: 'https://i.pinimg.com/564x/af/24/fc/af24fcc359ad5810081e2ee4038c8179.jpg',
          info: 'sport'
        },
        {
          profession: 'Путешественник',
          hobbies: ['Путешествия', 'Туризм', 'Походы'],
          image: 'https://i.pinimg.com/564x/aa/ae/c0/aaaec00443c1cc724fad6d16e04a1ea0.jpg',
          info: 'putesh'
        },
        {
          profession: 'Писатель',
          hobbies: ['Литература', 'Поэзия'],
          image: 'https://i.pinimg.com/564x/5c/80/2a/5c802a549ccd8cca4388a245ff5a48ee.jpg',
          info: 'pisatel'
        },
        {
          profession: 'Дизайнер',
          hobbies: ['Графика', 'Рисование', 'Фотография'],
          image: 'https://i.pinimg.com/564x/9c/b7/04/9cb704ff4c74340cff8d147c5db97421.jpg',
          info: 'disagner'
        },
        {
          profession: 'Актер',
          hobbies: ['Театр', 'Музыка', 'Танцы'],
          image: 'https://i.pinimg.com/564x/07/5a/46/075a464c8e4988ee8abf360f4a05e36d.jpg',
          info: 'acter'
        },
        {
          profession: 'Астроном',
          hobbies: ['Астрономия', 'Фотография'],
          image: 'https://i.pinimg.com/564x/f5/2f/2a/f52f2aa722f6442d847f516d90efc0d7.jpg',
          info: 'astronom'
        },
        {
          profession: 'Спелеолог',
          hobbies: ['Скалолазание', 'Походы', 'Путешествия'],
          image: 'https://i.pinimg.com/564x/0f/48/c2/0f48c271a96601a7c2769be8e39b5037.jpg',
          info: 'slepolog'
        },
        {
          profession: 'Фитнес-тренер',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Танцы'],
          image: 'https://i.pinimg.com/564x/0e/f6/5e/0ef65e2cae85fe97a60207ae4a3d5838.jpg',
          info: 'fitsport'
        },
        {
          profession: 'Фотограф',
          hobbies: ['Фотография', 'Путешествия', 'Походы'],
          image: 'https://i.pinimg.com/564x/ee/69/18/ee6918aba213ae5b41f416acda602432.jpg',
          info: 'forogr'
        },
        {
          profession: 'Автор путеводителей',
          hobbies: ['Путешествия', 'Литература', 'Фотография'],
          image: 'https://i.pinimg.com/564x/5d/db/ee/5ddbee4be6ad60faf4b721d2dfa0cdc7.jpg',
          info: 'putevod'
        },
        {
          profession: 'Танцор',
          hobbies: ['Танцы', 'Музыка', 'Пение'],
          image: 'https://i.pinimg.com/564x/39/25/22/3925220cca237f969f7ed9c4d44f4858.jpg',
          info: 'tancor'
        },
        {
          profession: 'Садовник',
          hobbies: ['Садоводство', 'Ботаника'],
          image: 'https://i.pinimg.com/564x/af/21/21/af21211f8f7ac1001f5ab4a72a2f8be7.jpg',
          info: 'sadov'
        },
        {
          profession: 'Археолог',
          hobbies: ['Археология', 'Ботаника'],
          image: 'https://i.pinimg.com/564x/22/b1/5d/22b15ddaa7c6790706b4c534aed567f5.jpg',
          info: 'arheolog'
        }
      ],
      selectedOptions: [],
      selectProffArr: [],
      profession: null
    }
  },
  created() {
    const professionName = this.$route.params.params
    console.log(professionName)
    this.profession = this.professions.find((p) => p.profession === professionName)
  },
  computed: {
    // Динамический компонент для рендеринга
    selectedProfessionInfo() {
      // Получаем название профессии из параметра маршрута
      const professionName = this.$route.params.params
      // Ищем соответствующую профессию в массиве professions
      const profession = this.professions.find((prof) => prof.profession === professionName)
      console.log(profession ? profession.info : null)
      // Если профессия найдена, возвращаем информацию о ней, иначе - null
      return profession ? profession.info : null
    }
  },
  components: {
    hyd,
    acter,
    arheolog,
    astronom,
    disagner,
    disagner,
    fitsport,
    forogr,
    music,
    pisatel,
    putesh,
    putevod,
    povar,
    sadov,
    slepolog,
    sport,
    tancor
    // Здесь перечислите другие компоненты соответственно их значениям поля info в объектах
  },
  methods: {}
}
</script>

<style></style>
