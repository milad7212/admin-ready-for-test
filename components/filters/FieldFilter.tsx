import Select from "react-select";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "", label: "همه" },

  { value: "عمران", label: "عمران" },
  { value: "معماری", label: "معماری" },
  { value: "تاسیسات مکانیکی", label: "تاسیسات مکانیکی" },
  { value: "تاسیسات برقی", label: "تاسیسات برقی" },
  { value: "سایر آزمون ها", label: "سایر آزمون ها" },
];

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

function FieldFilter() {
  return (
    <div className="w-52">
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder="رشته"
      
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />
    </div>
  );
}

export default FieldFilter;
