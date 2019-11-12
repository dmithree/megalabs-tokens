import React from 'react';
interface PropTypes {
    /**
     * Adds a HTML `id` attribute to the textarea. This is used for linking the HTML with a
     * [Label](/components/label/react/).
     */
    id?: string;
    /**
     * Visually and functionally disable the textarea.
     */
    isDisabled?: boolean;
    /**
     * Adds the `required` HTML attribute to the textarea.
     */
    isRequired?: boolean;
    /**
     * Makes the textarea border and text color red.
     */
    hasError?: boolean;
    /**
     * Text that appears within the textarea when there is no `value`.
     */
    placeholder?: string;
    /**
     * Adds `name` HTML attribute to element, indicating the property name associated with the selected value.
     */
    name?: string;
    /**
     * The current value of the textarea.
     */
    value: string;
    /**
     * The maximum number of characters that a user can enter. `onChange` will not fire if a user
     * enters a character that exceeds `maxLength`.
     */
    maxLength?: number;
    /**
     * The function that is called when the textarea value changes.
     *
     * It receives two arguments: `onChange(newValue, event)`.
     *
     * The consumer of this component should use that data to update the `value` prop passed in to
     * this component.
     */
    onChange: (newValue: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Fires when the textarea receives focus.
     */
    onFocus?: () => void;
    /**
     * Fires when the textarea loses focus.
     */
    onBlur?: () => void;
    /**
     * A selector hook into the React component for use in automated testing environments. It is
     * applied internally to the `<textarea />` element.
     */
    dataTest?: string;
}
export default function Textarea({ dataTest, hasError, id, isDisabled, isRequired, maxLength, onBlur, onChange, onFocus, placeholder, value, name, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map