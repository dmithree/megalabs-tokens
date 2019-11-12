import map from 'lodash/map';
import startOfDay from 'date-fns/start_of_day';
import some from 'lodash/some';
import castArray from 'lodash/castArray';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import endOfDay from 'date-fns/end_of_day';
import parse from 'date-fns/parse';

// Throws an error `message` with a prefix showing that it comes from the DatePicker.
function throwError(message) {
  throw new Error("TUI DatePicker: ".concat(message));
} // Returns true any of the given `dates` fall on a day before the day of `cutoff`.


function hasAnyPastDays(dates) {
  var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return some(dates, function (date) {
    return isBefore(endOfDay(date), cutoff);
  });
} // Returns true any of the given `dates` fall on a day after the day of `cutoff`.

function hasAnyFutureDays(dates) {
  var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return some(dates, function (date) {
    return isAfter(startOfDay(date), cutoff);
  });
} // Normalise the `value` prop to always be an array of dates.

function normaliseValue(value) {
  var valueArr = castArray(value);
  return map(valueArr, function (d) {
    return parse(d);
  });
} // Validate the `props` object and throw errors if there are any inconsistencies.

function validateProps(props) {
  var days = normaliseValue(props.value);

  if (!props.allowMultiSelection && days.length > 1) {
    throwError('`allowMultiSelection` is `false` but multiple dates were provided');
  }

  var _ref = props.disabledDays || {},
      before = _ref.before,
      after = _ref.after;

  if (before && hasAnyPastDays(days, before)) {
    throwError("Days before ".concat(before, " are disabled but one or more provided days fall before that."));
  }

  if (after && hasAnyFutureDays(days, after)) {
    throwError("Days after ".concat(after, " are disabled but one or more provided days fall after that."));
  }
}

export { hasAnyFutureDays, hasAnyPastDays, normaliseValue, validateProps };
//# sourceMappingURL=utilities.js.map
