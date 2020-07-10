import React, { useRef, useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import huntingWords from '../../../../assets/images/huntingWords.png'
import Text from '../../../../components/Text'
import { Container, Image } from './styles'

interface wordSearchProps {
  phrase: string;
  answer: string
}

const wordSearchData: wordSearchProps[] = [
  {
    phrase: 'O que a geometria espacial é capaz de determinar por meio de cálculos matemáticos?',
    answer: 'Volume'
  },
  {
    phrase: 'Partindo da concepção de que há, em um mesmo plano, duas retas de mesmo tamanho, qual conceito poderá ser utilizado, quanto as suas posições relativas, caso essas não tenham nenhum ponto em comum?',
    answer: 'Paralelas'
  },
  {
    phrase: 'Partindo da concepção de que há, em um mesmo plano, duas retas de mesmo tamanho, qual conceito poderá ser utilizado, quanto as suas posições relativas, caso essas tenham nenhum ponto em comum?',
    answer: 'Concorrentes'
  },
  {
    phrase: 'Qual tipo de geometria que trabalha com mais de uma perspectiva?',
    answer: 'Espacial'
  },
  {
    phrase: '“Figura tridimensional da geometria espacial, usada também como brinquedo”. Essa definição corresponde a qual figura?',
    answer: 'Cubo'
  },
  {
    phrase: 'São segmentos de retas que formam o lado do cilindro: ',
    answer: 'Geratriz'
  },
  {
    phrase: 'É o ponto na base da geratriz que indica a direção da geratriz: ',
    answer: 'Diretriz'
  },
  {
    phrase: 'Qual é o poliedro que possui duas faces paralelas que formam a base? (Está base pode ser triangular, quadrangular, pentagonal ou hexagonal).',
    answer: 'Prisma'
  },
  {
    phrase: 'Qual é o nome do poliedro que possui 4 faces?',
    answer: 'Tetraedro'
  }
]

const HuntingWords: React.FC = () => {
  const theme = useContext(ThemeContext)
  const modalizeRef = useRef<Modalize>(null)

  useEffect(() => () => modalizeRef.current?.close(), [])

  return (
    <Container>
      <Image source={huntingWords} resizeMode="contain" />

      <Portal>
        <Modalize
          ref={modalizeRef}

          modalStyle={{ padding: 20, backgroundColor: theme.background.dark, elevation: 20 }}
          handleStyle={{ backgroundColor: theme.orange }}
          handlePosition="inside"
          alwaysOpen={100}
          modalHeight={500}

          HeaderComponent={() => <Text text="Perguntas" style={{ marginBottom: 20 }} color={theme.orange} size={24} weight={700} />}
        >
          {
            wordSearchData.map((word, index) => (
              <Text
                key={index}
                text={`${index + 1}-) ${word.phrase}`}
                style={{ marginBottom: 20 }}
                color={theme.white}
                align="justify"
                size={16} weight={500}
              />
            ))
          }

        </Modalize>
      </Portal>
    </Container>
  )
}

export default HuntingWords
