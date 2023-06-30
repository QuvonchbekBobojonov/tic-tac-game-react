interface RestartProps {
    resetGame: () => void;
}

function Restart({ resetGame }: RestartProps): JSX.Element {
    return (
        <>
            <button className="mt-4 p-4 bg-red-700 outline-none text-white" onClick={resetGame}>Restart</button>
        </>
    );
}

export default Restart;