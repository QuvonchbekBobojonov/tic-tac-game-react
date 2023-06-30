interface BoardProps {
  squares: string[];
  handleClick: (index:number) => void;
}

function Board({ squares, handleClick }: BoardProps): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-4 w-96 h-96 mt-3">
      {squares.map((square, index) => (
        <div 
        className="text-5xl w-24 h-24 select-none p-5 flex item-center justify-center bg-gray-100 border-4 border-sky-300 hover:border-dashed cursor-pointer"
        key={index} 
        onClick={() => handleClick(index)}
        >{square}</div>
      ))}
    </div>
  );
}

export default Board;
