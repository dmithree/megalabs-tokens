import React from 'react';
declare const TextButton: React.ForwardRefExoticComponent<TextButtonPropTypes & React.RefAttributes<HTMLButtonElement>>;
interface TextButtonPropTypes {
    /**
     * Contents displayed within the button.
     */
    children?: React.ReactNode;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render left of the text within `TextButton`.
     */
    iconLeft?: React.ReactNode;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render right of the text within `TextButton`.
     */
    iconRight?: React.ReactNode;
    /**
     * Visually and functionally disables the button. We discourage the use of this prop since it
     * is difficult to visually indicate that a link is disabled. Consider not rendering the
     * `TextButton` if it is not interactive.
     */
    isDisabled?: boolean;
    /**
     * Function that will run when the button is clicked on.
     */
    onClick?: () => void;
    /**
     * Function that runs when the user hovers on the button.
     */
    onMouseEnter?: () => void;
    /**
     * Function that runs when the user hovers on the button. Unlike `onMouseEnter`, `onMouseOver`
     * fires each time a child element receives focus.
     */
    onMouseOver?: () => void;
    /**
     * Function that runs when the button receives focus.
     */
    onFocus?: () => void;
    /**
     * Function that runs when the user hovers away from the button.
     */
    onMouseLeave?: () => void;
    /**
     * Function that runs when the button loses focus.
     */
    onBlur?: () => void;
    /**
     * Description of the button’s content. It is required if the button has an icon and no
     * descriptive text.
     */
    accessibilityLabel?: string;
    /**
     * Controls the button’s background, text, and border color.
     * `inherit` will make the button inherit `color` from its parent.
     */
    theme?: 'primary' | 'secondary' | 'tertiary' | 'inherit';
    /**
     * Button’s of type `submit` will submit a form when used within a `form` element.
     */
    type?: 'button' | 'submit';
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonPropTypes & React.RefAttributes<HTMLButtonElement>>;
interface ButtonPropTypes {
    /**
     * Contents displayed within the button.
     */
    children?: React.ReactNode;
    /**
     * Visually and functionally disables the button.
     */
    isDisabled?: boolean;
    /**
     * Boolean determining whether the button is in a loading state. When `true` the text will
     * we replaced with a loading animation and interaction will be disabled.
     */
    isLoading?: boolean;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render within the button. It must be one of the
     * `small` icons.
     */
    icon?: React.ReactNode;
    /**
     * Description of the button’s content. It is required if the button has an icon and no
     * descriptive text.
     */
    accessibilityLabel?: string;
    /**
     * Button’s of type `submit` will submit a form when used within a `form` element.
     */
    type?: 'button' | 'submit';
    /**
     * Function that will run when the button is clicked on.
     */
    onClick?: () => void;
    /**
     * Function that runs when the user hovers on the button.
     */
    onMouseEnter?: () => void;
    /**
     * Function that runs when the user hovers on the button. Unlike `onMouseEnter`, `onMouseOver`
     * fires each time a child element receives focus.
     */
    onMouseOver?: () => void;
    /**
     * Function that runs when the button receives focus.
     */
    onFocus?: () => void;
    /**
     * Function that runs when the user hovers away from the button.
     */
    onMouseLeave?: () => void;
    /**
     * Function that runs when the button loses focus.
     */
    onBlur?: () => void;
    /**
     * Controls the button’s background, text, and border color.
     */
    theme?: 'primary' | 'secondary' | 'tertiary' | 'caution' | 'solid';
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
export default Button;
export { TextButton };
//# sourceMappingURL=index.d.ts.map