import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  build: {
    outputFolder: "admin", // Admin interface folder
    publicFolder: "./", // Public folder for serving files
  },
  media: {
    tina: {
      mediaRoot: "assets/img", // Media root directory
      publicFolder: "./", // Root folder for public assets
    },
  },
  schema: {
    collections: [
      // Posts Collection
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["post"],
            required: true,
          },
          {
            type: "string",
            name: "speaker",
            label: "Speaker",
          },
          {
            type: "string",
            name: "position",
            label: "Position",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "abstract",
            label: "Abstract",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "poster",
            label: "Poster",
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "link",
                label: "Link",
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // Members Collection
      {
        name: "member",
        label: "Members",
        path: "_members",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["member"],
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            list: true,
            required: false,
            fields: [
              {
                type: "string",
                name: "link",
                label: "Link",
                required: false,
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                required: false,
              },
            ],
          },
          {
            type: "string",
            name: "bio",
            label: "Bio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
        ],
      },
    ],
  },
});
