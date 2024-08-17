import React, {FC} from 'react';
import {Card, Group, Space, Text, Title} from "@mantine/core";

// $like={<Text>{twit.likes}</Text>}
export interface TwitProps {
    title: string
    text: string
    id: number
    date: string
    like: React.ReactNode
}

export const Twit: FC<TwitProps> = (props) => {
    const {title, text, date, like} = props;
    return (
        <>
            <Card withBorder>
                <Group justify='space-between'>
                    <div>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                        <Text c='gray'>{date}</Text>
                    </div>
                    {like}
                </Group>

            </Card>
            <Space h={10}/>
        </>

    );
};