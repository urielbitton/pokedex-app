import React from 'react'
import { Text, View } from 'react-native'
import Progress from '../components/Progress'
import { styles } from '../styles/PokeScreen'
import Colors from '../utilities/Colors'

export default function TabBaseStats(props) {

  const {stats} = props
  const totalStats = stats?.reduce((a,b) => a + b.base_stat, 0)

  const statsPercentages = stats?.map((st,i) => {
    return <Progress 
      text={st.base_stat} 
      percent={st.base_stat} 
      color={+st.base_stat < 50 ? Colors.red : Colors.aqua} 
      style={{marginBottom:10}}  
      key={i}
    />
  })

  const columnTitleRender = stats?.map((st,i) => {
    return <Text 
      style={[styles.columnLabel,{textTransform:'capitalize'}]} 
      key={i}>
        {st.stat.name.includes('-') ? st.stat.name.split('-')[0].substr(0,2) + ". " + st.stat.name.split('-')[1] : st.stat.name}
    </Text>
  })

  return (
    <View style={styles.content}>
      <View style={styles.tabSection}>
        <View style={styles.tabColumnLabel}>
          {columnTitleRender}
          <Text style={styles.columnLabel}>Total</Text>
        </View>
        <View style={styles.tabColumnText}>
          {statsPercentages}
          <Progress 
            text={totalStats??0} 
            percent={totalStats ? (totalStats/700)*100 : 0} 
            color={totalStats < 300 ? Colors.red : Colors.aqua}
            style={{marginBottom:10}}
          />
        </View>
      </View>
    </View>
  )
}
