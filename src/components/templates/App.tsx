import type { FC } from 'react';
import { Button } from '@mui/material';
import reactLogo from '@/assets/react.svg';
import { exampleModel } from '@/stores';
import { useCounter } from '@/hooks';
import { name } from '@/constants';
import { mod } from '@/utils';

export const AppTemplate: FC = () => {
    const { getData, setData } = exampleModel(); // external
    const { increase, decrease } = useCounter(getData());

    return (
        <>
            <div>
                <Button>hi</Button>
                <Button variant="contained">Hello world</Button>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button type="button" onClick={() => setData(increase)}>
                    count is {mod(getData())}
                </button>
                <button type="button" onClick={() => setData(decrease)}>
                    -
                </button>
                <p>
                    Edit <code>src/App.tsx</code> {name}
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
};
