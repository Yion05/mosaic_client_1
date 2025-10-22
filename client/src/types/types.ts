  const widthMap = {
    1: "max-w-xl",
    2: "max-w-7xl"
  }
export interface slideTemplate {
    slideFolder: string;
    slideData: string[];
    maxWidth: keyof typeof widthMap;
}
