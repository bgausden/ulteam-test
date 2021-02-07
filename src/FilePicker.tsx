import * as React from "react";
import {  FilePicker, IFilePickerResult } from "ulteam-react/lib/common/components/FilePicker/FilePicker";
import { IFilePickerProps } from "ulteam-react/lib/common/components/FilePicker/IFilePickerProps";

import "../node_modules/ulteam-react/lib/sass/index.scss"

const onChangeFilePicker = (files: File[]) => {
  for (const index in files) {
    console.log("file selected", files[index]);
  }
};

const onChangeFilePickerAsBase64 = (files: IFilePickerResult[]) => {
  for (const index in files) {
    if (index) {
      console.log(`base64: ${files[index].base64}`);
    }
  }
};

export const filePickerProps: IFilePickerProps = {
  accumulateFiles: true,
  errorMessage: "",
  label: "",
  text: "Browse...",
  multiple: true,
  onChangeFile: onChangeFilePicker,
  onChangeFileBase64: onChangeFilePickerAsBase64,
  placeholder: "Please pick a CSV file",
  required: true
};

export const MyFilePicker = (p: IFilePickerProps = filePickerProps) => {
  
  return (
    <div>
      <FilePicker {...filePickerProps}></FilePicker>
    </div>
  );
};
