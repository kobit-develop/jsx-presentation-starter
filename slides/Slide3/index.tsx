import fs from 'fs'
import path from 'path'
import React from 'react'
import { Table, TableRow, TableCell, Slide, Text } from 'jsx-presentation'
import PageHeader from '../../components/PageHeader'
import parse from 'csv-parse/lib/sync';

const csv = fs.readFileSync(path.join(__dirname, './data.csv'));
const data = parse(csv)

export default () => (
  <Slide padding={8}>
    <PageHeader title="Table from csv" description="These data derived from csv" />
    <Table flexGrow={1}>
      {data.map((row, rowIndex) => {
        return (
          <TableRow flexGrow={1}>
            {row.map((cell) => {
              return (
                <TableCell flexGrow={1} backgroundColor={rowIndex === 0 ? 'aabbcc' : 'ffffff'}>
                  <Text fontSize={16} color='333333'>
                    {cell}
                  </Text>
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </Table>
  </Slide>
)