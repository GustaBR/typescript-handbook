type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is", pt.x);
    console.log("The coordinate's y value is", pt.y);
}

printCoord({ x: 100, y: 50 });

// Aliases can store any type, not just object types
type ID = string | number;