/// <reference types="react" />
interface PropTypes {
    /**
     * Number from 0-5 at increments of 0.5. Numbers between these steps will be rounded.
     */
    rating: number;
    /**
     * Number from 0-5 at increments of 1. `hoverRating` trumps `rating` with respect to star
     * highlighting.
     */
    hoverRating?: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * The size of the component when rendered
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Function that is called when a user clicks on a star. The function is supplied a single
     * parameter?: the index of the clicked star.
     */
    onStarClick?: (index: number) => void;
    /**
     * Function that is called when a user hovers over a star. The function is supplied a single
     * parameter?: the index of the hovered star.
     */
    onStarHover?: (index: number) => void;
    /**
     * Function that is called when a user mouses away from the `StarRating` component
     */
    onMouseLeave?: () => void;
}
export default function StarRating({ rating, hoverRating, size, onStarClick, onStarHover, onMouseLeave, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map