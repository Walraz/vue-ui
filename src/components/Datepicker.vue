<template>
  <div v-class="classes.root">
    <div v-class="classes.header">
      <div v-class="classes.month">
        <v-btn :tabindex="-1" icon="keyboard_arrow_left" theme="clear" @click="prevMonth">
        </v-btn>

        <transition :name="fadePos" mode="out-in">
          <div v-class="classes.dateContainer" :key="months[month]">
            <span>{{ months[month] }}</span>

            <div :tabindex="-1" @mousedown="onMouseDown" @click="viewYears = !viewYears" v-class="[classes.year]">
              <span>{{ year }}</span>
            </div>
          </div>
        </transition>

        <v-btn :tabindex="-1" icon="keyboard_arrow_right" theme="clear" @click="nextMonth">
        </v-btn>
      </div>
    </div>

    <transition name="fadeTop" mode="out-in" @enter="openYearSelect">
      <div v-if="!viewYears" v-class="classes.daysContainer" :key="months[month]">
        <div v-class="classes.weekdayContainer">
          <div v-class="classes.weekday" v-for="d in days" :key="d">{{ d }}</div>
        </div>
        <div v-class="classes.row" v-for="(week, i) in getDaysInMonth" :key="i">
          <div v-touch-ripple @click="selectDate(da)" v-class="[classes.day, isDisabled(da) && classes.isDisabled, isToday(da) && classes.isToday, isSelected(da) && classes.isSelected, da < 1 && classes.noDay]" v-for="(da, j) in week" :key="j">{{ da > 0 ? da : '' }}</div>
        </div>
      </div>
      <div v-else v-class="classes.yearContainer" :key="viewYears">
        <div :data-year="y" :tabindex="-1" @mousedown="onMouseDown" @click="selectYear(y)" v-class="[classes.yearRow, (y == year) && classes.yearRowSelected]" v-for="y in years" :key="y">{{ y }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import calendarMatrix from 'calendar-matrix'
import Button from './Button.vue'
const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
const days = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön']
const calendar = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
}

