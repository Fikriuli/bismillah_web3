import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Himakomsi 2018/2019
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Saya menjabat sebagai anggota divisi kewirausahaan yang membuat saya tahu bagaimana
            cara anggota mengikuti arahan ketua dimana pengalaman ini dapat diterapkan pada 
            pekerjaan saya kelak 
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
            OSIS SMA N AJIBARANG
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Jabatan sebagai ketua pengembangan bidang 9 memberikan pengalaman bagaimana menjadi ketua
            yang dapat mengarahkan anggotanya untuk meraih visi misi yang telah ditentukan.
            selain itu bidang yang sayabtekuni juga membuat saya tau bagaimana mencari kebutuhan user
            tingkat menengah pada lingkungan SMA yang dapat saya jadikan untuk menacri kebutuhan user
            di masa mendatang pada dunia kerja
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Ikatan Pemuda Desa Pageraji
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Anggota seksi pengajaran dan pemberdayaan masyarakat
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
