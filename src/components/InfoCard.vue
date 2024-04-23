<template>
  <div class="rounded-lg bg-white m-4 p-6">
    <!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="mb-12">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img :src="data.img" alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
              {{ data.name }}
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              Hot news -->
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              <span class="font-semibold">Отбор на бюджетные места:</span> {{ data.otbud }}
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              <p class="mb-2"><span class="font-semibold">Отбор на платные места:</span> {{ data.otplat }}</p>
              <p class="mb-2"><span class="font-semibold">Бюджетных мест:</span> {{ data.budPlase }}</p>
    <p class="mb-2"><span class="font-semibold">Платных мест:</span> {{ data.platPlase }}</p>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
  
  </div>
  <!-- Container for demo purpose -->
 
  <!-- Container for demo purpose -->
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
