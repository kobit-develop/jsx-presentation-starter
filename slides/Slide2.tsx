import React from 'react'
import { Chart, Slide } from 'jsx-presentation'
import PageHeader from '../components/PageHeader'

export default () => (
  <Slide padding={300000}>
    <PageHeader title="Chart Slide" description="jsx-presentation can display chart." />
    <Chart
      data={{
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'PC',
            data: [30, 23, 28]
          },
          {
            label: 'SP',
            data: [23, 21, 25]
          },
          {
            label: 'tablet',
            data: [5, 6, 9]
          },
          {
            label: 'aafeofkoef',
            data: [1, 2, 3]
          }
        ]
      }}
      flexGrow={1}
    />
  </Slide>
)