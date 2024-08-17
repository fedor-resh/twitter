import {FC} from 'react';
import {ITwit} from "./twits.ts";
import {Twit} from "./Twit.tsx";
import {Group, Text} from "@mantine/core";
import {Heart} from "lucide-react";
import {useTwits} from "./useTwits.ts";

interface TwitsProps {
    twits: ITwit[]
}

export const Twits: FC<TwitsProps> = ({twits}) => {
    const {clickLike} = useTwits()
    return (
        <>
            {
            twits.map((twit) => (
                <Twit
                    key={twit.id}
                    title={twit.title}
                    text={twit.text}
                    date={twit.date}
                    like={<Group style={{
                        cursor: 'pointer'
                    }} onClick={() => clickLike(twit.id)}><Heart/><Text>{twit.likes}</Text></Group>}
                    id={twit.id}
                />
            ))
        }
        </>
    );
};