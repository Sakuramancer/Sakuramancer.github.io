import GalleryPage from "./GalleryPage";
import SheetPage from "./SheetPage";

export const routes = [
  { index: true, element: <GalleryPage /> },
  { path: ":id", element: <SheetPage /> },
];
