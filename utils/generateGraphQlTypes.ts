import { readFileSync } from 'fs';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';

const schema = readFileSync(`${process.env.PWD}/github.schema.graphql`, 'utf-8');
const outputPath = `${process.env.PWD}/github.schema.ts`;

generateTypeScriptTypes(schema, outputPath, {})
  .then(() => {
    console.log('DONE');
    process.exit(0);
  })
  .catch(err =>{
    console.log(err);
    process.exit(1);
  });
