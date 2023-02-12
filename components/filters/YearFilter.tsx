import Select from "react-select";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "", label: "همه" },
  { value: "85", label: "85" },
  { value: "86", label: "86" },
  { value: "87", label: "87" },
  { value: "88", label: "88" },
  { value: "89", label: "89" },
  { value: "90", label: "90" },
  { value: "91", label: "91" },
  { value: "92", label: "92" },
  { value: "93", label: "93" },
  { value: "94", label: "94" },
  { value: "95", label: "95" },
  { value: "96", label: "96" },
  { value: "97", label: "97" },
  { value: "98", label: "98" },
  { value: "99", label: "99" },
  { value: "1400", label: "1400" },
  { value: "1401", label: "1401" },
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function YearFilter() {
  return (
    <div className="w-32">
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder="سال"
        
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default YearFilter;
