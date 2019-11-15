import React from 'react'
import { Text } from 'jsx-presentation'

interface PageHeaderProps {
  title: string
  description: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <>
      <Text color="333333" fontSize={16} bold height={9}>
        {title}
      </Text>
      <Text color="666666" fontSize={12} height={20}>
        {description}
      </Text>
    </>
  )
}

export default PageHeader