import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6jtlmu71",
  dataset: "production",
  apiVersion: "2023-09-07",
  useCdn: true,
  token:
    "sk7a3Xo4D89u4EQ3YKzlAfNIrJIIZq5dYHuNymDYb9RpimYgS9fOTpOVkGVb60s0uSXyK9cSCs9mkyxXXEuKhUyhhG1P2bnp0O95gtW8494E5lS7IyAKuLl15iXaOAgUJp5i5gxsEsxmDCXsdlLdNuIgoWHO2AdsEg8IONxgp0nO64O8Hkp4",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
