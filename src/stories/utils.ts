const allNotionColors = [
  'gray',
  'brown',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'red',
];

const notionType = 'gray|brown|orange|yellow|green|blue|purple|pink|red';

const tableColorType = { options: allNotionColors, table: { type: { summary: notionType } } };

const notionColorSelection = {
  control: { type: 'select' },
  ...tableColorType,
};

export { allNotionColors, notionType, tableColorType, notionColorSelection };
