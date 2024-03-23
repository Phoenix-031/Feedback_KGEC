import { Input } from 'antd';

function LabelInput({
  value,
  placeholder,
  onChange,
}: {
  value?: string;
  placeholder: string;
  onChange?: (val: string) => void;
}) {
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
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}
export default LabelInput;
