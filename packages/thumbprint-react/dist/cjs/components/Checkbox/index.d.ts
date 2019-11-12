import React from 'react';
interface PropTypes {
    /**
     * Disables the input and the label.
     */
    isDisabled?: boolean;
    /**
     * Determines if the checkbox is checked.
     */
    isChecked?: boolean;
    /**
     * Makes the radio and text color red.
     */
    hasError?: boolean;
    /**
     * Text or elements that appear within the label. If `children` is not provided, the developer
     * must use the `Radio`'s `id` prop to associate it with a custom `<label>` element.
     */
    children?: React.ReactNode;
    /**
     * The `id` is added to the checkbox as an HTML attribute and passed to the `onChange`
     * function.
     */
    id?: string;
    /**
     * Adds the `required` HTML attribute.
     */
    isRequired?: boolean;
    /**
     * Checkboxes on a page with the same name will be grouped together when sent to the server.
     * The browser will only send the value of checkboxes that are checked.
     */
    name?: string;
    /**
     * Determine that padding that gets applied to the label. This can be used
     * to increase the label's click target. The value supplied should be a
     * string with a unit such as `8px` or `8px 16px`.
     */
    labelPadding?: string;
    /**
     * Function that runs when a checkbox value changes. It receives the new boolean value and
     * the provided `id` as such: `props.onChange(e.target.checked, props.id)`.
     */
    onChange: (value: boolean, id?: string) => void;
    /**
     * Shows a horizontal line to represent an indeterminate input.
     */
    isIndeterminate?: boolean;
    /**
     * A selector hook into the React component for use in automated testing environments. It is
     * applied internally to the `<input />` element.
     */
    dataTest?: string;
    /**
     * Determines how the checkbox input will be vertically aligned relative to `props.children`.
     */
    checkboxVerticalAlign?: 'top' | 'center';
    /**
     * Determines the value that will be submitted if the checkbox is checked. The default value is
     * `'on'`.
     */
    value?: string | string[] | number;
}
export default function Checkbox({ checkboxVerticalAlign, children, dataTest, hasError, id, isChecked, isDisabled, isIndeterminate, labelPadding, isRequired, name, onChange, value, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map