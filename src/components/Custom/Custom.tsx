import React, { useState } from 'react';

type Returns = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useNickname = (initState = ''): Returns => {
    const [nickname, setNickname] = useState(initState);

    const updateNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nickname = e.target.value;
        setNickname(nickname);
    };

    return [nickname, updateNickname];
};

const CustomComponent = () => {
    const [nickname, setNickname] = useNickname('');
    return (
        <div>
            <label>{nickname}</label>
            <input onChange={setNickname} />
        </div>
    );
};

export default CustomComponent;
