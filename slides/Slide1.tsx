import React from 'react'
import { Table, TableRow, TableCell, Slide, Text } from 'jsx-presentation'
import PageHeader from '../components/PageHeader'

const columns = ['Date', 'PV']
const data = [
  ['7/22', '193281'],
  ['7/23', '83230'],
  ['7/24', '123123'],
  ['7/25', '98329'],
  ['7/26', '23981'],
  ['7/27', '98329'],
  ['7/28', '34812'],
  ['7/29', '39281'],
  ['7/30', '43989'],
]

export default () => (
  <Slide padding={8}>
    <PageHeader title="Table Slide" description="This plugin has HTML like syntax." />
    <Table flexGrow={1}>
      <TableRow flexGrow={1}>
        {columns.map((column, index) =>
          <TableCell flexGrow={1} backgroundColor='aabbcc' verticalAlign='middle' key={index}>
            <Text fontSize={16} color='333333' textAlign='center'>
              {column}
            </Text>
          </TableCell>
        )}
      </TableRow>
      {data.map((row) => {
        return (
          <TableRow flexGrow={1}>
            {row.map((cell, cellIndex) => {
              return (
                <TableCell flexGrow={1} verticalAlign='middle'>
                  <Text fontSize={16} color='333333' textAlign={cellIndex === 0 ? 'left' : 'right'}>
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