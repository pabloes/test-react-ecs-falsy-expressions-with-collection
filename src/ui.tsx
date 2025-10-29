import {
  engine,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

export function setupUi() {
    console.log("setupUi")
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
let section:true|false|0 = true; // true, false or 0

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 400,
      height: 230,
      margin: '16px 0 8px 470px',
      padding: 4,
      flexDirection:"column"
    }}
    uiBackground={{ color: Color4.create(0.5, 0.8, 0.1, 0.6) }}
  >
      <UiEntity uiTransform={{
          width:"100%",
          flexDirection:"row",
          height:100
      }}>
          <UiEntity uiTransform={{width:"30%"}} uiBackground={{color:Color4.Red()}} uiText={{value:"true", color:Color4.Black()}} onMouseDown={()=>section=true}/>
          <UiEntity uiTransform={{width:"30%"}} uiBackground={{color:Color4.Green()}}  uiText={{value:"false", color:Color4.Black()}} onMouseDown={()=>section=false}/>
          <UiEntity uiTransform={{width:"30%"}}  uiBackground={{color:Color4.Blue()}} uiText={{value:"0", color:Color4.Black()}} onMouseDown={()=>section=0}/>
      </UiEntity>
      <UiEntity uiBackground={{color:Color4.create(1,1,1,0.1)}}>
          {section && <UiEntity  uiText={{value:"foo"}} />}
      </UiEntity>

  </UiEntity>
)

function getPlayerPosition() {
  const playerPosition = Transform.getOrNull(engine.PlayerEntity)
  if (!playerPosition) return ' no data yet'
  const { x, y, z } = playerPosition.position
  return `{X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, z: ${z.toFixed(2)} }`
}

