"use client";
import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo, memo } from "react";
import styles from "./index.module.scss";
import PreviewComp from "./PreviewComp";
import { saveNote } from "../action";

const initialValues: {
  title: string;
  content: string;
} = {
  title: "Untitled",
  content: "",
};
const { Item: FormItem } = Form;
function NoteEdit(props: any) {
  const [noteId, setNoteId] = useState("");
  const [editForm] = Form.useForm(); // 搜索表单
  const [previewData, setPreViewData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  /**
   * 提交内容
   */
  const submitForm = async () => {
    try {
      await editForm.validateFields();
      setLoading(true);
      const result: any = await saveNote({
        ...editForm.getFieldsValue(),
        noteId,
      });
      setLoading(false)
      if (result.succ) {
        message.success(result.message);
        router.push("/note");
        router.refresh()
      } else {
        message.error(result.message);
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <div className={styles.noteEdit}>
      <div className={styles.noteEdit_edit}>
        <Button
          type="primary"
          loading={loading}
          icon={<CheckOutlined />}
          size="large"
          onClick={() => {
            submitForm();
          }}
        >
          DONE
        </Button>
        <div className="divider10"></div>
        <Form
          name="editDataForm"
          form={editForm}
          initialValues={initialValues}
          style={{ width: "100%" }}
        >
          <FormItem
            name="title"
            rules={[{ required: true, message: "请输入标题!" }]}
          >
            <Input
              size="large"
              placeholder="请输入"
              onChange={(e) => {
                setPreViewData((pre) => {
                  return {
                    ...pre,
                    title: e.target.value,
                  };
                });
              }}
              prefix={<EditOutlined />}
            />
          </FormItem>
          <FormItem
            name="content"
            rules={[{ required: true, message: "请输入内容!" }]}
          >
            <TextArea
              showCount
              placeholder="请输入内容"
              onChange={(e) => {
                setPreViewData((pre) => {
                  return {
                    ...pre,
                    content: e.target.value,
                  };
                });
              }}
              style={{ height: "70vh" }}
            />
          </FormItem>
        </Form>
      </div>
      <div className={styles.noteEdit_preview}>
        <h1>PREVIEW</h1>
        <PreviewComp previewData={previewData} />
      </div>
    </div>
  );
}
export default memo(NoteEdit);
