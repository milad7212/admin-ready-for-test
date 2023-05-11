import { useState } from "react";
import Select from "react-select";



export const colourOptions = [
  { value: "", label: "همه" },
  { value: "نظارت", label: "نظارت" },
  { value: "اجرا", label: "اجرا" },
  { value: "محاسبات", label: "محاسبات" },
  { value: "طراحی", label: "طراحی" },
  { value: "نقشه برداری", label: "نقشه برداری" },
  { value: "شهرسازی", label: "شهرسازی" },
  { value: "ترافیک", label: "ترافیک" },
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function SubFieldFilter({ setValue, value }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handelChange = (data) => {
    setSelectedOption(data);
    setValue({ ...value, filter_subField: data?.value || "" });
  };
  return (
    <div className="w-44">
      <Select
        value={selectedOption}
        onChange={handelChange}
        className="basic-single"
        classNamePrefix="select"
        placeholder="گرایش"
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default SubFieldFilter;
