import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Input() {
  const [text, setText] = useState("");

    const modules = {
      toolbar: [
       
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme

        [{ font: [] }],

        [{ align: [] }],

        ["clean"], // remove formatting button

        ["link", "image", "video"], // link and image, video

        ["formula"] // formula plugin for Quill editor.
      ]
    };

//   const modules = {
//     toolbar: [
//       [{ direction: "rtl" }], // set text direction to right-to-left
//       ["bold", "italic", "underline", "strike"], // toggled buttons
//       ["blockquote", "code-block"],

//       [{ header: 1 }, { header: 2 }], // custom button values
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ script: "sub" }, { script: "super" }], // superscript/subscript
//       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

//       [{ size: ["small", false, "medium", "large", "huge"] }], // custom dropdown

//       [
//         "link", // link and image, video
//         { color: [] },
//         { background: [] },
//       ], // dropdown with defaults from theme

//       ["formula"], // formula plugin for math equations
//     ],

//     clipboard: { matchVisual: false }, // disable auto match for paste from word or excel (for persian text)

//     theme: "snow", // set editor theme as snow (default) or bubble (for persian text)
//   };

//   const formats = [
//     // set available formats for editor content (text, font, size, etc...)
//     "direction",
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//     "background",
//     "color",
//     "code-block",
//     "formula",
//   ];

  return (
    <div style={{ direction: "ltr" }}>
      <ReactQuill
      dir="auto"
        value={text}
        onChange={setText}
        modules={modules}
        // formats={formats}
      />
    </div>
  );
}

export default Input;
