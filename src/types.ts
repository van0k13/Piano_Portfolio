export interface InitialState {
    projects: Project[];
    navElements: Element[];
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

export const constantVariables = {
 VIDEO_TYPE: 'Video',
 PHOTO_TYPE: 'Photo'
}