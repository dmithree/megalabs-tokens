import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import get from 'lodash/get';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import startOfDay from 'date-fns/start_of_day';
import styles from './index.module.scss';
import { validateProps, normaliseValue } from './utilities.js';

/**
 * Thin wrapper around `react-day-picker` that renders a calendar.
 */
function DatePicker(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      onMonthChange = _ref.onMonthChange,
      _ref$disabledDays = _ref.disabledDays,
      disabledDays = _ref$disabledDays === void 0 ? {
    before: new Date()
  } : _ref$disabledDays,
      month = _ref.month,
      lastMonth = _ref.lastMonth,
      _ref$allowMultiSelect = _ref.allowMultiSelection,
      allowMultiSelection = _ref$allowMultiSelect === void 0 ? false : _ref$allowMultiSelect,
      daysThemeDotIndicator = _ref.daysThemeDotIndicator,
      daysThemeStrikeout = _ref.daysThemeStrikeout;
  validateProps({
    value: value,
    onChange: onChange,
    disabledDays: disabledDays,
    month: month,
    lastMonth: lastMonth,
    allowMultiSelection: allowMultiSelection,
    onMonthChange: onMonthChange,
    daysThemeDotIndicator: daysThemeDotIndicator,
    daysThemeStrikeout: daysThemeStrikeout
  });
  var selectedDays = normaliseValue(value);
  var modifiers = {};

  if (typeof daysThemeDotIndicator === 'function') {
    modifiers['theme-dot'] = daysThemeDotIndicator;
  }

  if (typeof daysThemeStrikeout === 'function') {
    modifiers['theme-strikeout'] = daysThemeStrikeout;
  }

  return React.createElement("div", {
    className: styles.root
  }, React.createElement(DayPicker, {
    disabledDays: disabledDays,
    fromMonth: get(disabledDays, 'before', null),
    toMonth: lastMonth,
    month: month || selectedDays[0],
    initialMonth: month || selectedDays[0],
    selectedDays: selectedDays,
    onMonthChange: onMonthChange,
    modifiers: modifiers,
    onDayClick: function onDayClick(day, _ref2) {
      var selected = _ref2.selected,
          disabled = _ref2.disabled;

      if (disabled) {
        return;
      }

      var newSelectedDays = normaliseValue(value);

      if (allowMultiSelection) {
        if (selected) {
          var selectedIndex = findIndex(newSelectedDays, function (selectedDay) {
            return DateUtils.isSameDay(selectedDay, day);
          });
          newSelectedDays.splice(selectedIndex, 1);
        } else {
          newSelectedDays.push(day);
        }
      } else {
        newSelectedDays = [day];
      }

      onChange(map(newSelectedDays, startOfDay));
    }
  }));
}

export default DatePicker;
//# sourceMappingURL=index.js.map
