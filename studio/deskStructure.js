import S from "@sanity/desk-tool/structure-builder";
import { FcCalendar } from "react-icons/fc";

const hiddenDocTypes = (listItem) =>
  !["category", "author", "post", "comment", "order", "landingPage"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Edit Your Content")
    .items([
      S.listItem()
        .title("Orders")
        .schemaType("order")
        .child(S.documentTypeList("order").title("Orders")),
      S.listItem()
        .title("Comments")
        .schemaType("comment")
        .child(S.documentTypeList("comment").title("Comments")),
      S.listItem()
        .title("Menu Items")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Menu Items")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("People")
        .schemaType("author")
        .child(S.documentTypeList("author").title("People")),
      S.listItem()
        .title("Landing Page")
        .schemaType("landingPage")
        .child(
          S.documentTypeList("landingPage").title("Landing Page Sections")
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
