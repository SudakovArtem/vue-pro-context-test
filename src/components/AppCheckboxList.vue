<template>
  <div class="checkbox-group accordion">
    <div :class="['checkbox-group__header', open ? 'open' : null]" @click="accordionToggle(id)">
      <img src="../assets/img/down-arrow.svg" alt="arrow" width="33" height="33">
      <div :class="['checkbox', hasItems ? 'hasItem' : null]" @click.stop>
        <input class="visually-hidden" type="checkbox" :id="'checkbox-' + id" :checked="checked" @change="checkGroup(id)">
        <label :for="'checkbox-' + id">
          <img src="../assets/img/check-icon.svg" alt="check" width="24" height="19">
          <span>{{ name }}</span>
        </label>
      </div>
    </div>
    <ul class="checkbox-group__content accordion__content" :id="id" ref="accordion"
        :style="{maxHeight: open ? accordionHeight : null}">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {type: Array, required: true},
    id: {type: String, required: true},
    checked: {type: Boolean, required: true},
    name: {type: String, required: true},
    open: {type: Boolean, required: true},
    hasItems: {type: Boolean, required: true}
  },
  data() {
    return {
      accordionHeight: 'none',
    }
  },
  mounted() {
    this.accordionHeight = this.$refs.accordion.scrollHeight + 'px'
  },
  methods: {
    accordionToggle(id) {
      this.$store.commit('openListToggle', id)
      this.accordionHeight = this.$refs.accordion.scrollHeight + 'px'
    },
    checkGroup(id) {
      this.$store.commit('markList', {id, checked: event.target.checked})
    }
  },
  name: "AppCheckboxList"
}
</script>

<style lang="scss">
.checkbox-group {
  overflow: hidden;
  padding: 0;
  background: #fff;

  + .checkbox-group {
    margin-top: 7px;
  }
}

.checkbox-group__header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 57px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding-left: 34px;
  }

  > img {
    position: absolute;
    width: 33px;
    height: 33px;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transition: transform 0.3s ease;

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }

  &.open {
    > img {
      transform: translateY(-50%) rotate(0);
    }
  }
}

.checkbox-group__content {
  padding-left: 20%;
  margin: 0;
}

.accordion__content {
  max-height: 0;
  overflow: hidden;
  max-width: 592px;
  transition: max-height 0.3s ease;
}

.checkbox {
  input[type="checkbox"] + label {
    position: relative;
    padding-left: 59px;
    display: inline-block;
    height: 32px;
    font-size: 27px;
    line-height: 32px;
    cursor: pointer;

    @media (max-width: 767px) {
      padding-left: 42px;
      font-size: 18px;
    }

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 32px;
      height: 32px;
      border: 1px solid black;
    }

    span {
      position: relative;
    }

    span::after {
      position: absolute;
      content: "";
      bottom: -4px;
      left: 0;

      height: 1px;
      width: 0;
      background-color: white;
    }
  }

  label {
    img {
      position: absolute;
      left: 3px;
      top: 50%;
      opacity: 0;
      transform: translateY(-50%);
      transition: opacity 0.3s ease;
    }
  }

  input[type="checkbox"]:checked + label {
    &::before {
      opacity: 1;
    }

    &::after {
      display: none;
    }

    img {
      opacity: 1;
    }
  }

  &.hasItem {
    input[type="checkbox"]:not(:checked) + label {
      &::after {
        content: "";
        position: absolute;
        display: block;
        left: 11px;
        width: 10px;
        height: 10px;
        background-color: black;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
