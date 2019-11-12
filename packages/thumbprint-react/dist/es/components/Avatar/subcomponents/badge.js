import React from 'react';
import styles from './badge.module.scss';

// TODO(giles): remove all "checked" configs once we delete the isChecked prop
var sizeClasses = {
  xsmall: {
    userOnline: {
      top: 0,
      right: -2,
      size: 12
    },
    userChecked: {
      top: -2,
      right: -4,
      size: 17
    },
    entityOnline: {
      size: 12
    }
  },
  small: {
    userOnline: {
      top: 1,
      right: -2,
      size: 12
    },
    userChecked: {
      top: -2,
      right: -4,
      size: 17
    },
    entityOnline: {
      size: 12
    }
  },
  medium: {
    userOnline: {
      top: 2,
      right: 2,
      size: 14
    },
    userChecked: {
      top: -2,
      right: -2,
      size: 20
    },
    entityOnline: {
      size: 14
    }
  },
  large: {
    userOnline: {
      top: 4,
      right: 5,
      size: 18
    },
    userChecked: {
      top: 0,
      right: 0,
      size: 24
    },
    entityOnline: {
      size: 18
    }
  },
  xlarge: {
    userOnline: {
      top: 0,
      right: 14,
      size: 24
    },
    userChecked: {
      top: 0,
      right: 6,
      size: 30
    },
    entityOnline: {
      size: 24
    }
  }
};

/**
 * `Badge` appears on the top-right corner of an `Avatar`. It is used to either
 * show a checkmark or an indicator that there are unread notifications.
 */
function Badge(_ref) {
  var size = _ref.size,
      type = _ref.type,
      children = _ref.children;
  var badgeType = 'entityOnline';

  if (type === 'user') {
    if (children) {
      badgeType = 'userChecked';
    } else {
      badgeType = 'userOnline';
    }
  }

  var styleConfig = sizeClasses[size][badgeType];
  return React.createElement("div", {
    className: styles.badge,
    style: {
      // EntityAvatar badges stick out by one third of their diameter.
      // UserAvatar badges have custom positions in the style object.
      top: badgeType === 'entityOnline' ? -(styleConfig.size / 3) : styleConfig.top,
      right: badgeType === 'entityOnline' ? -(styleConfig.size / 3) : styleConfig.right,
      width: styleConfig.size,
      height: styleConfig.size
    }
  }, children);
}

export default Badge;
//# sourceMappingURL=badge.js.map