export default {
  name: 'datepicker',

  components: {
    'v-btn': Button,
  },

  data() {
    return {
      viewYears: false,
      years: [],
      fadePos: 'fadeLeft',
      months,
      days,
      ...calendar,
      selected: {
        ...calendar,
      }
    }
  },

  created() {
    this.year = this.inputValue.year
    this.month = this.inputValue.month
    this.day = this.inputValue.day
    this.selected = this.inputValue

    const year = new Date().getFullYear()
    const years = Number(year) - 100
    for (let i = years; i < year + 100; i++) {
      this.years.push(i)
    }
  },

  methods: {
    onMouseDown(e) {
      e.preventDefault()
    },
    isDisabled(day) {
      if (day < 1) return false
      return this.disableFn(`${this.year}-${this.month + 1}-${day}`)
    },
    openYearSelect() {
      if (this.viewYears) {
        const yearEl = this.$el.querySelector(`[data-year='${this.year}']`)
        this.$nextTick(() => {
          yearEl.parentElement.scrollTop = yearEl.offsetTop
        })
      }
    },
    selectYear(year) {
      this.year = year
      this.viewYears = false
    },
    prevMonth() {
      this.fadePos = 'fadeLeft'
      if (this.month - 1 < 0) {
        this.month = 11
        this.year--
      } else {
        this.month--
      }
    },
    nextMonth() {
      this.fadePos = 'fadeRight'
      if (this.month + 1 > 11) {
        this.month = 0
        this.year++
      } else {
        this.month++
      }
    },
    selectDate(day) {
      this.selected.year = this.year
      this.selected.month = this.month
      this.selected.day = day
      const parseMonth = this.selected.month + 1 < 10 ? '0' + (this.selected.month + 1) : this.selected.month + 1
      const parseDay = this.selected.day < 10 ? '0' + this.selected.day : this.selected.day
      this.$emit('input', `${this.selected.year}-${parseMonth}-${parseDay}`)
      this.$emit('selected', `${this.selected.year}-${parseMonth}-${parseDay}`)
    },
    isSelected(day) {
      return (this.year === this.selected.year && this.month === this.selected.month && day === this.selected.day)
    },
    isToday(day) {
      const today = new Date()
      return (this.year === today.getFullYear() && this.month === today.getMonth() && day === today.getDate())
    },
  },

  computed: {
    inputValue() {
      const date = this.value ? new Date(this.value) : new Date()
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
      }
    },
    getDaysInMonth() {
      const calendar = calendarMatrix(this.year, this.month)
      const shiftRow = Array(6).fill(0)
      calendar.forEach((row, i) => {
        if (row[0] > 0 && i === 0) shiftRow.push(row.shift())
        else if (i === 0) row.shift()

        if (calendar[i + 1] && calendar[i + 1][0]) {
          const shiftDay = calendar[i + 1].shift()
          row.push(shiftDay)
        }
      })
      calendar[calendar.length - 1].push(0)
      if (shiftRow.length === 7) calendar.unshift(shiftRow)
      if (calendar.length < 6) calendar[6] = Array(7).fill(0)
      return calendar
    },
    styles() {
      return {
        root: {
          outline: 'none',
          backgroundColor: '#fff',
          userSelect: 'none',
          width: this.block ? '100%' : 284,
          height: 316,
          position: 'relative',
          top: 0,
          left: 0,
          overflowY: 'hidden',
        },
        daysContainer: {
          display: 'flex',
          flexDirection: 'column',
        },
        yearContainer: {
          display: 'flex',
          flexDirection: 'column',
          height: 268,
          position: 'relative',
          left: 0,
          overflowY: 'scroll',
        },
        yearRow: {
          width: '100%',
          display: 'flex',
          height: 40,
          minHeight: 40,
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          fontWeight: 300,
          letterSpacing: -.5,
          fontSize: 16,
          backgroundColor: '#fff',
          transition: 'background .145s ease',
          ':hover': {
            backgroundColor: this.$color.dark(.05),
          }
        },
        yearRowSelected: {
          color: this.$color.primary,
          fontWeight: 600,
          fontSize: 18,
          ':hover': {
            backgroundColor: this.$color.primaryLight
          }
        },
        row: {
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16,
        },
        day: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 36,
          minWidth: 36,
          fontSize: 12,
          fontWeight: 400,
          backgroundColor: '#fff',
          cursor: 'pointer',
          color: '#000',
          borderRadius: 9999,
          transition: 'all, .145s ease',
          ':hover': {
            backgroundColor: this.$color.dark(.1),
          }
        },
        isToday: {
          color: this.$color.primary,
          fontWeight: 600,
        },
        isSelected: {
          backgroundColor: this.$color.primary,
          color: '#fff',
          ':hover': {
            backgroundColor: this.$color.primary,
            color: '#fff',
          }
        },
        isDisabled: {
          pointerEvents: 'none',
          opacity: .2,
        },
        noDay: {
          backgroundColor: '#fff',
          cursor: 'default',
          pointerEvents: 'none',
        },
        weekdayContainer: {
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16,
        },
        weekday: {
          color: this.$color.dark(.4),
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 36,
          height: 36,
        },
        header: {
          display: 'flex',
          flexDirection: 'column',
        },
        year: {
          fontSize: 18,
          paddingLeft: 8,
          fontWeight: 300,
          cursor: 'pointer',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all .145s ease',
          ':hover': {
            color: this.$color.primary,
          }
        },
        dateContainer: {
          display: 'flex',
          alignItems: 'center',
        },
        month: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: -1,
          color: this.$color.primary,
        }
      }
    }
  },

  props: {
    disableFn: {
      type: Function,
      default: () => false,
    },
    block: Boolean,
    value: String,
  }
}
</script>

<style>
.fadeLeft-enter-active,
.fadeLeft-leave-active {
  will-change: transform;
  transition: all .15s cubic-bezier(.25, .8, .25, 1);
}

.fadeLeft-enter,
.fadeLeft-leave-active {
  opacity: 0;
  transform: translateX(-16px);
}

.fadeRight-enter-active,
.fadeRight-leave-active {
  will-change: transform;
  transition: all .15s cubic-bezier(.25, .8, .25, 1);
}

.fadeRight-enter,
.fadeRight-leave-active {
  opacity: 0;
  transform: translateX(16px);
}

.fadeTop-enter-active,
.fadeTop-leave-active {
  will-change: transform;
  transition: all .15s cubic-bezier(.25, .8, .25, 1);
}

.fadeTop-enter,
.fadeTop-leave-active {
  opacity: 0;
  transform: translateY(-16px);
}
</style>