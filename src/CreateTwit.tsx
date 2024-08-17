import {FC} from 'react';
import {Button, Space, Textarea, TextInput} from "@mantine/core";
import {useForm} from "./useForm.ts";
import {ITwit} from "./twits.ts";
import {useTwits} from "./useTwits.ts";

interface CreateTwitProps {
}

export const CreateTwit: FC<CreateTwitProps> = () => {
    const {set, values} = useForm()
    const {twits, setTwits} = useTwits()
    const addTwit = (twit: ITwit) => setTwits([...twits, twit])

    return (
        <>
            <TextInput {...set('title')} placeholder='Title'/>
            <Space h='md'/>
            <Textarea {...set('text')} autosize placeholder='Text'/>
            <Space h='md'/>
            <Button onClick={() => addTwit({
                title: values.title,
                text: values.text,
                date: new Date().toLocaleString(),
                likes: 0,
                id: twits.length
            })} color='blue'>Add</Button>
            <Space h='lg'/>
        </>

    );
};