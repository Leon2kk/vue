<template>
  <div class="project-details__intro">
      <div class="project-details__intro-content">Bedrooms</div>
      <div class="project-details center">
        <div v-for="item in getData" :key="item.id" class="project-details__content">
            <h2 class="project-details__heading">{{ item.heading }}</h2>
            <div class="project-details__text-box">
                <p class="project-details__text">{{ item.firstparagraph }}</p>
                <p class="project-details__text">{{ item.secondparagraph }}</p>
            </div>
            <div v-for="item in getSlide" :key="item.id" class="project-details__content">
              <img src="{{ item.src }}" alt="{{ item.alt }}">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['getData', 'getSlide']),
}
</script>
