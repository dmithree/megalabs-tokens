import React from 'react';
interface PropTypes {
    /**
     * A collection of [HTML `<option>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option).
     */
    children?: React.ReactNode;
    /**
     * Adds a HTML `id` attribute to the select. This is used for linking the HTML with a
     * [Label](/components/label/react/).
     */
    id?: string;
    /**
     * Visually and functionally disables the select dropdown.
     */
    isDisabled?: boolean;
    /**
     * Adds `required` HTML attribute to element, indicating that an option with a non-empty string
     * value must be selected.
     */
    isRequired?: boolean;
    /**
     * Makes the radio and text color red.
     */
    hasError?: boolean;
    /**
     * Changes the select’s font-size, height, and padding.
     */
    size?: 'small' | 'large';
    /**
     * Set the `<select>`'s width to `100%` as opposed to the default behavior
     * of only taking up the necessary width.
     */
    isFullWidth?: boolean;
    /**
     * The `value` of the `<option>` that is selected. See [React documentation
     * on `<select>` and controlled components](https://facebook.github.io/react/docs/forms.html#the-select-tag)
     * to learn more.
     */
    value: string;
    /**
     * Function that is fired when the value of the select changes.
     */
    onClick?: () => void;
    /**
     * A function that is fired when the value of the select changes. The
     * new `value` is passed to the function.
     */
    onChange: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * Fires when the select receives focus.
     */
    onFocus?: () => void;
    /**
     * Fires when the select loses focus.
     */
    onBlur?: () => void;
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
    /**
     * Adds `name` HTML attribute to element, indicating the property name associated with the
     * selected value.
     */
    name?: string;
}
export default function Select({ children, dataTest, hasError, id, isDisabled, isFullWidth, isRequired, name, onChange, onFocus, onBlur, onClick, size, value, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map