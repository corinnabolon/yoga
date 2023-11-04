<template>
  <section class="row justify-content-center">
    <div class="col-9 bg-theme-lightgreen shadow rounded my-4 py-3 raleway">
      <div class="text-center">
        <img :src="poseProp.imgUrl">
      </div>
      <section class="row justify-content-start mt-2">
        <div class="col-12 text-center">
          <p class="fs-1">{{ poseProp.englishName }}</p>
        </div>
        <div class="col-2"></div>
        <div class="col-3">
          <p class="fs-3">{{ poseProp.sanskritName }}</p>
          <p class="fst-italic">{{ poseProp.translation }}</p>
          <p v-if="poseProp.level" class="fs-3">Level: {{ poseProp.level }}</p>
        </div>
        <div class="col-1 mx-2">
          <p @mouseover="wantsDescription = true" @mouseleave="wantsDescription = false" class="fs-5 mb-4 text-maroon"
            role="button">Show description</p>
          <p @mouseover="wantsBenefits = true" @mouseleave="wantsBenefits = false" class="fs-5 mb-4 text-maroon"
            role="button">Show benefits</p>
        </div>
        <div class="col-5 border-theme-darkgreen rounded ms-5 pt-3 pb2 px-3 d-flex align-items-center"
          :class="wantsDescription ? 'd-block' : 'd-none'">
          <p>{{ poseProp.description }}</p>
        </div>
        <div class="col-5 border-theme-darkgreen rounded ms-5 pt-3 pb2 px-3 d-flex align-items-center"
          :class="wantsBenefits ? 'd-block' : 'd-none'">
          <p>{{ poseProp.benefits }}</p>
        </div>
      </section>
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Pose } from '../models/Pose.js'

export default {
  props: {
    poseProp: { type: Pose, required: true }
  },

  setup() {
    let wantsDescription = ref(false);
    let wantsBenefits = ref(false);

    return {
      wantsDescription,
      wantsBenefits,
    }
  }
};
</script>


<style lang="scss" scoped>
.border-theme-darkgreen {
  border: 1px solid var(--theme-darkgreen);
  border-radius: 5%;
}

.text-maroon:hover {
  color: var(--theme-maroon);
}
</style>