import Select from "react-select";

export interface ColourOption {
  readonly value: boolean | string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
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

function ImageFilter() {
  return (
    <div className="w-32">
      <Select
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
