<template>
  <div class="indicator-list card">
    <div class="indicator-list__header">
      <h3 class="indicator-list__title">{{ name }}</h3>
      <button v-if="randomIndicators.length || indicators.length" class="btn" type="button" @click.prevent="random = !random">{{ random ? 'Сортировать' : 'Перемешать' }}
      </button>
    </div>
    <ul v-if="random" class="indicator-list__list">
      <li class="indicator-list__item" v-for="(indicator, idx) in randomIndicators" :key="indicator + idx">
        <span class="indicator" :data-color="indicator" @click="remove" :style="{backgroundColor: indicator}"></span>
      </li>
    </ul>
    <div v-else>
      <ul class="indicator-list__list" v-for="(list, idx) in indicators" :key="'indicator-list' + idx">
        <li class="indicator-list__item" v-for="(indicator, idx) in list" :key="indicator + idx">
          <span class="indicator" :data-color="indicator" @click="remove" :style="{backgroundColor: indicator}"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'name', 'listId'],
  data() {
    return {
      random: false
    }
  },
  computed: {
    randomIndicators() {
      const items = []
      this.items.forEach(item => {
        if (item.checked) {
          for (let idx = 0; idx < item.quantity; idx++) {
            items.push(item.color)
          }
        }
      })
      return this.shuffle(items)
    },
    indicators() {
      const items = []
      this.items.forEach(item => {
        if (item.checked) {
          const arr = []
          for (let idx = 0; idx < item.quantity; idx++) {
            arr.push(item.color)
          }
          items.push(arr)
        }
      })
      return items
    }
  },
  methods: {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    remove() {
      this.$store.commit('decreaseItemQuantity', {id: this.listId, color: event.target.dataset.color})
    }
  },
  name: "AppIndicatorList"
}
</script>

<style lang="scss">
.indicator-list {
  + .indicator-list {
    margin-top: 28px;
  }
}

.indicator-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.indicator-list__title {
  font-size: 27px;
  line-height: 120%;
  margin: 0;
}

.indicator-list__list {
  margin-top: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:first-of-type {
    margin-top: 5px;
  }
}

.indicator-list__item {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
