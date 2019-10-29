import React from 'react'
import { Table, TableRow, TableCell, Slide } from 'jsx-presentation'
import PageHeader from '../components/PageHeader'

const data = [
  ['Date', 'PV'],
  ['7/24', '123123'],
  ['7/25', '98329'],
  ['7/25', '98329']
]

export default () => (
  <Slide padding={300000}>
    <PageHeader title="Table Slide" description="This plugin has HTML like syntax." />
    <Table flexGrow={1}>
      {data.map((row, rowIndex) => {
        return (
          <TableRow flexGrow={1}>
            {row.map(function (cell) {
              return (
                <TableCell flexGrow={1} backgroundColor={rowIndex === 0 ? 'aabbcc' : 'ffffff'}>
                  {cell}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </Table>
  </Slide>
)