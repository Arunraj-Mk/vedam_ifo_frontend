export interface GridBox {
  id: number;
  top: string;
  left: string;
  width: string;
  height: string;
  opacity: number;
}

export interface GridConfig {
  gridSize: number;
  boxPadding: number;
  columnsToFill: number[];
  rowsToFill: number[];
  maxRows: number;
  maxCols: number;
  boxesPerColumn: number;
  boxesPerRow: number;
}

export const generateGridBoxes = (config: GridConfig): GridBox[] => {
  const { gridSize, boxPadding, columnsToFill, rowsToFill, maxRows, maxCols, boxesPerColumn, boxesPerRow } = config;
  const boxSize = gridSize - (boxPadding * 2);
  const boxes: GridBox[] = [];
  
  let id = 0;
  
  columnsToFill.forEach((col) => {
    const rows = Array.from({ length: maxRows }, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, boxesPerColumn);
    
    rows.forEach((row) => {
      boxes.push({
        id: id++,
        top: `${(row - 1) * gridSize + boxPadding}px`,
        left: `${(col - 1) * gridSize + boxPadding}px`,
        width: `${boxSize}px`,
        height: `${boxSize}px`,
        opacity: 0.15 + Math.random() * 0.25,
      });
    });
  });
  
  rowsToFill.forEach((row) => {
    const cols = Array.from({ length: maxCols }, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, boxesPerRow);
    
    cols.forEach((col) => {
      boxes.push({
        id: id++,
        top: `${(row - 1) * gridSize + boxPadding}px`,
        left: `${(col - 1) * gridSize + boxPadding}px`,
        width: `${boxSize}px`,
        height: `${boxSize}px`,
        opacity: 0.15 + Math.random() * 0.25,
      });
    });
  });
  
  return boxes;
};

