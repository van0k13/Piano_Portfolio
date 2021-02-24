export interface IInitialState {
    homeVideoComponent: HomeVideoComponent,
    headerComponent: HeaderComponent,
    aboutMeComponent: AboutMeComponent,
    introComponent: IntroComponent,
    sloganComponent: SloganComponent,
    pricesComponent: PricesComponent,
    contactComopnent: ContactComopnent,
    footerComponent: FooterComponent
}

export interface Project {
    id: number;
    name: string;
    img: any;
    type: typeof constantVariables.VIDEO_TYPE | typeof constantVariables.PHOTO_TYPE;
}

export interface Element {
    id: string;
    name: string;
}

type Prices = {
    lessonText: string,
    localLessons: number,
    remoteLessons: number
}

export const constantVariables = {
    VIDEO_TYPE: 'Video',
    PHOTO_TYPE: 'Photo'
}

type links = {
    facebook: string,
    insta: string,
    youtube: string,
    telega: string
}

export type FooterComponent = {
    footerTextH1Value: string,
    footerTextSpanValue: string,
    links: links,
    bgImage: links
}

export type HomeVideoComponent = {
    projects: Project[],
    headerTextH1Value: string,
    headerTextSpanValue: string,
    buttonName: string[]
}

export type HeaderComponent = {
    navElements: Element[],
    logoText: string
}

export type AboutMeComponent = {
    aboutMeText: string,
    aboutMeImage: string,
    headerTextH1Value: string,
    headerTextSpanValue: string,
    buttonName: string
}

export type IntroComponent = {
    h2Text: string,
    h1Text: string,
    introImage: string
}

export type SloganComponent = {
    sloganText: string,
    sloganImage: string
}

export type PricesComponent = {
    headerTextH1Value: string,
    headerTextSpanValue: string,
    localText: string,
    remoteText: string,
    prices: Prices[],
    buttons: {
        local: string,
        remote: string
    }
}

export type ContactComopnent = {
    headerTextH1Value: string,
    headerTextSpanValue: string,
    submitForm: {
        name: string,
        email: string,
        text: string
    }
    contactImage: string,
    sendButton: string
}
