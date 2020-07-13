<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
        <div class="font-bold text-xl mb-3 text-center">지하철역 관리</div>
        <form>
          <div class="mb-4">
            <input
              class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="station-name"
              type="text"
              autocomplete="off"
              placeholder="역 이름을 추가해주세요."
              v-model="inputText"
              @keyup.enter.prevent="addStation"
            />
            <button
              id="station-add-btn"
              class="inline-block text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
              @click.prevent="addStation"
            >
              추가
            </button>
          </div>
        </form>
        <div class="mt-5 flex station-list-container relative overflow-y-auto">
          <div id="station-list" class="w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminStation",
  data: function () {
    return {
      inputText: "",
    };
  },
  methods: {
    showStations() {
      axios
        .get("http://localhost:8080/stations")
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
        .then();
    },
    addStation() {
      axios
        .post("http://localhost:8080/stations", { name: this.inputText })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
        .then();
      this.inputText = "";
    },
  },
};
</script>
