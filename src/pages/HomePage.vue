<template>
  <div class="container-fluid bg-theme-beige-lighten">
    <section class="row justify-content-center">
      <div class="col-11 col-md-12 bg-theme-darkgreen d-md-flex rounded mt-4 mb-3">
        <button @click="filterLevel('')" class="btn btn-theme-maroon w-100 mx-md-3 my-2">
          All Levels
        </button>
        <button @click="filterLevel(level)" class="btn btn-theme-maroon w-100 mx-md-3 my-2" v-for="level in poseLevels"
          :key="level">
          {{ level[0].toUpperCase() + level.slice(1) }}
        </button>
      </div>
      <div class="col-12 col-md-3 d-flex flex-column">
        <select v-model="wantedCategory"
          class="form-select form-select-lg mb-3 text-theme-maroon bg-theme-lightgreen py-0 search-button"
          aria-label=".form-select-lg example" id="kinds">
          <option selected>{{ wantedCategory }}</option>
          <option v-for="kind in kinds" :key="kind">{{ kind }}</option>
        </select>
        <button @click="searchByKind(wantedCategory)" class="btn btn-theme-maroon ms-2 change-kind-button">Change
          Category</button>
      </div>
      <div class="col-12 col-md-6 mt-5 mt-md-3 d-flex align-items-center justify-content-center">
        <p class="fs-1 text-theme-darkgreen text-shadow-maroon">{{ currentCategory }}</p>
      </div>
    </section>
    <section class="row">
      <div v-if="poses" class="col-12 my-3">
        <div v-for="pose in poses" :key="pose.id">
          <PoseCard :poseProp="pose" />
        </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { yogaService } from '../services/YogaService.js'
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    let poseLevels = ["beginner", "intermediate", "expert"]
    let kinds = ["All Kinds",
      "Core Yoga",
      "Seated Yoga",
      "Strengthening Yoga",
      "Chest Opening Yoga",
      "Backbend Yoga",
      "Forward Bend Yoga",
      "Hip Opening Yoga",
      "Standing Yoga",
      "Restorative Yoga",
      "Arm Balance Yoga",
      "Balancing Yoga",
      "Inversion Yoga"]
    let filteredLevel = ref("")
    let wantedCategory = ref("Choose a Category")
    let currentCategory = ref("All Poses")

    onMounted(() => {
      getPoses();
    }
    )

    async function getPoses() {
      try {
        logger.log("HomePage")
        await yogaService.getPoses()
        runThroughLevels()
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getPosesByLevel(level) {
      try {
        await yogaService.getPosesByLevel(level)
      } catch (error) {
        Pop.error(error)
      }
    }

    function runThroughLevels() {
      poseLevels.forEach((level) => {
        getPosesByLevel(level)
      })
    }

    return {
      poses: computed(() => {
        if (filteredLevel.value != "") {
          return AppState.poses.filter(
            (pose) => pose.level.toLocaleLowerCase() == filteredLevel.value
          )
        } else {
          return AppState.poses
        }
      }),
      kinds,
      poseLevels,
      filteredLevel,
      wantedCategory,
      currentCategory,
      runThroughLevels,

      filterLevel(level) {
        filteredLevel.value = level;
      },

      async searchByKind(kind) {
        try {
          await yogaService.searchByKind(kind)
          currentCategory.value = kind
          this.runThroughLevels()
          wantedCategory.value = "Choose a category"
        } catch (error) {
          Pop.error(error)
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
select {
  width: 85%;
  margin-left: 5%;
}

.change-kind-button {
  width: 50%;
  align-self: end;
  margin-right: 10%;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
