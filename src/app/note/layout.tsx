import NoteLayout from "../components/NoteLayout";
import SearchComp from "./components/SearchComp";
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
          <SearchComp />
        </div>
        <div slot="main">{children}</div>
      </NoteLayout>
    </ConfigProvider>
  );
}
