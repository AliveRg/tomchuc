<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { SparklesIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="w-screen min-h-screen bg-[#FFF5E0]">
    <!-- Section: Design Block -->
    <section class="mb-20 relative">
      <!-- Navbar -->
      <nav
        class="relative flex w-full items-center justify-between py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <!-- Container wrapper -->
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <div class="flex items-center">
            <div class="w-full px-5 py-2 text-[#EA592A] text-3xl font-bold">
              Твои шаги к профессии
            </div>
          </div>
        </div>
        <!-- Container wrapper -->
      </nav>

      <div class="bg-neutral-50 py-24 px-6 text-center dark:bg-neutral-900">
        <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Сайт для выбора профессии <br /><span class="text-[#FFC470]">выбери свое хобби</span>
        </h1>
        <a
          class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal bg-[#4793AF] text-[#FFC470] shadow-[0_4px_9px_-4px_#4793AF] transition duration-150 ease-in-out hover:bg-[#DD5746] hover:shadow-[0_8px_9px_-4px_#DD5746,0_4px_18px_0_#DD5746] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init
          data-te-ripple-color="light"
          href="#start"
          role="button"
          >Начать</a
        >
        <RouterLink
          class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
          data-te-ripple-init
          data-te-ripple-color="light"
          to="/dop/res"
          role="button"
          >Дополнительные ресурсы</RouterLink
        >
      </div>
      <div class="absolute bottom-0 right-0 py-4 px-5 flex justify-end flex-col items-end">
        <a href="https://tomchuk-project.netlify.app/">
          <img src="@/assets/qr-code.svg" alt="" class="w-[100px]" />
        </a>
        <p class="text-[#141E46] font-semibold text-sm mb-3 text-end">
          Тест для определения предрасположенностей к профессии <br />
          нажмите или наведите камеру чтобы перейти по ссылке
        </p>
      </div>
      <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->
    <div class="container mx-auto p-4 flex flex-col justify-between" id="start">
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
              class="inline-flex items-center justify-center w-full p-2 md:p-5 bg-[#FC8B5E] text-[#fff] rounded-lg cursor-pointer peer-checked:bg-[#DD5746] peer-checked:rounded-full transition-all"
            >
              <div class="flex items-center">
                <div class="w-full text-lg md:text-xl font-semibold">{{ item }}</div>
                <SparklesIcon class="h-6 w-6 text-[#fff]" />
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
                <h2 class="text-xl font-bold text-[#fff] mt-4 mb-2">{{ prof.profession }}</h2>
                <p class="text-sm text-gray-600 mb-4">Краткое описание профессии...</p>
                <div class="space-x-4">
                  <router-link
                    class="btn-choose bg-[#DD5746] text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    :to="{ name: 'vus', params: { vus: prof.profession } }"
                    >Выбрать</router-link
                  >
                  <router-link
                    class="btn-details bg-[#FFC470] text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
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
        class="mx-auto text-[#141E46] text-3xl font-bold text-center py-6"
      >
        Далее
      </h2>
      <h2
        v-if="!visib"
        @click="clearloc"
        class="mx-auto text-[#141E46] text-3xl font-bold text-center py-6"
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
        'Кино',
        'Поэзия',
        'Вязание',
        'Граффити',
        'Астрономия',
        'Фотография',
        'Рисование',
        'Скалолазание',
        'Фризби',
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
          hobbies: ['Кулинария', 'Виноделие'],
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
          profession: 'Кладовщик',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Танцы'],
          image: 'https://i.pinimg.com/564x/ba/ad/ab/baadab0a88204046f0f96d5eab312d71.jpg',
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
