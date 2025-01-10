import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};

export const config = {
    dir: {
        input: "src",
        output: "dist"
    }
};