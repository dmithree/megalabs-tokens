import React from 'react';
declare type ImageSource = {
    type: 'image/webp' | 'image/jpeg' | 'image/png' | 'image/gif';
    srcSet: string;
};
interface ServiceCardImagePropTypes {
    /**
     * URL pointing to image to be displayed. This image must have an aspect ratio of 8:5.
     * @deprecated Use `src` instead of `url`.
     */
    url?: string;
    /**
     * URL pointing to image to be displayed. This image must have an aspect ratio of 8:5.
     */
    src: string;
    /**
     * Allows the browser to choose the best file format and image size based on the device screen
     * density and the width of the rendered image. Images must have an aspect ratio of 8:5.
     */
    sources?: ImageSource[];
    /**
     * Image alt tag that's passed to `aria-label` for better accessibility.
     */
    alt?: string;
}
declare const ServiceCardImage: React.ForwardRefExoticComponent<ServiceCardImagePropTypes & React.RefAttributes<HTMLElement>>;
interface ServiceCardTitlePropTypes {
    children: string;
}
declare function ServiceCardTitle({ children }: ServiceCardTitlePropTypes): JSX.Element;
interface ServiceCardDescriptionPropTypes {
    /**
     * Service description or other service info.
     */
    children: React.ReactNode;
    /**
     * Icon from [Thumbprint Icons](/icons/) to render within the
     * service card. It must be one of the small icons.
     */
    icon?: React.ReactNode;
    /**
     * Color options for icon. Only required if you want to override default color.
     */
    iconColor?: 'blue' | 'green';
}
declare function ServiceCardDescription({ iconColor, icon, children, }: ServiceCardDescriptionPropTypes): JSX.Element;
interface ServiceCardPropTypes {
    /**
     * URL pointing to the card link destination.
     */
    url: string;
    /**
     * Accepts content of `ServiceCardImage`, `ServiceCardTitle`, `ServiceCardDescription`.
     */
    children: React.ReactNode;
    /**
     * Handler for click events
     */
    onClick?: () => void;
    /**
     * Opens the URL in a new tab when clicked.
     */
    shouldOpenInNewTab?: boolean;
}
export default function ServiceCard({ url, children, onClick, shouldOpenInNewTab, }: ServiceCardPropTypes): JSX.Element;
export { ServiceCardDescription, ServiceCardTitle, ServiceCardImage };
//# sourceMappingURL=index.d.ts.map