<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 bg-theme-darkgreen d-md-flex rounded mt-4 mb-3">
        <button @click="filterLevel('')" class="btn btn-theme-maroon w-100 mx-md-3 my-2">
          All Levels
        </button>
        <button @click="filterLevel(level)" class="btn btn-theme-maroon w-100 mx-md-3 my-2" v-for="level in poseLevels"
          :key="level">
          {{ level[0].toUpperCase() + level.slice(1) }}
        </button>
      </div>
      <div v-if="poses" class="col-12 my-3">
        <div v-for="pose in poses" :key="pose.id">
          <PoseCard :poseProp="pose" />
        </div>
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
    let filteredLevel = ref("")

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
      poseLevels,
      filteredLevel,

      filterLevel(level) {
        filteredLevel.value = level;
      },

    }
  }
}
</script>

<style scoped lang="scss">
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
