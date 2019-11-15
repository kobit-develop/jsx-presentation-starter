import React from 'react'
import { Chart, Slide, Fragment, Text } from 'jsx-presentation'

const chartData = {
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
  ]
}

const bodyStyle = {
  color: '666666',
  fontSize: 12
}

const SubHeader: React.FC = ({ children }) =>
  <Text fill="999999" color="ffffff" fontSize={12} bold height={8} verticalAlign='middle'>{children}</Text>

export default () => (
  <Slide>
    <Text color="FFFFFF" fontSize={16} bold height={14} fill='305394' verticalAlign="middle">
      Complex Layout
    </Text>
    <Fragment flexGrow={1} padding={8}>
      <Text {...bodyStyle} height={20}>
        Fragment is abstract view and has layout props.
      </Text>
      <Fragment flexDirection="row" flexGrow={1}>
        <Fragment flexGrow={1}>
          <SubHeader>Sub Header 1</SubHeader>
          <Chart data={chartData} flexGrow={1} />
        </Fragment>

        <Fragment flexGrow={1}>
          <SubHeader>Sub Header 2</SubHeader>
          <Text {...bodyStyle} flexGrow={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Fragment>
      </Fragment>
    </Fragment>
  </Slide>
)