import React, { useRef, useContext, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { ThemeContext } from 'styled-components'
import isNumber from '../../../../utils/isNumber'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import Text from '../../../../components/Text'
import { Container, Table, Tr, Td, ButtonContainer, Button, Icons } from './styles'

interface puzzleProps {
  clue: string;
  answer: string;
  position: number;
  orientation: 'horizontal' | 'vertical';
  startx: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  starty: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

const puzzleData: puzzleProps[] = [
  {
    clue: 'First letter of greek alphabet',
    answer: 'alpha',
    position: 1,
    orientation: 'horizontal',
    startx: 1,
    starty: 1
  },
  {
    clue: 'Not a one ___ motor, but a three ___ motor',
    answer: 'phase',
    position: 3,
    orientation: 'horizontal',
    startx: 7,
    starty: 1
  },
  {
    clue: 'Created from a separation of charge',
    answer: 'capacitance',
    position: 5,
    orientation: 'horizontal',
    startx: 1,
    starty: 3
  },
  {
    clue: 'The speeds of engines without and accelaration',
    answer: 'idlespeeds',
    position: 8,
    orientation: 'horizontal',
    startx: 1,
    starty: 5
  },
  {
    clue: 'Complex resistances',
    answer: 'impedances',
    position: 10,
    orientation: 'horizontal',
    startx: 2,
    starty: 7
  },
  {
    clue: 'This device is used to step-up, step-vertical, and/or isolate',
    answer: 'transformer',
    position: 13,
    orientation: 'horizontal',
    startx: 1,
    starty: 9
  },
  {
    clue: 'Type of ray emitted frm the sun',
    answer: 'gamma',
    position: 16,
    orientation: 'horizontal',
    startx: 1,
    starty: 11
  },
  {
    clue: 'C programming language operator',
    answer: 'cysan',
    position: 17,
    orientation: 'horizontal',
    startx: 7,
    starty: 11
  },
  {
    clue: 'Defines the alpha-numeric characters that are typically associated with text used in programming',
    answer: 'ascii',
    position: 1,
    orientation: 'vertical',
    startx: 1,
    starty: 1
  },
  {
    clue: 'Generally, if you go over 1kV per cm this happens',
    answer: 'arc',
    position: 2,
    orientation: 'vertical',
    startx: 5,
    starty: 1
  },
  {
    clue: 'Control system strategy that tries to replicate the human through process (abbr.)',
    answer: 'ann',
    position: 4,
    orientation: 'vertical',
    startx: 9,
    starty: 1
  },
  {
    clue: 'Greek variable that usually describes rotor positon',
    answer: 'theta',
    position: 6,
    orientation: 'vertical',
    startx: 7,
    starty: 3
  },
  {
    clue: 'Electromagnetic (abbr.)',
    answer: 'em',
    position: 7,
    orientation: 'vertical',
    startx: 11,
    starty: 3
  },
  {
    clue: 'No. 13 horizontal does this to a voltage',
    answer: 'steps',
    position: 9,
    orientation: 'vertical',
    startx: 5,
    starty: 5
  },
  {
    clue: 'Emits a lout wailing sound',
    answer: 'siren',
    position: 11,
    orientation: 'vertical',
    startx: 11,
    starty: 7
  },
  {
    clue: 'Information technology (abbr.)',
    answer: 'it',
    position: 12,
    orientation: 'vertical',
    startx: 1,
    starty: 8
  },
  {
    clue: 'Asynchronous transfer mode (abbr.)',
    answer: 'atm',
    position: 14,
    orientation: 'vertical',
    startx: 3,
    starty: 9
  },
  {
    clue: 'Offset current control (abbr.)',
    answer: 'occ',
    position: 15,
    orientation: 'vertical',
    startx: 7,
    starty: 9
  }
]

const Crossword: React.FC = () => {
  const theme = useContext(ThemeContext)
  const modalizeRef = useRef<Modalize>(null)
  const puzzleGrid: number[][] | string[][] = []

  for (let i = 0; i < 11; i++) {
    const line: number[] = []

    for (let i = 0; i < 11; i++) {
      line.push(0)
    }

    puzzleGrid.push(line)
  }

  puzzleData.map(({ orientation, answer, startx, starty }) => {
    const answerLength = answer.length

    if (orientation === 'horizontal') {
      for (let i = 0; i < answerLength; i++) {
        puzzleGrid[starty - 1][(startx - 1) + i] = answer[i]
      }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < answerLength; i++) {
        puzzleGrid[(starty - 1) + i][startx - 1] = answer[i]
      }
    }
  })

  // useEffect(() => modalizeRef.current?.open(), [])
  useEffect(() => () => modalizeRef.current?.close(), [])
  return (
    <Container>
      { puzzleGrid
        ? <>
          <Table>
            {
              puzzleGrid.map((line: number[] | string[], index: number) => (
                <Tr key={index} >
                  <Text
                    text={index.toString()}
                    style={{ width: '5%' }}
                    color={theme.white}
                    align="center"
                    size={10}
                  />
                  {
                    line.map((option: number | string, index2: number) => (
                      <Td
                        key={`${option}-${index2}`}
                        disabled={isNumber(option)}
                        editable={!isNumber(option)}
                      >{/* isNumber(option) || option */}</Td>
                    ))
                  }
                </Tr>
              ))
            }
          </Table>
          <ButtonContainer>
            <Button bg={theme.green} onPress={() => {}} >
              <Text
                text={'Validar'}
                style={{ width: '50%' }}
                color={theme.white}
                align="center"
                size={16} weight={700}
              />
              <Icons name="ios-checkmark" size={26} color={theme.background.dark} />
            </Button>
            <Button bg={theme.red} onPress={() => {}}>
              <Text
                text={'Resetar'}
                style={{ width: '50%' }}
                color={theme.white}
                align="center"
                size={16} weight={700}
              />
              <Icons name="ios-close" size={26} color={theme.background.dark} />
            </Button>
          </ButtonContainer>
        </>
        : <ActivityIndicator color={theme.orange} size="large" />
      }

      <Portal>
        <Modalize
          ref={modalizeRef}

          modalStyle={{ padding: 20, backgroundColor: theme.background.dark }}
          handleStyle={{ backgroundColor: theme.orange }}
          handlePosition="inside"
          alwaysOpen={100}
          modalHeight={500}

          HeaderComponent={() => <Text text="Dicas" style={{ marginBottom: 20 }} color={theme.orange} size={24} weight={700} />}
        >
          <Text
            text="Dicas"
            // text={horoscope?.content.replace(/(\r\n|\n|\r)/gm, '')}
            color={theme.white}
            align="justify"
            size={16} weight={500}
          />

          {
            puzzleData.map(({ clue, position }) => (
              <Text
                key={position}
                text={`${position + 1}-) ${clue}`}
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

export default Crossword
