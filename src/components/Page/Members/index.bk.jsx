// Members
import React from 'react';
import { members } from './member-data'
// import Member from './Member';
import Card from '../../elements/Card'
import styles from './style.css';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'

const Members = () => {
    const renderMembers = members.map((m) => (
      <Card
        key={m.id}
        _id={m.id}
        src={m.src}
        title={m.title}
        subTitle={m.subTitle}
        style={m.style}
        index={m.index}
      />
    ))

    return (
      <SectionWrapper id='mentors' whiteBackground>
        <Section title='Mentors'>
          <div className={styles.members}>
            {renderMembers}
          </div>
        </Section>
      </SectionWrapper>
    )
}

export default Members;

// const renderMembers = members.map((m) => (
//   <Member
//     key={m.id}
//     _id={m.id}
//     picture={m.picture}
//     name={m.name}
//     role={m.role}
//     index={m.index}
//   />
// ))
