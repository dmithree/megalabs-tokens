import React from 'react';
import PropTypes from 'prop-types';
declare const Themed: React.ForwardRefExoticComponent<PropTypes & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
interface PropTypes {
    /**
     * Contents displayed within the button.
     */
    children?: React.ReactNode;
    /**
     * Boolean determining whether the button is disabled. When `true` it will appear visually
     * "greyed out" and not respond to interaction.
     */
    isDisabled?: boolean;
    /**
     * Boolean determining whether the button is in a loading state. When `true` the text will
     * we replaced with a loading animation and interaction will be disabled.
     */
    isLoading?: boolean;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render within the button.
     */
    icon?: React.ReactNode;
    /**
     * Button's on type `submit` will submit a form when used within a `form`
     * element.
     */
    type?: 'button' | 'submit';
    /**
     * Page to navigate to when the anchor is clicked.
     */
    to?: string;
    /**
     * Opens the URL in a new tab when clicked.
     */
    shouldOpenInNewTab?: boolean;
    /**
     * Function that will run when the button is clicked on.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
    /**
     * Function that runs when the user hovers on the button.
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Function that runs when the user hovers on the button. Unlike `onMouseEnter`, `onMouseOver`
     * fires each time a child element receives focus.
     */
    onMouseOver?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Function that runs when the user hovers away from the button.
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Function that runs when the button receives focus.
     */
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /**
     * Function that runs when the button loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /**
     * Description of the button’s content. It is required if the button has an icon and no
     * descriptive text.
     */
    accessibilityLabel?: string;
    /**
     * Controls the button's background, text, and border color.
     */
    theme?: 'primary' | 'secondary' | 'tertiary' | 'caution' | 'solid' | 'popover-primary' | 'popover-secondary';
    /**
     * Changes the button's `line-height`, `padding`, `border-radius`, and `font-size`.
     */
    size?: 'small' | 'large';
    /**
     * `Button` components are as wide as the content that is passed in. The `full` option will
     * expand the width to `100%` on all screens. `full-below-small` will expand the width to 100%
     * on devices smaller than [our `small` breakpoint](/tokens/#section-breakpoint).
     */
    width?: 'auto' | 'full' | 'full-below-small';
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
export default Themed;
//# sourceMappingURL=themed.d.ts.map