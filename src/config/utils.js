const startNodePosition = { x: 10, y: 10 };
const endNodePosition = { x: 10, y: 30 };
export const gridSize = { rows: 50, cols: 50 };

export const generateNewGrid = (
	startPos = startNodePosition,
	endPos = endNodePosition,
	size = gridSize
) => {
	let grid = [];

	for (let i = 0; i < size.rows; i++) {
		grid.push(Array.from({ length: size.cols }, createNewNode));
	}

	console.log(grid[startPos.x][startPos.y]);
	console.log(grid[endPos.x][endPos.y]);

	grid[startPos.x][startPos.y].isStartNode = true;
	grid[endPos.x][endPos.y].isEndNode = true;

	return grid;
};

const createNewNode = () => {
	return {
		isWallNode: false,
		isStartNode: false,
		isEndNode: false
	};
};
