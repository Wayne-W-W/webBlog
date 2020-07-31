<!-- 年月日Select组件 -->
<template>
  <cp-form ref="birthday">
    <div class="cp-date-select">
      <div class="name-select">
        <cp-select
          v-model="yearsModel"
          :required="true"
          :message="'请选择'"
          :placeholder="'年'"
        >
          <cp-option
            v-for="item in years"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></cp-option>
        </cp-select>
      </div>
      <div class="name-select">
        <cp-select
          v-model="monthsModel"
          :required="true"
          :message="'请选择'"
          :placeholder="'月'"
        >
          <template v-if="yearsModel">
            <cp-option
              v-for="item in months"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></cp-option>
          </template>
        </cp-select>
      </div>
      <div class="name-select">
        <cp-select
          v-model="daysModel"
          :required="true"
          :message="'请选择'"
          :placeholder="'日'"
          @change="handleChange"
        >
          <template v-if="yearsModel">
            <cp-option
              v-for="item in days"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></cp-option>
          </template>
        </cp-select>
      </div>
    </div>
  </cp-form>
</template>

<script>
import cpForm from '@/components/cp-form.vue'
import cpSelect from '@/components/cp-select.vue'
import cpOption from '@/components/cp-option.vue'
export default {
  components: {
    cpSelect,
    cpOption,
    cpForm,
  },
  data() {
    return {
      yearsModel: null,
      years: [],
      monthsModel: null,
      months: [],
      daysModel: null,
      days: [],
    }
  },
  watch: {
    yearsModel(val) {
      this.monthsModel = null
      this.daysModel = null
    },
    monthsModel(val) {
      this.daysModel = null
      if (this.yearsModel && this.monthsModel) {
        this.initSelectDay(this.yearsModel, this.monthsModel)
      }
    },
    daysModel(val) {
      if (this.yearsModel && this.monthsModel && this.daysModel)
        this.$emit(
          'postSelectDate',
          `${this.yearsModel}-${this.monthsModel}-${this.daysModel}`,
        )
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const myDate = new Date()
      const year = myDate.getFullYear()
      const month = myDate.getMonth() + 1
      // const day = myDate.getDate()
      this.initSelectYear(year)
      this.initSelectMonth()
      this.initSelectDay(year, month)
    },
    initSelectYear(year) {
      const yearsArray = []
      for (let i = 1970; i < year + 2; i++) {
        yearsArray.push({ value: i, label: i + '年' })
      }
      this.years = yearsArray.reverse()
    },
    initSelectMonth() {
      const monthsArray = []
      for (let i = 1; i <= 12; i++) {
        monthsArray.push({ value: i, label: i + '月' })
      }
      this.months = monthsArray
    },
    initSelectDay(year, month) {
      const maxDay = this.getMaxDay(year, month)
      const dayArray = []
      for (let i = 1; i <= maxDay; i++) {
        dayArray.push({ value: i, label: i + '日' })
      }
      this.days = dayArray
    },
    getMaxDay(year, month) {
      const newDate = new Date(year, month, 1)
      const lastDate = new Date(
        newDate.getTime() - 1000 * 60 * 60 * 24,
      ).getDate()
      return lastDate
    },
    handleChange() {},
    _validate() {
      // eslint-disable-next-line promise/param-names
      return new Promise((resolve, rej) => {
        this.$refs.birthday.validate(valid => {
          if (valid) {
          }
          resolve(valid)
        })
      })
    },
  },
}
</script>
<style lang="scss">
.cp-date-select {
  display: flex;
  .name-select + .name-select {
    @include layout-responsive(margin-left, vw(10), 10px, 10px, 10px);
  }
  .name-select {
    flex-grow: 1;
    background: #fff;
    @include layout-responsive(text-indent, vw(10), 10px, 10px, 10px);
    @include layout-responsive(width, vw(60), 140px, 140px, 140px);
  }
  .name-select /deep/ .cp-select {
    margin-bottom: 0 !important;
  }
}
</style>
