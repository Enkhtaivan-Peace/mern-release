export const switchThemeDuration = 0.5

export enum CookieName {
    TOKEN = 'access_token',
}
export enum Local {
    TOKEN = 'access_token',
    LOGGED_USER = 'logged_user',
}

export type TMenuLink = { [key: string]: string }
export type TAdminMenu = { [key: string]: { text: string; href: string } }

export const adminMenu: TAdminMenu = {
    ADMIN_HOME: {
        text: 'Admin Home',
        href: '/admin',
    },
    ADMIN_CONTAINERS: {
        text: 'Containers',
        href: '/admin/containers',
    },
    ADMIN_TYPOGPRAY: {
        text: 'Typography',
        href: '/admin/typography',
    },
    ADMIN_POPUP: {
        text: 'Popup',
        href: '/admin/popup',
    },
    ADMIN_DIALOG: {
        text: 'Dialog',
        href: '/admin/dialog',
    },
    ADMIN_DRAWER: {
        text: 'Drawer',
        href: '/admin/drawer',
    },
    ADMIN_SHEET: {
        text: 'Sheet',
        href: '/admin/sheet',
    },
    ADMIN_ACCORDION: {
        text: 'Accordion',
        href: '/admin/accordion',
    },
    ADMIN_BUTTON: {
        text: 'button',
        href: '/admin/button',
    },
    ADMIN_BOX: {
        text: 'box',
        href: '/admin/box',
    },
    ADMIN_IMAGE: {
        text: 'image',
        href: '/admin/img',
    },
    ADMIN_FORM: {
        text: 'Forms',
        href: '/admin/form',
    },
    ADMIN_DATE_TIME: {
        text: 'DateTimePicker',
        href: '/admin/dateTime',
    },
    ADMIN_FORM_ELEMENTS: {
        text: 'menu',
        href: '/admin/menu',
    },
    ADMIN_CARDS: {
        text: 'Cards',
        href: '/admin/cards',
    },
    ADMIN_CAROUSEL: {
        text: 'Carousel',
        href: '/admin/carousel',
    },
    ADMIN_SLIDERS: {
        text: 'swiper',
        href: '/admin/swiper',
    },
    ADMIN_SLIDE: {
        text: 'Slide',
        href: '/admin/slide',
    },
    ADMIN_SEARCH: {
        text: 'Table(Search)',
        href: '/admin/search',
    },
    ADMIN_TAB: {
        text: 'Tabs',
        href: '/admin/tab',
    },
    ADMIN_TOAST: {
        text: 'Toast',
        href: '/admin/toast',
    },
    ADMIN_LOADER: {
        text: 'loader',
        href: '/admin/loader',
    },
    ADMIN_POPOVER: {
        text: 'popover',
        href: '/admin/popover',
    },
    ADMIN_MAP: {
        text: 'Map',
        href: '/admin/map',
    },
    ADMIN_SKELETON_LOADERS: {
        text: 'SkeletonLoader',
        href: '/admin/skeleton',
    },
    ADMIN_OPTIMIZATION: {
        text: 'Optimization',
        href: '/admin/optimization',
    },
    ADMIN_FACTORY: {
        text: 'Factory',
        href: '/admin/factory',
    },
    ADMIN_DOM_ELEMENT_POSITION: {
        text: 'Dom Element position',
        href: '/admin/window',
    },
    ADMIN_SCROLL_EFFECTS: {
        text: 'Scroll animation',
        href: '/admin/scroll-animation',
    },
    ADMIN_LIST: {
        text: 'List',
        href: '/admin/list',
    },
    ADMIN_SOCKET: {
        text: 'Socket',
        href: '/admin/socket',
    },
    ADMIN_TRIGONOMETRY: {
        text: 'TrigonoMetry',
        href: '/admin/trigonometry',
    },
    ADMIN_CSS_DYNAMIC_VARS: {
        text: 'CSS dynamic variables',
        href: '/admin/css-dynamic-variables',
    },
}

export let menuLinks: TMenuLink = {}
for (let item in adminMenu) {
    menuLinks[item] = adminMenu[item].href
}
