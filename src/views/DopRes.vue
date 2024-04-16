<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Container for demo purpose -->
  <div class="container my-24 mx-auto md:px-6">
    <!-- Section: Design Block -->
    <section class="mb-32">
      <h2 class="mb-12 text-center text-3xl font-bold">Дополнительные ресурсы</h2>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">
                  Навигатум. Федеральный образовательный проект.
                </h5>
                <img src="@/assets/1.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">Смартия</h5>
                <img src="@/assets/2.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">Профилум</h5>
                <img src="@/assets/3.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">Профориентатор</h5>
                <img src="@/assets/4.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/048.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">
                  Электронный музей профессий ПрофВыбор.руr
                </h5>
                <img src="@/assets/5.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/049.jpg"
            class="w-full align-middle transition duration-300 ease-linear"
          />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"
            >
              <div class="flex h-full items-end justify-between">
                <h5 class="m-6 text-lg font-bold text-white">Учеба.ру Профессии</h5>
                <img src="@/assets/6.png" alt="" />
              </div>
            </div>
            <div>
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"
              ></div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>

<style scoped>
.zoom:hover img {
  transform: scale(1.1);
}
</style>
