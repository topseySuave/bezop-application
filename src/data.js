import React from "react";
import Assessment from "material-ui/svg-icons/action/assessment";
import ContentArchive from "material-ui/svg-icons/content/archive";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ActionNoteAdd from "material-ui/svg-icons/action/note-add";
import { cyan600, pink600, purple600 } from "material-ui/styles/colors";
import ExpandLess from "material-ui/svg-icons/navigation/expand-less";
import ExpandMore from "material-ui/svg-icons/navigation/expand-more";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";

const data = {
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/" },
    { text: "Add a file", icon: <ActionNoteAdd />, link: "/add" },
    { text: "Archive", icon: <ContentArchive />, link: "/archive" },
    { text: "Trash", icon: <ActionDelete />, link: "/trash" }
  ],
  tablePage: {
    items: [
      { id: 1, name: "Product 1", size: "3.5kb", extension: "extension 1" },
      { id: 2, name: "Product 2", size: "2.500kb", extension: "extension 2" },
      { id: 3, name: "Product 3", size: "1.5kb", extension: "extension 3" },
      { id: 4, name: "Product 4", size: "5.5mb", extension: "extension 4" },
      { id: 5, name: "Product 5", size: "3.5mb", extension: "extension 5" },
      { id: 6, name: "Product 6", size: "259.0kb", extension: "extension 6" },
      { id: 7, name: "Product 7", size: "218.5kb", extension: "extension 7" },
      { id: 8, name: "Product 8", size: "285kb", extension: "extension 8" }
    ]
  },
  dashBoardPage: {
    fileMenuItems: [
      {
        name: "Archive",
        snackTitle: "File Archived",
        icon: <ContentArchive />
      },
      {
        name: "Delete",
        snackTitle: "Archive Deleted",
        icon: <ActionDelete />
      }
    ],
    fileMenuItemsInArchive: [
      {
        name: "Retrieve",
        snackTitle: "Retrieve File",
        icon: <ContentArchive />
      },
      {
        name: "Delete",
        snackTitle: "Archive Deleted",
        icon: <ActionDelete />
      }
    ]
  }
};

export default data;
