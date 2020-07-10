import React, { useRef, useContext, useEffect, useState, useCallback, memo } from 'react'
import { ThemeContext } from 'styled-components'

import randomLetter from '../../../../utils/randomLetter'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import P from '../../../../components/Text'
import { Container, Table, Tr, Td, Text } from './styles'

interface wordSearchProps {
  id: number;
  phrase: string;
  answer: string;
  orientation: 'diagonal' | 'horizontal' | 'vertical';
  start: {
    line: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    inverted?: boolean;
  };
  end: null | {
    line: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
}

const wordSearchLength = 12

const wordSearchData: wordSearchProps[] = [
  {
    id: 0,
    phrase: 'O que a geometria espacial é capaz de determinar por meio de cálculos matemáticos?',
    answer: 'Volume',
    orientation: 'diagonal',
    start: {
      line: 4,
      column: 6
    },
    end: {
      line: 9,
      column: 1
    }
  },
  {
    id: 1,
    phrase: 'Partindo da concepção de que há, em um mesmo plano, duas retas de mesmo tamanho, qual conceito poderá ser utilizado, quanto as suas posições relativas, caso essas não tenham nenhum ponto em comum?',
    answer: 'Paralelas',
    orientation: 'vertical',
    start: {
      line: 2,
      column: 4
    },
    end: null
  },
  {
    id: 2,
    phrase: 'Partindo da concepção de que há, em um mesmo plano, duas retas de mesmo tamanho, qual conceito poderá ser utilizado, quanto as suas posições relativas, caso essas tenham nenhum ponto em comum?',
    answer: 'Concorrentes',
    orientation: 'horizontal',
    start: {
      line: 1,
      column: 1
    },
    end: null
  },
  {
    id: 3,
    phrase: 'Qual tipo de geometria que trabalha com mais de uma perspectiva?',
    answer: 'Espacial',
    orientation: 'horizontal',
    start: {
      line: 9,
      column: 1
    },
    end: null
  },
  {
    id: 4,
    phrase: '“Figura tridimensional da geometria espacial, usada também como brinquedo”. Essa definição corresponde a qual figura?',
    answer: 'Cubo',
    orientation: 'horizontal',
    start: {
      line: 12,
      column: 7,
      inverted: true
    },
    end: {
      line: 12,
      column: 4
    }
  },
  {
    id: 5,
    phrase: 'São segmentos de retas que formam o lado do cilindro: ',
    answer: 'Geratriz',
    orientation: 'horizontal',
    start: {
      line: 6,
      column: 5
    },
    end: null
  },
  {
    id: 6,
    phrase: 'É o ponto na base da geratriz que indica a direção da geratriz: ',
    answer: 'Diretriz',
    orientation: 'vertical',
    start: {
      line: 2,
      column: 9
    },
    end: null
  },
  {
    id: 7,
    phrase: 'Qual é o poliedro que possui duas faces paralelas que formam a base? (Está base pode ser triangular, quadrangular, pentagonal ou hexagonal).',
    answer: 'Prisma',
    orientation: 'horizontal',
    start: {
      line: 7,
      column: 10,
      inverted: true
    },
    end: null
  },
  {
    id: 8,
    phrase: 'Qual é o nome do poliedro que possui 4 faces?',
    answer: 'Tetraedro',
    orientation: 'vertical',
    start: {
      line: 4,
      column: 1
    },
    end: null
  }
]

const HuntingWords: React.FC = () => {
  const theme = useContext(ThemeContext)
  const modalizeRef = useRef<Modalize>(null)
  const wordSearchGrid: string[][] = []
  const wordSearchGridToCompare: string[][] = []
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  for (let i = 0; i < wordSearchLength; i++) {
    const line: string[] = []
    const lineTwo: string[] = []

    for (let i = 0; i < wordSearchLength; i++) {
      line.push(randomLetter())
      lineTwo.push(0)
    }
    wordSearchGrid.push(line)
    wordSearchGridToCompare.push(lineTwo)
  }

  wordSearchData.map(({ orientation, answer, start, end }) => {
    const answerLength = answer.length

    if (orientation === 'horizontal') {
      for (let i = 0; i < answerLength; i++) {
        if (start.inverted) {
          wordSearchGrid[start.line - 1][(start.column - answerLength) + i] = answer.split('').reverse().join('').toLocaleUpperCase()[i]
        } else {
          wordSearchGrid[start.line - 1][(start.column - 1) + i] = answer[i].toLocaleUpperCase()
        }
      }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < answerLength; i++) {
        if (start.inverted) {
          wordSearchGrid[(start.line - answerLength) + i][start.column - 1] = answer.split('').reverse().join('').toLocaleUpperCase()[i]
        } else {
          wordSearchGrid[(start.line - 1) + i][start.column - 1] = answer[i].toLocaleUpperCase()
        }
      }
    } else if (orientation === 'diagonal' && end) {
      let startLine = start.line - 1
      let startColumn = start.column - 1

      if (start.line < start.column && end.line > end.column) {
        for (let i = 0; i < answerLength; i++) {
          wordSearchGrid[startLine][startColumn] = answer[i].toLocaleUpperCase()
          startColumn -= 1
          startLine += 1
        }
      }
    }
  })

  useEffect(() => () => modalizeRef.current?.close(), [])

  const handleLetter = useCallback((lineIndex: number, columnIndex: number, column:string) => {
    wordSearchGridToCompare[lineIndex][columnIndex] = column
  }, [])

  return (
    <Container>

      <Table>
        {
          wordSearchGrid.map((line: string[], index: number) => (
            <Tr key={index} >
              {
                line.map((column: string, index2: number) => (
                  <Td key={`${column}-${index2}`} onPress={() => handleLetter(index, index2, column) }>
                    <P text={column} size={14} style={{ textAlign: 'center', lineHeight: 30 }} />
                  </Td>
                ))
              }
            </Tr>
          ))
        }
      </Table>

      <Portal>
        <Modalize
          ref={modalizeRef}

          modalStyle={{ padding: 20, backgroundColor: theme.background.dark, elevation: 20 }}
          handleStyle={{ backgroundColor: theme.orange }}
          handlePosition="inside"
          alwaysOpen={100}
          modalHeight={500}

          HeaderComponent={() => <Text text="Perguntas" color={theme.orange} size={24} weight={700} />}
        >
          {
            wordSearchData.map((word, index) => (
              <Text
                key={index}
                text={`${index + 1}-) ${word.phrase}`}
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

export default memo(HuntingWords)
