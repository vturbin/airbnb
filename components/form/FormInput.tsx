import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
}

function FormInput(props: FormInputProps) {
    const { label, name, type, defaultValue, placeholder } = props;
    return (
        <div className='mb-8'>
            <Label htmlFor={name}>{label || name}</Label>
            <Input id={name} name={name} type={type} defaultValue={defaultValue} placeholder={placeholder} required />
        </div>
    )
}

export default FormInput