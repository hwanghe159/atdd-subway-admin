<template>
  <div id="app">
    <div id="nav">
      <nav
        class="flex items-center justify-between flex-wrap bg-yellow-500 p-4"
      >
        <div class="flex items-center flex-shrink-0 text-gray-800 w-full">
          <router-link to="/" class="mr-2">
            <img src="./assets/images/logo_small.png" class="w-6" />
          </router-link>
          <div class="flex justify-start">
            <div class="hover:bg-yellow-400 px-2 py-1 rounded">
              <router-link
                to="/admin-station"
                class="block inline-block lg:mt-0 text-gray-800 text-sm"
              >
                역 관리
              </router-link>
            </div>
            <div class="hover:bg-yellow-400 px-2 py-1 rounded">
              <router-link
                to="/admin-line"
                class="block inline-block lg:mt-0 text-gray-800 text-sm"
              >
                노선 관리
              </router-link>
            </div>
            <div class="hover:bg-yellow-400 px-2 py-1 rounded">
              <router-link
                to="/admin-edge"
                class="block inline-block lg:mt-0 text-gray-800 text-sm"
              >
                구간 관리
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "./assets/css/admin-app.css";
@import "./assets/css/admin-edge.css";
@import "./assets/css/admin-line.css";
@import "./assets/css/admin-station.css";
</style>
