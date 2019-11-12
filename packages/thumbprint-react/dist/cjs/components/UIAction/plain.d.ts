import React from 'react';
declare const Plain: React.ForwardRefExoticComponent<PropTypes & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
interface PropTypes {
    isDisabled?: boolean;
    /**
     * Page to navigate to when the anchor is clicked.
     */
    to?: string;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render left of the text.
     */
    iconLeft?: React.ReactNode;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render right of the text.
     */
    iconRight?: React.ReactNode;
    /**
     * Sets the text color.
     */
    theme?: 'primary' | 'secondary' | 'tertiary' | 'inherit';
    /**
     * Button’s of type `submit` will submit a form when used within a `form` element.
     */
    type?: 'button' | 'submit';
    /**
     * Opens the URL in a new tab when clicked.
     */
    shouldOpenInNewTab?: boolean;
    children?: React.ReactNode;
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
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
export default Plain;
//# sourceMappingURL=plain.d.ts.map