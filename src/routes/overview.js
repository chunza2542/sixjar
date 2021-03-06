import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

import App from '../components/App'
import PageNavigator from '../components/PageNavigator'

import {Padding} from '../core/helper'
import JarOverview from '../components/JarOverview'

class Overview extends Component {
  constructor() {
    super()
    this.state = {
      necessity: 0,
      play: 0,
      financial: 0,
      education: 0,
      longterm: 0,
      give: 0,
    }
  }

  async componentWillMount() {
    const necessity = await fetch('http://127.0.0.1:5000/overview/necessity').then(x => x.text())
    const play = await fetch('http://127.0.0.1:5000/overview/play').then(x => x.text())
    const financial = await fetch('http://127.0.0.1:5000/overview/financial').then(x => x.text())
    const education = await fetch('http://127.0.0.1:5000/overview/education').then(x => x.text())
    const longterm = await fetch('http://127.0.0.1:5000/overview/longterm').then(x => x.text())
    const give = await fetch('http://127.0.0.1:5000/overview/give').then(x => x.text())
    this.setState({
      necessity,
      play,
      financial,
      education,
      longterm,
      give,
    })
  }

  render() {
    return (
      <div>
        <PageNavigator
          heading="OVERVIEW"
          description="Overview your total amount in each jar" />
        <Padding>
          <JarOverview
            color="#FF1744"
            amount={this.state.necessity}
            heading="Necessity Account"
            description={`This account is for managing your everyday expenses and bills.
This would include things like your rent, mortgage, utilities, bills, taxes,
food, clothes, etc. Basically it includes anything that you need
to live, the necessities.`} />
          <JarOverview
            color="#FFAB00"
            amount={this.state.play}
            heading="Play Account"
            description={`PLAY money is spent every month on purchases you wouldn’t normally
make. PLAY can be anything your heart desires. You and a spouse can each receive your own play money, and not even ask what
the other person spends it on!`} />
          <JarOverview
            color="#64DD17"
            amount={this.state.financial}
            heading="Financial Freedom Account"
            description={`This is your golden goose. The money that you put into this jar is used for investments and building
your passive income streams. You never spend this money.
The only time you would spend this money is once you become financially
free.`} />
          <JarOverview
            color="#3D5AFE"
            amount={this.state.education}
            heading="Education Account"
            description={`Money in this jar is meant to further your education and personal
growth. You are your most valuable asset. Never forget this.
Education money can be used to purchase books, CD’s, courses or
anything else that has educational value.`} />
          <JarOverview
            color="#7C4DFF"
            amount={this.state.longterm}
            heading="Long-term saving for spending Account"
            description={`Money in this jar is for bigger, nice-to-have purchases. Use the money
for vacations, extravagances, a plasma TV, contingency fund, your
children's education etc. A small monthly contribution can go a long
way.`} />
          <JarOverview
            color="#D500F9"
            amount={this.state.give}
            heading="Give Account"
            description={`Money in this jar is for giving away. Use the money for family and
friends on birthdays, special occasions and holidays. You can also give
away your time as opposed to giving away money. You could house sit
for a neighbor, take a friend’s dog for a walk or volunteer in your
community or for your favorite charity.`} />
        </Padding>
      </div>
    )
  }
}

export default App(Overview)
