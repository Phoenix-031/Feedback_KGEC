import { Select } from 'antd';

function LabelSelect({
  options,
  placeholder,
  onChange,
}: {
  options?: { label: string; value: string }[];
  placeholder: string;
  onChange?: (val: string) => void;
}) {
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        // maxWidth: '400px',
      }}
    >
      <label
        style={{
          fontSize: '15px',
          marginInline: '2px',
        }}
      >
        {placeholder}:
      </label>
      <Select
        showSearch
        placeholder={`Select ${placeholder}`}
        optionFilterProp="children"
        filterOption={filterOption}
        options={options}
        onChange={(val) => onChange && onChange(val)}
      />
    </div>
  );
}
export default LabelSelect;
