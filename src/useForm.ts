import {useState} from "react";

export const useForm = () => {
    const values: any = {};
    const set = (name: string) => {
        const [value, setValue] = useState('');
        const onChange = (event: any) => setValue(event.target?.value);
        values[name] = value;
        return {value, onChange};
    }
    return {values, set};
}
