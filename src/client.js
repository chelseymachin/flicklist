import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "dspdy8wk",
    dataset: "production",
    useCdn: true
});