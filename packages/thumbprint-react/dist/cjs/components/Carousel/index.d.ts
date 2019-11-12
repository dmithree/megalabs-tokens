import React from 'react';
interface PropTypes {
    /**
     * The items in the carousel that appear horizontally.
     */
    children: React.ReactNode;
    /**
     * The index of the left-most item to display in the carousel. Supports all numbers.
     */
    selectedIndex: number;
    /**
     * This function is called while a user is dragging the carousel and receives the new index.
     * This should update the `selectedIndex` prop similarly to an `onChange` in a controlled
     * input.
     */
    onSelectedIndexChange: (newIndex: number) => void;
    /**
     * The number of items that are visible at once.
     */
    visibleCount?: number;
    /**
     * The amount space separating each item. Supports CSS values such as `8px` or `0.5em`.
     */
    spacing?: string;
}
export default function Carousel({ children, spacing, visibleCount, selectedIndex, onSelectedIndexChange, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map