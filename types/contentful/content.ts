export type Badge = {
    text: string;
    styling: {
        shadow: string;
    };
}

export type Layout = {
    spacing: string;
    description: string;
    alignment: string;
    backgroundColor: string;
    backgroundType: string;
}

export type Button = {
    text: string;
    type: string;
    order: number;
    action: {
        type: string;
        url: string;
        target: string;
    }
    styling: {
        color: string;
        size: string;
        variant: string;
    }
}

export type Heading = {
    text: string;
    tag: string;
    styling: {
        color: string;
        fontSize: string;
        fontWeight: string;
        textAlign: string;
    }
}

export type Subheading = {
    text: string;
    tag: string;
    order: number;
}

export type Subheadings = Subheading[];

export type Buttons = Button[];

export type LandingSectionProps = {
    badge: Badge;
    layout: Layout;
    buttons: Buttons;
    heading: Heading;
    subHeadings: Subheadings;
}

export type SubscribeCallToActionProps = {
    layout: Layout;
    buttons: Buttons;
    heading: Heading;
    subHeadings: Subheadings;
    featuredImage: {
        alt: string;
        src: string;
    };
}