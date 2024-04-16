<script setup>
import InfoCard from '@/components/InfoCard.vue' // Подставьте путь к компоненту
</script>
<template>
  <div>
    <div class="w-screen min-h-screen bg-[#fff]">
      <h2 class="mx-auto text-[#EA592A] text-3xl font-bold text-center py-6">Вам подходит</h2>

      <div v-if="university">
        <InfoCard :data="university" />
      </div>
      <div v-else>
        <p>Университет в Белгороде не найден</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    InfoCard
  },
  data() {
    return {
      profession: '',
      professions: [
        {
          profession: 'Художник',
          hobbies: ['Рисование', 'Графика', 'Фотография', 'Театр'],
          image: 'https://i.pinimg.com/564x/81/d2/da/81d2da3cf88bf9fcc337e89f582cc600.jpg'
        },
        {
          profession: 'Повар',
          hobbies: ['Кулинария', 'Садоводство', 'Виноделие'],
          image: 'https://i.pinimg.com/564x/19/8e/73/198e73da756eed4535a7b5d2515b2622.jpg'
        },
        {
          profession: 'Музыкант',
          hobbies: ['Музыка', 'Танцы', 'Пение'],
          image: 'https://i.pinimg.com/564x/25/11/89/2511891171a83c90bf9629d5ff01654c.jpg'
        },
        {
          profession: 'Учитель',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Фризби'],
          image: 'https://i.pinimg.com/564x/31/53/cf/3153cf93dfbafe04f788069ce706b9ef.jpg'
        },
        {
          profession: 'Программист',
          hobbies: ['Путешествия', 'Туризм', 'Походы'],
          image: 'https://i.pinimg.com/564x/d6/c3/f8/d6c3f854c271e47d04cb8962058383c8.jpg'
        },
        {
          profession: 'Юрист',
          hobbies: ['Литература', 'Поэзия'],
          image: 'https://i.pinimg.com/564x/d5/01/30/d50130a2552e7ca947f42800006360c6.jpg'
        },
        {
          profession: 'Дизайнер',
          hobbies: ['Графика', 'Рисование', 'Фотография'],
          image: 'https://i.pinimg.com/564x/9c/b7/04/9cb704ff4c74340cff8d147c5db97421.jpg'
        },
        {
          profession: 'Актер',
          hobbies: ['Театр', 'Музыка', 'Танцы'],
          image: 'https://i.pinimg.com/564x/07/5a/46/075a464c8e4988ee8abf360f4a05e36d.jpg'
        },
        {
          profession: 'Астроном',
          hobbies: ['Астрономия', 'Фотография'],
          image: 'https://i.pinimg.com/564x/f5/2f/2a/f52f2aa722f6442d847f516d90efc0d7.jpg'
        },
        {
          profession: 'Спелеолог',
          hobbies: ['Скалолазание', 'Походы', 'Путешествия'],
          image: 'https://i.pinimg.com/564x/0f/48/c2/0f48c271a96601a7c2769be8e39b5037.jpg'
        },
        {
          profession: 'Кладовщик',
          hobbies: ['Футбол', 'Плавание', 'Фехтование', 'Бокс', 'Танцы'],
          image: 'https://i.pinimg.com/564x/ba/ad/ab/baadab0a88204046f0f96d5eab312d71.jpg'
        },
        {
          profession: 'Фотограф',
          hobbies: ['Фотография', 'Путешествия', 'Походы'],
          image: 'https://i.pinimg.com/564x/ee/69/18/ee6918aba213ae5b41f416acda602432.jpg'
        },
        {
          profession: 'Сварщик',
          hobbies: ['Путешествия', 'Литература', 'Фотография'],
          image: 'https://i.pinimg.com/564x/6b/a3/fa/6ba3faf15160b9d6715510b49d510382.jpg'
        },
        {
          profession: 'Финансист',
          hobbies: ['Танцы', 'Музыка', 'Пение'],
          image: 'https://i.pinimg.com/564x/f2/8c/af/f28caf2f35784ba3c17ce1bd90995d3f.jpg'
        },

        {
          profession: 'Археолог',
          hobbies: ['Археология', 'Ботаника'],
          image: 'https://i.pinimg.com/564x/22/b1/5d/22b15ddaa7c6790706b4c534aed567f5.jpg'
        }
      ],
      universities: [
        {
          name: 'Белгородский государственный национальный исследовательский университет',
          otbud: 'от 43 бал.бюджет',
          otplat: 'от 49 бал.платно',
          budPlase: '3 130 мест бюджет',
          platPlase: '2 488 мест платно',
          profession: ['Художник', 'Дизайнер', 'Программист', 'Финансист', 'Астроном'],
          img: ' https://smapse.ru/storage/2023/07/smapse-belgorodskij-gosudarstvennyj-institut-iskusstv-i-kul-tury.jpg'
        },
        {
          name: 'Белгородский государственный институт искусств и культуры',
          otbud: 'от 74 бал.бюджет',
          otplat: 'от 65 бал.платно',
          budPlase: '196 мест бюджет',
          platPlase: '157 мест платно',
          profession: ['Фотограф', 'Астроном', 'Спелеолог', 'Музыкант', 'Археолог', 'Повар'],
          img: ' https://lh3.googleusercontent.com/proxy/DH2Bzze1zJrWUBWSZQNf0TbD-9J5YK8f8bXMveSRi4phQAqcYEXNL7Uy2FZkzdvBeJmBqV95z5G-TOn2_Dv_eqAoFHuCejAN1BzCABuB-BL1FqA'
        },
        {
          name: 'Белгородский машиностроительный техникум',
          otbud: 'от 0 бал. бюджет',
          otplat: 'от 0 бал. платно',
          budPlase: '1365 мест бюджет',
          platPlase: 'нет платных мест',
          profession: [
            'Фотограф',
            'Астроном',
            'Спелеолог',
            'Музыкант',
            'Археолог',
            'Сварщик',
            'Кладовщик'
          ],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHjb_rRPszFP-lchjqB52lHFBgv9-IrB1ksnuRLQueAHTBimS_2MgFF4lrHECkNfW_Wg&usqp=CAU'
        },
        {
          name: 'Белгородский юридический институт МВД России имени И. Д. Путилина',
          otbud: 'от 76 бал. бюджет',
          otplat: 'от 54 бал. платно',
          budPlase: '1543 мест бюджет',
          platPlase: '1343 платных мест',
          profession: ['Юрист', 'Учитель', 'Спелеолог', 'Музыкант', 'Сварщик', 'Кладовщик'],
          img: 'https://lh3.googleusercontent.com/proxy/embw_-tebpwlkg8LboWHYDLv_4razat3LuixcAXl6hbY7WA7hUp1_nNQJDux0r4nlQi57OY6pCarzFactOcZVWLUAyFPlIORj8MsdV6PKDQ5yCN9R42F32ZxkSUx3Z1ewlAvwEPY04u1JyfxVfzd--yW0sgboUzUkF5CzA=s1360-w1360-h1020'
        }
      ],
      university: []
    }
  },
  created() {
    this.profession = this.$route.params.vus
    console.log(this.profession) // Получаем значение параметра маршрута
    this.findUniversity()
  },
  methods: {
    findUniversity() {
      this.university = this.universities.find((university) =>
        university.profession.includes(this.profession)
      )
      console.log(this.university)
    }
  }
}
</script>
<style></style>
