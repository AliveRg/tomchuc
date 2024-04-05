<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen min-h-screen bg-[#4B1E19]">
    <div class="container mx-auto p-4 flex flex-col justify-between">
      <h1 class="mx-auto text-[#EA592A] text-3xl font-bold text-center py-6">Выбери свои хобби</h1>

      <transition mode="out-in">
        <div v-if="visib" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(item, index) in hobbies" :key="index" class="relative">
            <input
              type="checkbox"
              :id="'apartment_' + item"
              name="hosting"
              :value="item"
              class="hidden peer"
              v-model="selectedOptions"
            />
            <label
              :for="'apartment_' + item"
              class="inline-flex items-center justify-center w-full p-2 md:p-5 bg-[#FC8B5E] text-[#100102] rounded-lg cursor-pointer peer-checked:text-[#E0F4F5] peer-checked:rounded-full transition-all"
            >
              <div class="block">
                <div class="w-full text-lg md:text-xl font-semibold">{{ item }}</div>
              </div>
            </label>
          </div>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="flex justify-center" v-for="(prof, index) in selectProffArr" :key="index">
            <div
              class="w-fit flex flex-col items-center justify-center p-3 rounded-lg shadow-md bg-[#FC8B5E]"
            >
              <img
                :src="prof.image"
                alt="Profession Image"
                class="w-[200px] md:w-[400px] h-[200px] md:h-[400px] max-w-xs rounded-lg object-cover"
              />
              <div class="text-center">
                <h2 class="text-xl font-bold mt-4 mb-2">{{ prof.profession }}</h2>
                <p class="text-sm text-gray-600 mb-4">Краткое описание профессии...</p>
                <div class="space-x-4">
                  <router-link
                    class="btn-choose bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    :to="{ name: 'vus', params: { vus: prof.profession } }"
                    >Выбрать</router-link
                  >
                  <router-link
                    class="btn-details bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    :to="{ name: 'about', params: { params: prof.profession } }"
                    >Подробнее</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <h2
        v-if="visib"
        @click="selectProff"
        class="mx-auto text-[#EA592A] text-3xl font-bold text-center py-6"
      >
        Далее
      </h2>
      <h2
        v-if="!visib"
        @click="clearloc"
        class="mx-auto text-[#EA592A] text-3xl font-bold text-center py-6"
      >
        Начать заново
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visib: true,
      hobbies: [
        'Футбол',
        'Музыка',
        'Литература',
        'Графика',
        'Фехтование',
        'Рукоделие',
        'Плавание',
        'Кулинария',
        'Видеоигры',
        'Садоводство',
        'Кино',
        'Поэзия',
        'Вязание',
        'Граффити',
        'Астрономия',
        'Фотография',
        'Рисование',
        'Фрирайд',
        'Серфинг',
        'Паркур',
        'Скалолазание',
        'Фризби',
        'Подводное плавание',
        'Парашютный спорт',
        'Археология',
        'Театр',
        'Бокс',
        'Бильярд',
        'Виноделие',
        'Танцы',
        'Пение',
        'Путешествия',
        'Медитация',
        'Походы'
      ],
      professions: [
        {
          profession: 'Художник',
          hobbies: ['Рисование', 'Графика', 'Фотография', 'Театр'],
          image: 'https://i.pinimg.com/564x/81/d2/da/81d2da3cf88bf9fcc337e89f582cc600.jpg',
          vus: ''
        },
        {
          profession: 'Повар',
          hobbies: ['Кулинария', 'Садоводство', 'Виноделие'],
          image: 'https://i.pinimg.com/564x/19/8e/73/198e73da756eed4535a7b5d2515b2622.jpg',
          vus: ''
        },
        {
          profession: 'Музыкант',
          hobbies: ['Музыка', 'Танцы', 'Пение'],
          image: 'https://i.pinimg.com/564x/25/11/89/2511891171a83c90bf9629d5ff01654c.jpg',
          vus: ''
        },
        {
          profession: 'Учитель',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Фризби'],
          image: 'https://i.pinimg.com/564x/31/53/cf/3153cf93dfbafe04f788069ce706b9ef.jpg',
          vus: ''
        },
        {
          profession: 'Программист',
          hobbies: ['Путешествия', 'Туризм', 'Походы'],
          image: 'https://i.pinimg.com/564x/d6/c3/f8/d6c3f854c271e47d04cb8962058383c8.jpg',
          vus: ''
        },
        {
          profession: 'Юрист',
          hobbies: ['Литература', 'Поэзия'],
          image: 'https://i.pinimg.com/564x/d5/01/30/d50130a2552e7ca947f42800006360c6.jpg',
          vus: ''
        },
        {
          profession: 'Дизайнер',
          hobbies: ['Графика', 'Рисование', 'Фотография'],
          image: 'https://i.pinimg.com/564x/9c/b7/04/9cb704ff4c74340cff8d147c5db97421.jpg',
          vus: ''
        },
        {
          profession: 'Актер',
          hobbies: ['Театр', 'Музыка', 'Танцы'],
          image: 'https://i.pinimg.com/564x/07/5a/46/075a464c8e4988ee8abf360f4a05e36d.jpg',
          vus: ''
        },
        {
          profession: 'Астроном',
          hobbies: ['Астрономия', 'Фотография'],
          image: 'https://i.pinimg.com/564x/f5/2f/2a/f52f2aa722f6442d847f516d90efc0d7.jpg',
          vus: ''
        },
        {
          profession: 'Спелеолог',
          hobbies: ['Скалолазание', 'Походы', 'Путешествия'],
          image: 'https://i.pinimg.com/564x/0f/48/c2/0f48c271a96601a7c2769be8e39b5037.jpg',
          vus: ''
        },
        {
          profession: 'Фитнес-тренер',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Танцы'],
          image: 'https://i.pinimg.com/564x/0e/f6/5e/0ef65e2cae85fe97a60207ae4a3d5838.jpg',
          vus: ''
        },
        {
          profession: 'Фотограф',
          hobbies: ['Фотография', 'Путешествия', 'Походы'],
          image: 'https://i.pinimg.com/564x/ee/69/18/ee6918aba213ae5b41f416acda602432.jpg',
          vus: ''
        },
        {
          profession: 'Сварщик',
          hobbies: ['Путешествия', 'Литература', 'Фотография'],
          image: 'https://i.pinimg.com/564x/6b/a3/fa/6ba3faf15160b9d6715510b49d510382.jpg',
          vus: ''
        },
        {
          profession: 'Финансист',
          hobbies: ['Танцы', 'Музыка', 'Пение'],
          image: 'https://i.pinimg.com/564x/f2/8c/af/f28caf2f35784ba3c17ce1bd90995d3f.jpg',
          vus: ''
        },
        {
          profession: 'Садовник',
          hobbies: ['Садоводство', 'Ботаника'],
          image: 'https://i.pinimg.com/564x/af/21/21/af21211f8f7ac1001f5ab4a72a2f8be7.jpg',
          vus: ''
        },
        {
          profession: 'Археолог',
          hobbies: ['Археология', 'Ботаника'],
          image: 'https://i.pinimg.com/564x/22/b1/5d/22b15ddaa7c6790706b4c534aed567f5.jpg',
          vus: ''
        }
      ],
      selectedOptions: [],
      selectProffArr: []
    }
  },
  created() {
    const cat = localStorage.getItem('myCat')
    if (cat) {
      this.selectProffArr = JSON.parse(localStorage.getItem('myCat'))
      setTimeout(() => {
        this.visib = false
      }, 100)
    }
  },
  methods: {
    clearloc() {
      localStorage.removeItem('myCat')
      window.location.reload()
    },
    selectProff() {
      const uniqueProfessions = new Set() // Создаем пустой набор для хранения уникальных профессий
      this.selectedOptions.forEach((selectedHobby) => {
        this.professions.forEach((profession) => {
          if (profession.hobbies.includes(selectedHobby)) {
            uniqueProfessions.add(profession) // Добавляем профессию в набор
          }
        })
      })
      // Преобразуем набор в массив и добавляем его содержимое в selectProffArr
      this.selectProffArr = Array.from(uniqueProfessions)
      localStorage.setItem('myCat', JSON.stringify(this.selectProffArr))
      console.log(this.selectProffArr)
      setTimeout(() => {
        if (this.selectedOptions.length >= 3) {
          this.visib = false
        } else {
          alert('минимум хобби - 3')
        }
      }, 100)
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
