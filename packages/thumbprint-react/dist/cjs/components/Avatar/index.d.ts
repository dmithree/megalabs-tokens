import React from 'react';
declare const EntityAvatar: React.ForwardRefExoticComponent<EntityPropTypes & React.RefAttributes<HTMLElement>>;
interface EntityPropTypes {
    /**
     * HTTPS URL that points a user's avatar. The `imageURL` will take
     * precendence over `initials` if both are supplied.
     */
    imageUrl?: string;
    /**
     * The entity's initial. This should be passed in as a one character string.
     */
    initial?: string;
    /**
     * The entity's full name. This is used as `title` and `alt` text.
     */
    fullName?: string;
    /**
     * The set of avatar sizes that we support.
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
    /**
     * Displays a badge if the user is online.
     */
    isOnline?: boolean;
}
declare const UserAvatar: React.ForwardRefExoticComponent<UserPropTypes & React.RefAttributes<HTMLElement>>;
interface UserPropTypes {
    /**
     * HTTPS URL that points a user's avatar. The `imageURL` will take
     * precendence over `initials` if both are supplied.
     */
    imageUrl?: string;
    /**
     * The user's initials. This should be passed in as a two character string
     * for best results.
     */
    initials?: string;
    /**
     * The user's full name. This is used as `title` and `alt` text.
     */
    fullName?: string;
    /**
     * The set of avatar sizes that we support.
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
    /**
     * Displays a badge of a checkmark next to the `Avatar`.
     * @deprecated
     */
    isChecked?: boolean;
    /**
     * Displays a badge if the user is online.
     */
    isOnline?: boolean;
}
export { UserAvatar, EntityAvatar };
//# sourceMappingURL=index.d.ts.map