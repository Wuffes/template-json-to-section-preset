const fs = require('fs');

// Read the input file
const input = JSON.parse(fs.readFileSync('blocks.json', 'utf8'));

// Helper to recursively transform blocks object to array of values, removing block_order
function transformBlock(block) {
  // If block has blocks, convert to array of values
  if (block.blocks && typeof block.blocks === 'object' && !Array.isArray(block.blocks)) {
    block.blocks = Object.values(block.blocks).map(transformBlock);
  }
  // Remove block_order if present
  if (block.block_order) {
    delete block.block_order;
  }
  return block;
}

// Convert the top-level object to an array of values, transforming each
const output = Object.values(input)
  .map(transformBlock);

// Write the result to output.json
fs.writeFileSync('output.json', JSON.stringify(output, null, 2));
