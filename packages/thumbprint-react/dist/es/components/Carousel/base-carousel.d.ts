import React from 'react';
import PropTypes from 'prop-types';
interface PropTypes {
    /**
     * The items in the carousel that appear horizontally.
     */
    children: React.ReactNode;
    /**
     * The index of the left-most item to display in the carousel. Supports all numbers.
     */
    selectedIndex?: number;
    /**
     * The duration of the animation (in milliseconds).
     */
    animationDuration?: number;
    /**
     * The number of items that are visible at once.
     */
    visibleCount?: number;
    /**
     * The amount space separating each item. Supports CSS values such as `8px` or `0.5em`.
     */
    spacing?: string;
}
export default function BaseCarousel({ children, selectedIndex, animationDuration, visibleCount, spacing, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=base-carousel.d.ts.map