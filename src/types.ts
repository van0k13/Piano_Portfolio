export interface IInitialState {
    homeVideoComponent: HomeVideoComponent,
    headerComponent:HeaderComponent,
    aboutMeComponent: AboutMeComponent,
    introComponent: IntroComponent,
    sloganComponent: SloganComponent,
    pricesComponent: PricesComponent,
    contactComopnent:ContactComopnent,
}

export interface Project {
    id: number;
    name: string;
    img: any;
    type: typeof constantVariables.VIDEO_TYPE | typeof constantVariables.PHOTO_TYPE;
}

export interface Element {
    id: number;
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

type HomeVideoComponent = {
    projects: Project[],
    headerTextH1Value: string,
    headerTextSpanValue: string,
    buttonName: string[]
}

type HeaderComponent = {
    navElements:Element[],
    logoText: string
}

type AboutMeComponent = {
    aboutMeText: string,
    aboutMeImage: string,
    headerTextH1Value: string,
    headerTextSpanValue: string,
    buttonName: string
}
 type IntroComponent = {
    h2Text: string,
    h1Text: string,
    introImage: string
 }

 type SloganComponent = {
    sloganText: string,
    sloganImage: string
 }

 type PricesComponent = {
    headerTextH1Value: string,
    headerTextSpanValue: string,
    localText: string,
    remoteText: string,
    prices: Prices[]
 }

 type ContactComopnent = {
    headerTextH1Value: string,
    headerTextSpanValue: string,
    contactImage: string
 }
 