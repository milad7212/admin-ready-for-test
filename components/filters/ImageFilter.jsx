import { useState } from "react";
import Select from "react-select";


export const colourOptions = [
  { value: "", label: "همه" },
  { value: true, label: "بله" },
  { value: false, label: "خیر" },
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function ImageFilter({ setValue, value }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handelChange = (data) => {
    setSelectedOption(data);
    setValue({ ...value, image: data?.value || "" });
  };
  return (
    <div className="w-32">
      <Select
        value={selectedOption}
        onChange={handelChange}
        className="basic-single"
        classNamePrefix="select"
        placeholder="عکس"
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default ImageFilter;
