import NoteLayout from "../components/NoteLayout";
import NoteListComp from "./components/NoteListComp";
import { ConfigProvider } from "antd";
import { noteThemeJson } from "@/utils";
export const metadata = {
  title: "笔记本",
  description: "一个自由编辑的在线笔记本",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={noteThemeJson}>
      <NoteLayout>
        <div slot="leftHeader">MY NOTES</div>
        <div slot="leftMain">
          <NoteListComp />
        </div>
        <div slot="main">{children}</div>
      </NoteLayout>
    </ConfigProvider>
  );
}
