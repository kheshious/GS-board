// import * as express from "express";

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello, from generic switch board server!!!")
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//      console.log(`Server is running in http://localhost:${PORT}`);
// });

import * as express from 'express';
const cors = require('cors');
// import bodyParser from 'body-parser';
import * as fs from 'fs';


const app = express();
const PORT = 3000;
const dataFilePath = './data.json';


// Issue model
interface Item {
  id: number;
  name: string;
  assignee: string;
  description: string;
  createdDate: string;
  modifiedDate: string;
  status: string;
}


app.use(cors());
app.use(express.json()); 

app.get('/items', (req, res) => {
  const data = readData();
  res.json(data);
});

app.post('/items', (req, res) => {
  const newItem = req.body as Item;
  createItem(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const updatedItem = req.body as Item;
  updateItem(itemId, updatedItem);
  res.json({ message: 'Item Moved successfully.' });
});

app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  deleteItem(itemId);
  res.json({ message: 'Item deleted successfully.' });
});

function readData(): Item[] {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(data) as Item[]; // Explicitly cast the result to Item[]
    } catch (error) {
      if (isErrnoException(error) && error.code === 'ENOENT') {
        const emptyData: Item[] = [];
        writeData(emptyData);
        return emptyData;
      }
  
      console.error('Error reading data:', error);
      return [];
    }
  }
  
  // Type guard for ErrnoException
  function isErrnoException(error: any): error is NodeJS.ErrnoException {
    return error && typeof error === 'object' && 'code' in error;
  }
  
  
function writeData(data: Item[]): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log('Data written successfully.');
  } catch (error) {
    console.error('Error writing data:', error);
  }
}

function createItem(newItem: Item): void {
  const data = readData();
  const highestId = getHighestId(data);
  newItem.id = data.length + 1; // Assign a new ID
  data.push(newItem);
  writeData(data);
}

function updateItem(itemId: number, updatedItem: Item): void {
  const data = readData();
  const index = data.findIndex(item => item.id === itemId);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedItem };
    writeData(data);
  } else {
    console.error('Item not found.');
  }
}

function deleteItem(itemId: number): void {
  const data = readData();
  const newData = data.filter(item => item.id !== itemId);

  if (newData.length !== data.length) {
    writeData(newData);
  } else {
    console.error('Item not found.');
  }
}


//  Utils functions
function getHighestId(items: Item[]): number {
    if (items.length === 0) {
      return 0; // Return 0 if the array is empty
    }
  
    return items.reduce((maxId, currentItem) => {
      // Compare the current item's id with the current maxId and return the maximum
      return Math.max(maxId, currentItem.id);
    }, -Infinity); // Start with a very small value as the initial maxId
  }


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
