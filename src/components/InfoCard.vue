<template>
  <div class="rounded-lg bg-white m-4 p-6">
    <h2 class="text-xl font-semibold mb-4">{{ data.name }}</h2>
    <p class="mb-2">
      <span class="font-semibold">Отбор на бюджетные места:</span> {{ data.otbud }}
    </p>
    <p class="mb-2"><span class="font-semibold">Отбор на платные места:</span> {{ data.otplat }}</p>
    <p class="mb-2"><span class="font-semibold">Бюджетных мест:</span> {{ data.budPlase }}</p>
    <p class="mb-2"><span class="font-semibold">Платных мест:</span> {{ data.platPlase }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object // Принимаем данные в виде объекта
  }
}
</script>

<style>
/* Можно добавить стили для карточки здесь */
</style>
