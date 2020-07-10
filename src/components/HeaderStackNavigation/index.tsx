import React from 'react'

import { Container, View, Title } from './styles'

const HeaderStackNavigation: React.FC = ({ scene }) => {
  const { options } = scene.descriptor
  const { title: hasTitle = true } = options

  const title =
    options.headerTitle !== undefined
      ? options?.headerTitle()
      : options.title !== undefined
        ? utils(options.title)
        : utils(scene.route.name)
  const headerLeft = options?.headerLeft ? options?.headerLeft() : null
  const headerRight = options?.headerRight ? options?.headerRight() : null

  // console.log(options.transparent)
  return (
    <Container transparent={options?.transparent}>
      <View align="flex-start" >
        {headerLeft}
      </View>
      <View>
        {title}
      </View>
      <View align="flex-end">
        {headerRight}
      </View>
    </Container>
  )
}

export default HeaderStackNavigation

const utils = (title: string) => <Title text={title} size={16} weight='bold'/>
