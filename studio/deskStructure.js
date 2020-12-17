import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !["category", "person", "sampleProject", "ex", "processItem", "siteSettings", "intro"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Sample projects")
        .schemaType("sampleProject")
        .child(S.documentTypeList("sampleProject").title("Sample projects")),
      S.listItem()
        .title("Exes")
        .schemaType("ex")
        .child(S.documentTypeList("ex").title("Exes")),
      S.listItem()
        .title("Process Items")
        .schemaType("processItem")
        .child(S.documentTypeList("processItem").title("Process Items")),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Intro")
        .child(
          S.editor()
            .id("intro")
            .schemaType("intro")
            .documentId("intro")
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
