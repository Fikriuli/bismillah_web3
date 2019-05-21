import React from 'react'
import { Accordion,Label, Message } from 'semantic-ui-react'

const panels = [
  {
    key: 'acquire-dog',
    title: {
      content: <Label color='grey' content={'Berapa Gaji yang anda inginkan ?'}/>,
    },
    content: {
      content: (
        <span>
          <Message content={'Dengan mempertimbangan kemampuan yang saya miliki dna saya yang seorang fresh graduate saya mematok gaji 3 - 4 jt per bulan. namun hal itu hanya sebagai acuan saja untuk pembicaran selanjutnya dapat dibicarakan mengingat banyak faktor yang banyak memengarugi gaji.'} />,
        </span>
      ),
    },
  },
  {
    key: 'care-for-dogs',
    title: {
      content:  <Label color='grey' content={'Apakah anda mampu mempelajari sesuatu yang baru ?'}/>,
    },
    content: {
      content: (
        <span>
          <Message content={'Ya saya bisa memahami hal baru dengan cepat'} />,
        </span>
      ),
    },
  },
  {
    key: 'Mantap',
    title: {
      content:  <Label color='grey' content={'Lebih prefer mana kerja sendiri atau per tim ?'}/>,
    },
    content: {
      content: (
        <span>
          <Message content={'saya lebih suka bekerja dalam tim karena akan lebih effisien dan bisa saling membantu satu sama lain, namun jika dituntut untuk kerja sendiri saya akan berlatih dan berusaha semampu saya'} />,
        </span>
      ),
    },
  },
]

const AccordionExampleIconShorthand = () => (
  <Accordion defaultActiveIndex={0} panels={panels} />
)

export default AccordionExampleIconShorthand