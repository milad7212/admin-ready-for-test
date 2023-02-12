import { useState } from "react";
import Select from "react-select";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "", label: "همه" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
 
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function MonthFilter({ setValue, value }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handelChange = (data) => {
    setSelectedOption(data);
    setValue({ ...value, filter_month: data?.value || "" });
  };
  return (
    <div className="w-32">
      <Select
      value={selectedOption}
      onChange={handelChange}
        className="basic-single"
        classNamePrefix="select"
        placeholder="ماه"
        
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default MonthFilter;
