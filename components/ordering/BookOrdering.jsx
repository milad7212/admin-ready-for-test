import { useState } from "react";
import Select from "react-select";



export const colourOptions = [
  { value: 0, label: "همه" },
  { value: 1, label: "صعودی" },
  { value: -1, label: "نزولی" },
  
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function BookOrdering({ setValue }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handelChange = (data) => {
    setSelectedOption(data);
    setValue(data?.value || 0);
  };
  return (
    <div className="w-40">
      <Select
      value={selectedOption}
      onChange={handelChange}
        className="basic-single"
        classNamePrefix="select"
        placeholder="کتاب"
        
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default BookOrdering;
